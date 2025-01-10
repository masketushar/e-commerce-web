// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7sFg7_HEV4Il-n3wpO_Ir87wa42_Y9aA",
  authDomain: "e-commerce-web-1fac2.firebaseapp.com",
  projectId: "e-commerce-web-1fac2",
  storageBucket: "e-commerce-web-1fac2.firebasestorage.app",
  messagingSenderId: "910901608551",
  appId: "1:910901608551:web:75e35b7fcd12b8240514c2",
  measurementId: "G-1V5RS3D065",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
