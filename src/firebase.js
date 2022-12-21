import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9lOjg55rAt_1ShEJsnyagNRrFl2x3Ngc",
  authDomain: "chat-app-91274.firebaseapp.com",
  projectId: "chat-app-91274",
  storageBucket: "chat-app-91274.appspot.com",
  messagingSenderId: "399482048030",
  appId: "1:399482048030:web:6ac3f4d70f490dbe7d280f",
  measurementId: "G-FDHL1TWKSR",
  databaseURL: "https://chat-app-91274-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, push, onValue };
