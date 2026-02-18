(() => {
  const init = () => {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        btn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });

    // Initialize EmailJS (replace with your public key)
    emailjs.init('3uHtAntsGkt-xWkxk');

    // Email modal functionality
    const modal = document.getElementById('email-modal');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const closeBtn = document.getElementsByClassName('close')[0];
    const emailForm = document.getElementById('email-form');

    if (subscribeBtn && modal) {
      subscribeBtn.addEventListener('click', () => {
        modal.style.display = 'block';
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }

    if (modal) {
      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }

    if (emailForm) {
      emailForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        try {
          // Send email with attachment
          const templateParams = {
            to_email: email,
            from_name: 'Ben Manning',
            to_name: name,
            message: 'Thank you for subscribing! Here is my resume.'
          };

          await emailjs.send('service_t6vx9ls', 'template_tu7g3zr', templateParams);
          alert(`Thank you for subscribing, ${name}! Your resume has been sent to ${email}.`);
        } catch (error) {
          console.error('Error sending email:', error);
          alert('There was an error sending the resume. Please try again later.');
        }

        modal.style.display = 'none';
        emailForm.reset();
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
