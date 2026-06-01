// // // Theme Management
// //     const themeBtn = document.getElementById('theme-btn');
// //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// //     const savedTheme = localStorage.getItem('theme');
// //     const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

// //     function applyTheme(theme) {
// //       if (theme === 'light') {
// //         document.body.classList.add('light-mode');
// //       } else {
// //         document.body.classList.remove('light-mode');
// //       }
// //       localStorage.setItem('theme', theme);
// //     }

// //     function toggleTheme() {
// //       const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
// //       const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
// //       applyTheme(newTheme);
// //     }

// //     applyTheme(initialTheme);
// //     themeBtn.addEventListener('click', toggleTheme);

// //     // Software Engineering Inspired Background
// //     const canvas = document.getElementById('bg-canvas');
// //     const ctx = canvas.getContext('2d');
// //     let w, h;
// //     let nodes = [];
// //     let codeSnippets = [];
// //     let dataPackets = [];
// //     let time = 0;

// //     function resize() {
// //       w = canvas.width = window.innerWidth;
// //       h = canvas.height = window.innerHeight;
// //     }
// //     resize();
// //     window.addEventListener('resize', resize);

// //     // Code snippets for background
// //     const codeLines = [
// //       'const api = await fetch("/graphql")',
// //       'function renderComponent() {}',
// //       'export interface IService { }',
// //       'class APIGateway extends Service {}',
// //       'async function handleRequest(req) {}',
// //       '@GetX() Widget build() {}',
// //       'Future<List<User>> fetchUsers() {}',
// //       'Stream<Data> watchChanges() {}',
// //       'if (state.isLoading) return Loader()',
// //       'return await repository.fetch()',
// //       'schema { query: Query }',
// //       'type Query { user: User }',
// //       'mutation UpdateProfile($id: ID!) {}',
// //       'subscription OnUserUpdate { }',
// //       'final getx = GetXController()',
// //       'class Repository implements IRepo {}',
// //       'void initState() { super.initState() }',
// //       'buildContext.read<Provider>()',
// //     ];

// //     // Initialize nodes (system architecture points)
// //     function initNodes() {
// //       nodes = [];
// //       const nodeCount = 12;
// //       for (let i = 0; i < nodeCount; i++) {
// //         nodes.push({
// //           x: Math.random() * w,
// //           y: Math.random() * h,
// //           vx: (Math.random() - 0.5) * 0.15,
// //           vy: (Math.random() - 0.5) * 0.15,
// //           size: Math.random() * 2 + 1,
// //           pulse: Math.random() * Math.PI * 2,
// //           pulseSpeed: 0.02 + Math.random() * 0.02
// //         });
// //       }
// //     }
// //     initNodes();

// //     // Initialize data packets (moving between nodes)
// //     function initPackets() {
// //       dataPackets = [];
// //       for (let i = 0; i < 6; i++) {
// //         const startNode = nodes[Math.floor(Math.random() * nodes.length)];
// //         const endNode = nodes[Math.floor(Math.random() * nodes.length)];
// //         dataPackets.push({
// //           startX: startNode.x,
// //           startY: startNode.y,
// //           endX: endNode.x,
// //           endY: endNode.y,
// //           progress: Math.random(),
// //           speed: 0.003 + Math.random() * 0.003,
// //           size: 2
// //         });
// //       }
// //     }
// //     initPackets();

// //     // Generate code snippet elements
// //     function generateCodeSnippets() {
// //       codeSnippets = [];
// //       for (let i = 0; i < 8; i++) {
// //         const code = codeLines[Math.floor(Math.random() * codeLines.length)];
// //         codeSnippets.push({
// //           x: Math.random() * (w - 300),
// //           y: Math.random() * h,
// //           code: code,
// //           opacity: 0.03 + Math.random() * 0.07,
// //           vx: (Math.random() - 0.5) * 0.05,
// //           vy: (Math.random() - 0.5) * 0.05
// //         });
// //       }
// //     }
// //     generateCodeSnippets();

// //     // Update nodes
// //     function updateNodes() {
// //       nodes.forEach(node => {
// //         node.x += node.vx;
// //         node.y += node.vy;
// //         node.pulse += node.pulseSpeed;

// //         if (node.x < 0 || node.x > w) node.vx *= -1;
// //         if (node.y < 0 || node.y > h) node.vy *= -1;

// //         node.x = Math.max(0, Math.min(w, node.x));
// //         node.y = Math.max(0, Math.min(h, node.y));
// //       });
// //     }

// //     // Update data packets
// //     function updatePackets() {
// //       dataPackets.forEach(packet => {
// //         packet.progress += packet.speed;
// //         if (packet.progress > 1) {
// //           packet.progress = 0;
// //           const startNode = nodes[Math.floor(Math.random() * nodes.length)];
// //           const endNode = nodes[Math.floor(Math.random() * nodes.length)];
// //           packet.startX = startNode.x;
// //           packet.startY = startNode.y;
// //           packet.endX = endNode.x;
// //           packet.endY = endNode.y;
// //         }
// //       });
// //     }

// //     // Draw circuit board pattern
// //     function drawCircuitBoard() {
// //       const isDark = !document.body.classList.contains('light-mode');
// //       const lineColor = isDark ? 'rgba(2, 86, 155, 0.03)' : 'rgba(2, 86, 155, 0.01)';
// //       const gridSize = 150;

// //       ctx.strokeStyle = lineColor;
// //       ctx.lineWidth = 0.5;

// //       for (let x = 0; x < w; x += gridSize) {
// //         ctx.beginPath();
// //         ctx.moveTo(x, 0);
// //         ctx.lineTo(x, h);
// //         ctx.stroke();
// //       }
// //       for (let y = 0; y < h; y += gridSize) {
// //         ctx.beginPath();
// //         ctx.moveTo(0, y);
// //         ctx.lineTo(w, y);
// //         ctx.stroke();
// //       }

// //       // Draw corner dots
// //       ctx.fillStyle = isDark ? 'rgba(2, 86, 155, 0.05)' : 'rgba(2, 86, 155, 0.02)';
// //       for (let x = 0; x < w; x += gridSize) {
// //         for (let y = 0; y < h; y += gridSize) {
// //           ctx.beginPath();
// //           ctx.arc(x, y, 1.5, 0, Math.PI * 2);
// //           ctx.fill();
// //         }
// //       }
// //     }

// //     // Draw nodes (system architecture points)
// //     function drawNodes() {
// //       const isDark = !document.body.classList.contains('light-mode');
// //       nodes.forEach(node => {
// //         const baseOpacity = isDark ? 0.15 : 0.05;
// //         const pulseAmount = Math.sin(node.pulse) * 0.1;
        
// //         // Core node
// //         ctx.fillStyle = isDark ? `rgba(2, 86, 155, ${baseOpacity + pulseAmount})` : `rgba(2, 86, 155, ${baseOpacity * 0.3 + pulseAmount * 0.2})`;
// //         ctx.beginPath();
// //         ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
// //         ctx.fill();

// //         // Node glow
// //         ctx.strokeStyle = isDark ? `rgba(84, 197, 248, ${0.08 + pulseAmount * 0.05})` : `rgba(84, 197, 248, ${0.02})`;
// //         ctx.lineWidth = 1.5;
// //         ctx.beginPath();
// //         ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
// //         ctx.stroke();
// //       });
// //     }

// //     // Draw connection lines between nodes
// //     function drawConnections() {
// //       const isDark = !document.body.classList.contains('light-mode');
// //       for (let i = 0; i < nodes.length; i++) {
// //         for (let j = i + 1; j < nodes.length; j++) {
// //           const dx = nodes[i].x - nodes[j].x;
// //           const dy = nodes[i].y - nodes[j].y;
// //           const dist = Math.sqrt(dx * dx + dy * dy);

// //           if (dist < 200 && dist > 0) {
// //             const opacity = isDark ? (1 - dist / 200) * 0.08 : (1 - dist / 200) * 0.02;
// //             ctx.strokeStyle = isDark ? `rgba(84, 197, 248, ${opacity})` : `rgba(84, 197, 248, ${opacity})`;
// //             ctx.lineWidth = 0.8;
// //             ctx.beginPath();
// //             ctx.moveTo(nodes[i].x, nodes[i].y);
// //             ctx.lineTo(nodes[j].x, nodes[j].y);
// //             ctx.stroke();
// //           }
// //         }
// //       }
// //     }

// //     // Draw data packets (flowing between nodes)
// //     function drawPackets() {
// //       const isDark = !document.body.classList.contains('light-mode');
// //       dataPackets.forEach(packet => {
// //         const x = packet.startX + (packet.endX - packet.startX) * packet.progress;
// //         const y = packet.startY + (packet.endY - packet.startY) * packet.progress;

// //         // Packet glow
// //         const glowColor = isDark ? 'rgba(84, 197, 248, 0.4)' : 'rgba(84, 197, 248, 0.15)';
// //         ctx.fillStyle = glowColor;
// //         ctx.beginPath();
// //         ctx.arc(x, y, packet.size * 2, 0, Math.PI * 2);
// //         ctx.fill();

// //         // Packet core
// //         const coreColor = isDark ? 'rgba(84, 197, 248, 0.8)' : 'rgba(84, 197, 248, 0.3)';
// //         ctx.fillStyle = coreColor;
// //         ctx.beginPath();
// //         ctx.arc(x, y, packet.size * 0.7, 0, Math.PI * 2);
// //         ctx.fill();
// //       });
// //     }

// //     // Main animation loop
// //     function animate() {
// //       ctx.fillStyle = document.body.classList.contains('light-mode') ? '#FFFFFF' : '#000000';
// //       ctx.fillRect(0, 0, w, h);

// //       time += 1;
// //       updateNodes();
// //       updatePackets();

// //       drawCircuitBoard();
// //       drawConnections();
// //       drawNodes();
// //       drawPackets();

// //       requestAnimationFrame(animate);
// //     }
// //     animate();

// //     // Re-generate on theme change
// //     themeBtn.addEventListener('click', () => {
// //       // Background will update via CSS transitions
// //     });

// //     // Intersection observer for fade-up
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach(e => {
// //         if (e.isIntersecting) e.target.style.animationPlayState = 'running';
// //       });
// //     }, { threshold: 0.1 });
// //     document.querySelectorAll('.fade-up').forEach(el => {
// //       el.style.animationPlayState = 'paused';
// //       observer.observe(el);
// //     });

// //     // Smooth scroll
// //     document.querySelectorAll('a[href^="#"]').forEach(a => {
// //       a.addEventListener('click', e => {
// //         e.preventDefault();
// //         const t = document.querySelector(a.getAttribute('href'));
// //         if (t) t.scrollIntoView({ behavior: 'smooth' });
// //       });
// //     });

// //     lucide.createIcons();

// //     // Element SDK
// //     const defaultConfig = {
// //       hero_subtitle: "I AM A",
// //       hero_description: "Flutter Developer with 1 year of experience building responsive, scalable mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture.",
// //       about_text: "Passionate Flutter Developer with experience building scalable cross-platform mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture. Focused on creating maintainable solutions, intuitive user experiences, and high-performance applications.",
// //       contact_heading: "LET'S BUILD SOMETHING AMAZING",
// //       background_color: "#000000",
// //       surface_color: "#0a0a0a",
// //       text_color: "#ffffff",
// //       primary_action_color: "#ffffff",
// //       secondary_action_color: "#888888",
// //       font_family: "Space Grotesk",
// //       font_size: 16
// //     };

// //     window.elementSdk.init({
// //       defaultConfig,
// //       onConfigChange: async (config) => {
// //         document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
// //         document.getElementById('hero-desc').textContent = config.hero_description || defaultConfig.hero_description;
// //         document.getElementById('about-desc').textContent = config.about_text || defaultConfig.about_text;
// //         const ch = document.getElementById('contact-heading');
// //         const txt = config.contact_heading || defaultConfig.contact_heading;
// //         ch.innerHTML = txt.replace(/\s+/g, ' ').replace(/(SOMETHING)/, '<br>$1');

// //         // const bg = config.background_color || defaultConfig.background_color;
// //         const bg =  '#000000';;
// //         const txt_c = config.text_color || defaultConfig.text_color;
// //         document.body.style.background = bg;
// //         document.body.style.color = txt_c;

// //         const font = config.font_family || defaultConfig.font_family;
// //         document.querySelectorAll('.font-space').forEach(el => {
// //           el.style.fontFamily = `${font}, sans-serif`;
// //         });

// //         const size = config.font_size || defaultConfig.font_size;
// //         document.getElementById('hero-desc').style.fontSize = `${size * 0.875}px`;
// //         document.getElementById('about-desc').style.fontSize = `${size * 1.1}px`;
// //       },
// //       mapToCapabilities: (config) => ({
// //         recolorables: [
// //           { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
// //           { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
// //           { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
// //           { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
// //           { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } }
// //         ],
// //         borderables: [],
// //         fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
// //         fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
// //       }),
// //       mapToEditPanelValues: (config) => new Map([
// //         ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
// //         ["hero_description", config.hero_description || defaultConfig.hero_description],
// //         ["about_text", config.about_text || defaultConfig.about_text],
// //         ["contact_heading", config.contact_heading || defaultConfig.contact_heading]
// //       ])
// //     });




// // Force dark mode / black background always
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.classList.remove('light-mode');
//   document.body.style.background = '#000000';
//   document.body.style.color = '#ffffff';

//   // Software Engineering Inspired Background
//   const canvas = document.getElementById('bg-canvas');
//   if (!canvas) return;

//   const ctx = canvas.getContext('2d');
//   if (!ctx) return;

//   let w, h;
//   let nodes = [];
//   let codeSnippets = [];
//   let dataPackets = [];
//   let time = 0;

//   function resize() {
//     w = canvas.width = window.innerWidth;
//     h = canvas.height = window.innerHeight;
//   }

//   resize();
//   window.addEventListener('resize', resize);

//   // Code snippets for background
//   const codeLines = [
//     'const api = await fetch("/graphql")',
//     'function renderComponent() {}',
//     'export interface IService { }',
//     'class APIGateway extends Service {}',
//     'async function handleRequest(req) {}',
//     '@GetX() Widget build() {}',
//     'Future<List<User>> fetchUsers() {}',
//     'Stream<Data> watchChanges() {}',
//     'if (state.isLoading) return Loader()',
//     'return await repository.fetch()',
//     'schema { query: Query }',
//     'type Query { user: User }',
//     'mutation UpdateProfile($id: ID!) {}',
//     'subscription OnUserUpdate { }',
//     'final getx = GetXController()',
//     'class Repository implements IRepo {}',
//     'void initState() { super.initState() }',
//     'buildContext.read<Provider>()',
//   ];

//   // Initialize nodes (system architecture points)
//   function initNodes() {
//     nodes = [];
//     const nodeCount = 12;

//     for (let i = 0; i < nodeCount; i++) {
//       nodes.push({
//         x: Math.random() * w,
//         y: Math.random() * h,
//         vx: (Math.random() - 0.5) * 0.15,
//         vy: (Math.random() - 0.5) * 0.15,
//         size: Math.random() * 2 + 1,
//         pulse: Math.random() * Math.PI * 2,
//         pulseSpeed: 0.02 + Math.random() * 0.02
//       });
//     }
//   }

//   initNodes();

//   // Initialize data packets (moving between nodes)
//   function initPackets() {
//     dataPackets = [];

//     for (let i = 0; i < 6; i++) {
//       const startNode = nodes[Math.floor(Math.random() * nodes.length)];
//       const endNode = nodes[Math.floor(Math.random() * nodes.length)];

//       dataPackets.push({
//         startX: startNode.x,
//         startY: startNode.y,
//         endX: endNode.x,
//         endY: endNode.y,
//         progress: Math.random(),
//         speed: 0.003 + Math.random() * 0.003,
//         size: 2
//       });
//     }
//   }

//   initPackets();

//   // Generate code snippet elements
//   function generateCodeSnippets() {
//     codeSnippets = [];

//     for (let i = 0; i < 8; i++) {
//       const code = codeLines[Math.floor(Math.random() * codeLines.length)];

//       codeSnippets.push({
//         x: Math.random() * Math.max(1, (w - 300)),
//         y: Math.random() * h,
//         code: code,
//         opacity: 0.03 + Math.random() * 0.07,
//         vx: (Math.random() - 0.5) * 0.05,
//         vy: (Math.random() - 0.5) * 0.05
//       });
//     }
//   }

//   generateCodeSnippets();

//   // Update nodes
//   function updateNodes() {
//     nodes.forEach(node => {
//       node.x += node.vx;
//       node.y += node.vy;
//       node.pulse += node.pulseSpeed;

//       if (node.x < 0 || node.x > w) node.vx *= -1;
//       if (node.y < 0 || node.y > h) node.vy *= -1;

//       node.x = Math.max(0, Math.min(w, node.x));
//       node.y = Math.max(0, Math.min(h, node.y));
//     });
//   }

//   // Update data packets
//   function updatePackets() {
//     dataPackets.forEach(packet => {
//       packet.progress += packet.speed;

//       if (packet.progress > 1) {
//         packet.progress = 0;
//         const startNode = nodes[Math.floor(Math.random() * nodes.length)];
//         const endNode = nodes[Math.floor(Math.random() * nodes.length)];

//         packet.startX = startNode.x;
//         packet.startY = startNode.y;
//         packet.endX = endNode.x;
//         packet.endY = endNode.y;
//       }
//     });
//   }

//   // Draw circuit board pattern
//   function drawCircuitBoard() {
//     const lineColor = 'rgba(2, 86, 155, 0.03)';
//     const gridSize = 150;

//     ctx.strokeStyle = lineColor;
//     ctx.lineWidth = 0.5;

//     for (let x = 0; x < w; x += gridSize) {
//       ctx.beginPath();
//       ctx.moveTo(x, 0);
//       ctx.lineTo(x, h);
//       ctx.stroke();
//     }

//     for (let y = 0; y < h; y += gridSize) {
//       ctx.beginPath();
//       ctx.moveTo(0, y);
//       ctx.lineTo(w, y);
//       ctx.stroke();
//     }

//     // Draw corner dots
//     ctx.fillStyle = 'rgba(2, 86, 155, 0.05)';
//     for (let x = 0; x < w; x += gridSize) {
//       for (let y = 0; y < h; y += gridSize) {
//         ctx.beginPath();
//         ctx.arc(x, y, 1.5, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }
//   }

//   // Draw nodes (system architecture points)
//   function drawNodes() {
//     nodes.forEach(node => {
//       const baseOpacity = 0.15;
//       const pulseAmount = Math.sin(node.pulse) * 0.1;

//       // Core node
//       ctx.fillStyle = `rgba(2, 86, 155, ${baseOpacity + pulseAmount})`;
//       ctx.beginPath();
//       ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
//       ctx.fill();

//       // Node glow
//       ctx.strokeStyle = `rgba(84, 197, 248, ${0.08 + pulseAmount * 0.05})`;
//       ctx.lineWidth = 1.5;
//       ctx.beginPath();
//       ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
//       ctx.stroke();
//     });
//   }

//   // Draw connection lines between nodes
//   function drawConnections() {
//     for (let i = 0; i < nodes.length; i++) {
//       for (let j = i + 1; j < nodes.length; j++) {
//         const dx = nodes[i].x - nodes[j].x;
//         const dy = nodes[i].y - nodes[j].y;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 200 && dist > 0) {
//           const opacity = (1 - dist / 200) * 0.08;
//           ctx.strokeStyle = `rgba(84, 197, 248, ${opacity})`;
//           ctx.lineWidth = 0.8;
//           ctx.beginPath();
//           ctx.moveTo(nodes[i].x, nodes[i].y);
//           ctx.lineTo(nodes[j].x, nodes[j].y);
//           ctx.stroke();
//         }
//       }
//     }
//   }

//   // Draw data packets (flowing between nodes)
//   function drawPackets() {
//     dataPackets.forEach(packet => {
//       const x = packet.startX + (packet.endX - packet.startX) * packet.progress;
//       const y = packet.startY + (packet.endY - packet.startY) * packet.progress;

//       // Packet glow
//       ctx.fillStyle = 'rgba(84, 197, 248, 0.4)';
//       ctx.beginPath();
//       ctx.arc(x, y, packet.size * 2, 0, Math.PI * 2);
//       ctx.fill();

//       // Packet core
//       ctx.fillStyle = 'rgba(84, 197, 248, 0.8)';
//       ctx.beginPath();
//       ctx.arc(x, y, packet.size * 0.7, 0, Math.PI * 2);
//       ctx.fill();
//     });
//   }

//   // Optional code-snippet drift (kept ready if you want to render later)
//   function updateCodeSnippets() {
//     codeSnippets.forEach(snippet => {
//       snippet.x += snippet.vx;
//       snippet.y += snippet.vy;

//       if (snippet.x < -320) snippet.x = w + 20;
//       if (snippet.x > w + 20) snippet.x = -320;
//       if (snippet.y < -40) snippet.y = h + 20;
//       if (snippet.y > h + 20) snippet.y = -40;
//     });
//   }

//   function animate() {
//     ctx.fillStyle = '#000000';
//     ctx.fillRect(0, 0, w, h);

//     time += 1;
//     updateNodes();
//     updatePackets();
//     updateCodeSnippets();

//     drawCircuitBoard();
//     drawConnections();
//     drawNodes();
//     drawPackets();

//     requestAnimationFrame(animate);
//   }

//   animate();

//   // Fade-up observer
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(e => {
//       if (e.isIntersecting) e.target.style.animationPlayState = 'running';
//     });
//   }, { threshold: 0.1 });

//   document.querySelectorAll('.fade-up').forEach(el => {
//     el.style.animationPlayState = 'paused';
//     observer.observe(el);
//   });

//   // Smooth scroll
//   document.querySelectorAll('a[href^="#"]').forEach(a => {
//     a.addEventListener('click', e => {
//       e.preventDefault();
//       const target = document.querySelector(a.getAttribute('href'));
//       if (target) target.scrollIntoView({ behavior: 'smooth' });
//     });
//   });

//   if (window.lucide && typeof window.lucide.createIcons === 'function') {
//     lucide.createIcons();
//   }

//   // Element SDK
//   const defaultConfig = {
//     hero_subtitle: "I AM A",
//     hero_description: "Flutter Developer with 1 year of experience building responsive, scalable mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture.",
//     about_text: "Passionate Flutter Developer with experience building scalable cross-platform mobile and web applications using Flutter, GetX, GraphQL, and Clean Architecture. Focused on creating maintainable solutions, intuitive user experiences, and high-performance applications.",
//     contact_heading: "LET'S BUILD SOMETHING AMAZING",
//     background_color: "#000000",
//     surface_color: "#0a0a0a",
//     text_color: "#ffffff",
//     primary_action_color: "#ffffff",
//     secondary_action_color: "#888888",
//     font_family: "Space Grotesk",
//     font_size: 16
//   };

//   if (window.elementSdk && typeof window.elementSdk.init === 'function') {
//     window.elementSdk.init({
//       defaultConfig,
//       onConfigChange: async (config) => {
//         const heroSubtitle = document.getElementById('hero-subtitle');
//         const heroDesc = document.getElementById('hero-desc');
//         const aboutDesc = document.getElementById('about-desc');
//         const contactHeading = document.getElementById('contact-heading');

//         if (heroSubtitle) {
//           heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
//         }
//         if (heroDesc) {
//           heroDesc.textContent = config.hero_description || defaultConfig.hero_description;
//         }
//         if (aboutDesc) {
//           aboutDesc.textContent = config.about_text || defaultConfig.about_text;
//         }
//         if (contactHeading) {
//           const txt = config.contact_heading || defaultConfig.contact_heading;
//           contactHeading.innerHTML = txt.replace(/\s+/g, ' ').replace(/(SOMETHING)/, '<br>$1');
//         }

//         // Keep black background always
//         document.body.style.background = '#000000';
//         document.body.style.color = '#ffffff';
//         document.body.classList.remove('light-mode');

//         const font = config.font_family || defaultConfig.font_family;
//         document.querySelectorAll('.font-space').forEach(el => {
//           el.style.fontFamily = `${font}, sans-serif`;
//         });

//         const size = config.font_size || defaultConfig.font_size;
//         if (heroDesc) heroDesc.style.fontSize = `${size * 0.875}px`;
//         if (aboutDesc) aboutDesc.style.fontSize = `${size * 1.1}px`;
//       },
//       mapToCapabilities: (config) => ({
//         recolorables: [
//           {
//             get: () => config.background_color || defaultConfig.background_color,
//             set: (v) => {
//               config.background_color = '#000000';
//               window.elementSdk.setConfig({ background_color: '#000000' });
//             }
//           },
//           {
//             get: () => config.surface_color || defaultConfig.surface_color,
//             set: (v) => {
//               config.surface_color = v;
//               window.elementSdk.setConfig({ surface_color: v });
//             }
//           },
//           {
//             get: () => config.text_color || defaultConfig.text_color,
//             set: (v) => {
//               config.text_color = v;
//               window.elementSdk.setConfig({ text_color: v });
//             }
//           },
//           {
//             get: () => config.primary_action_color || defaultConfig.primary_action_color,
//             set: (v) => {
//               config.primary_action_color = v;
//               window.elementSdk.setConfig({ primary_action_color: v });
//             }
//           },
//           {
//             get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
//             set: (v) => {
//               config.secondary_action_color = v;
//               window.elementSdk.setConfig({ secondary_action_color: v });
//             }
//           }
//         ],
//         borderables: [],
//         fontEditable: {
//           get: () => config.font_family || defaultConfig.font_family,
//           set: (v) => {
//             config.font_family = v;
//             window.elementSdk.setConfig({ font_family: v });
//           }
//         },
//         fontSizeable: {
//           get: () => config.font_size || defaultConfig.font_size,
//           set: (v) => {
//             config.font_size = v;
//             window.elementSdk.setConfig({ font_size: v });
//           }
//         }
//       }),
//       mapToEditPanelValues: (config) => new Map([
//         ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
//         ["hero_description", config.hero_description || defaultConfig.hero_description],
//         ["about_text", config.about_text || defaultConfig.about_text],
//         ["contact_heading", config.contact_heading || defaultConfig.contact_heading]
//       ])
//     });
//   }
// });

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
let currentIndex = 0;

const cards = document.querySelectorAll(".carousel-card");
const totalCards = cards.length;

const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");
const carouselContainer = document.querySelector(".carousel-container");

function updateCarousel() {
  cards.forEach((card, i) => {
    let offset = (i - currentIndex + totalCards) % totalCards;

    if (offset > totalCards / 2) {
      offset -= totalCards;
    }

    card.classList.remove("is-active");

    card.style.transform = `
      translateX(${offset * 240}px)
      scale(${offset === 0 ? 1 : 0.85})
      rotateY(${offset * -12}deg)
    `;

    card.style.opacity = offset === 0 ? 1 : 0.6;
    card.style.zIndex = offset === 0 ? 3 : 1;

    if (offset === 0) {
      card.classList.add("is-active");
    }
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  updateCarousel();
}

nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

let autoSlide = setInterval(nextCard, 4000);

carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

carouselContainer.addEventListener("mouseleave", () => {
  autoSlide = setInterval(nextCard, 4000);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextCard();
  if (e.key === "ArrowLeft") prevCard();
});

updateCarousel();




















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