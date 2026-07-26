const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// The original line:
// const asteriskX = useTransform(rawScroll, kf, ["0vw", "0vw", "-25vw", "-30vw", "-35vw", "-25vw", "0vw", "0vw"]);
// Change to put it on the right side for the last few sections:
code = code.replace(
  'const asteriskX = useTransform(rawScroll, kf, ["0vw", "0vw", "-25vw", "-30vw", "-35vw", "-25vw", "0vw", "0vw"]);',
  'const asteriskX = useTransform(rawScroll, kf, ["0vw", "0vw", "-25vw", "-30vw", "25vw", "35vw", "0vw", "0vw"]);'
);
code = code.replace(
  'const asteriskY = useTransform(rawScroll, kf, ["0vh", "0vh", "5vh", "25vh", "-5vh", "-15vh", "15vh", "0vh"]);',
  'const asteriskY = useTransform(rawScroll, kf, ["0vh", "0vh", "5vh", "25vh", "-25vh", "0vh", "15vh", "0vh"]);'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched asterisk position');
