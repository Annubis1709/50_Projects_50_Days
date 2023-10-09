const createButton = sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    return btn;
};

const playSound = sound => {
    stopSounds();
    const song = document.getElementById(sound);
    if (song) {
        song.play();
    }
};

const stopSounds = () => {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    });
};

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = createButton(sound);
    btn.addEventListener('click', () => playSound(sound));
    document.getElementById('buttons').appendChild(btn);
});