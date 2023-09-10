const loadingTextElement = document.querySelector('.loading-text');
const backgroundElement = document.querySelector('.bg');
let loadProgress = 0;

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurring() {
    loadProgress++;
    if (loadProgress > 99) {
        clearInterval(blurInterval);
    }

    loadingTextElement.innerText = `${loadProgress}%`;
    loadingTextElement.style.opacity = scale(loadProgress, 0, 100, 1, 0);
    backgroundElement.style.filter = `blur(${scale(loadProgress, 0, 100, 30, 0)}px)`;
}

const blurInterval = setInterval(blurring, 30);