import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC9aMhanxqYLUifwJcIfHjtVGaly3qgnzk',
  authDomain: 'gandhi-memorial-school-admin.firebaseapp.com',
  projectId: 'gandhi-memorial-school-admin',
  storageBucket: 'gandhi-memorial-school-admin.firebasestorage.app',
  messagingSenderId: '60980448195',
  appId: '1:60980448195:web:b0cd9844ec96d7b8860b76',
  measurementId: 'G-Q02K6TLD2E'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);