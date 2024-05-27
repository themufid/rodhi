
const container = document.querySelector(".info-box");
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  container.classList.toggle("active");
});

function vibrate() {
  navigator.vibrate(6);
}

const socialMediaLinks = document.querySelectorAll(".social-media div");

ScrollReveal().reveal(socialMediaLinks, {
  duration: 1000,
  opacity: 0,
  distance: "30%",
  origin: "bottom",
  scale: 0.9
});

function showMessage() {
  setTimeout(function() {
    alert("Terimakasih, silahkan tanyakan saja apa yang anda inginkan ya!");
  }, 3000); 
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
