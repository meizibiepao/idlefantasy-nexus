// Navbar scroll state
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 10) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Smooth anchor scrolling
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('open');
    }
  });
});

// Carousel
(function initCarousel(){
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  const dotsWrap = carousel.querySelector('.carousel-dots');
  let index = 0;
  let autoTimer;

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll('button').forEach((d,i)=>d.classList.toggle('active', i===index));
  };

  // dots
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if (i===0) b.classList.add('active');
    b.addEventListener('click', () => { index = i; update(); restart(); });
    dotsWrap.appendChild(b);
  });

  const next = () => { index = (index+1) % slides.length; update(); };
  const prev = () => { index = (index-1+slides.length) % slides.length; update(); };

  nextBtn.addEventListener('click', () => { next(); restart(); });
  prevBtn.addEventListener('click', () => { prev(); restart(); });

  // touch drag
  let startX = 0; let dx = 0; let dragging = false;
  const onStart = (x) => { startX = x; dragging = true; clearInterval(autoTimer); };
  const onMove = (x) => { if (!dragging) return; dx = x - startX; };
  const onEnd = () => {
    if (!dragging) return;
    if (dx > 50) prev(); else if (dx < -50) next();
    dx = 0; dragging = false; restart();
  };
  track.addEventListener('touchstart', (e)=>onStart(e.touches[0].clientX), {passive:true});
  track.addEventListener('touchmove', (e)=>onMove(e.touches[0].clientX), {passive:true});
  track.addEventListener('touchend', onEnd);

  const restart = () => { clearInterval(autoTimer); autoTimer = setInterval(next, 4000); };
  restart();
})();
