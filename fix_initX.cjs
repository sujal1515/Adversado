const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '       particles.push({ starX, starY, x: initX, y: initY, initX, initY, vx: 0, vy: 0, baseSize: size, r1, g1, b1, a1: alpha, color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})` });',
  '       const initX = starX + (Math.random() - 0.5) * 4000;\n       const initY = starY + (Math.random() - 0.5) * 4000;\n       particles.push({ starX, starY, x: initX, y: initY, initX, initY, vx: 0, vy: 0, baseSize: size, r1, g1, b1, a1: alpha, color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})` });'
);

fs.writeFileSync('src/App.tsx', code);
