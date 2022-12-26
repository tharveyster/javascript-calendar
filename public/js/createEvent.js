const createEventFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#createEventTitle').value.trim();
  const date = location.pathname.split('/')[2];
  console.log(date);

  if (title) {
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ title, date }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#createEvent').addEventListener('submit', createEventFormHandler);