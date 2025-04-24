document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('username').textContent = username;
  
    // Retrieve and display stored posts
    for (let i = 1; i <= 6; i++) {
      const postContent = localStorage.getItem(`post-${i}`) || `Post ${i} text or image link`;
      document.getElementById(`post-${i}`).textContent = postContent;
    }
  
    // Retrieve stored profit/loss values
    document.getElementById('profit').textContent = localStorage.getItem('profit') || '1000';
    document.getElementById('loss').textContent = localStorage.getItem('loss') || '200';
  
    document.getElementById('logout-btn').addEventListener('click', () => {
      localStorage.removeItem('username');
      window.location.href = 'index.html'; // Redirect to login page
    });
  });
  