const video = document.querySelector(".player__video");
const playPauseButton = document.querySelector(".toggle");
const volumeSlider = document.querySelector(`.player__slider[name="volume"]`);
const speedSlider = document.querySelector(`.player__slider[name="playbackRate"]`);
const progressBar = document.querySelector(".progress__filled");
const skipButtons = document.querySelectorAll(".player__button");

// Default video style
video.play();
progressBar.style.flexBasis = "0%";

// Toggle Pause and Unpause
function togglePlay() {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = "❚ ❚";
    } else {
        video.pause();
        playPauseButton.innerHTML = "►";
    }
}

// Play Pause video by clicking a button
playPauseButton.addEventListener("click", function() {
    togglePlay();
});
video.addEventListener("click", function() {
    togglePlay();
});

// Audio slider
volumeSlider.addEventListener("input", function() {
    video.volume = this.value;
});

// Speed slider
speedSlider.addEventListener("input", function() {
    video.playbackRate = this.value;
});

// Progress Bar
video.addEventListener("timeupdate", function() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + "%";
});

// Skip Buttons
skipButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        console.log(this);
        const skipValue = parseInt(this.getAttribute("data-skip"));
        if (!video.ended && !video.paused) {
            video.currentTime += skipValue;
        }
    });
});