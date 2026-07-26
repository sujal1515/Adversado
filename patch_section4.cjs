const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\{\/\* Section 4: Projects \(Sticky Scroll\) \*\/\}[\s\S]*?\{\/\* Persistent Asterisk Container \*\/\}/;

const newSection4 = `{/* Section 4: Projects (Sticky Scroll) */}
        <section className="h-[500vh] w-full relative z-20" id="projects-section">
          {/* Project-specific dynamic background */}
          <motion.div 
            style={{
              backgroundColor: useTransform(rawScroll, [0.4, 0.5, 0.6, 0.7, 0.8], ["#EAE7E4", "#E4EBF0", "#EBECEE", "#F8FAFC", "#F5EEE9"])
            }}
            className="absolute inset-0 pointer-events-none z-[-1]" 
          />
          <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-auto flex items-center justify-center">
            
            {/* HUGE TITLE - Top Left */}
            <div className="absolute top-8 left-6 lg:top-12 lg:left-12 z-20">
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.id + '-title'}
                  style={{
                    y: useTransform(rawScroll, [0.45 + (i-0.5)*0.1, 0.45 + i*0.1, 0.45 + (i+0.5)*0.1], [150, 0, -150]),
                    opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0]),
                    color: useTransform(rawScroll, [0.45 + (i-0.1)*0.1, 0.45 + i*0.1, 0.45 + (i+0.1)*0.1], ["#000", ["#6b5b69", "#204a87", "#646d7e", "#1e293b", "#b45a1f"][i], "#000"])
                  }}
                  className="absolute top-0 left-0 whitespace-nowrap"
                >
                  <h1 className="text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85]">{proj.title.split(' ')[0]}<br/>{proj.title.split(' ').slice(1).join(' ')}</h1>
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
                    opacity: useTransform(rawScroll, [0.45 + (i-0.4)*0.1, 0.45 + i*0.1, 0.45 + (i+0.4)*0.1], [0, 1, 0]),
                    color: useTransform(rawScroll, [0.45 + (i-0.1)*0.1, 0.45 + i*0.1, 0.45 + (i+0.1)*0.1], ["#000", ["#6b5b69", "#204a87", "#646d7e", "#1e293b", "#b45a1f"][i], "#000"])
                  }}
                  className="absolute top-0 right-0"
                >
                  <div className="text-6xl lg:text-8xl font-bold">{proj.id}</div>
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
                    heights.push("50vh");
                    widths.push("55vw");
                    ys.push("0vh");
                    opacities.push(1);
                  } else if (dist > 0) {
                    // Below active
                    heights.push("10vh");
                    widths.push("30vw");
                    ys.push(\`\${40 + dist * 12}vh\`);
                    opacities.push(1 - dist * 0.2);
                  } else {
                    // Above active
                    heights.push("10vh");
                    widths.push("30vw");
                    ys.push(\`\${-40 + dist * 12}vh\`);
                    opacities.push(1 + dist * 0.2);
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
                    className="absolute overflow-hidden shadow-2xl origin-center flex items-center justify-center bg-black"
                  >
                    <motion.img 
                      src={proj.image} 
                      style={{
                        scale: useTransform(rawScroll, keyframes, keyframes.map((_, idx) => idx === i ? 1 : 1.3)),
                        opacity: useTransform(rawScroll, keyframes, keyframes.map((_, idx) => idx === i ? 1 : 0.6))
                      }}
                      className="w-full h-full object-cover object-center transition-all duration-700" 
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Meta Info - Mid/Bottom Left */}
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
                     {proj.id} &nbsp;&nbsp;&nbsp; {proj.title}
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
            </div>
            
            {/* Bottom Credits */}
            <div className="absolute bottom-6 left-6 lg:left-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 z-20">
               2026 ©
            </div>
            <div className="absolute bottom-6 right-6 lg:right-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 z-20">
               Fronting Dev
            </div>
          </div>
        </section>
      </div>
      {/* Persistent Asterisk Container */}`;

code = code.replace(regex, newSection4);
fs.writeFileSync('src/App.tsx', code);
console.log('patched section4 layout');
