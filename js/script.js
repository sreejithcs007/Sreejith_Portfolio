


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader-overlay");
  const percent = document.getElementById("loader-percent");
  const label = document.querySelector(".loader-label");

  let value = 0;

  const duration = 1200; // 1.2 sec for 0 → 100
  const interval = duration / 100;

  const timer = setInterval(() => {
    value++;
    percent.textContent = `${value}%`;

    if (value >= 100) {
      clearInterval(timer);

      label.textContent = "RENDER COMPLETE";
      percent.textContent = "100%";

      setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
          loader.remove();
        }, 400); // fade duration

      }, 300); // SYSTEM READY visible
    }
  }, interval);
});











document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  document.body.classList.remove('light-mode');
  document.body.style.background = '#000000';
  document.body.style.color = '#ffffff';

  // --------------------------------------------------
  // Cursor effect
  // --------------------------------------------------
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    tx: window.innerWidth * 0.5,
    ty: window.innerHeight * 0.35,
    active: false,
    down: false,
    radius: 180
  };

  let cursorDot = null;
  let cursorRing = null;
  let cursorX = pointer.x;
  let cursorY = pointer.y;
  let ringX = pointer.x;
  let ringY = pointer.y;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  function setCursorVars(x, y) {
    document.documentElement.style.setProperty('--mx', `${x}px`);
    document.documentElement.style.setProperty('--my', `${y}px`);
  }

  function createCursor() {
    if (!isFinePointer) return;

    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';

    cursorRing = document.createElement('div');
    cursorRing.className = 'custom-cursor-ring';

    document.body.appendChild(cursorRing);
    document.body.appendChild(cursorDot);

    const updatePointer = (x, y) => {
      pointer.tx = x;
      pointer.ty = y;
      pointer.active = true;
      setCursorVars(x, y);
      document.body.classList.remove('cursor-hidden');
    };

    document.addEventListener('mousemove', (e) => {
      updatePointer(e.clientX, e.clientY);
    }, { passive: true });

    document.addEventListener('mousedown', () => {
      pointer.down = true;
      document.body.classList.add('cursor-down');
    });

    document.addEventListener('mouseup', () => {
      pointer.down = false;
      document.body.classList.remove('cursor-down');
    });

    document.addEventListener('mouseleave', () => {
      pointer.active = false;
      document.body.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', (e) => {
      if (typeof e.clientX === 'number') {
        updatePointer(e.clientX, e.clientY);
      }
    });

    const hoverables = 'a, button, [role="button"], .glow-btn, .nav-link, .carousel-btn, .carousel-nav';
    document.querySelectorAll(hoverables).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    const animateCursor = () => {
      cursorX += (pointer.tx - cursorX) * 0.28;
      cursorY += (pointer.ty - cursorY) * 0.28;
      ringX += (cursorX - ringX) * 0.12;
      ringY += (cursorY - ringY) * 0.12;

      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
        cursorDot.style.opacity = pointer.active ? '1' : '0';
      }

      if (cursorRing) {
        const scale = pointer.down ? 0.82 : 1;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
        cursorRing.style.opacity = pointer.active ? '1' : '0';
      }

      requestAnimationFrame(animateCursor);
    };

    animateCursor();
  }

  // --------------------------------------------------
  // Background canvas
  // --------------------------------------------------
  let w = 0;
  let h = 0;
  let nodes = [];
  let particles = [];
  let pulses = [];

  function resizeCanvas() {
    if (!canvas || !ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(window.innerWidth * dpr);
    h = canvas.height = Math.floor(window.innerHeight * dpr);

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initNodes() {
    const count = Math.max(12, Math.min(20, Math.floor(window.innerWidth / 120)));
    nodes = Array.from({ length: count }, () => ({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      vx: rand(-0.16, 0.16),
      vy: rand(-0.16, 0.16),
      r: rand(1.2, 2.4),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.01, 0.02)
    }));
  }

  function initParticles() {
    const count = Math.max(28, Math.min(56, Math.floor(window.innerWidth / 34)));
    particles = Array.from({ length: count }, () => ({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      vx: rand(-0.18, 0.18),
      vy: rand(-0.18, 0.18),
      r: rand(0.8, 1.8),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.01, 0.03)
    }));
  }

  function initPulses() {
    pulses = Array.from({ length: 5 }, () => ({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      radius: rand(40, 100),
      alpha: rand(0.06, 0.12),
      life: rand(0.35, 1),
      speed: rand(0.006, 0.015)
    }));
  }

  function initScene() {
    resizeCanvas();
    initNodes();
    initParticles();
    initPulses();
  }

  function repulse(obj, strength = 1) {
    const dx = obj.x - pointer.x;
    const dy = obj.y - pointer.y;
    const dist = Math.hypot(dx, dy);
    const zone = pointer.radius + 30;

    if (dist > 0 && dist < zone) {
      const force = ((zone - dist) / zone) * strength;
      obj.vx += (dx / dist) * force * 0.06;
      obj.vy += (dy / dist) * force * 0.06;
    }
  }

  function drawGrid() {
    ctx.save();
    ctx.strokeStyle = 'rgba(84, 197, 248, 0.05)';
    ctx.lineWidth = 1;

    const step = 150;
    for (let x = 0; x < window.innerWidth; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, window.innerHeight);
      ctx.stroke();
    }

    for (let y = 0; y < window.innerHeight; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(window.innerWidth, y);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawNodes() {
    for (const node of nodes) {
      node.phase += node.speed;
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
      if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;

      node.x = Math.max(0, Math.min(window.innerWidth, node.x));
      node.y = Math.max(0, Math.min(window.innerHeight, node.y));

      repulse(node, 1.3);

      const pulse = 0.5 + Math.sin(node.phase) * 0.5;
      const glow = 0.08 + pulse * 0.08;

      ctx.beginPath();
      ctx.fillStyle = `rgba(2, 86, 155, ${0.18 + glow})`;
      ctx.arc(node.x, node.y, node.r + pulse * 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = `rgba(84, 197, 248, ${0.08 + glow})`;
      ctx.lineWidth = 1.2;
      ctx.arc(node.x, node.y, node.r * 3, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 220) {
          const alpha = (1 - dist / 220) * 0.14;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(84, 197, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawParticles() {
    for (const p of particles) {
      p.phase += p.speed;
      p.x += p.vx + Math.sin(p.phase) * 0.18;
      p.y += p.vy + Math.cos(p.phase * 1.2) * 0.12;

      repulse(p, 0.9);

      if (p.x < -20) p.x = window.innerWidth + 20;
      if (p.x > window.innerWidth + 20) p.x = -20;
      if (p.y < -20) p.y = window.innerHeight + 20;
      if (p.y > window.innerHeight + 20) p.y = -20;

      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawPulse() {
    if (!pointer.active) return;

    const gradient = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
    gradient.addColorStop(0, 'rgba(84, 197, 248, 0.18)');
    gradient.addColorStop(0.35, 'rgba(84, 197, 248, 0.08)');
    gradient.addColorStop(1, 'rgba(84, 197, 248, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(pointer.x, pointer.y, 260, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawPulses() {
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.life -= p.speed;
      p.radius += 0.8;

      if (p.life <= 0) {
        pulses.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.strokeStyle = `rgba(139, 92, 246, ${p.alpha * p.life})`;
      ctx.lineWidth = 1;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  function animateBackground() {
    if (!ctx) return;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const bg = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
    bg.addColorStop(0, '#000000');
    bg.addColorStop(1, '#050505');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    drawGrid();
    drawConnections();
    drawNodes();
    drawParticles();
    drawPulses();
    drawPulse();

    requestAnimationFrame(animateBackground);
  }

  createCursor();

  if (canvas && ctx) {
    initScene();
    animateBackground();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initNodes();
      initParticles();
      initPulses();
    }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      pointer.active = true;
      setCursorVars(e.clientX, e.clientY);
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      pointer.active = false;
      document.body.classList.add('cursor-hidden');
    });

    window.addEventListener('mouseenter', () => {
      pointer.active = true;
      document.body.classList.remove('cursor-hidden');
    });
  }

  // Fade-up observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Smooth scroll only
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = href ? document.querySelector(href) : null;
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Keep your Element SDK text logic, but do not change layout or font sizes
  const defaultConfig = {
    hero_subtitle: 'I AM A',
    hero_description: 'Flutter Developer with 1 year of experience building responsive, scalable mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture.',
    about_text: 'Passionate Flutter Developer with experience building scalable cross-platform mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture. Focused on creating maintainable solutions, intuitive user experiences, and high-performance applications.',
    contact_heading: "LET'S BUILD SOMETHING AMAZING",
    background_color: '#000000',
    surface_color: '#0a0a0a',
    text_color: '#ffffff',
    primary_action_color: '#ffffff',
    secondary_action_color: '#888888',
    font_family: 'Space Grotesk',
    font_size: 16
  };

  if (window.elementSdk && typeof window.elementSdk.init === 'function') {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroDesc = document.getElementById('hero-desc');
        const aboutDesc = document.getElementById('about-desc');
        const contactHeading = document.getElementById('contact-heading');

        if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
        if (heroDesc) heroDesc.textContent = config.hero_description || defaultConfig.hero_description;
        if (aboutDesc) aboutDesc.textContent = config.about_text || defaultConfig.about_text;
        if (contactHeading) {
          const txt = config.contact_heading || defaultConfig.contact_heading;
          contactHeading.innerHTML = txt.replace(/\s+/g, ' ').replace(/(SOMETHING)/, '<br>$1');
        }

        document.body.style.background = '#000000';
        document.body.style.color = '#ffffff';
        document.body.classList.remove('light-mode');

        const font = config.font_family || defaultConfig.font_family;
        document.querySelectorAll('.font-space').forEach((el) => {
          el.style.fontFamily = `${font}, sans-serif`;
        });

        const size = config.font_size || defaultConfig.font_size;
        if (heroDesc) heroDesc.style.fontSize = `${size * 0.875}px`;
        if (aboutDesc) aboutDesc.style.fontSize = `${size * 1.1}px`;
      },
      mapToCapabilities: (config) => ({
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: () => {
              config.background_color = '#000000';
              window.elementSdk.setConfig({ background_color: '#000000' });
            }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (v) => {
              config.surface_color = v;
              window.elementSdk.setConfig({ surface_color: v });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (v) => {
              config.text_color = v;
              window.elementSdk.setConfig({ text_color: v });
            }
          },
          {
            get: () => config.primary_action_color || defaultConfig.primary_action_color,
            set: (v) => {
              config.primary_action_color = v;
              window.elementSdk.setConfig({ primary_action_color: v });
            }
          },
          {
            get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
            set: (v) => {
              config.secondary_action_color = v;
              window.elementSdk.setConfig({ secondary_action_color: v });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (v) => {
            config.font_family = v;
            window.elementSdk.setConfig({ font_family: v });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (v) => {
            config.font_size = v;
            window.elementSdk.setConfig({ font_size: v });
          }
        }
      }),
      mapToEditPanelValues: (config) => new Map([
        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
        ['hero_description', config.hero_description || defaultConfig.hero_description],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['contact_heading', config.contact_heading || defaultConfig.contact_heading]
      ])
    });
  }
});




// // projects.js
// let currentIndex = 0;

// const cards = document.querySelectorAll(".carousel-card");
// const totalCards = cards.length;

// const prevBtn = document.getElementById("carousel-prev");
// const nextBtn = document.getElementById("carousel-next");
// const carouselContainer = document.querySelector(".carousel-container");

// function updateCarousel() {
//   cards.forEach((card, i) => {
//     let offset = (i - currentIndex + totalCards) % totalCards;

//     if (offset > totalCards / 2) {
//       offset -= totalCards;
//     }

//     card.classList.remove("is-active");

//     card.style.transform = `
//       translateX(${offset * 240}px)
//       scale(${offset === 0 ? 1 : 0.85})
//       rotateY(${offset * -12}deg)
//     `;

//     card.style.opacity = offset === 0 ? 1 : 0.6;
//     card.style.zIndex = offset === 0 ? 3 : 1;

//     if (offset === 0) {
//       card.classList.add("is-active");
//     }
//   });
// }

// function nextCard() {
//   currentIndex = (currentIndex + 1) % totalCards;
//   updateCarousel();
// }

// function prevCard() {
//   currentIndex = (currentIndex - 1 + totalCards) % totalCards;
//   updateCarousel();
// }

// nextBtn.addEventListener("click", nextCard);
// prevBtn.addEventListener("click", prevCard);

// let autoSlide = setInterval(nextCard, 4000);

// carouselContainer.addEventListener("mouseenter", () => {
//   clearInterval(autoSlide);
// });

// carouselContainer.addEventListener("mouseleave", () => {
//   autoSlide = setInterval(nextCard, 4000);
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowRight") nextCard();
//   if (e.key === "ArrowLeft") prevCard();
// });

// updateCarousel();




















document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('[data-node]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.25 });

  nodes.forEach((node, index) => {
    observer.observe(node);

    node.addEventListener('mouseenter', () => {
      nodes.forEach(n => n.classList.remove('is-active'));
      node.classList.add('is-active');
    });

    if (index === 0) {
      node.classList.add('is-active');
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const frame = document.querySelector('.about-photo-frame');

  if (!frame) return;

  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    frame.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  frame.addEventListener('mouseleave', () => {
    frame.style.transform = 'perspective(1200px) rotateY(-6deg)';
  });
});



























// document.addEventListener('DOMContentLoaded', () => {
//   if (window.lucide && typeof window.lucide.createIcons === 'function') {
//     window.lucide.createIcons();
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   if (window.lucide && typeof window.lucide.createIcons === 'function') {
//     window.lucide.createIcons();
//   }
// });








document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".carousel-card"));
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const carouselContainer = document.querySelector(".carousel-container");

  if (!cards.length || !prevBtn || !nextBtn || !carouselContainer) return;

  let currentIndex = 0;
  const total = cards.length;

  function normalizeOffset(index) {
    let offset = index - currentIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  }

  function updateCarousel() {
    cards.forEach((card, index) => {
      const offset = normalizeOffset(index);

      card.classList.remove("is-active", "is-prev", "is-next", "is-hidden");

      if (Math.abs(offset) > 1) {
        card.classList.add("is-hidden");
        card.style.transform = "translateX(-50%) scale(0.72)";
        card.style.opacity = "0";
        card.style.visibility = "hidden";
        card.style.pointerEvents = "none";
        card.style.zIndex = "0";
        return;
      }

      const shift = Math.min(window.innerWidth * 0.22, 250);
      const scale = offset === 0 ? 1 : 0.86;
      const rotate = offset === 0 ? 0 : offset < 0 ? 12 : -12;
      const x = offset * shift;

      card.classList.add(offset === 0 ? "is-active" : offset < 0 ? "is-prev" : "is-next");
      card.style.transform = `translateX(calc(-50% + ${x}px)) scale(${scale}) rotateY(${rotate}deg)`;
      card.style.opacity = offset === 0 ? "1" : "0.62";
      card.style.visibility = "visible";
      card.style.pointerEvents = "auto";
      card.style.zIndex = offset === 0 ? "3" : "2";
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + total) % total;
    updateCarousel();
  }

  nextBtn.addEventListener("click", nextCard);
  prevBtn.addEventListener("click", prevCard);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextCard();
    if (e.key === "ArrowLeft") prevCard();
  });

  let autoSlide = setInterval(nextCard, 4000);

  carouselContainer.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carouselContainer.addEventListener("mouseleave", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextCard, 4000);
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
});