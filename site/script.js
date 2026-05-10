// Двойное хранение темы: localStorage (постоянно) + window.name (в пределах вкладки).
// window.name нужен для Firefox, где file:// изолирует localStorage на каждый файл.
function writeThemePref(t) {
  try {
    localStorage.setItem('theme', t);
  } catch (e) {}
  try {
    let d = {};
    try {
      d = JSON.parse(window.name || '{}');
    } catch (e) {}
    d.theme = t;
    window.name = JSON.stringify(d);
  } catch (e) {}
}

function readThemePref() {
  try {
    const ls = localStorage.getItem('theme');
    if (ls) return ls;
  } catch (e) {}
  try {
    const wn = JSON.parse(window.name || '{}').theme;
    if (wn) return wn;
  } catch (e) {}
  return null;
}

(function () {
  const t = readThemePref() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    writeThemePref(next);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!readThemePref()) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // Активная ссылка по имени текущего файла в URL
  const navLinks = document.querySelectorAll('nav a');
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((a) => {
    if (a.getAttribute('href') === currentFile) {
      a.classList.add('active');
    }
  });

  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach((el) => revealObs.observe(el));

  const backTop = document.getElementById('back-top');
  window.addEventListener(
    'scroll',
    () => {
      backTop.classList.toggle('show', window.scrollY > 400);
    },
    { passive: true }
  );
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
