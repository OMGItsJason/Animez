document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginbtn");

  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailinput");
    let password = document.getElementById("passwordinput");

    const emailval = email.value;
    const passwordval = password.value;

    if (emailval === "" || passwordval === "") {
      alert("Please Fill Up!");
    } else if (!emailval.includes("@") || passwordval.length <= 8) {
      alert("Invalid Email or Password!");
    } else {
      window.location.href = "animez.html";
    }

    email.value = "";
    password.value = "";
  });
});
