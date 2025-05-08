// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMDbjXqWOgq2BobpOiWKHxOeeVZAL06ZI",
  authDomain: "connectwave-rwc1m.firebaseapp.com",
  projectId: "connectwave-rwc1m",
  storageBucket: "connectwave-rwc1m.firebasestorage.app",
  messagingSenderId: "188361104427",
  appId: "1:188361104427:web:2e23ebb3490d7d5e871e6e",
  measurementId: "G-3716B2RRSV"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);