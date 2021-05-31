import firebase from 'firebase'
import Storage from "../../firebase/storage"
import Store from "../../firebase/store";
import Repository from "../Repository";

export default class UserRepository extends Repository {
    constructor() {
        super();
        this.storage = new Storage();
        this.db = {
            users: new Store("Users"),
            encrypted_users: new Store("Users_encrypted"),
        }
    }

    async getAllUsers() {
        const usersList = await this.db.users.getCollectionData()
        let res = {}
        for (const i in usersList) {
            const user = usersList[i];
            const decrypted = (await user.profile.encrypted.get()).data();
            res = {
                ...res,
                [i]: {
                    ...user,
                    profile: {
                        ...user.profile,
                        'decrypted': decrypted,
                    }
                }
            }
        }
        return res;
    }

    async getSingleUserById(userId) {
        const data = await this.db.users.getDocumentData(userId);
        const encrypted = (await data.profile.encrypted.get()).data();
        data.profile.decrypted = encrypted;
        return data;
    }

    async setSingleUserById(userId, data) {
        return this.db.users.setDocument(userId, data);
    }

    
    async setSingleUserEncryptedById(userId, data) {
        return this.db.encrypted_users.setDocument(userId, data);
    }

    async getEncryptedUserDocumentReference(userId) {
        return this.db.encrypted_users.getDocumentReference(userId);
    }

    async updateSingleUserById(userId, data) {
        return this.db.users.updateDocument(userId, data);
    }

    async updateSingleUserEncryptedById(userId, data) {
        return this.db.encrypted_users.updateDocument(userId, data);
    }

    async getUserProfileById(userId) {
        return await (this.getSingleUserById(userId)).profile;
    }

    async getUserProjectsById(userId) {
        return await (this.getUserProfileById(userId)).projects;
    }

    async getUserFavoritesById(userId) {
        return (await this.getSingleUserById(userId)).favorites;
    }

    async getProfilePicByUserId(userId) {
        try {
            return await this.storage.getDownloadUrl(`Users/${userId}/profile.jpg`);
        } catch (err) {
            console.log(err);
            return null;
        }
    }


    async setConnectionStatusByUserId(userId, status) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            isConnected: status,
            last: timestamp,
        }
        return this.db.users.updateDocument(userId, {connection: data})
    }
}