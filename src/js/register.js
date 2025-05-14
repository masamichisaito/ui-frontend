document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
  };
  localStorage.setItem('tempUser', JSON.stringify(data));
  window.location.href = './confirm.html';
});
