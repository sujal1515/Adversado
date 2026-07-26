const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  'className="fixed inset-0 m-auto w-80 h-80 flex items-center justify-center pointer-events-none z-10"',
  'className="fixed inset-0 m-auto w-80 h-80 flex items-center justify-center pointer-events-none z-[5]"'
);

// Ensure the main scrolling content container is higher than the asterisk
code = code.replace(
  '<div className="relative z-10 w-full">',
  '<div className="relative z-10 w-full">'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched z index');
