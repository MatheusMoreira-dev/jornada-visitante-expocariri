import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB00GRUNiZ-CTIFTengwptoiTNkbTtqRCw",
  authDomain: "leads-expocariri.firebaseapp.com",
  databaseURL: "https://leads-expocariri-default-rtdb.firebaseio.com",
  projectId: "leads-expocariri",
  storageBucket: "leads-expocariri.firebasestorage.app",
  messagingSenderId: "443541883233",
  appId: "1:443541883233:web:c3939e15018ceaddd69d20",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
