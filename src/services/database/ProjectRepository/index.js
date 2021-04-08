import Repository from "../repository";
import Store from "../../firebase/store"

export default class ProjectRepository extends Repository {
    constructor() {
        super();
        this.storage = new Storage();
        this.db = {
            projects: new Store("Projects"),
        }
    }

    async getAllProjects() {
        return this.db.users.getCollectionData();
    }

    async getSingleProjectById(projectId) {
        return this.db.projects.getDocumentData(projectId);
    }

    async getProjectProfileById(projectId) {
        return await (this.getSinglerojectById(projectId)).profile
    }

    async getProfilePicByprojectId(projectId) {
        const profilePicId = await (this.getProjectProfileById(projectId)).profilePicId;

        return this.storage.getDownloadUrl(`${projectId}/${profilePicId}`);
    }
}