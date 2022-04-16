sounds = [];
sounds["number_sound"] = new Audio('assets/sounds/number_sound.mp3');
sounds["flag_sound"] = new Audio('assets/sounds/flag_sound.mp3');

function playSound(sound) {
    const soundClone = sounds[sound].cloneNode(true);
    soundClone.play().then(() => {
        soundClone.remove();
    })
}