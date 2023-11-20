document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("nextbtn");

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let email = document.getElementById("emailinput");
    let password = document.getElementById("passwordinput");
    let conpassword = document.getElementById("conpassinput");

    const emailval = email.value;
    const passwordval = password.value;
    const conpassval = conpassword.value;

    if (emailval === "" || passwordval === "" || conpassval === "") {
      alert("Please Fill Up!");
    } else if (
      !emailval.includes("@") ||
      passwordval.length <= 8 ||
      passwordval !== conpassval
    ) {
      alert(
        "Invalid Email or Password the Password Must Contain 8 Characters!"
      );
    } else {
      window.location.href = "signupstep2.html";
    }

    email.value = "";
    password.value = "";
    conpassword.value = "";
  });
});
