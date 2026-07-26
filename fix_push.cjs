const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// I might have removed 'particles.push({' by mistake.
code = code.replace(
  'color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})`\n       });',
  'particles.push({ starX, starY, x: initX, y: initY, initX, initY, vx: 0, vy: 0, baseSize: size, r1, g1, b1, a1: alpha, color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})` });'
);
fs.writeFileSync('src/App.tsx', code);
