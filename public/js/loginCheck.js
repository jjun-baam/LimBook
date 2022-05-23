const userState = document.querySelector("#userState");
const userName = document.querySelector("#userName");

//로그인 된 사용자 가져오기
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    //로그인 된 상태
    localStorage.setItem("user", JSON.stringify(user.uid));
    userName.innerText = `${user.displayName}님 환영합니다.`;
    userState.innerText = `로그아웃`;
    userState.href = "javascript:void(0)";
  } else {
    userName.innerText = "";
    userState.innerText = "로그인";
    userState.href = "/signin/login.html";
  }
});

$("#userState").click(() => {
  if (userState.textContent == "로그아웃") {
    firebase.auth().signOut();
    localStorage.removeItem("user");
    window.location.href = "/";
  }
});

$("#logout").click(function () {
  firebase.auth().signOut();
  localStorage.removeItem("user");
  window.location.href = "/";
});
$("#login").click(function () {
  var 이메일 = $("#email").val();
  var 패스워드 = $("#pw").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(이메일, 패스워드)
    .then((result) => {
      window.location.href = "/";
    });
});
