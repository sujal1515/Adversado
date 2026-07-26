const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `  const asteriskX = useTransform(rawScroll, kf, ["0vw", "0vw", "50vw", "-20vw", "-50vw", "10vw", "-10vw", "0vw"]);
  const asteriskY = useTransform(rawScroll, kf, ["0vh", "0vh", "-30vh", "40vh", "10vh", "-40vh", "20vh", "0vh"]);
  const asteriskRotate = useTransform(rawScroll, kf, [0, 0, 180, 270, 360, 450, 540, 720]);
  const asteriskScale = useTransform(rawScroll, kf, [1, 1, 0.5, 1.2, 0.4, 1.5, 0.8, 1]);
  const asteriskOpacity = useTransform(rawScroll, kf, [0.8, 0.8, 0.6, 0.9, 0.6, 0.9, 0.7, 0.8]);

  const bgOpacity = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], [0, 1, 1, 0]);
  const headerColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#0f172a", "#f8fafc", "#f8fafc", "#0f172a"]);
  const navItemColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#475569", "#cbd5e1", "#cbd5e1", "#475569"]);

  // Scroll animations for Section 4
  const section4Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.8, 1], [150, 0]);
  const section4Scale = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Asterisk scatter animations for Section 4 (Extended 3D Transitions)
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

const replacementStr = `  const asteriskX = useTransform(rawScroll, kf, ["0vw", "5vw", "25vw", "-10vw", "-35vw", "10vw", "0vw", "0vw"]);
  const asteriskY = useTransform(rawScroll, kf, ["0vh", "-10vh", "5vh", "25vh", "-15vh", "-25vh", "15vh", "0vh"]);
  const asteriskRotate = useTransform(rawScroll, kf, [0, 45, 120, 240, 360, 480, 600, 720]);
  const asteriskScale = useTransform(rawScroll, kf, [1, 0.9, 0.7, 1.1, 0.6, 1.2, 0.9, 1.1]);
  const asteriskOpacity = useTransform(rawScroll, kf, [0.8, 0.8, 0.6, 0.9, 0.6, 0.9, 0.8, 0.9]);

  const bgOpacity = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], [0, 1, 1, 0]);
  const headerColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#0f172a", "#f8fafc", "#f8fafc", "#0f172a"]);
  const navItemColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#475569", "#cbd5e1", "#cbd5e1", "#475569"]);

  // Scroll animations for Section 4
  const section4Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.8, 1], [150, 0]);
  const section4Scale = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Asterisk scatter animations
  // Pose 0 (0): The Asterisk (Default)
  // Pose 1 (0.15): Transitioning out of Asterisk
  // Pose 2 (0.25): Floating Geometric Structure (Triangle/Tent)
  // Pose 3 (0.35): Transitioning out of Triangle
  // Pose 4 (0.5): The Chaos / Parallel Hover
  // Pose 5 (0.65): Transitioning to final
  // Pose 6 (0.8): The Portal / Gateway (Vertical columns)
  // Pose 7 (1.0): Unified horizontal bar
  const bar1X = useTransform(rawScroll, kf, [0, 0, 0, 100, -100, -200, -150, 0]);
  const bar1Y = useTransform(rawScroll, kf, [0, -50, -100, -150, -100, -50, 0, 0]);
  const bar1Z = useTransform(rawScroll, kf, [0, 100, 150, 200, 100, 0, 0, 0]);
  const bar1RotZ = useTransform(rawScroll, kf, [0, 15, 90, 135, 45, 90, 0, 90]);
  const bar1RotX = useTransform(rawScroll, kf, [0, 30, 45, 90, 60, 30, 0, 0]);
  const bar1RotY = useTransform(rawScroll, kf, [0, 15, 0, 45, 45, 0, 0, 0]);

  const bar2X = useTransform(rawScroll, kf, [0, -50, -120, -200, 0, 0, 0, 0]);
  const bar2Y = useTransform(rawScroll, kf, [0, 50, 80, 0, 0, 0, 0, 0]);
  const bar2Z = useTransform(rawScroll, kf, [0, -50, -100, -200, 0, 50, -100, 0]);
  const bar2RotZ = useTransform(rawScroll, kf, [60, 45, -30, 0, 45, 90, 0, 90]);
  const bar2RotX = useTransform(rawScroll, kf, [0, -15, 45, 90, 60, 30, 0, 180]);
  const bar2RotY = useTransform(rawScroll, kf, [0, 30, -45, -90, 45, 0, 0, 0]);

  const bar3X = useTransform(rawScroll, kf, [0, 50, 120, 100, 100, 200, 150, 0]);
  const bar3Y = useTransform(rawScroll, kf, [0, 50, 80, 150, 100, 50, 0, 0]);
  const bar3Z = useTransform(rawScroll, kf, [0, 50, -100, -100, -100, 0, 0, 0]);
  const bar3RotZ = useTransform(rawScroll, kf, [120, 135, 210, 270, 45, 90, 0, 90]);
  const bar3RotX = useTransform(rawScroll, kf, [0, 15, 45, 90, 60, 30, 0, 0]);
  const bar3RotY = useTransform(rawScroll, kf, [0, -30, 45, 90, 45, 0, 0, 180]);`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync('src/App.tsx', code);
console.log('patched asterisk transformations');
