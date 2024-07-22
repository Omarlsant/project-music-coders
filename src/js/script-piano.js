let pianokeys = document.querySelectorAll('.piano-keys .key'),
volumeSlider = document.querySelector('.volume-slider input'),
keysCheckbox = document.querySelector('.keys-checkbox input');

let allkeys = [],
audio = new Audio("/assets/sound/a.mp3");

let playTune = (key) => {
    audio.src = `/assets/sound/${key}.mp3`;
    audio.play(); 
    
    let clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.addEventListener('mousedown', pressedkey);
    // clickedkey.classList.add("active");
    // setTimeout(() => {
    //     clickedkey.classList.remove("active");
    // }, 350);
};  

pianokeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener('mousedown',() => playTune(key.dataset.key));
});

let handleVolume = (e) => {
    audio.volume = e.target.value;
}

let showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle('hide'));
}

let pressedkey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener('input', handleVolume);
keysCheckbox.addEventListener('click', showHideKeys);
document.addEventListener('keydown', pressedkey);





