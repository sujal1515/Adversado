const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  '       if (currentProgress > 0.4) { ctx.clearRect(0, 0, width, height); animationFrameId = requestAnimationFrame(render); return; }',
  '       const currentProgress = scrollProgress.get();\n       if (currentProgress > 0.4) { ctx.clearRect(0, 0, width, height); animationFrameId = requestAnimationFrame(render); return; }'
);

code = code.replace(
  "       // Extract current scroll progress passed via a global ref or state\n       const currentProgress = scrollProgress.get();",
  "       // Extract current scroll progress passed via a global ref or state"
);

fs.writeFileSync('src/App.tsx', code);
console.log('fixed initialization error');
