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

const deletePost = async (event) => {
  event.preventDefault();
  const form = document.querySelector('.comment-form');
  const formId = form.attributes.id.value;
  const postId = formId;
  // Makes Post request to add comment
  if (postId) {
    const response = await fetch('/api/posts', {
      method: 'DELETE',
      body: JSON.stringify({ postId }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete.');
    };
  };
};

document.querySelector('.comment-form').addEventListener('submit', newCommentHandler);
document.querySelector('.delete').addEventListener('click', deletePost);