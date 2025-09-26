// ===================== PAGE LOADER =====================
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 600);
  }
});

// ===================== NAVBAR LOGO RELOAD =====================
document.getElementById("logo").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  location.reload();
});

// ===================== THEME TOGGLE =====================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Saved theme from localStorage (default = dark)
const savedTheme = localStorage.getItem("theme") || "dark";
body.classList.add(savedTheme);
toggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// ===================== TESTIMONIALS DYNAMIC =====================
const testimonials = [
  "Homstel really feels like home ❤️",
  "Best hostel in Indore with amazing facilities!",
  "The community here is so friendly and welcoming 😊",
  "WiFi is fast, rooms are clean, staff is very supportive!",
  "Love the events and study spaces here!"
];

let testiIndex = 0;
const testiText = document.getElementById("testimonial-text");
const prevBtn = document.getElementById("testi-prev");
const nextBtn = document.getElementById("testi-next");

function showTestimonial(index) {
  testiText.textContent = testimonials[index];
}
showTestimonial(testiIndex);

prevBtn.addEventListener("click", () => {
  testiIndex = (testiIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testiIndex);
});

nextBtn.addEventListener("click", () => {
  testiIndex = (testiIndex + 1) % testimonials.length;
  showTestimonial(testiIndex);
});

// Auto rotate testimonials
setInterval(() => {
  testiIndex = (testiIndex + 1) % testimonials.length;
  showTestimonial(testiIndex);
}, 5000);

// ===================== CHAT WIDGET =====================
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

chatToggle.addEventListener("click", () => {
  chatPanel.style.display = "block";
});

chatClose.addEventListener("click", () => {
  chatPanel.style.display = "none";
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (msg) {
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);

    // Simple bot reply
    const botMsg = document.createElement("div");
    botMsg.className = "bot";
    botMsg.textContent = `“This service is currently unavailable. Please send your inquiry to the email address.”`;
    setTimeout(() => chatBody.appendChild(botMsg), 800);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});

// ===================== EMAILJS CONTACT FORM =====================
(function() {
  emailjs.init("pAyN-fmoT4_8gnVXl");  // <-- Replace with your Public Key
})();

document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_5b95gks", "template_fxq2t27", this)
    .then(function() {
      alert("✅ Inquiry sent successfully! We will get back to you soon.");
    }, function(error) {
      alert("❌ Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
    });
});

// ===================== FOOTER YEAR =====================
document.getElementById("year").textContent = new Date().getFullYear();