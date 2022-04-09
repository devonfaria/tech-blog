const newPostHandler = async (event) => {
  event.preventDefault();

  // Grab values from form input
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('post').value.trim();

  // Makes Post request to add post
  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ content, title, user_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/posts');
      alert('Post created.');
    } else {
      alert('Failed to log in.');
    };
  };
};

document.querySelector('.post-form').addEventListener('submit', newPostHandler);