const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const oldMeta = `{/* Meta Info - Mid/Bottom Left */}
            <div className="absolute top-[45%] left-6 lg:left-12 z-20 w-[300px]">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-meta'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [50, 0, -50]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0])
                  }}
                  className="absolute top-0 left-0 w-full flex flex-col gap-6"
                >
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-900 border-b border-slate-900/10 pb-4">
                     0{proj.id} &nbsp;&nbsp;&nbsp; {proj.title}
                  </div>
                  
                  <div className="grid grid-cols-[80px_1fr] gap-y-2 text-[9px] uppercase tracking-widest font-semibold text-slate-500">
                     <div>Type</div><div className="text-slate-900">{proj.type}</div>
                     <div>Date</div><div className="text-slate-900">{proj.date}</div>
                     <div>Role</div><div className="text-slate-900">{proj.role}</div>
                  </div>
                  
                  <p className="text-[11px] text-slate-700 font-medium leading-relaxed uppercase pr-8">
                     {proj.description}
                  </p>
                  
                  <div className="grid grid-cols-[80px_1fr] text-[9px] uppercase tracking-widest font-semibold text-slate-500">
                     <span>Tools \\</span>
                     <div className="flex flex-col gap-0.5 text-slate-900">
                        {proj.tools.map(t => <span key={t}>{t}</span>)}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Links - Mid/Bottom Right */}
            <div className="absolute top-[50%] right-6 lg:right-12 z-20 flex flex-col gap-8 items-end">
               <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 flex items-center gap-2 hover:gap-4 transition-all group">
                 Open <span className="text-lg leading-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
               </button>
               <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 flex items-center gap-2 hover:gap-4 transition-all group">
                 Visit Live <span className="text-lg leading-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
               </button>
            </div>`;

const newMeta = `{/* Meta Info - Mid/Bottom Left */}
            <div className="absolute top-[40%] left-6 lg:left-12 z-20 w-[400px]">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-meta'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [50, 0, -50]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0])
                  }}
                  className="absolute top-0 left-0 w-full flex flex-col gap-10"
                >
                  <div className="grid grid-cols-[120px_1fr] text-[9px] uppercase font-bold tracking-widest text-slate-900">
                     <div className="text-slate-500">00{parseInt(proj.id)}</div>
                     <div>{proj.title}</div>
                  </div>
                  
                  <div className="grid grid-cols-[120px_1fr] gap-y-1.5 text-[9px] uppercase tracking-widest font-bold text-slate-500">
                     <div>Type</div><div className="text-slate-900">{proj.type}</div>
                     <div>Date</div><div className="text-slate-900">{proj.date}</div>
                     <div>Role</div><div className="text-slate-900">{proj.role}</div>
                  </div>
                  
                  <p className="text-[9px] text-slate-900 font-bold leading-[1.6] uppercase pr-12 tracking-widest">
                     {proj.description}
                  </p>
                  
                  <div className="grid grid-cols-[120px_1fr] text-[9px] uppercase tracking-widest font-bold text-slate-500">
                     <div>Tools</div>
                     <div className="flex flex-col gap-1 text-slate-900">
                        {proj.tools.map(t => <span key={t}>{t}</span>)}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Links - Mid/Bottom Right */}
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

code = code.replace(oldMeta, newMeta);
fs.writeFileSync('src/App.tsx', code);
console.log('patched meta');
