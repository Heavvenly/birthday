// Get a reference to the audio element
var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

// Play the audio when the user clicks anywhere on the page
document.addEventListener('click', function() {
  audio.play();
});

const birthday = new Date("2023-06-03");

function countdown() {
  const now = new Date();
  const diff = new Date(birthday - now);

  const days = diff.getUTCDate() - 1;
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  const seconds = diff.getUTCSeconds();

  document.getElementById("countdown-days").textContent = days.toString().padStart(2, "0");
  document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("countdown-minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("countdown-seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(countdown, 1000);

const button = document.querySelector('.button');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', function() {
  overlay.style.opacity = '1';

  setTimeout(function() {
    overlay.style.opacity = '0';
  }, 3000);
});
function handleClick(page) {
  // add the 'active' class to the overlay
  document.querySelector('.overlay').classList.add('active');

  // wait for a short delay, then navigate to the new page
  setTimeout(function() {
    window.location = page;
  }, 800); // 500 milliseconds delay
}
document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0, 0, 0, 0.7)";
  overlay.style.zIndex = "9999";
  overlay.style.display = "none";
  document.body.appendChild(overlay);


  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
  });
});
