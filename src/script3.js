// Get all grid squares
const gridSquares = document.querySelectorAll('.grid-square');

// Add a click event listener to each grid square
gridSquares.forEach((square) => {
    square.addEventListener('click', toggleImageSelection);
});

// Function to toggle the selected class when a grid square is clicked
function toggleImageSelection(event) {
    const square = event.currentTarget;
    square.classList.toggle('selected');
}
