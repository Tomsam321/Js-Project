// Lógica de validación y envío del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // --- Validación de campos requeridos ---
    form.querySelectorAll('[data-required]').forEach(input => {
      const error = input.nextElementSibling;
      if (input.value.trim() === '') {
        error.classList.remove('hidden');
        valid = false;
      } else {
        error.classList.add('hidden');
      }
    });

    // --- Validación de email ---
    const email = form.querySelector('input[type="email"]');
    const emailError = email.nextElementSibling;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email.value && !emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address';
      emailError.classList.remove('hidden');
      valid = false;
    } else if (email.value) {
      emailError.classList.add('hidden');
    }

    // --- Validación de tipo de consulta (radio) ---
    const radios = form.querySelectorAll('input[name="query-type"]');
    const radioError = document.getElementById('query-type-error');
    if (![...radios].some(r => r.checked)) {
      radioError.classList.remove('hidden');
      valid = false;
    } else {
      radioError.classList.add('hidden');
    }

    // --- Validación de consentimiento (checkbox) ---
    const consent = form.querySelector('input[name="consent"]');
    const consentError = document.getElementById('consent-error');
    if (!consent.checked) {
      consentError.classList.remove('hidden');
      valid = false;
    } else {
      consentError.classList.add('hidden');
    }

    // --- Mostrar mensaje de éxito si todo es válido ---
    if (valid) {
      form.classList.add('hidden');
      successMsg.classList.remove('hidden');
    }
  });
});
