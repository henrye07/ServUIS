import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "react-native-dotenv";

const firebaseConfig = {
  apiKey: "AIzaSyAdHbtSbHK6IrkevbXIBgPeQ4AzfQz9wlU",
  authDomain: "servuis.firebaseapp.com",
  projectId: "servuis",
  storageBucket: "servuis.appspot.com",
  messagingSenderId: "335883329816",
  appId: "1:335883329816:web:fb7b2abe48ee9652adbe6d",
  // apiKey: API_KEY,
  // authDomain: AUTH_DOMAIN,
  // projectId: PROJECT_ID,
  // storageBucket: STORAGE_BUCKET,
  // messagingSenderId: MESSAGING_SENDER_ID,
  // appId: APP_ID,
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
