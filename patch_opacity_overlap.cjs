const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Title
code = code.replace(
  /opacity: useTransform\(rawScroll, \[0.45 \+ \(i-0.4\)\*0.1, 0.45 \+ i\*0.1, 0.45 \+ \(i\+0.4\)\*0.1\], \[0, 1, 0\]\),/g,
  'opacity: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [0, 1, 0]),'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched opacity overlap');
