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
        return this.db.users.getCollectionData();
    }

    async getSingleUserById(userId) {
        return this.db.users.getDocumentData(userId);
    }

    async setSingleUserById(userId, data) {
        return this.db.users.setDocument(userId, data);
    }

    async setSingleUserEncryptedById(userId, data) {
        return this.db.encrypted_users.setDocument(userId, data);
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
        const profilePicId = await (this.getUserProfileById(userId)).profilePicId;

        return this.storage.getDownloadUrl(`${userId}/${profilePicId}`);
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