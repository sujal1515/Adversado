const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'bg-white/50 backdrop-blur-3xl',
  ''
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched s4 bg');
