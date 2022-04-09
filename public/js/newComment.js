const newCommentHandler = async (event) => {
  event.preventDefault();

  // Grab values from form input
  const comment = document.getElementById('comment').value.trim();
  const userId = 1;
  const postId = 1;
  // Makes Post request to add comment
  if (comment && userId && postId) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, userId, postId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // document.location.replace('/posts');
      alert('Comment created.');
    } else {
      alert('Failed to comment.');
    };
  };
};

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);