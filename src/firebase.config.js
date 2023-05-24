// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4fyvNyAoqXE2agYm3F-ut7y0PyXs-Acs",
  authDomain: "phone-auth-b7502.firebaseapp.com",
  projectId: "phone-auth-b7502",
  storageBucket: "phone-auth-b7502.appspot.com",
  messagingSenderId: "125501573261",
  appId: "1:125501573261:web:10309021f5bc4a42c23ac4",
  measurementId: "G-Q4CKL6B6JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
