// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPjrGzgIl6FyHP7NFpNZMxlgqbCJ3U26A",
  authDomain: "streamguide-gpt.firebaseapp.com",
  projectId: "streamguide-gpt",
  storageBucket: "streamguide-gpt.appspot.com",
  messagingSenderId: "749367467271",
  appId: "1:749367467271:web:a1d1a45be6e0dd1cb1f9a2",
  measurementId: "G-KG4VKHHW9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();