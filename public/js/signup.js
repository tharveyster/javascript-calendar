const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#signUpFirstName').value.trim();
  const lastName = document.querySelector('#signUpLastName').value.trim();
  const email = document.querySelector('#signUpEmail').value.trim();
  const username = document.querySelector('#signUpUsername').value.trim();
  const password = document.querySelector('#signUpPassword').value.trim();

  if (firstName && lastName && email && username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#signUp').addEventListener('submit', signupFormHandler);
