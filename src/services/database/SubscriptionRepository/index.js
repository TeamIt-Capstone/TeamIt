import Repository from "../repository";
import Store from "../../firebase/store"

export default class SubscriptionRepository extends Repository {
    constructor() {
        super();
        this.storage = new Storage();
        this.db = {
            subscriptions: new Store("subscriptions"),
        }
    }

    async getAllSubscriptions() {
        return this.db.subscriptions.getCollectionData();
    }
}