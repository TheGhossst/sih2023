const gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach((square) => {
    square.addEventListener('click', toggleImageSelection);
});
function toggleImageSelection(event) {
    const square = event.currentTarget;
    square.classList.toggle('selected');
}
const loginLink = document.getElementById('loginLink');
loginLink.addEventListener('click', (e) => {
    e.preventDefault();

    const popupMessage = 'You have been logged in.';
    alert(popupMessage);
    const waitForPopupClose = setInterval(() => {
        if (!document.hidden) {
            clearInterval(waitForPopupClose);
            window.location.href = 'index.html'; 
        }
    }, 1000);
});

