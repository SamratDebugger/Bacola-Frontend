// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authentication-ee9ea.firebaseapp.com",
  projectId: "authentication-ee9ea",
  storageBucket: "authentication-ee9ea.firebasestorage.app",
  messagingSenderId: "433856782734",
  appId: "1:433856782734:web:65d755e3afb56a2ccd84df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
