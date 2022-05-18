import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD-3V9tZNmF0PuK5wAgUIO2Ey1dQGU7O28",
    authDomain: "modul11-165b2.firebaseapp.com",
    projectId: "modul11-165b2",
    storageBucket: "modul11-165b2.appspot.com",
    messagingSenderId: "165163241506",
    appId: "1:165163241506:web:97c73dd2e06d9c68c83a7b"
  };

export const myFirebase = initializeApp(firebaseConfig)

const baseDb = getFirestore(myFirebase)

export const db = baseDb