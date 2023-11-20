document.addEventListener("DOMContentLoaded", function () {
  const creddebcardBtn = document.getElementById("creditdebitcard");
  const digitalwalletBtn = document.getElementById("digitalwallet");
  const mobilebillBtn = document.getElementById("mobilebill");

  function paymentmethod(event, destination) {
    event.preventDefault();
    window.location.href = destination;
  }

  creddebcardBtn.addEventListener("click", function (event) {
    paymentmethod(event, "creditdebit.html");
  });

  digitalwalletBtn.addEventListener("click", function (event) {
    paymentmethod(event, "digitalwallet.html");
  });

  mobilebillBtn.addEventListener("click", function (event) {
    paymentmethod(event, "mobilebill.html");
  });
});
