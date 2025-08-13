// Simple demo handler so the form feels alive
document.getElementById('subscribe-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value.trim();
  if (!email) return;
  alert(`Thanks! We’ll keep you posted at ${email}.`);
  e.target.reset();
});

