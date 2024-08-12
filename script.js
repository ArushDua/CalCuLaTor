let inputField = document.querySelector('input'); // Select the input field
let buttons = document.querySelectorAll('button'); // Select all buttons

let string = ""; // Variable to store the current input

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                string = eval(string); // Evaluate the expression
                inputField.value = string; // Display the result
            } catch {
                inputField.value = "Error"; // Display error on invalid input
                string = "";
            }
        } else if (buttonText === 'x') {
            string += '*'; // Replace 'x' with '*' for multiplication
            inputField.value = string;
        } else if (buttonText === 'C') { // Assuming you have a clear button
            string = ""; // Clear the string
            inputField.value = string; // Clear the display
        } else {
            string += buttonText; // Append the button text to the string
            inputField.value = string;
        }
    });
});