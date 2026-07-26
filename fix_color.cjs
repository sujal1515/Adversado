const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace the complicated color interpolation with just using the base color since we dispersed them anyway.
const oldColorLogic = `           let currR = p.r1;
           let currG = p.g1;
           let currB = p.b1;
           
           if (currentProgress > 0) {
               if (currentProgress <= 0.25) {
                   const colorT = Math.pow(currentProgress / 0.25, 2);
                   currR = p.r1 * (1 - colorT) + p.r2 * colorT;
                   currG = p.g1 * (1 - colorT) + p.g2 * colorT;
                   currB = p.b1 * (1 - colorT) + p.b2 * colorT;
               } else if (currentProgress <= 0.50) {
                   const colorT = Math.pow((currentProgress - 0.25) / 0.25, 2);
                   currR = p.r2 * (1 - colorT) + p.r3 * colorT;
                   currG = p.g2 * (1 - colorT) + p.g3 * colorT;
                   currB = p.b2 * (1 - colorT) + p.b3 * colorT;
               } else if (currentProgress <= 0.82) {
                   currR = p.r3;
                   currG = p.g3;
                   currB = p.b3;
               } else {
                   const colorT = Math.min(Math.pow((currentProgress - 0.82) / 0.18, 2), 1);
                   currR = p.r3 * (1 - colorT) + p.r1 * colorT; 
                   currG = p.g3 * (1 - colorT) + p.g1 * colorT;
                   currB = p.b3 * (1 - colorT) + p.b1 * colorT;
               }
           }
           
           let currentSize = p.baseSize;
           ctx.fillStyle = \`rgba(\${Math.floor(currR)}, \${Math.floor(currG)}, \${Math.floor(currB)}, \${p.a1})\`;`;

const newColorLogic = `           let currentSize = p.baseSize;
           ctx.fillStyle = p.color;`;

code = code.replace(oldColorLogic, newColorLogic);

fs.writeFileSync('src/App.tsx', code);
console.log('fixed color logic');
