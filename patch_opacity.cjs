const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'const asteriskOpacity = useTransform(rawScroll, kf, [0.6, 0.6, 0.1, 0.4, 0.1, 0.4, 0.4, 0.6]);',
  'const asteriskOpacity = useTransform(rawScroll, kf, [0.8, 0.8, 0.6, 0.9, 0.6, 0.9, 0.7, 0.8]);'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched opacity');
