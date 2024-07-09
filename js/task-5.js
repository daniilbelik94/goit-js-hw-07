function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function getBrightRandomHexColor() {
  const getRandomValue = () => Math.floor(Math.random() * 156) + 100; 
  const r = getRandomValue().toString(16).padStart(2, '0');
  const g = getRandomValue().toString(16).padStart(2, '0');
  const b = getRandomValue().toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', () => {
  const color1 = getBrightRandomHexColor();
  const color2 = getBrightRandomHexColor();
  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
  document.body.style.background = gradient;
  colorSpan.textContent = `${color1} to ${color2}`;
});


