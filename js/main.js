const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('form-message').textContent =
      'Thank you! This demo form is ready for connection to an email or backend service.';
    enquiryForm.reset();
  });
}
