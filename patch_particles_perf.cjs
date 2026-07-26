const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'const numParticles = 10000;',
  'const numParticles = 4000;'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched performance');
