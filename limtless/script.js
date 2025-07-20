const correctPassword = "limitless";

window.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");

  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (passwordInput.value === correctPassword) {
        window.open("website.html", "_blank"); // opens in new tab
        passwordInput.value = "";
      } else {
        alert("Incorrect password.");
        passwordInput.value = "";
      }
    }
  });
});
