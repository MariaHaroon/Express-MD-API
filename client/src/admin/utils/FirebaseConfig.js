import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkVTvsqP1l4jQWdfnApvsyAoo4wLFFxjg",
    authDomain: "qabil-pk.firebaseapp.com",
    projectId: "qabil-pk",
    storageBucket: "qabil-pk.appspot.com",
    messagingSenderId: "314401047782",
    appId: "1:314401047782:web:31834ffcfb3fa03455a727"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);