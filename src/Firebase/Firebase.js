import firebase from 'firebase/app';
import 'firebase/firebase-firestore';


const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyAy_cfQiS1NfLkrAffywFc3iMfCsvc4qz0",
        authDomain: "clase-coderhouse.firebaseapp.com",
        projectId: "clase-coderhouse",
        storageBucket: "clase-coderhouse.appspot.com",
        messagingSenderId: "923076147634",
        appId: "1:923076147634:web:dd43583b69f45eada48cab"
    }
)
export const getFirebase = () => {
    return app;
}


//Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}

export const dbIntegrations = getFirestore().collection("Integrations");


