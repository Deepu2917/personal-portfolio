// script.js

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Active link highlight on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  document.querySelectorAll('section').forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (scrollPos >= top && scrollPos <= bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
});

// Basic Contact Form Validation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
      alert("Please fill out all fields.");
      e.preventDefault();
    }
  });
}
// Click to enlarge certificate images
document.querySelectorAll('.certificate-card img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    largeImg.style.border = '4px solid white';
    largeImg.style.borderRadius = '10px';

    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
// script/contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        alert("❗ Please fill in all the fields.");
        return;
      }

      alert(`✅ Thank you, ${name}! Your message has been sent.`);
      form.reset();
    });
  }
});

