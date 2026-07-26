const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove 3D Cube Shape and Anemone Shape setup logic to save space and simplify
code = code.replace(
  /\/\/ --- 3D Cube Shape for Manifesto \(Section 2\).*?\/\/ Colors \(Glowing Purple & White cores for Section 1\)/s,
  '// Colors (Glowing Purple & White cores for Section 1)'
);

// 2. Remove other color setups
code = code.replace(
  /\/\/ Colors \(Vibrant Neon Orange\/Gold for Section 2\).*?color: `rgba\(\$\{r1\}, \$\{g1\}, \$\{b1\}, \$\{alpha\}\)`/s,
  'color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})`'
);

// 3. Remove variables we don't need from pushing
code = code.replace(
  /modelX3D, modelY3D, modelZ3D,\s*ribbedX3D, ribbedY3D, ribbedZ3D,/,
  ''
);

code = code.replace(
  /r2, g2, b2, a2: alpha,\s*r3, g3, b3, a3: alpha,/,
  ''
);

// 4. Update the interpolation logic
const interpolationLogic = `
           if (currentProgress <= 0.25) {
               // Hero -> Manifesto (Star to Torus)
               const stagger = (idx / 10000) * 0.3; 
               let tRaw = Math.min(Math.max((currentProgress * 4 - stagger) / 0.8, 0), 1);
               // cubic easing out
               const t = 1 - Math.pow(1 - tRaw, 3);
               
               targetShapeX = rotatedStarX * (1 - t) + sx * t;
               targetShapeY = rotatedStarY * (1 - t) + sy * t;
           } else if (currentProgress <= 0.50) {
               // Manifesto -> Excellence (Torus to Anemone)
               const t = Math.min(Math.max((currentProgress - 0.25) * 4, 0), 1);
               const easeT = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
               
               const rotateX2 = time * 0.05 + Math.PI / 5;
               const rotateY2 = time * 0.08;
               
               const sy2 = p.ribbedY3D * Math.cos(rotateX2) - p.ribbedZ3D * Math.sin(rotateX2);
               const sz2 = p.ribbedY3D * Math.sin(rotateX2) + p.ribbedZ3D * Math.cos(rotateX2);
               const sx2 = p.ribbedX3D * Math.cos(rotateY2) + sz2 * Math.sin(rotateY2);
               
               targetShapeX = sx * (1 - easeT) + sx2 * easeT;
               targetShapeY = sy * (1 - easeT) + sy2 * easeT;
           } else if (currentProgress <= 0.82) {
               // Hold Anemone during Section 3
               const rotateX2 = time * 0.05 + Math.PI / 5;
               const rotateY2 = time * 0.08;
               
               const sy2 = p.ribbedY3D * Math.cos(rotateX2) - p.ribbedZ3D * Math.sin(rotateX2);
               const sz2 = p.ribbedY3D * Math.sin(rotateX2) + p.ribbedZ3D * Math.cos(rotateX2);
               const sx2 = p.ribbedX3D * Math.cos(rotateY2) + sz2 * Math.sin(rotateY2);
               
               targetShapeX = sx2;
               targetShapeY = sy2;
           }`;

const newInterpolationLogic = `
           // Start dispersing when currentProgress > 0.05
           const disperseStart = 0.05;
           const disperseEnd = 0.15;
           let t = 0;
           if (currentProgress > disperseStart) {
               t = Math.min((currentProgress - disperseStart) / (disperseEnd - disperseStart), 1);
               // Add some stagger
               const stagger = (idx / 10000) * 0.2;
               t = Math.min(Math.max((t - stagger) / (1 - 0.2), 0), 1);
               t = t * t * t; // ease in cubic
           }
           
           // Scatter targets are far away from center (initX and initY were randomized widely)
           targetShapeX = rotatedStarX * (1 - t) + p.initX * t * 1.5;
           targetShapeY = rotatedStarY * (1 - t) + p.initY * t * 1.5;
`;

code = code.replace(interpolationLogic, newInterpolationLogic);

// We also need to fix `sx` and `sy` which might be removed.
code = code.replace(
  /\/\/ Calculate 3D Torus rotation based on time \(constant spin\).*?const sx = p.modelX3D \* Math.cos\(rotateY\) \+ sz \* Math.sin\(rotateY\);/s,
  ''
);

// We should also modify the render condition
code = code.replace(
  '{scrollProgress < 0.5 && <StarParticlesCanvas scrollProgress={scrollProgress} />}',
  '{scrollProgress < 0.25 && <StarParticlesCanvas scrollProgress={scrollProgress} />}'
);

// We need to fix the colors
code = code.replace(
  'ctx.fillStyle = currentProgress <= 0.25 ? p.color : (currentProgress <= 0.50 ? `rgba(${p.r2}, ${p.g2}, ${p.b2}, ${p.a2})` : `rgba(${p.r3}, ${p.g3}, ${p.b3}, ${p.a3})`);',
  'ctx.fillStyle = p.color;'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched StarParticlesCanvas logic');
