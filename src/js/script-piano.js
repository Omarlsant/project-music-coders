volumeSlider = document.querySelector(".volume-slider")
let Keys = document.querySelectorAll('.key');

Keys.forEach(function(key) {
    key.addEventListener('mousedown', function() {
    let note = this.getAttribute('data-key');
    playNote(note);
    });
});

function playNote(note) {
    let audio = new Audio(`/assets/sound/${note}.mp3`);
    audio.play();
};
