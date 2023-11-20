document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("nextbtn");

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (!showOptions()) {
      alert("Please Select a Plan!");
    } else {
      window.location.href = "signupstep3.html";
    }
  });

  function showOptions() {
    const selectedplan = document.getElementById("selectplan");

    if (selectedplan.selectedIndex === 0) {
      return false;
    }

    if (selectedplan.options[0].style.display !== "none") {
      return true;
    }

    selectedplan.options[0].style.display = "";

    selectedplan.removeAttribute("onclick");

    return true;
  }
});
