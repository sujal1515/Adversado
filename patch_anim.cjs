const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `  // Asterisk scatter animations for Section 4 (Extended 3D Transitions)
  const bar1X = useTransform(rawScroll, kf, [0, 800, 0, 0, -500, 150, -100, 0]);
  const bar1Y = useTransform(rawScroll, kf, [0, -500, 120, 0, 800, -100, 0, 0]);
  const bar1Z = useTransform(rawScroll, kf, [0, 400, 0, 0, -1000, 100, 0, 0]);
  const bar1RotZ = useTransform(rawScroll, kf, [0, 45, 90, 90, 90, 90, 45, 180]);
  const bar1RotX = useTransform(rawScroll, kf, [0, 180, 0, 0, 90, 45, 0, 0]);
  const bar1RotY = useTransform(rawScroll, kf, [0, 90, 0, 0, 90, 0, 0, 0]);

  const bar2X = useTransform(rawScroll, kf, [0, -800, -100, 0, 600, -150, 0, 0]);
  const bar2Y = useTransform(rawScroll, kf, [0, -200, -60, 0, -600, -100, 0, 0]);
  const bar2Z = useTransform(rawScroll, kf, [0, -600, 0, 0, -800, -100, 0, 0]);
  const bar2RotZ = useTransform(rawScroll, kf, [60, 120, -30, 0, 180, 180, 45, 240]);
  const bar2RotX = useTransform(rawScroll, kf, [0, 90, 0, 0, 180, 0, 0, 0]);
  const bar2RotY = useTransform(rawScroll, kf, [0, 180, 0, 0, 0, 45, 0, 0]);

  const bar3X = useTransform(rawScroll, kf, [0, 200, 100, 0, 0, 0, 100, 0]);
  const bar3Y = useTransform(rawScroll, kf, [0, 1000, -60, 0, 0, 150, 0, 0]);
  const bar3Z = useTransform(rawScroll, kf, [0, 200, 0, 200, -1500, 200, 0, 0]);
  const bar3RotZ = useTransform(rawScroll, kf, [120, 180, 30, 45, 0, -45, 45, 300]);
  const bar3RotX = useTransform(rawScroll, kf, [0, 45, 0, 90, 270, -45, 0, 0]);
  const bar3RotY = useTransform(rawScroll, kf, [0, 45, 0, 0, 180, 0, 0, 0]);`;

const newStr = `  // Asterisk scatter animations for Section 4 (Extended 3D Transitions)
  const bar1X = useTransform(rawScroll, kf, [0, 0, 800, 0, -500, 150, -100, 0]);
  const bar1Y = useTransform(rawScroll, kf, [0, 0, -500, 120, 800, -100, 0, 0]);
  const bar1Z = useTransform(rawScroll, kf, [0, 0, 400, 0, -1000, 100, 0, 0]);
  const bar1RotZ = useTransform(rawScroll, kf, [0, 0, 45, 90, 90, 90, 45, 180]);
  const bar1RotX = useTransform(rawScroll, kf, [0, 0, 180, 0, 90, 45, 0, 0]);
  const bar1RotY = useTransform(rawScroll, kf, [0, 0, 90, 0, 90, 0, 0, 0]);

  const bar2X = useTransform(rawScroll, kf, [0, 0, -800, -100, 600, -150, 0, 0]);
  const bar2Y = useTransform(rawScroll, kf, [0, 0, -200, -60, -600, -100, 0, 0]);
  const bar2Z = useTransform(rawScroll, kf, [0, 0, -600, 0, -800, -100, 0, 0]);
  const bar2RotZ = useTransform(rawScroll, kf, [60, 60, 120, -30, 180, 180, 45, 240]);
  const bar2RotX = useTransform(rawScroll, kf, [0, 0, 90, 0, 180, 0, 0, 0]);
  const bar2RotY = useTransform(rawScroll, kf, [0, 0, 180, 0, 0, 45, 0, 0]);

  const bar3X = useTransform(rawScroll, kf, [0, 0, 200, 100, 0, 0, 100, 0]);
  const bar3Y = useTransform(rawScroll, kf, [0, 0, 1000, -60, 0, 150, 0, 0]);
  const bar3Z = useTransform(rawScroll, kf, [0, 0, 200, 0, -1500, 200, 0, 0]);
  const bar3RotZ = useTransform(rawScroll, kf, [120, 120, 180, 30, 0, -45, 45, 300]);
  const bar3RotX = useTransform(rawScroll, kf, [0, 0, 45, 0, 270, -45, 0, 0]);
  const bar3RotY = useTransform(rawScroll, kf, [0, 0, 45, 0, 180, 0, 0, 0]);`;

code = code.replace(targetStr, newStr);

fs.writeFileSync('src/App.tsx', code);
console.log('patched animations');
