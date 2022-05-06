import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import { collection, getDocs, doc, setDoc, addDoc, deleteDoc, getDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWIamQe0pezB54s1jCrWZfKYzDzXCfuU4",
  authDomain: "urban-life-fe698.firebaseapp.com",
  projectId: "urban-life-fe698",
  storageBucket: "urban-life-fe698.appspot.com",
  messagingSenderId: "263603366443",
  appId: "1:263603366443:web:ba031ce5dc315d3eb1d86e"
};

if (!firebaseConfig.apiKey) throw new Error ("Credenciales firebase faltantes: apiKey");
if (!firebaseConfig.authDomain) throw new Error ("Credenciales firebase faltantes: authDomain");
if (!firebaseConfig.projectId) throw new Error ("Credenciales firebase faltantes: projectId");
if (!firebaseConfig.storageBucket) throw new Error ("Credenciales firebase faltantes: storageBucket");
if (!firebaseConfig.messagingSenderId) throw new Error ("Credenciales firebase faltantes: messagingSenderId");
if (!firebaseConfig.appId) throw new Error ("Credenciales firebase faltantes: appId");



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const colRef = collection(db, "properties");


