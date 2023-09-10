const container = document.querySelector('.container');
const toggleNav = () => container.classList.toggle('show-nav');

document.getElementById('open').addEventListener('click', toggleNav);
document.getElementById('close').addEventListener('click', toggleNav);