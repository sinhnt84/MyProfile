import { initializeApp } from "firebase/app";
import { initializeFirestore, memoryLocalCache } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvBhyHgNENPxT6zwyuj-ASLrP7HQao-vw",
  authDomain: "myprofile-632b9.firebaseapp.com",
  projectId: "myprofile-632b9",
  storageBucket: "myprofile-632b9.firebasestorage.app",
  messagingSenderId: "345697343773",
  appId: "1:345697343773:web:992e3732eb168d9d3629f4",
  databaseURL: "https://myprofile-632b9-default-rtdb.asia-southeast1.firebasedatabase.app"
};

export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  localCache: memoryLocalCache(),
  experimentalForceLongPolling: true
});
export const rtdb = getDatabase(app);
export const auth = getAuth(app);
