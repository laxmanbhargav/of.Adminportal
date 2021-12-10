
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // If you need it
import config from './config';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId
};

// Check that `window` is in scope for the analytics module!
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };