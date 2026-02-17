(() => {
  const init = () => {
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
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
