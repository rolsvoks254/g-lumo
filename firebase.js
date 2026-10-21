// firebase.js - G-LUMO
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcN46Ica7zxSZpf8_QsQshUfap70wHGOs",
  authDomain: "g-lumo.firebaseapp.com",
  projectId: "g-lumo",
  storageBucket: "g-lumo.firebasestorage.app",
  messagingSenderId: "165815823365",
  appId: "1:165815823365:web:886996fcd9edcfc044c06c",
  measurementId: "G-KWLT1FNLVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export for G-LUMO to use everywhere
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
