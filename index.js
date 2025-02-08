
const logo = document.querySelector('.logo');
const musicPlayer = document.querySelector('.music-player');
const audio = document.getElementById('player');


logo.addEventListener('click', () => {

    logo.classList.toggle('clicked');
    
    musicPlayer.classList.toggle('active');
    
});

const progress = document.getElementById('progress-bar');
const playButton = document.getElementById('play');


audio.addEventListener('timeupdate', () => {
    progress.value = audio.currentTime; 
});


audio.addEventListener('loadedmetadata', () => {
    progress.max = audio.duration; 
});


progress.addEventListener('input', () => {
    audio.currentTime = progress.value; 
});


function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause'; 
    } else {
        audio.pause();
        playButton.textContent = 'Play'; 
    }
}
