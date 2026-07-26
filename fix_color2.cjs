const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /let currR = p\.r1;[\s\S]*?ctx\.fillStyle = `rgba\(\$\{Math\.floor\(currR\)\}, \$\{Math\.floor\(currG\)\}, \$\{Math\.floor\(currB\)\}, \$\{p\.a1\}\)`;/s;
code = code.replace(regex, 'let currentSize = p.baseSize; ctx.fillStyle = p.color;');

fs.writeFileSync('src/App.tsx', code);
console.log('fixed color logic again');
