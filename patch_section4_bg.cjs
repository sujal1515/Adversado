const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\{\/\* Project-specific dynamic background \*\/\}[\s\S]*?className="absolute inset-0 pointer-events-none z-\[-1\]" \s*\/>/m;

code = code.replace(regex, '');

fs.writeFileSync('src/App.tsx', code);
console.log('patched section4 bg');
