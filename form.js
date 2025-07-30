
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    // Validación de campos
    form.querySelectorAll('[data-required]').forEach(input => {
      const error = input.nextElementSibling;
      if (input.value.trim() === '') {
        error.classList.remove('hidden');
        valid = false;
      } else {
        error.classList.add('hidden');
      }
    });

    // Validación de email
    const email = form.querySelector('input[type="email"]');
    const emailError = email.nextElementSibling;
    if (email.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address';
      emailError.classList.remove('hidden');
      valid = false;
    } else if (email.value) {
      emailError.classList.add('hidden');
    }

    // Validación de radio
    const radios = form.querySelectorAll('input[name="query-type"]');
    const radioError = document.getElementById('query-type-error');
    if (![...radios].some(r => r.checked)) {
      radioError.classList.remove('hidden');
      valid = false;
    } else {
      radioError.classList.add('hidden');
    }

    // Validación de consentimiento
    const consent = form.querySelector('input[name="consent"]');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
      consentError.classList.remove('hidden');
      valid = false;
    } else {
      consentError.classList.add('hidden');
    }

    if (valid) {
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    }
  });
});
