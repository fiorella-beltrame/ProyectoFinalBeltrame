import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4JpQ4Agy9pN8woee8RMYocRe0H46C34I",
  authDomain: "materiajoyas-a2203.firebaseapp.com",
  projectId: "materiajoyas-a2203",
  storageBucket: "materiajoyas-a2203.appspot.com",
  messagingSenderId: "246591473119",
  appId: "1:246591473119:web:e12172ae63825683c8306a",
  measurementId: "G-NH4CG6YW7K"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  