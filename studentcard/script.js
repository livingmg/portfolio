const nameinput = document.getElementById('studentName');
const message = document.getElementById('message');
const greetButton = document.getElementById('greetButton');
const colourButton = document.getElementById('colourButton');
const resetButton = document.getElementById('resetButton');

//response when the greet button is clicked
greetButton.addEventListener("click", function() {
    const name = nameinput.value;
    if (name === "") {
        message.textContent = "Please enter your name!";
    } else {
        message.textContent = "Hello, " + name + ". Welcome to the student card!";
    }
});

//change the background colour when the colour button is clicked
colourButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});

//reset the input and message when the reset button is clicked
resetButton.addEventListener("click", function() {
    nameinput.value = "";
    message.textContent = "";
    document.body.style.backgroundColor = "white";
});