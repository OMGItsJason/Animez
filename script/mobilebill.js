document.addEventListener("DOMContentLoaded", function () {
  const startMembershipBtn = document.getElementById("startmembership");
  const checkbox = document.getElementById("check");
  const mobileNum = document.getElementById("mobilenumber");

  mobileNum.addEventListener("input", function () {
    mobileNum.value = mobileNum.value.replace(/\D/g, "");
  });

  startMembershipBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumValue = mobileNum.value;

    if (mobileNumValue === "") {
      alert("Please input mobile number.");
      return;
    }

    if (mobileNumValue.length < 11) {
      alert("Invalid mobile number.Please enter 11 digits");
      return;
    }

    if (!checkbox.checked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    window.location.href = "animez.html";
    mobileNum.value = "";
  });
});
