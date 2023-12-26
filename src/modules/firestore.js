import {
    getFirestore,
    query, orderBy, limit,
    collection, collectionGroup, doc,
    getDoc, getDocs, updateDoc, setDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import * as Cache from '@/modules/cache'

export {
    getDocument, getCollection, getCollectionGroup,
    updateDocument, setDocument,
}

const db = getFirestore(app);

async function getDocument(collectionName, documentName, options = {}) {
    const { cache = true } = options;

    const key = collectionName + '-' + documentName;
    const cached = Cache.get(key);
    if (cached) return JSON.parse(cached);

    const docRef = doc(db, collectionName, documentName);
    const snap = await getDoc(docRef);
    const data = snap.data();

    if (cache) Cache.set(key, JSON.stringify(data));
    return data;
}

async function getCollection(name, options = {}) {
    const { cache = true, order = [], limitTo } = options;

    const cached = Cache.get(name);
    if (cached) return JSON.parse(cached);

    const col = collection(db, name);
    let q = query(col);
    if (order.length) q = query(q, orderBy(...order));
    if (limitTo) q = query(q, limit(limitTo));

    const docs = await getDocuments(q);

    if (cache) Cache.set(name, JSON.stringify(docs));
    return docs;
}

async function getCollectionGroup(name, options = {}) {
    const { cache = true } = options;
    const cached = Cache.get(name);
    if (cached) return JSON.parse(cached);

    const colGroup = collectionGroup(db, name);
    const docs = await getDocuments(colGroup);

    if (cache) Cache.set(name, JSON.stringify(docs));
    return docs;
}

async function getDocuments(query) {
    const querySnapshot = await getDocs(query);
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({ docid: doc.id, ...doc.data() });
    });

    console.log('loaded ', (new TextEncoder().encode(JSON.stringify(docs))).length / 1000, ' kb')
    return docs;
}

async function updateDocument(collectionName, docId, data) {
    const document = doc(db, collectionName, docId)
    const result = await updateDoc(document, data);
    console.log(result);
}

async function setDocument(collectionName, key, data) {
    const result = await setDoc(doc(db, collectionName, key), data);

    console.log(result);
}