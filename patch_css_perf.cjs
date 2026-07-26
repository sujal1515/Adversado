const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  'backdrop-filter: blur(4px);',
  '/* backdrop-filter: blur(4px); */'
);
code = code.replace(
  '-webkit-backdrop-filter: blur(4px);',
  '/* -webkit-backdrop-filter: blur(4px); */'
);

fs.writeFileSync('src/index.css', code);
console.log('patched css performance');
