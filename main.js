import { initializeApp } from 'firebase/app';
import { onSnapshot, getDoc, getDocFromCache, doc, getFirestore, addDoc, DocumentSnapshot, Firestore, DocumentReference, updateDoc, setDoc, getDocs, collection, documentId } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoooc4BwY1dkPGT8ELovjsOlXe9XlajlM",
  authDomain: "block-2e310.firebaseapp.com",
  projectId: "block-2e310",
  storageBucket: "block-2e310.appspot.com",
  messagingSenderId: "397811288338",
  appId: "1:397811288338:web:fe17b19e40d1123a568bcb",
  measurementId: "G-Z6QGGFF30M"
};

const firebase = initializeApp(firebaseConfig)
const db = getFirestore();

document.getElementById("go").addEventListener("click", () => {
  alert("send")
  const docRef = addDoc(collection(db,"User"), {
    Text: document.getElementById("input").value
  })
})