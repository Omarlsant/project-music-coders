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

const activeKeys = new Set();

function playSound(keyCode) {
    if (sounds[keyCode]) {
        const audio = new Audio(sounds[keyCode]);
        audio.volume = volume;
        audio.play();
        return audio;
    }
}

keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        const keyCode = key.dataset.key;
        if (!activeKeys.has(keyCode)) {
            activeKeys.add(keyCode);
            playSound(keyCode);
            key.classList.add('active');
        }
    });
    key.addEventListener('mouseup', () => {
        const keyCode = key.dataset.key;
        activeKeys.delete(keyCode);
        key.classList.remove('active');
    });
    key.addEventListener('mouseleave', () => {
        const keyCode = key.dataset.key;
        activeKeys.delete(keyCode);
        key.classList.remove('active');
    });
});

volumeControl.addEventListener('input', (e) => {
    volume = e.target.value / 1;
});

const pressedkey = (e) => {
    const key = e.key.toLowerCase();
    if (!activeKeys.has(key) && sounds[key]) {
        activeKeys.add(key);
        playSound(key);
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
        }
    }
}

const releasedkey = (e) => {
    const key = e.key.toLowerCase();
    if (activeKeys.has(key)) {
        activeKeys.delete(key);
        const keyElement = document.querySelector(`.key[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.remove('active');
        }
    }
}

let showHideKeys = () => {
    keys.forEach(key => key.classList.toggle('hide'));
}

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    pressedkey(e);
});
document.addEventListener('keyup', releasedkey);
keysCheckbox.addEventListener('click', showHideKeys);