const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /\["#6b5b69", "#204a87", "#646d7e", "#1e293b", "#b45a1f"\]/g,
  '["#6b5b69", "#204a87", "#646d7e", "#4a3b32", "#c46a29"]'
);

// Also remove the hardcoded text-slate-800 from huge title
code = code.replace(
  'text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-slate-800',
  'text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.9]'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched colors');
