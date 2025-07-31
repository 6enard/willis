import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA1QCXhCqrfhHZXM_-qaUAl4UoaTu7sd_s",
  authDomain: "willis-15d2e.firebaseapp.com",
  projectId: "willis-15d2e",
  storageBucket: "willis-15d2e.firebasestorage.app",
  messagingSenderId: "748195061954",
  appId: "1:748195061954:web:74475f794c5c74510cdb5b",
  measurementId: "G-45F53PDJ85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;