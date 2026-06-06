// ── Scroll Progress
const bar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  bar.style.width = pct + '%';
}, { passive: true });

// ── Reveal on Scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(r => obs.observe(r));

// ── Hamburger Menu
const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
ham.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = ham.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
  }
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  const spans = ham.querySelectorAll('span');
  spans[0].style.transform = ''; spans[1].style.opacity = ''; spans[2].style.transform = '';
}));

// ── Contact Form
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;
  btn.textContent = 'Opening Mail...';
  btn.disabled = true;
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
  window.location.href = 'mailto:bhavekar.tejas@gmail.com?subject=' + subject + '&body=' + body;
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.disabled = false; }, 2000);
}

// ── Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
}, { passive: true });

// ── Render Projects from content.js
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PORTFOLIO_DATA === 'undefined') return;

  const githubIcon = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

  grid.innerHTML = PORTFOLIO_DATA.projects.map(p => `
    <div class="project-card ${p.featured ? 'featured' : ''} reveal">
      ${p.image
        ? `<img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy">`
        : `<div class="project-img-placeholder">No image yet</div>`
      }
      <div class="project-header">
        ${p.award ? `<span class="proj-award">${p.award}</span>` : ''}
        <span class="project-badge">${p.badge}</span>
        <h3 class="project-title">${p.title}</h3>
      </div>
      <div class="project-body">
        <p class="project-desc">${p.description}</p>
        <ul class="project-highlights">
          ${p.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-links">
        <a href="${p.github}" class="proj-link" target="_blank" rel="noopener">
          ${githubIcon} View Code
        </a>
        ${p.demo ? `<a href="${p.demo}" class="proj-link" target="_blank" rel="noopener">↗ Live Demo</a>` : ''}
      </div>
    </div>
  `).join('');

  // Re-observe newly rendered cards for scroll reveal
  grid.querySelectorAll('.reveal').forEach(r => obs.observe(r));
}

document.addEventListener('DOMContentLoaded', renderProjects);
