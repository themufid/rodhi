
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
  const darkIcon = document.getElementById('dark-icon');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    darkIcon.classList.remove('fa-sun');
    darkIcon.classList.add('fa-moon');
  } else {
    body.classList.add('dark-mode');
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
  }
}
