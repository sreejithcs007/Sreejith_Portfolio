// Theme Management
    const themeBtn = document.getElementById('theme-btn');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    function applyTheme(theme) {
      if (theme === 'light') {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
      const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    }

    applyTheme(initialTheme);
    themeBtn.addEventListener('click', toggleTheme);

    // Software Engineering Inspired Background
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let w, h;
    let nodes = [];
    let codeSnippets = [];
    let dataPackets = [];
    let time = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Code snippets for background
    const codeLines = [
      'const api = await fetch("/graphql")',
      'function renderComponent() {}',
      'export interface IService { }',
      'class APIGateway extends Service {}',
      'async function handleRequest(req) {}',
      '@GetX() Widget build() {}',
      'Future<List<User>> fetchUsers() {}',
      'Stream<Data> watchChanges() {}',
      'if (state.isLoading) return Loader()',
      'return await repository.fetch()',
      'schema { query: Query }',
      'type Query { user: User }',
      'mutation UpdateProfile($id: ID!) {}',
      'subscription OnUserUpdate { }',
      'final getx = GetXController()',
      'class Repository implements IRepo {}',
      'void initState() { super.initState() }',
      'buildContext.read<Provider>()',
    ];

    // Initialize nodes (system architecture points)
    function initNodes() {
      nodes = [];
      const nodeCount = 12;
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 2 + 1,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02
        });
      }
    }
    initNodes();

    // Initialize data packets (moving between nodes)
    function initPackets() {
      dataPackets = [];
      for (let i = 0; i < 6; i++) {
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        const endNode = nodes[Math.floor(Math.random() * nodes.length)];
        dataPackets.push({
          startX: startNode.x,
          startY: startNode.y,
          endX: endNode.x,
          endY: endNode.y,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.003,
          size: 2
        });
      }
    }
    initPackets();

    // Generate code snippet elements
    function generateCodeSnippets() {
      codeSnippets = [];
      for (let i = 0; i < 8; i++) {
        const code = codeLines[Math.floor(Math.random() * codeLines.length)];
        codeSnippets.push({
          x: Math.random() * (w - 300),
          y: Math.random() * h,
          code: code,
          opacity: 0.03 + Math.random() * 0.07,
          vx: (Math.random() - 0.5) * 0.05,
          vy: (Math.random() - 0.5) * 0.05
        });
      }
    }
    generateCodeSnippets();

    // Update nodes
    function updateNodes() {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      });
    }

    // Update data packets
    function updatePackets() {
      dataPackets.forEach(packet => {
        packet.progress += packet.speed;
        if (packet.progress > 1) {
          packet.progress = 0;
          const startNode = nodes[Math.floor(Math.random() * nodes.length)];
          const endNode = nodes[Math.floor(Math.random() * nodes.length)];
          packet.startX = startNode.x;
          packet.startY = startNode.y;
          packet.endX = endNode.x;
          packet.endY = endNode.y;
        }
      });
    }

    // Draw circuit board pattern
    function drawCircuitBoard() {
      const isDark = !document.body.classList.contains('light-mode');
      const lineColor = isDark ? 'rgba(2, 86, 155, 0.03)' : 'rgba(2, 86, 155, 0.01)';
      const gridSize = 150;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;

      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw corner dots
      ctx.fillStyle = isDark ? 'rgba(2, 86, 155, 0.05)' : 'rgba(2, 86, 155, 0.02)';
      for (let x = 0; x < w; x += gridSize) {
        for (let y = 0; y < h; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw nodes (system architecture points)
    function drawNodes() {
      const isDark = !document.body.classList.contains('light-mode');
      nodes.forEach(node => {
        const baseOpacity = isDark ? 0.15 : 0.05;
        const pulseAmount = Math.sin(node.pulse) * 0.1;
        
        // Core node
        ctx.fillStyle = isDark ? `rgba(2, 86, 155, ${baseOpacity + pulseAmount})` : `rgba(2, 86, 155, ${baseOpacity * 0.3 + pulseAmount * 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Node glow
        ctx.strokeStyle = isDark ? `rgba(84, 197, 248, ${0.08 + pulseAmount * 0.05})` : `rgba(84, 197, 248, ${0.02})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
        ctx.stroke();
      });
    }

    // Draw connection lines between nodes
    function drawConnections() {
      const isDark = !document.body.classList.contains('light-mode');
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200 && dist > 0) {
            const opacity = isDark ? (1 - dist / 200) * 0.08 : (1 - dist / 200) * 0.02;
            ctx.strokeStyle = isDark ? `rgba(84, 197, 248, ${opacity})` : `rgba(84, 197, 248, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw data packets (flowing between nodes)
    function drawPackets() {
      const isDark = !document.body.classList.contains('light-mode');
      dataPackets.forEach(packet => {
        const x = packet.startX + (packet.endX - packet.startX) * packet.progress;
        const y = packet.startY + (packet.endY - packet.startY) * packet.progress;

        // Packet glow
        const glowColor = isDark ? 'rgba(84, 197, 248, 0.4)' : 'rgba(84, 197, 248, 0.15)';
        ctx.fillStyle = glowColor;
        ctx.beginPath();
        ctx.arc(x, y, packet.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Packet core
        const coreColor = isDark ? 'rgba(84, 197, 248, 0.8)' : 'rgba(84, 197, 248, 0.3)';
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(x, y, packet.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Main animation loop
    function animate() {
      ctx.fillStyle = document.body.classList.contains('light-mode') ? '#FFFFFF' : '#000000';
      ctx.fillRect(0, 0, w, h);

      time += 1;
      updateNodes();
      updatePackets();

      drawCircuitBoard();
      drawConnections();
      drawNodes();
      drawPackets();

      requestAnimationFrame(animate);
    }
    animate();

    // Re-generate on theme change
    themeBtn.addEventListener('click', () => {
      // Background will update via CSS transitions
    });

    // Intersection observer for fade-up
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.style.animationPlayState = 'running';
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
      });
    });

    lucide.createIcons();

    // Element SDK
    const defaultConfig = {
      hero_subtitle: "I AM A",
      hero_description: "Flutter Developer with 1 year of experience building responsive, scalable mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture.",
      about_text: "Passionate Flutter Developer with experience building scalable cross-platform mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture. Focused on creating maintainable solutions, intuitive user experiences, and high-performance applications.",
      contact_heading: "LET'S BUILD SOMETHING AMAZING",
      background_color: "#000000",
      surface_color: "#0a0a0a",
      text_color: "#ffffff",
      primary_action_color: "#ffffff",
      secondary_action_color: "#888888",
      font_family: "Space Grotesk",
      font_size: 16
    };

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
        document.getElementById('hero-desc').textContent = config.hero_description || defaultConfig.hero_description;
        document.getElementById('about-desc').textContent = config.about_text || defaultConfig.about_text;
        const ch = document.getElementById('contact-heading');
        const txt = config.contact_heading || defaultConfig.contact_heading;
        ch.innerHTML = txt.replace(/\s+/g, ' ').replace(/(SOMETHING)/, '<br>$1');

        const bg = config.background_color || defaultConfig.background_color;
        const txt_c = config.text_color || defaultConfig.text_color;
        document.body.style.background = bg;
        document.body.style.color = txt_c;

        const font = config.font_family || defaultConfig.font_family;
        document.querySelectorAll('.font-space').forEach(el => {
          el.style.fontFamily = `${font}, sans-serif`;
        });

        const size = config.font_size || defaultConfig.font_size;
        document.getElementById('hero-desc').style.fontSize = `${size * 0.875}px`;
        document.getElementById('about-desc').style.fontSize = `${size * 1.1}px`;
      },
      mapToCapabilities: (config) => ({
        recolorables: [
          { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
          { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } }
        ],
        borderables: [],
        fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
        fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
      }),
      mapToEditPanelValues: (config) => new Map([
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["hero_description", config.hero_description || defaultConfig.hero_description],
        ["about_text", config.about_text || defaultConfig.about_text],
        ["contact_heading", config.contact_heading || defaultConfig.contact_heading]
      ])
    });