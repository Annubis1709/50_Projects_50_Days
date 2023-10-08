const boxes = document.querySelectorAll('.box');
const triggerOffset = (window.innerHeight / 5) * 4;

function checkVisibility() {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const isVisible = boxTop < triggerOffset;
        box.classList.toggle('show', isVisible);
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();