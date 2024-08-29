// Script to handle form submission and smooth scrolling

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert(`Thank you, ${name}. Your message has been sent.`);
    // You can replace this with actual form submission logic
    document.getElementById('contactForm').reset();
  } else {
    alert('Please fill out all fields.');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
