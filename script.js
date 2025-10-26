const form = document.getElementById('notifyForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    message.textContent = '✅ Thanks! You’ll be notified when we launch.';
    message.style.color = '#00ff66';
    form.reset();
  } else {
    message.textContent = '❌ Please enter a valid email.';
  }
});
