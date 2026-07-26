const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\{\/\* Section 4: Projects \(Sticky Scroll\) \*\/\}[\s\S]*?\{\/\* Persistent Asterisk Container \*\/\}/;

const newSection4 = `{/* Section 4: Projects (Sticky Scroll) */}
        <section className="h-[500vh] w-full relative z-20" id="projects-section">
          <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-auto flex items-center justify-center">
            
            {/* HUGE TITLE - Top Left */}
            <div className="absolute top-8 left-6 lg:top-12 lg:left-12 z-20">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-title'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [150, 0, -150]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [0, 1, 0]),
                    color: useTransform(rawScroll, [0.45 + (i-0.1)*0.1, 0.45 + i*0.1, 0.45 + (i+0.1)*0.1], ["#000", ["#6b5b69", "#204a87", "#646d7e", "#4a3b32", "#c46a29"][i], "#000"])
                  }}
                  className="absolute top-0 left-0 whitespace-nowrap"
                >
                  <h1 className="text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.95] text-slate-700 mix-blend-difference">{proj.title.split(' ')[0]}<br/>{proj.title.split(' ').slice(1).join(' ')}</h1>
                </motion.div>
              ))}
            </div>

            {/* HUGE INDEX - Top Right */}
            <div className="absolute top-8 right-6 lg:top-12 lg:right-12 z-20">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-index'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [100, 0, -100]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [0, 1, 0]),
                    color: useTransform(rawScroll, [0.45 + (i-0.1)*0.1, 0.45 + i*0.1, 0.45 + (i+0.1)*0.1], ["#000", ["#6b5b69", "#204a87", "#646d7e", "#4a3b32", "#c46a29"][i], "#000"])
                  }}
                  className="absolute top-0 right-0"
                >
                  <div className="text-5xl lg:text-7xl font-bold text-slate-700 mix-blend-difference">{proj.id}</div>
                </motion.div>
              ))}
            </div>

            {/* Center Images Carousel */}
            <div className="absolute inset-0 flex items-center justify-center z-10 perspective-[1200px]">
              {projects.map((proj, i) => {
                const keyframes = [0.45, 0.55, 0.65, 0.75, 0.85];
                let heights = [];
                let ys = [];
                let opacities = [];
                let widths = [];
                
                for(let j=0; j<5; j++) {
                  const dist = i - j;
                  if (dist === 0) {
                    heights.push("55vh");
                    widths.push("55vw");
                    ys.push("0vh");
                    opacities.push(1);
                  } else if (dist > 0) {
                    // Below active
                    heights.push("10vh");
                    widths.push("30vw");
                    ys.push(\`\${35 + dist * 12}vh\`);
                    opacities.push(1 - dist * 0.3);
                  } else {
                    // Above active
                    heights.push("10vh");
                    widths.push("30vw");
                    ys.push(\`\${-35 + dist * 12}vh\`);
                    opacities.push(1 + dist * 0.3);
                  }
                }
                
                return (
                  <motion.div
                    key={proj.id + '-img'}
                    style={{ 
                      y: useTransform(rawScroll, keyframes, ys), 
                      opacity: useTransform(rawScroll, keyframes, opacities), 
                      height: useTransform(rawScroll, keyframes, heights),
                      width: useTransform(rawScroll, keyframes, widths)
                    }}
                    className="absolute overflow-hidden flex items-center justify-center bg-black/5"
                  >
                    <motion.img 
                      src={proj.image} 
                      style={{
                        scale: useTransform(rawScroll, keyframes, keyframes.map((_, idx) => idx === i ? 1 : 1.3)),
                        opacity: useTransform(rawScroll, keyframes, keyframes.map((_, idx) => idx === i ? 1 : 0.6))
                      }}
                      className="w-full h-full object-cover object-center transition-all duration-700 sepia-[0.3]" 
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Meta Info - Mid/Bottom Left */}
            <div className="absolute top-[35%] left-6 lg:left-12 z-20 w-[400px]">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-meta'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [50, 0, -50]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0])
                  }}
                  className="absolute top-0 left-0 w-full flex flex-col gap-10"
                >
                  <div className="grid grid-cols-[140px_1fr] text-[10px] uppercase font-bold tracking-widest text-slate-800">
                     <div className="text-slate-500">00{parseInt(proj.id)}</div>
                     <div>{proj.title}</div>
                  </div>
                  
                  <div className="grid grid-cols-[140px_1fr] gap-y-1.5 text-[9px] uppercase tracking-widest font-bold text-slate-500">
                     <div>Type</div><div className="text-slate-800">{proj.type}</div>
                     <div>Date</div><div className="text-slate-800">{proj.date}</div>
                     <div>Role</div><div className="text-slate-800">{proj.role}</div>
                  </div>
                  
                  <p className="text-[10px] text-slate-800 font-bold leading-[1.6] uppercase pr-12 tracking-widest">
                     {proj.description}
                  </p>
                  
                  <div className="grid grid-cols-[140px_1fr] text-[9px] uppercase tracking-widest font-bold text-slate-500">
                     <div>Tools</div>
                     <div className="flex flex-col gap-1 text-slate-800">
                        {proj.tools.map(t => <span key={t}>{t}</span>)}
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Links - Mid/Bottom Right */}
            <div className="absolute top-[45%] right-6 lg:right-12 z-20 flex flex-col gap-24 items-end">
               {projects.map((proj, i) => (
                 <motion.div
                    key={proj.id + '-links'}
                    style={{
                      y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [50, 0, -50]),
                      opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0])
                    }}
                    className="absolute top-0 right-0 flex flex-col gap-24 items-end"
                 >
                   <button className="flex items-center gap-10 group hover:gap-12 transition-all duration-300">
                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-800">OPEN</span>
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     <div className="w-16 h-[1px] bg-slate-800"></div>
                   </button>
                   <button className="flex items-center gap-10 group hover:gap-12 transition-all duration-300">
                     <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-800">VISIT LIVE</span>
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                     <div className="w-16 h-[1px] bg-slate-800"></div>
                   </button>
                 </motion.div>
               ))}
            </div>
            
            {/* Bottom Credits */}
            <div className="absolute bottom-6 left-6 lg:left-12 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 z-20">
               20 26 ©
            </div>
            <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 z-20">
               FRONTING DEV
            </div>
          </div>
        </section>
      </div>
      {/* Persistent Asterisk Container */}`;

code = code.replace(regex, newSection4);
fs.writeFileSync('src/App.tsx', code);
console.log('patched section 4 fully');
