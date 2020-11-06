// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let currentColor = '#000000';
let height, width;
const form = document.getElementById('sizePicker');
const colorPicker = document.getElementById('colorPicker');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  makeGrid();
});

colorPicker.addEventListener('change', (e) => {
  currentColor = e.currentTarget.value;
});



function makeGrid() {
  const pixelCanvas = document.getElementById('pixelCanvas');
  pixelCanvas.innerHTML = '';
  const tbody = document.createElement('tbody');
  for (let i = 0;i < height;i ++) {
    const row = document.createElement('tr');
    for (let j = 0;j < width;j ++) {
      const cell = document.createElement('td');
      cell.addEventListener('click', (e) => {
        e.currentTarget.style.backgroundColor = currentColor;
      })
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  pixelCanvas.appendChild(tbody);
}
