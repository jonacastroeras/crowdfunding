// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGjBpuuWSHewFKJuWBTVrQurR_Qg0cj9s",
    authDomain: "crowdfunding-977fb.firebaseapp.com",
    projectId: "crowdfunding-977fb",
    storageBucket: "crowdfunding-977fb.appspot.com",
    messagingSenderId: "423092883199",
    appId: "1:423092883199:web:70a024ae64f0c17a3046ca",
    measurementId: "G-D6LF75KCC2"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);