import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA4yFAx84rHT7sbs2iwRdpiiewjAeOCA3o",
    authDomain: "crwn-clothing-8c088.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8c088.firebaseio.com",
    projectId: "crwn-clothing-8c088",
    storageBucket: "crwn-clothing-8c088.appspot.com",
    messagingSenderId: "460935413641",
    appId: "1:460935413641:web:29ccdd11ab9e63d3e46b58",
    measurementId: "G-VS493X0V72"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const userSnapshot = await userRef.get(); 

    if(!userSnapshot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, collection) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    collection.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionDocToMap = (snapshot) => {
    const convertedCollection = snapshot.docs.map(doc => {
        const {items, title} = doc.data();
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            items,
            title
        }
    });
    return convertedCollection.reduce( (accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);