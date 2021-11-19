const signinFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signInUsername').value.trim();
  const password = document.querySelector('#signInPassword').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#signIn').addEventListener('submit', signinFormHandler);