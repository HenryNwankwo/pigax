import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.NEXT_FIREBASE_API_KEY}`,
  authDomain: 'pigax-40ba4.firebaseapp.com',
  projectId: 'pigax-40ba4',
  storageBucket: 'pigax-40ba4.appspot.com',
  messagingSenderId: '248476328586',
  appId: '1:248476328586:web:d95635208327e1f7484373',
  measurementId: 'G-VWDEX0SKT0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
