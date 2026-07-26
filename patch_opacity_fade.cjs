const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'const particlesOpacity = useTransform(scrollYProgress, [0.4, 0.48, 1], [1, 0, 0]);',
  'const particlesOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched opacity fade');
