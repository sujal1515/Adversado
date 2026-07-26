const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/grid-cols-\[120px_1fr\]/g, 'grid-cols-[140px_1fr]');
code = code.replace(/text-\[9px\]/g, 'text-[10px]');
code = code.replace(/00\{parseInt\(proj\.id\)\}/g, '00{parseInt(proj.id)}');

fs.writeFileSync('src/App.tsx', code);
console.log('patched meta grid');
