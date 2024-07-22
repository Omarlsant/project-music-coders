const keys = document.querySelectorAll('.key');
const volumeControl = document.querySelector('.volume-slider input');
let volume = volumeControl.value / 1,
keysCheckbox = document.querySelector('.keys-checkbox input');

const sounds = {
    'a': '/assets/sound/a.mp3',
    'b': '/assets/sound/b.mp3',
    'c': '/assets/sound/c.mp3',
    'd': '/assets/sound/d.mp3',
    'e': '/assets/sound/e.mp3',
    'f': '/assets/sound/f.mp3',
    'g': '/assets/sound/g.mp3',
    'h': '/assets/sound/h.mp3',
    'i': '/assets/sound/i.mp3',
    'j': '/assets/sound/j.mp3',
    'k': '/assets/sound/k.mp3',
    'l': '/assets/sound/l.mp3',
    'm': '/assets/sound/m.mp3',
    'n': '/assets/sound/n.mp3',
    'ñ': '/assets/sound/ñ.mp3',
    'o': '/assets/sound/o.mp3',
    's': '/assets/sound/s.mp3',
    't': '/assets/sound/t.mp3',
    'u': '/assets/sound/u.mp3',
    'v': '/assets/sound/v.mp3',
    'w': '/assets/sound/w.mp3',
    'x': '/assets/sound/x.mp3',
    'y': '/assets/sound/y.mp3',
    'z': '/assets/sound/z.mp3'
};

function playSound(keyCode) {
    if (sounds[keyCode]) {
        const audio = new Audio(sounds[keyCode]);
        audio.volume = volume;
        audio.play();
        return audio;
    }
    return null;
};


keys.forEach(key => {
    key.addEventListener('mousedown', () => playSound(key.dataset.key));
});

volumeControl.addEventListener('input', (e) => {
    volume = e.target.value / 1;
});

const pressedkey = (e) => {
    playSound(e.key);
}

let showHideKeys = () => {
    keys.forEach(key => key.classList.toggle('hide'));
}

document.addEventListener('keydown', pressedkey);
keysCheckbox.addEventListener('click', showHideKeys);
