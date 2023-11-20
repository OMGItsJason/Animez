document.addEventListener("DOMContentLoaded", function () {
  function hanleButtonClick(event) {
    event.preventDefault();
  }

  const loginBtn = document.getElementById("loginbtn");
  loginBtn.addEventListener("click", function (event) {
    window.location.href = "login.html";
  });

  const signupBtn = document.getElementById("signupbtn");
  signupBtn.addEventListener("click", function (event) {
    window.location.href = "signupstep1.html";
  });

  const searchBtn = document.getElementById("searchbtn");
  searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://hentaihaven.xxx";
  });
});
