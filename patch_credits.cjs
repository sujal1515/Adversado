const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldCredits = `{/* Bottom Credits */}
            <div className="absolute bottom-6 left-6 lg:left-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 z-20">
               2026 ©
            </div>
            <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 z-20">
               Fronting Dev
            </div>`;

const newCredits = `{/* Bottom Credits */}
            <div className="absolute bottom-6 left-6 lg:left-12 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 z-20">
               20 26 ©
            </div>
            <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 z-20">
               FRONTING DEV
            </div>`;

code = code.replace(oldCredits, newCredits);
fs.writeFileSync('src/App.tsx', code);
console.log('patched credits');
