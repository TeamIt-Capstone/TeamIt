import Storage from "../../firebase/storage"
import Store from "../../firebase/store";
import Repository from "../repository";

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

    async getUserProfileById(userId) {
        return await (this.getSingleUserById(userId)).profile
    }

    async getUserProjectsById(userId) {
        return await (this.getUserProfileById(userId)).projects
    }

    async getProfilePicByUserId(userId) {
        const profilePicId = await (this.getUserProfileById(userId)).profilePicId;

        return this.storage.getDownloadUrl(`${userId}/${profilePicId}`);
    }
}