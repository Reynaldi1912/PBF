import  firebase  from 'firebase/compat/app';
import 'firebase/compat/database';
  
var firebaseConfig = {
  apiKey: "AIzaSyCEU-6-OocJf9V9viBgSlAZI07pQDB4U8M",
  authDomain: "e-commerce-reactjs-4dc75.firebaseapp.com",
  projectId: "e-commerce-reactjs-4dc75",
  storageBucket: "e-commerce-reactjs-4dc75.appspot.com",
  messagingSenderId: "269375009643",
  appId: "1:269375009643:web:3a013b3b3daad2236e522e",
  measurementId: "G-LSBG5MD646"
  };
    
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();