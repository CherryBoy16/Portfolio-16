function scrollToSection(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(a.getAttribute('href'));
    });
  });
  function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !mail || !message) {
      alert('Please complete all fields.');
      return;
    }
    alert('Thanks, ' + name + '! I received your message. I will reply at ' + mail + '.');
    e.target.reset();
    scrollToSection('#home');
  }