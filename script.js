document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const phone = document.getElementById('phone').value.trim();

  let message = '';
  let valid = true;

  // Check if all fields are filled
  if (!name || !email || !password || !phone) {
    message = 'All fields are required.';
    valid = false;
  }
  // Validate email
  else if (!/\S+@\S+\.\S+/.test(email)) {
    message = 'Please enter a valid email address.';
    valid = false;
  }
  // Validate password (minimum 6 characters)
  else if (password.length < 6) {
    message = 'Password must be at least 6 characters long.';
    valid = false;
  }
  // Validate phone number (10 digits)
  else if (!/^\d{10}$/.test(phone)) {
    message = 'Phone number must be 10 digits.';
    valid = false;
  }

  const messageDiv = document.getElementById('message');

  if (valid) {
    messageDiv.textContent = 'Registration Successful!';
    messageDiv.className = 'success';
    document.getElementById('registrationForm').reset(); // Reset form
  } else {
    messageDiv.textContent = message;
    messageDiv.className = 'error';
  }
});

