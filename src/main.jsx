import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/styles/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9JlCGfAwka_gLP7cgEtA-4T9lzSugzgU",
  authDomain: "proyecto-final-d2955.firebaseapp.com",
  projectId: "proyecto-final-d2955",
  storageBucket: "proyecto-final-d2955.appspot.com",
  messagingSenderId: "960222794199",
  appId: "1:960222794199:web:a7dd00dc3519e299fb7b92"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
