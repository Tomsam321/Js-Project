document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[data-required]').forEach(input => {
      const error = input.nextElementSibling;
      const isEmail = input.type === 'email';
      const empty = input.value.trim() === '';
      const invalidEmail = isEmail && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value);

      if (empty || invalidEmail) {
        error.textContent = invalidEmail ? 'Please enter a valid email address' : error.textContent;
        error.classList.remove('hidden');
        valid = false;
      } else {
        error.classList.add('hidden');
      }
    });

    const radioError = document.getElementById('query-type-error');
    if (!form.querySelector('input[name="query-type"]:checked')) {
      radioError.classList.remove('hidden');
      valid = false;
    } else {
      radioError.classList.add('hidden');
    }

    const consent = form.querySelector('input[name="consent"]');
    const consentError = document.getElementById('consent-error');
    consentError.classList.toggle('hidden', consent.checked);
    if (!consent.checked) valid = false;

    if (valid) {
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    }
  });
});
