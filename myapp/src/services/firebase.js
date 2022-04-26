// Import the functions you need from the SDKs you need
// import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
 } from "firebase/auth";
 import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5vrdTzNPd4acQ2oXqmCwrWlOEHNroyY",
  authDomain: "mtg-messeger.firebaseapp.com",
  projectId: "mtg-messeger",
  storageBucket: "mtg-messeger.appspot.com",
  messagingSenderId: "198211808641",
  appId: "1:198211808641:web:ac594dff4f0f60c9fb4c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass);
    console.log(auth);
};

export const logOut = async () => {
    signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const getChatRefById = (id)=> ref(db, `chats/${id}`);
export const msgsRef = ref(db, "messages");
export const getMsgsRefById = (chatID)=> ref(db, `messages/${chatID}`);
export const getMsgsListRefById = (chatID)=> ref(db, `messages/${chatID}/messageList`);