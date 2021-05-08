import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAZCBK2fwAdoaw3GYzKBuFrF9Keyg_WOT0",
    authDomain: "winehub-oauth.firebaseapp.com",
    projectId: "winehub-oauth",
    storageBucket: "winehub-oauth.appspot.com",
    messagingSenderId: "786529256808",
    appId: "1:786529256808:web:2d83a352adfcf6908ec2dd"
  };
 
 const fireSet = firebase.initializeApp(firebaseConfig);
 export default fireSet;