const signout = async () => {
  const response = await fetch('/api/users/signout', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json'},
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#signOut').addEventListener('click', signout);