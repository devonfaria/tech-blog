const logoutHandler = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    console.log('Logged out!');
    document.location.replace('/');
  };
};

document.getElementById('logout').addEventListener('click', logoutHandler);