const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /<div className="absolute inset-0 opacity-\[0\.25\] mix-blend-overlay pointer-events-none z-10">[\s\S]*?<\/div>/,
  '{/* Noise filter removed for performance */}'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched noise filter');
