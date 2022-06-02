// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWRvwI_B2_P7u4JkCmqZeWd04J3_RPRgo",
  authDomain: "react-native-firebase-au-a5dc7.firebaseapp.com",
  projectId: "react-native-firebase-au-a5dc7",
  storageBucket: "react-native-firebase-au-a5dc7.appspot.com",
  messagingSenderId: "226106430078",
  appId: "1:226106430078:web:4d6684421adddc410e3e2f",
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

export { auth };
