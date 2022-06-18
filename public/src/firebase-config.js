/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
    apiKey: "AIzaSyCB1lvUxpdNZibf7rDKbfPQW4GGHV1jOfU",
    authDomain: "limbook-7cd80.firebaseapp.com",
    projectId: "limbook-7cd80",
    storageBucket: "limbook-7cd80.appspot.com",
    messagingSenderId: "616165931768",
    appId: "1:616165931768:web:3f797ff4a9a8c0c2f8990d",
    measurementId: "G-BDDR0TLJN1"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }
  
  