const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\{\/\* Center Images Carousel \*\/\}/;

const arrowUp = `{/* Scroll indicator arrow */}
            <div className="absolute top-[18%] left-1/2 -translate-x-1/2 z-20">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 animate-bounce"><path d="M18 15l-6-6-6 6"/></svg>
            </div>
            
            {/* Center Images Carousel */}`;

code = code.replace(regex, arrowUp);
fs.writeFileSync('src/App.tsx', code);
console.log('patched arrow up');
