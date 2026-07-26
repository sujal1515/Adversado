const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `  const asteriskX = useTransform(rawScroll, kf, ["0vw", "5vw", "25vw", "-10vw", "-35vw", "10vw", "0vw", "0vw"]);
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

const replacementStr = `  const asteriskX = useTransform(rawScroll, kf, ["0vw", "0vw", "-25vw", "-30vw", "-35vw", "-25vw", "0vw", "0vw"]);
  const asteriskY = useTransform(rawScroll, kf, ["0vh", "0vh", "5vh", "25vh", "-5vh", "-15vh", "15vh", "0vh"]);
  const asteriskRotate = useTransform(rawScroll, kf, [0, 45, 120, 240, 360, 480, 600, 720]);
  const asteriskScale = useTransform(rawScroll, kf, [1, 1, 0.8, 1.1, 0.7, 1.2, 0.9, 1.1]);
  const asteriskOpacity = useTransform(rawScroll, kf, [0.8, 0.8, 0.6, 0.9, 0.6, 0.9, 0.8, 0.9]);

  const bgOpacity = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], [0, 1, 1, 0]);
  const headerColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#0f172a", "#f8fafc", "#f8fafc", "#0f172a"]);
  const navItemColor = useTransform(rawScroll, [0.17, 0.23, 0.4, 0.45], ["#475569", "#cbd5e1", "#cbd5e1", "#475569"]);

  // Scroll animations for Section 4
  const section4Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.8, 1], [150, 0]);
  const section4Scale = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Pose 0 (0): The Asterisk (Default)
  // Pose 1 (0.15): Pre-transition
  // Pose 2 (0.25): Triangle (Manifesto - Left Side)
  // Pose 3 (0.35): Exploded Triangle
  // Pose 4 (0.5): Vertical Parallel Bars (Excellence List - Left Side)
  // Pose 5 (0.65): Exploded Bars
  // Pose 6 (0.8): 3D Chaos Orbit (Projects - Center)
  // Pose 7 (1.0): Converge back to Asterisk
  
  const bar1X = useTransform(rawScroll, kf, [0, 0, 0, 50, -100, -150, 200, 0]);
  const bar1Y = useTransform(rawScroll, kf, [0, 0, 100, 150, 0, 50, -200, 0]);
  const bar1Z = useTransform(rawScroll, kf, [0, 0, 0, 100, 0, -100, 400, 0]);
  const bar1RotZ = useTransform(rawScroll, kf, [0, 15, 90, 135, 0, 45, 720, 90]);
  const bar1RotX = useTransform(rawScroll, kf, [0, 15, 0, 45, 0, 90, 360, 0]);
  const bar1RotY = useTransform(rawScroll, kf, [0, 15, 0, 45, 0, 90, 360, 0]);

  const bar2X = useTransform(rawScroll, kf, [0, 0, -70, -120, 0, -50, -300, 0]);
  const bar2Y = useTransform(rawScroll, kf, [0, 0, -50, -100, 0, -50, 200, 0]);
  const bar2Z = useTransform(rawScroll, kf, [0, 0, 0, -100, 0, 100, -300, 0]);
  const bar2RotZ = useTransform(rawScroll, kf, [60, 45, 30, 0, 0, -45, -360, 90]);
  const bar2RotX = useTransform(rawScroll, kf, [0, -15, 0, -45, 0, -90, -180, 0]);
  const bar2RotY = useTransform(rawScroll, kf, [0, -15, 0, -45, 0, -90, -180, 0]);

  const bar3X = useTransform(rawScroll, kf, [0, 0, 70, 120, 100, 150, 100, 0]);
  const bar3Y = useTransform(rawScroll, kf, [0, 0, -50, -100, 0, 50, 100, 0]);
  const bar3Z = useTransform(rawScroll, kf, [0, 0, 0, 50, 0, -50, 200, 0]);
  const bar3RotZ = useTransform(rawScroll, kf, [120, 135, 150, 180, 0, 90, 540, 90]);
  const bar3RotX = useTransform(rawScroll, kf, [0, 15, 0, 45, 0, 45, 270, 0]);
  const bar3RotY = useTransform(rawScroll, kf, [0, 15, 0, 45, 0, 45, 270, 0]);`;

if (code.includes('const bar1RotY = useTransform(rawScroll, kf, [0, 15, 0, 45, 45, 0, 0, 0]);')) {
    code = code.replace(targetStr, replacementStr);
    fs.writeFileSync('src/App.tsx', code);
    console.log('patched asterisk transformations successfully');
} else {
    console.log('Target string not found');
}

