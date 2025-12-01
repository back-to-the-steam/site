import { auth } from "../js/firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("login-error");

loginBtn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "admin.html"; // Redirige vers admin
  } catch (err) {
    console.error(err);
    errorMsg.textContent = "Email ou mot de passe incorrect.";
  }
});
