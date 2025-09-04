import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBf5zWrejXmevLdDuXOlrf5U7Nbhv-hLWs",
    authDomain: "booky-cb727.firebaseapp.com",
    projectId: "booky-cb727",
    storageBucket: "booky-cb727.firebasestorage.app",
    messagingSenderId: "354433105854",
    appId: "1:354433105854:web:3acc1e8b4 3acab557443ef",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
