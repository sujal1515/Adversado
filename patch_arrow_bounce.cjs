const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'className="text-slate-600 animate-bounce"',
  'className="text-slate-600"'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched arrow bounce');
