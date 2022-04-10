const newCommentHandler = async (event) => {
  event.preventDefault();
  const form = document.querySelector('.comment-form');
  const formId = form.attributes.id.value;

  // Grab values from form input
  const comment = document.getElementById('comment').value.trim();
  const postId = formId;
  // Makes Post request to add comment
  if (comment && postId) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, postId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // document.location.replace('/posts');
      document.location.replace(`/posts/${postId}`);
    } else {
      alert('Failed to comment.');
    };
  };
};

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);