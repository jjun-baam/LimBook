var firebaseConfig = {
  apiKey: "AIzaSyCB1lvUxpdNZibf7rDKbfPQW4GGHV1jOfU",
  authDomain: "limbook-7cd80.firebaseapp.com",
  projectId: "limbook-7cd80",
  storageBucket: "limbook-7cd80.appspot.com",
  messagingSenderId: "616165931768",
  appId: "1:616165931768:web:3f797ff4a9a8c0c2f8990d",
  measurementId: "G-BDDR0TLJN1"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

function change_email() {
  //지금 골라진 옵션의 순서와 값 구하기
  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;
  
  email_add.value = val;
}
var email1 = document.getElementById("email_id");
var email2 = document.getElementById("email_add");

$('#register').click(function(){
  // var 이메일 = $('#email-new').val();
  // var 패스워드 = $('#pw-new').val();
  // var 닉네임 = $('#name-new').val();

  // firebase.auth().createUserWithEmailAndPassword(이메일, 패스워드).then(async (result)=>{
  //   console.log(result.user)
  //   await result.user.updateProfile( {displayName : 닉네임} )
  //   window.location.href = "/";
  // })
  var email = email1.value + email2.value;
  console.log(email);
})