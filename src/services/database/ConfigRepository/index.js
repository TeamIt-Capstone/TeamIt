import Repository from "../repository";
import Store from "../../firebase/store"

export default class ConfigRepository extends Repository {
    constructor() {
        super();
        this.storage = new Storage();
        this.db = {
            config: new Store("Config")
        }
    }

    getAllDomains() {
        this.db.config.getDocumentData("domains");
    }

    getAllSkills() {
        this.db.config.getDocumentData("skills");
    }
}