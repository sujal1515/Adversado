const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace('className="relative w-full h-[700vh]', 'className="relative w-full h-[800vh]');

fs.writeFileSync('src/App.tsx', code);
console.log('patched container height');
