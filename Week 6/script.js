// 1. TOGGLE COURSE HIGHLIGHTS
// This lets users hide or show the "Course Highlights" section.
const toggleButton = document.getElementById('toggleHighlights');
const highlightsList = document.querySelector('#highlights ul');

toggleButton.addEventListener('click', () => {
  if (highlightsList.style.display === 'none') {
    highlightsList.style.display = 'block';
    toggleButton.textContent = 'Hide Highlights';
  } else {
    highlightsList.style.display = 'none';
    toggleButton.textContent = 'Show Highlights';
  }
});

// 2. CHANGE TESTIMONIALS
// This changes the testimonial text each time the button is clicked.
const testimonials = [
  `"This course transformed how I take photos!" - Alex`,
  `"The instructors are so supportive and knowledgeable." - Maria`,
  `"I now shoot in manual mode with confidence!" - David`,
  `"An inspiring experience that boosted my creativity." - Fatima`
];

const testimonialText = document.getElementById('testimonialText');
const changeTestimonialBtn = document.getElementById('changeTestimonial');

changeTestimonialBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  testimonialText.textContent = testimonials[randomIndex];
});

// 3. CUSTOM FORM VALIDATION
// This validates that all fields are filled correctly before submission.
const form = document.getElementById('signupForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;

  // Validation checks
  if (name === '') {
    message.textContent = 'Please enter your full name.';
    return;
  }

  if (email === '') {
    message.textContent = 'Please enter your email address.';
    return;
  }

  // Basic email format check (no HTML5)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  if (interest === '') {
    message.textContent = 'Please select your area of interest.';
    return;
  }

  // If all validations pass
  message.style.color = 'green';
  message.textContent = 'Successfully signed up! Welcome to the course!';
  form.reset();
});
