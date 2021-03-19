import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAls40ar10lGpoJ91sAPJ811mBrLxlU-3A",
  authDomain: "bears-shop-1df45.firebaseapp.com",
  projectId: "bears-shop-1df45",
  storageBucket: "bears-shop-1df45.appspot.com",
  messagingSenderId: "99303958803",
  appId: "1:99303958803:web:616b20c19aa4d7812512e6",
  measurementId: "G-2XFP19K5C2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
