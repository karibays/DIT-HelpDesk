import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-sw.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlg0XWhroVthcRo6iF4D3LrwsssGsF9pc",
  authDomain: "dit-push-notification.firebaseapp.com",
  projectId: "dit-push-notification",
  storageBucket: "dit-push-notification.appspot.com",
  messagingSenderId: "370587011418",
  appId: "1:370587011418:web:7620d6a3b2997cccad0b63"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };

const messaging = getMessaging(app);

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

