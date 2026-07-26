const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Title size
code = code.replace(
  'className="text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase leading-[0.85]">{proj.title.split(\' \')[0]}<br/>{proj.title.split(\' \').slice(1).join(\' \')}</h1>',
  'className="text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.9] text-slate-800">{proj.title.split(\' \')[0]}<br/>{proj.title.split(\' \').slice(1).join(\' \')}</h1>'
);

// Remove the color override from huge title and index since we just hardcoded text-slate-800
// Wait, the color in motion style is:
// color: useTransform(rawScroll, [0.45 + (i-0.1)*0.1, 0.45 + i*0.1, 0.45 + (i+0.1)*0.1], ["#000", ["#6b5b69", "#204a87", "#646d7e", "#1e293b", "#b45a1f"][i], "#000"])
// I'll keep the color transform but use slightly muted/dark colors for the text.

fs.writeFileSync('src/App.tsx', code);
console.log('patched huge');
