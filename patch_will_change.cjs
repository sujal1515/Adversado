const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(
  '.glass-asterisk {\n    position: relative;',
  '.glass-asterisk {\n    position: relative;\n    will-change: transform;'
);

code = code.replace(
  '.asterisk-bar {\n    position: absolute;',
  '.asterisk-bar {\n    position: absolute;\n    will-change: transform;'
);

code = code.replace(
  '.bar-face {\n    position: absolute;',
  '.bar-face {\n    position: absolute;\n    will-change: transform;'
);

fs.writeFileSync('src/index.css', code);
console.log('added will-change');
