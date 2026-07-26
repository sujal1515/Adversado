const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '{proj.id} &nbsp;&nbsp;&nbsp; {proj.title}',
  '0{proj.id} &nbsp;&nbsp;&nbsp; {proj.title}'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched small title');
