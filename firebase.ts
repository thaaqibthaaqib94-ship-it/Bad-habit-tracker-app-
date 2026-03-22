import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7nWF3q7wh4Zy33qGlJHVcHTyO-5C6OOc",
  authDomain: "break-loop-eafcb.firebaseapp.com",
  projectId: "break-loop-eafcb",
  storageBucket: "break-loop-eafcb.firebasestorage.app",
  messagingSenderId: "657887970700",
  appId: "1:657887970700:web:90eff9061fa1c26aa582a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
