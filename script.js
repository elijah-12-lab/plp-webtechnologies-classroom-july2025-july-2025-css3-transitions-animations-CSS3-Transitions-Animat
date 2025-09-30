// =============================
// Part 1: Event Handling
// =============================

// Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// FAQ collapsible
document.querySelectorAll(".faq-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// =============================
// Part 2: Functions (Scope, Params, Return)
// =============================

// Function with parameters + return
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function with scope demo
function greetUser(name) {
  let greeting = `Welcome, ${name}!`; // local variable
  return greeting;
}

// =============================
// Part 3: Custom Form Validation
// =============================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name.length < 3) {
    formMessage.textContent = "⚠️ Name must be at least 3 characters.";
    formMessage.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "⚠️ Enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = greetUser(name) + " 🎉 You’re subscribed!";
  formMessage.style.color = "green";
  form.reset();
});

// =============================
// Part 4: Combining CSS + JS Animations
// =============================
const animateBoxBtn = document.getElementById("animateBoxBtn");
const animatedBox = document.getElementById("animatedBox");

animateBoxBtn.addEventListener("click", () => {
  animatedBox.classList.remove("animate"); // reset
  void animatedBox.offsetWidth; // reflow trick to restart animation
  animatedBox.classList.add("animate");
});
