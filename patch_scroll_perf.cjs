const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace StarParticlesCanvas props signature
code = code.replace(
  'const StarParticlesCanvas = ({ scrollProgress }: { scrollProgress: number }) => {',
  'import { MotionValue } from "motion/react";\nconst StarParticlesCanvas = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {'
);

// Replace data-progress
code = code.replace(
  '      data-progress={scrollProgress}',
  ''
);

// Remove filter hue-rotate based on scrollProgress
code = code.replace(
  '        filter: `drop-shadow(0 0 15px rgba(99, 102, 241, 0.4)) hue-rotate(${scrollProgress > 0.5 ? (scrollProgress - 0.5) * 2 * -120 : 0}deg)`',
  '        filter: `drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))`'
);

// Replace currentProgress retrieval in render
code = code.replace(
  "const currentProgress = parseFloat(canvas.getAttribute('data-progress') || '0');",
  "const currentProgress = scrollProgress.get();"
);

// Stop animating if currentProgress is high enough (saves CPU)
code = code.replace(
  '       ctx.clearRect(0, 0, width, height);',
  '       if (currentProgress > 0.3) { animationFrameId = requestAnimationFrame(render); return; }\n       ctx.clearRect(0, 0, width, height);'
);

// Remove the state and effect from App component
const stateToRemove = `  // Scroll state for morphing the particles
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });`;
code = code.replace(stateToRemove, '');

// Update where the component is used
code = code.replace(
  '{scrollProgress < 0.25 && <StarParticlesCanvas scrollProgress={scrollProgress} />}',
  '<StarParticlesCanvas scrollProgress={scrollYProgress} />'
);

fs.writeFileSync('src/App.tsx', code);
console.log('patched scroll performance');
