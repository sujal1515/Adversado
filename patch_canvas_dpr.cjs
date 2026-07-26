const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '      canvas.width = width * window.devicePixelRatio;',
  '      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);\n      canvas.width = width * dpr;'
);
code = code.replace(
  '      canvas.height = height * window.devicePixelRatio;',
  '      canvas.height = height * dpr;'
);
code = code.replace(
  '      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);',
  '      ctx.scale(dpr, dpr);'
);

code = code.replace(
  'const numParticles = 4000;',
  'const numParticles = 1500;'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched canvas dpr and particle count');
