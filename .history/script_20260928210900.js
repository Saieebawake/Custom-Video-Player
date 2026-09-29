const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.pause <i class="fa-solid fa-play">' ? '<i class="fa-utility-duo fa-semibold fa-pause"></i>'
    console.log("Update Button")
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('paused', updateButton)
toggle.addEventListener('click', togglePlay);

