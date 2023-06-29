// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIjWa9mHVvVcMwViYDJrwVUkHVLhff_9M",
  authDomain: "fir-744da.firebaseapp.com",
  projectId: "fir-744da",
  storageBucket: "fir-744da.appspot.com",
  messagingSenderId: "353739360072",
  appId: "1:353739360072:web:69ea06898195067340d57d",
  measurementId: "G-34MMXJRH25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
