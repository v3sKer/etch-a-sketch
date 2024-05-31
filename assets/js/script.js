const sketchCreateBtn = document.querySelector('button');
const sketchContainer = document.querySelector('.sketch-container');
let sketch = document.querySelector('.sketch');

let userInput;

createGrid(16);

sketchCreateBtn.addEventListener("click", () => {
  do {
    userInput = prompt('How many px? Example: 16 = 16x16 (max 100)')
  } while (isNaN(userInput) || userInput > 100 || userInput === null);
  createGrid(userInput);
})

function createGrid(num) {
  sketch.remove();
  sketch = document.createElement('div');
  sketch.setAttribute('class', 'sketch');
  for (let i = 0; i < num; i++) {
    const sketchRow = document.createElement('div');
    sketchRow.setAttribute('class', 'row');
    for (let i = 0; i < num; i++) {
      const sketchPx = document.createElement('div')
      sketchPx.addEventListener('mouseenter', () => {
        sketchPx.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      });
      sketchPx.addEventListener('click', darkenPx);
      sketchRow.appendChild(sketchPx);
    }
    sketch.appendChild(sketchRow);
  }
  sketchContainer.appendChild(sketch);
}

function darkenPx() {
  let currentBrightness = this.dataset.brightness || 100;
  currentBrightness = parseInt(currentBrightness) - 10;

  if (currentBrightness >= 0) {
    this.style.filter = `brightness(${currentBrightness}%)`;
    this.dataset.brightness = currentBrightness;
  }
}