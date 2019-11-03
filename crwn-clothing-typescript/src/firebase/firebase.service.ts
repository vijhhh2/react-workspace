import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ShopItem, Collections } from "../models/collection.model";

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });       
    } catch (error) {
        console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionDocToMap = (snapshot: firebase.firestore.QuerySnapshot) => {
  const convertedCollections = snapshot.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => {
    const document: firebase.firestore.DocumentData = doc.data();
    const title = (document.title as string); 
    const items = (document.items as ShopItem[]);

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  });

  const collections =  convertedCollections.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },({} as any))

  return (collections as Collections);
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
