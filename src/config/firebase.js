// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCS5t_2NJXhBZ_ge90n3ImvqmNnV-Dl-Vw",
    authDomain: "web-projects-7d0c2.firebaseapp.com",
    projectId: "web-projects-7d0c2",
    storageBucket: "web-projects-7d0c2.firebasestorage.app",
    messagingSenderId: "577712886042",
    appId: "1:577712886042:web:720d7c7c47c140572a1ca3",
    measurementId: "G-S208Q31W8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);