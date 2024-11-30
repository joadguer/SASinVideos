document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    // Unmute the video initially
    video.muted = false;

    // Set a timer to mute the video after a specific time (e.g., 5 seconds)
    const unmuteDuration = 38500; // 5 seconds

    // Mute the video after the duration
    setTimeout(() => {
      video.muted = true; // Mute the video
    }, unmuteDuration);
  });



const targetDate = new Date("April 02, 2025 00:00:01").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const gap = targetDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24; 

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);
countdown();  // Ejecutar inmediatamente para evitar retraso inicial

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}