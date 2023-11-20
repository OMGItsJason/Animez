document.addEventListener("DOMContentLoaded", function () {
  const startMembershipBtn = document.getElementById("startmembership");
  const checkbox = document.getElementById("check");
  const accountNumInput = document.getElementById("accnum");
  const accNumPattern = /^\d{10}$/;

  accountNumInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  startMembershipBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const accNumValue = accountNumInput.value;

    if (accNumValue === "") {
      alert("Please input your account number.");
      return;
    }

    if (!accNumPattern.test(accNumValue)) {
      alert("Invalid Account Number: Must be 10 digits.");
      return;
    }

    if (!checkbox.checked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    window.location.href = "animez.html";

    accountNumInput.value = "";
  });
});
