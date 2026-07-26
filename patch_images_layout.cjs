const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /for\(let j=0; j<5; j\+\+\) \{[\s\S]*?\}\s*return \(/,
  `for(let j=0; j<5; j++) {
                  const dist = i - j;
                  if (dist === 0) {
                    heights.push("55vh");
                    widths.push("60vw");
                    ys.push("0vh");
                    opacities.push(1);
                  } else if (dist > 0) {
                    // Below active
                    heights.push("10vh");
                    widths.push("40vw");
                    ys.push(\`\${35 + dist * 12}vh\`);
                    opacities.push(1 - dist * 0.2);
                  } else {
                    // Above active
                    heights.push("10vh");
                    widths.push("40vw");
                    ys.push(\`\${-35 + dist * 12}vh\`);
                    opacities.push(1 + dist * 0.2);
                  }
                }
                
                return (`
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched images layout');
