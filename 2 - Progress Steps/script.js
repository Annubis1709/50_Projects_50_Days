const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

next.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

prev.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

function update() {
  circles.forEach((circle, index) => {
    circle.classList.toggle('active', index < currentActive);
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}