const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '       if (currentProgress > 0.3) { animationFrameId = requestAnimationFrame(render); return; }',
  '       if (currentProgress > 0.4) { ctx.clearRect(0, 0, width, height); animationFrameId = requestAnimationFrame(render); return; }'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched render clear');
