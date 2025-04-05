// Function to handle registration form submission
function handleRegistration(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value;

    // Validate form fields
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Display success message
    alert(`Registration successful for ${fullName}!`);
}

// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    // Validate form fields
    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Display success message
    alert(`Login successful for ${username}!`);
}

// Attach event listeners to forms
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector('.register-box form');
    const loginForm = document.querySelector('.login-box form');

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});