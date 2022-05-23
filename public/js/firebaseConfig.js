//파이어베이스 연동 및 초기화
var firebaseConfig = {
  apiKey: "AIzaSyCB1lvUxpdNZibf7rDKbfPQW4GGHV1jOfU",
  authDomain: "limbook-7cd80.firebaseapp.com",
  projectId: "limbook-7cd80",
  storageBucket: "limbook-7cd80.appspot.com",
  messagingSenderId: "616165931768",
  appId: "1:616165931768:web:3f797ff4a9a8c0c2f8990d",
  measurementId: "G-BDDR0TLJN1",
};
//Initailize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
