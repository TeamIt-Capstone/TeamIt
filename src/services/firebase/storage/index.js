import {firebase} from '../'

const storage = firebase.storage();

export default class Storage {
    rootPath = 'images/'
    constructor(rootPath = 'images/') {
        this.rootPath = rootPath;
    }

    async getDownloadUrl(path) {
        const ref = storage.ref(`${this.rootPath}${path}`);
        return ref.getDownloadURL();
    }
}