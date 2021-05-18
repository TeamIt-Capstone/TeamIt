import {firebase} from '../'

const firebase_firestore = firebase.firestore();

export default class Store {
    collectionName = ''

    constructor(collectionName) {
        this.collectionName = collectionName;
    }

////////////////////
//COLLECTION START//
////////////////////
    createCollection() {
        //NEED TO SEE IF IT IS RELEVENT
    }

    async getCollectionReference() {
        return firebase_firestore.collection(this.collectionName)
    }

    async getCollectionData() {
        const collectionSnapshot = await (await this.getCollectionReference()).get();
        const res = new Map();
        collectionSnapshot.docs.forEach(doc => {
            const id = doc.id;
            const data = doc.data();
            res.set(id, data);
        });
        return res;
    }

    setCollection() {
        // NEED TO SEE IF NECESSARY
    }
//////////////////
//COLLECTION END//
//////////////////



//////////////////
//DOCUMENT START//
//////////////////
    async createDocument(documentId, data) {
        //NEED TO SEE IF IT IS RELEVENT
        //TO CREATE AN EMPTY DOCUMENT
        return (await this.getCollectionReference()).doc(documentId).set(data);
    }

    async getDocumentReference(documentId) {
        const docReference = (await this.getCollectionReference()).doc(documentId);
        return docReference;
    }

    async getDocumentData(documentId) {
        const docReference = await this.getDocumentReference(documentId);
        const docSnapshot = await docReference.get();
        return docSnapshot.data();
    }

    async setDocument(documentId, data) {
        const docReference = await this.getDocumentReference(documentId);
        return docReference.set(data);
    }

    async updateDocument(documentId, data) {
        const docReference = await this.getDocumentReference(documentId);
        return docReference.update(data);
    }

    async removeDocument(documentId) {
        const docReference = await this.getDocumentReference(documentId);
        return docReference.delete();
    }
////////////////
//DOCUMENT END//
////////////////
}