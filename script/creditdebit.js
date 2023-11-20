document.addEventListener("DOMContentLoaded", function () {
  const startMembershipBtn = document.getElementById("startmembership");
  startMembershipBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
  });

  const cardNumInput = document.getElementById("cardnum");
  const expirationDateInput = document.getElementById("expirationdate");
  const cvvInput = document.getElementById("cvv");
  const cardHolderNameInput = document.getElementById("nameofcard");

  cardNumInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  expirationDateInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9/]/g, "");
  });

  cvvInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");
  });

  cardHolderNameInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
  });
});

function validateForm() {
  const cardNumber = document.getElementById("cardnum").value;
  const expirationDate = document.getElementById("expirationdate").value;
  const cvv = document.getElementById("cvv").value;
  const cardHolderName = document.getElementById("nameofcard").value;
  const checkbox = document.getElementById("check");

  const cardNumPattern = /^\d{16}$/;
  const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvPattern = /^\d{3}$/;

  if (cardNumber.length < 16 || cardNumber === "") {
    alert("Invalid card number. Please enter a 16-digit number.");
    return;
  }

  if (!expirationDatePattern.test(expirationDate)) {
    alert("Invalid expiration date. Please enter a valid MM/YY format.");
    return;
  }

  if (cvv.length < 3 || cvv === "") {
    alert("Invalid CVV. Please enter a 3-digit number.");
    return;
  }

  if (cardHolderName.trim() === "") {
    alert("Cardholder name cannot be empty.");
    return;
  }

  if (!checkbox.checked) {
    alert("Please agree to the terms.");
    return;
  }

  document.getElementById("cardnum").value = "";
  document.getElementById("expirationdate").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("nameofcard").value = "";

  window.location.href = "animez.html";
}
