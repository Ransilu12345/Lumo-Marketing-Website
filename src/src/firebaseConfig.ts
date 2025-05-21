// filepath: src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZprUaigoHQ-JRYDN1naaC0LDGqkgdWy0",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "paws-study-planner",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "756730930857",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };