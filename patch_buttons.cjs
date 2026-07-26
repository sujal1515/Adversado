const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldButtons = `{/* Right Links - Mid/Bottom Right */}
            <div className="absolute top-[45%] right-6 lg:right-12 z-20 flex flex-col gap-24 items-end">
               <button className="flex items-center gap-6 group hover:gap-8 transition-all duration-300">
                 <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-900">Open</span>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 <div className="w-12 h-[1px] bg-slate-900"></div>
               </button>
               <button className="flex items-center gap-6 group hover:gap-8 transition-all duration-300">
                 <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-900">Visit Live</span>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 <div className="w-12 h-[1px] bg-slate-900"></div>
               </button>
            </div>`;

const newButtons = `{/* Right Links - Mid/Bottom Right */}
            <div className="absolute top-[45%] right-6 lg:right-12 z-20 flex flex-col gap-24 items-end">
               <button className="flex items-center gap-10 group hover:gap-12 transition-all duration-300">
                 <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-900">OPEN</span>
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 <div className="w-16 h-[1px] bg-slate-900"></div>
               </button>
               <button className="flex items-center gap-10 group hover:gap-12 transition-all duration-300">
                 <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-900">VISIT LIVE</span>
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 <div className="w-16 h-[1px] bg-slate-900"></div>
               </button>
            </div>`;

code = code.replace(oldButtons, newButtons);
fs.writeFileSync('src/App.tsx', code);
console.log('patched buttons');
