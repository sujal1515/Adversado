const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'className="w-full h-full object-cover object-center transition-all duration-700 sepia-[0.3]"',
  'className="w-full h-full object-cover object-center transition-all duration-700 grayscale contrast-125 opacity-90"'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched images fx');
