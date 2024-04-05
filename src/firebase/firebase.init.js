// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD8c7fFJwIdKJUgxPzzsBrzCUblA7UgK8o",
   authDomain: "dragon-news-de0ca.firebaseapp.com",
   projectId: "dragon-news-de0ca",
   storageBucket: "dragon-news-de0ca.appspot.com",
   messagingSenderId: "664254758298",
   appId: "1:664254758298:web:d3002f25a6d52149ba4e23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
