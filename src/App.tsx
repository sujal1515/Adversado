
const projects = [
  {
    id: "01",
    title: "FERTILE AGENCY",
    type: "PORTFOLIO",
    city: "PARIS, FR",
    date: "17/07/24",
    role: "DESIGN & DEV",
    tools: ["JS", "NEXT", "REACT", "CSS", "GSAP", "FIGMA"],
    description: "INDEPENDENT AGENCY SPECIALIZED IN MANAGEMENT, CONSULTING & BRAND PARTNERSHIP. CREATIVE AGENCY.",
    image: "https://images.pexels.com/photos/28379999/pexels-photo-28379999.jpeg",
    color: "#6b5b69"
  },
  {
    id: "02",
    title: "CAMILLE JUTEL",
    type: "PORTFOLIO",
    city: "MARSEILLE, FR",
    date: "10/06/24",
    role: "DESIGN & DEV",
    tools: ["JS", "NEXT", "REACT", "CSS", "GSAP", "FIGMA"],
    description: "MOROCCO-BASED CAMILLE JUTEL'S PHOTOGRAPHY PORTFOLIO.",
    image: "https://images.pexels.com/photos/8467589/pexels-photo-8467589.jpeg",
    color: "#204a87"
  },
  {
    id: "03",
    title: "AMOURA TROI",
    type: "LITHOGRAPHY",
    city: "LYON, FR",
    date: "07/03/24",
    role: "DESIGN & DEV",
    tools: ["JS", "NEXT", "REACT", "CSS", "GSAP", "FIGMA"],
    description: "FRENCH PHOTOGRAPHER WHO GETS PERSONAL THROUGH THE INTIMACY OF ANALOG LITHOGRAPHY ARTWORK.",
    image: "https://images.pexels.com/photos/27393275/pexels-photo-27393275.jpeg",
    color: "#646d7e"
  },
  {
    id: "04",
    title: "MARINE BENABOU",
    type: "DIGITAL BOUTIQUE",
    city: "MILAN, IT",
    date: "11/01/24",
    role: "DESIGN & DEV",
    tools: ["JS", "NEXT", "REACT", "CSS", "GSAP", "FIGMA"],
    description: "FRENCH JEWELRY DESIGNER MARINE BENABOU'S DIGITAL BOUTIQUE.",
    image: "https://images.pexels.com/photos/9227566/pexels-photo-9227566.jpeg",
    color: "#4a3b32"
  },
  {
    id: "05",
    title: "LCDO FESTIVAL",
    type: "MUSIC FESTIVAL",
    city: "NICE, FR",
    date: "23/11/24",
    role: "FULL DESIGN DEV",
    tools: ["JS", "NUXT", "VUE", "CSS", "LENOIS", "PRISMIC"],
    description: "WEBSITE FOR THE ELECTRONIC MUSIC FESTIVAL LOCATED IN SOUTH OF FRANCE.",
    image: "https://images.pexels.com/photos/5483050/pexels-photo-5483050.jpeg",
    color: "#c46a29"
  }
];
import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { Hexagon, ArrowRight, Play, X, Star } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';

import { MotionValue } from "motion/react";
import Footer from './components/Footer';
import VideoSection from './components/VideoSection';

const testimonials = [
  {
    id: 1,
    text: "THEIR TEAM TOOK OUR WELLNESS BRAND AND ELEVATED IT TO NEW HEIGHTS WITH THEIR THOUGHTFUL DESIGNS AND STRATEGIC BRANDING, THEY'VE HELPED US CREATE A COHESIVE AND COMPELLING BRAND IDENTITY.",
    name: "MARK RAMIREZ",
    role: "OWNER OF LUNA'S INC",
    rating: 5
  },
  {
    id: 2,
    text: "AS A FELLOW CREATIVE PROFESSIONAL, I HAVE HIGH STANDARDS WHEN IT COMES TO DESIGN. KELOLA NOT ONLY MET BUT EXCEEDED THOSE STANDARDS, KELOLA ALSO OPTIMIZED IT FOR A SEAMLESS USER EXPERIENCE.",
    name: "THOMAS GALA",
    role: "FOUNDER ZENTECH WELLNESS",
    rating: 4
  },
  {
    id: 3,
    text: "I CAN'T RECOMMEND ADVERSADO ENOUGH! THEIR SOLUTIONS HAVE MADE IT EASIER FOR US TO MANAGE CUSTOMER APPLICATIONS AND APPROVALS, RESULTING IN FASTER TURNAROUND TIMES AND HAPPIER CLIENTS.",
    name: "WILLIAM ASHFORD",
    role: "CO-FOUNDER, ASTERISK INC",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
    className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300"
  >
    <div>
        <div className="flex mb-6 gap-1">
        {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className={i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "fill-slate-700 text-slate-700"} />
        ))}
        </div>
        <p className="text-slate-200 text-lg mb-8 leading-relaxed font-medium">"{testimonial.text}"</p>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-bold text-white text-sm tracking-widest uppercase">{testimonial.name}</p>
        <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
      </div>
      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
        <ArrowRight size={16} />
      </div>
    </div>
  </motion.div>
);

const TestimonialSection = () => (
  <section className="w-full relative z-20 py-24 px-6 lg:px-24 text-white">
    <div className="flex flex-col md:flex-row gap-16 md:gap-32">
      {/* Header Column */}
      <div className="md:w-1/3">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">What Our Clients Are Saying</h2>
        <p className="text-slate-400 mb-8 max-w-sm">We take pride in delivering exceptional solutions that deliver great results. But don't just take our word for it.</p>
        <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            <span className="text-xs uppercase tracking-widest font-bold">View all testimonials</span>
            <ArrowRight size={14} />
        </button>
      </div>

      {/* Testimonial Column */}
      <div className="md:w-2/3">
        <div className="bg-white/5 border border-white/10 p-10 rounded-3xl mb-8">
            <p className="text-2xl leading-relaxed mb-10">“I can’t recommend Credenza enough! Their lending solutions have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.”</p>
            <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                <div>
                    <p className="font-bold text-white tracking-widest uppercase">William Ashford</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Co-Founder, Asterisk Inc</p>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                        <ArrowRight className="rotate-180" size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);
const StarParticlesCanvas = ({ scrollProgress }: { scrollProgress: MotionValue<number> }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let animationFrameId: number;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Particle setup
    const numParticles = 3000;
    const particles: any[] = [];
    const starSize = 350; // Bigger star
    const sphereRadius = 220;

    for (let i = 0; i < numParticles; i++) {
       // --- Star Shape (Astroid) ---
       const t = Math.random() * Math.PI * 2;
       const d = Math.pow(Math.random(), 0.15); // Push even more towards edges for sharpness
       
       let starX = starSize * Math.pow(Math.cos(t), 3) * d;
       let starY = starSize * Math.pow(Math.sin(t), 3) * d;
       
       // Thicken the center slightly but keep arms sharp
       starX += (Math.random() - 0.5) * (20 * (1 - d)); 
       starY += (Math.random() - 0.5) * (20 * (1 - d));

       // Colors (Glowing Purple & White cores for Section 1)
       const isCore = Math.random() > 0.4;
       let r1, g1, b1, alpha, size;
       if (isCore) {
         r1 = 230 + Math.random() * 25;
         g1 = 220 + Math.random() * 30;
         b1 = 250 + Math.random() * 5;
         alpha = 0.5 + Math.random() * 0.5;
         size = 0.8 + Math.random() * 1.2;
       } else {
         r1 = 140 + Math.random() * 60;
         g1 = 60 + Math.random() * 40;
         b1 = 200 + Math.random() * 55;
         alpha = 0.3 + Math.random() * 0.5;
         size = 0.4 + Math.random() * 1.0;
       }

       const initX = starX + (Math.random() - 0.5) * 4000;
       const initY = starY + (Math.random() - 0.5) * 4000;
       particles.push({ starX, starY, x: initX, y: initY, initX, initY, vx: 0, vy: 0, baseSize: size, r1, g1, b1, a1: alpha, color: `rgba(${r1}, ${g1}, ${b1}, ${alpha})` });
    }

    let localMouseX = -1000;
    let localMouseY = -1000;
    let pmouseX = -1000;
    let pmouseY = -1000;
    let mouseVx = 0;
    let mouseVy = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        localMouseX = e.clientX - rect.left;
        localMouseY = e.clientY - rect.top;
        if (pmouseX === -1000) {
           pmouseX = localMouseX;
           pmouseY = localMouseY;
        }
    };
    const handleMouseLeave = () => {
        localMouseX = -1000;
        localMouseY = -1000;
        pmouseX = -1000;
        pmouseY = -1000;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const introStartTime = Date.now();
    const introDuration = 2500;

    const render = () => {
       const currentProgress = scrollProgress.get();
       if (currentProgress > 0.4) { ctx.clearRect(0, 0, width, height); animationFrameId = requestAnimationFrame(render); return; }
       ctx.clearRect(0, 0, width, height);
       
       const centerX = width / 2;
       const centerY = height / 2;
       const time = Date.now() * 0.0005;
       const now = Date.now();
       
       if (localMouseX !== -1000 && pmouseX !== -1000) {
           mouseVx = localMouseX - pmouseX;
           mouseVy = localMouseY - pmouseY;
       } else {
           mouseVx = 0;
           mouseVy = 0;
       }
       pmouseX = localMouseX;
       pmouseY = localMouseY;
       
       // Intro animation progress
       let introProgressRaw = Math.min((now - introStartTime) / introDuration, 1);
       const introProgress = 1 - Math.pow(1 - introProgressRaw, 4); // easeOutQuart
       
       // Extract current scroll progress passed via a global ref or state

       particles.forEach((p, idx) => {
           // Slowly rotate the Star shape
           const cosT = Math.cos(time * 0.1);
           const sinT = Math.sin(time * 0.1);
           const rotatedStarX = p.starX * cosT - p.starY * sinT;
           const rotatedStarY = p.starX * sinT + p.starY * cosT;

           

           // Interpolate between Star (0) -> Torus (0.33) -> Ribbed Torus (0.66) -> Möbius (1.0)
           let targetShapeX = 0;
           let targetShapeY = 0;
           
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

           
           // Blend with initial shattered state
           const finalTargetX = p.initX * (1 - introProgress) + targetShapeX * introProgress;
           const finalTargetY = p.initY * (1 - introProgress) + targetShapeY * introProgress;

           const dxTarget = (centerX + finalTargetX) - p.x;
           const dyTarget = (centerY + finalTargetY) - p.y;
           
           // Spring force towards target
           p.vx += dxTarget * 0.05;
           p.vy += dyTarget * 0.05;

           // Mouse flow interaction
           const dxMouse = localMouseX - p.x;
           const dyMouse = localMouseY - p.y;
           const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
           
           if (distMouse < 200) {
               const force = (200 - distMouse) / 200;
               // Drag effect (follow mouse velocity)
               p.vx += mouseVx * force * 0.5;
               p.vy += mouseVy * force * 0.5;
               
               // Repulsion (push away from exact mouse center)
               if (distMouse > 1) { // Avoid division by zero
                 p.vx -= (dxMouse / distMouse) * force * 4;
                 p.vy -= (dyMouse / distMouse) * force * 4;
               }
           }

           // Damping
           p.vx *= 0.78;
           p.vy *= 0.78;
           p.x += p.vx;
           p.y += p.vy;

           let currentSize = p.baseSize; ctx.fillStyle = p.color;
           ctx.beginPath();
           ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
           ctx.fill();
       });

       animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
       window.removeEventListener('resize', resize);
       canvas.removeEventListener('mousemove', handleMouseMove);
       canvas.removeEventListener('mouseleave', handleMouseLeave);
       cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 

      className="w-full h-full pointer-events-auto" 
      style={{ 
        filter: `drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))`
      }}
    />
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const { scrollYProgress: rawScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const scrollYProgress = useTransform(rawScroll, [0, 0.428], [0, 1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  // Parallax
  const ripple1X = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const ripple1Y = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  const ripple2X = useTransform(smoothMouseX, [-1, 1], [-45, 45]);
  const ripple2Y = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  // Scroll animations for Orb
  const orbScrollY = useTransform(scrollYProgress, [0, 0.45, 1], ["0vh", "30vh", "0vh"]);
  const orbScrollX = useTransform(scrollYProgress, [0, 0.45, 1], ["0vw", "0vw", "0vw"]);
  const particlesOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const orbScaleScroll = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 2.5]);



  // Scroll animations for Manifesto
  const manifestoOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.6], [0, 1, 1, 0]);
  const manifestoY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);

  // Scroll animations for Section 3
  const section3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const section3Y = useTransform(scrollYProgress, [0.45, 0.55], [50, 0]);
  const section3Scale = useTransform(scrollYProgress, [0.45, 0.55, 0.75, 0.85], [0.5, 1, 1, 0.5]);

  // Persistent Asterisk across all sections
  const kf = [0, 0.15, 0.25, 0.35, 0.45, 0.6, 0.75, 0.85, 0.95, 1];
  const smoothedScroll = useSpring(rawScroll, { stiffness: 50, damping: 20 });

  const asteriskXNum = useTransform(smoothedScroll, kf, [0, 0, -100, 0, 20, -20, 40, -20, 20, 0]);
  const asteriskYNum = useTransform(smoothedScroll, kf, [0, 0, 0, 0, 20, -20, 10, 10, -10, 0]);
  const asteriskX = useTransform([asteriskXNum, smoothMouseX], ([x, mx]) => `calc(${x}vw + ${mx * 50}px)`);
  const asteriskY = useTransform([asteriskYNum, smoothMouseY], ([y, my]) => `calc(${y}vh + ${my * 50}px)`);
  const asteriskRotate = useTransform(smoothedScroll, kf, [0, 90, 180, 360, 450, 540, 630, 720, 900, 1080]);
  const asteriskScale = useTransform(smoothedScroll, kf, [1, 2, 0.5, 1.5, 0.8, 1.2, 0.6, 1.3, 1.1, 1]);
  const asteriskOpacity = useTransform(smoothedScroll, kf, [0.8, 1, 0, 1, 0.8, 1, 0.7, 1, 0.9, 0.8]);
  const asteriskRadius = useTransform(smoothedScroll, kf, ["50%", "10%", "50%", "0%", "20%", "50%", "10%", "40%", "20%", "50%"]);

  const bgOpacity = useTransform(rawScroll, [0.17, 0.23, 0.8, 1], [0, 1, 1, 1]);
  const headerColor = useTransform(rawScroll, [0.17, 0.23, 0.8, 1], ["#0f172a", "#f8fafc", "#f8fafc", "#f8fafc"]);
  const navItemColor = useTransform(rawScroll, [0.17, 0.23, 0.8, 1], ["#475569", "#cbd5e1", "#cbd5e1", "#cbd5e1"]);

  // Scroll animations for Section 4
  const section4Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const section4Y = useTransform(scrollYProgress, [0.8, 1], [150, 0]);
  const section4Scale = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  
  // Pose 0 (0): The Asterisk (Default)
  // Pose 1 (0.2): Scatter 1
  // Pose 2 (0.4): Scatter 2
  // Pose 3 (0.6): Big/Square
  // Pose 4 (0.8): Chaos
  // Pose 5 (1.0): Converge
  
  const bar1X = useTransform(rawScroll, kf, [0, -100, 100, 200, -50, 50, -100, 100, 50, 0]);
  const bar1Y = useTransform(rawScroll, kf, [0, 100, -100, 0, 150, -150, 100, -100, 50, 0]);
  const bar1Z = useTransform(rawScroll, kf, [0, 200, -200, 50, 300, -300, 200, -200, 100, 0]);
  const bar1RotZ = useTransform(rawScroll, kf, [0, 45, 135, 180, 270, 360, 450, 540, 630, 720]);
  const bar1RotX = useTransform(rawScroll, kf, [0, 90, 0, 45, 180, 0, 90, 0, 45, 0]);
  const bar1RotY = useTransform(rawScroll, kf, [0, 0, 90, 45, 180, 0, 0, 90, 45, 0]);

  const bar2X = useTransform(rawScroll, kf, [0, 100, -100, -200, 50, -50, 100, -100, -50, 0]);
  const bar2Y = useTransform(rawScroll, kf, [0, -100, 100, 0, -150, 150, -100, 100, -50, 0]);
  const bar2Z = useTransform(rawScroll, kf, [0, -200, 200, -50, -300, 300, -200, 200, -100, 0]);
  const bar2RotZ = useTransform(rawScroll, kf, [60, 90, 180, 270, 360, 420, 510, 600, 690, 780]);
  const bar2RotX = useTransform(rawScroll, kf, [0, 0, 90, 45, 90, 0, 0, 90, 45, 0]);
  const bar2RotY = useTransform(rawScroll, kf, [0, 180, 0, 90, 90, 0, 180, 0, 90, 0]);

  const bar3X = useTransform(rawScroll, kf, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const bar3Y = useTransform(rawScroll, kf, [0, -150, 150, 100, -200, 200, -150, 150, 100, 0]);
  const bar3Z = useTransform(rawScroll, kf, [0, 100, -100, 200, 100, -100, 200, -200, 100, 0]);
  const bar3RotZ = useTransform(rawScroll, kf, [120, 180, 270, 90, 0, 120, 210, 300, 390, 480]);
  const bar3RotX = useTransform(rawScroll, kf, [0, 45, 180, 90, 270, 0, 45, 180, 90, 0]);
  const bar3RotY = useTransform(rawScroll, kf, [0, 45, 180, 90, 270, 0, 45, 180, 90, 0]);


  return (
    <div ref={containerRef} className="relative w-full min-h-screen h-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f1f4f8] via-[#dce3ea] to-[#b8c6d3] font-sans">
      
      {/* Dark Mode Background Transition */}
      <motion.div 
        style={{ opacity: bgOpacity }}
        className="fixed inset-0 bg-slate-950 z-0 pointer-events-none"
      />

      {/* FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Film Grain Noise Overlay */}
        {/* Noise filter removed for performance */}

        {/* Dynamic Light Source */}
        <motion.div
          style={{ 
            x: useTransform(smoothMouseX, [-1, 1], [-80, 80]), 
            y: useTransform(smoothMouseY, [-1, 1], [-50, 50]) 
          }}
          className="absolute inset-0 m-auto w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-white/50 rounded-full blur-[100px]"
        />

        {/* 3D Liquid Ripples Background */}
        <div className="absolute inset-0 flex items-center justify-center mt-10">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`ripple-${i}`}
              animate={{ scale: [0.1, 2.5], opacity: [0, 0.6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: i * 2.5 }}
              style={{ x: ripple2X, y: ripple2Y }}
              className="absolute w-[70vw] h-[35vw] min-w-[600px] min-h-[300px] fluid-ripple"
            />
          ))}
        </div>

        {/* Floating Particle Model (Scroll Linked) */}
        <div className="absolute inset-0 flex items-center justify-center -mt-12 pointer-events-none">
          <motion.div 
            style={{ 
              x: orbScrollX, 
              y: orbScrollY, 
              scale: orbScaleScroll,
              opacity: particlesOpacity
            }}
            className="z-20 relative w-full h-full flex items-center justify-center pointer-events-none"
          >
            <StarParticlesCanvas scrollProgress={scrollYProgress} />
          </motion.div>
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full">
        {/* Top Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="fixed top-0 z-50 w-full px-6 py-6 lg:px-12 flex items-center justify-between"
        >
          {/* Logo */}
          <motion.div style={{ color: headerColor }} className="flex items-center gap-2 cursor-pointer group">
            <Hexagon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" fill="currentColor" />
            <span className="font-bold text-lg tracking-wide">ADVERSADO</span>
          </motion.div>

          {/* Center Links */}
          <div className="hidden md:flex items-center glass-pill rounded-full p-1.5 shadow-sm">
            {['Home', 'About us', 'Explore', 'For clients', 'Career', 'Blog'].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ color: index === 0 ? '#0f172a' : navItemColor }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/50 ${
                  index === 0
                    ? 'bg-white shadow-sm hover:bg-white'
                    : ''
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: headerColor, 
              color: useTransform(scrollYProgress, [0.6, 0.9], ["#ffffff", "#0f172a"])
            }}
            className="px-7 py-3 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            Contact us
          </motion.button>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex flex-col justify-center px-6 lg:px-24 -mt-12 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.0 }}
            style={{ x: ripple1X, y: ripple1Y }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-800 z-10 drop-shadow-sm mt-48 max-w-4xl"
          >
            ADVERSADO
          </motion.h1>

          <div className="h-6 md:h-10" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.2 }}
            style={{ x: ripple2X, y: ripple2Y }}
            className="text-base md:text-lg text-slate-600 max-w-xl z-10"
          >
            Pioneering the future of digital experiences. We blend innovative design with cutting-edge technology to build solutions that redefine industry standards and empower businesses globally.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.4 }}
            className="mt-10 z-20 pointer-events-auto flex items-start"
          >
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 4, scale: 0.98 }}
              className="px-10 py-3 rounded-full text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase bg-transparent border-2 border-slate-400/50 shadow-[0_4px_0_0_rgba(148,163,184,0.5)] hover:shadow-[0_6px_0_0_rgba(148,163,184,0.6)] active:shadow-[0_0px_0_0_rgba(148,163,184,0.5)] transition-all duration-200 backdrop-blur-sm"
            >
              Explore
            </motion.button>
          </motion.div>
          
          {/* Mini Video Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="absolute bottom-16 right-6 lg:right-24 z-20 pointer-events-auto cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-64 flex flex-col gap-2.5">
              <div className="w-full h-[9rem] relative rounded-lg overflow-hidden shadow-md bg-gray-900">
                <video 
                  src="https://www.pexels.com/download/video/8721925/"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="flex items-center justify-between px-1 mt-1">
                <div className="flex items-center gap-2">
                  <div className="flex gap-[2px] items-center h-4">
                    <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[3px] bg-slate-800 rounded-full" />
                    <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-[3px] bg-slate-800 rounded-full" />
                    <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.4 }} className="w-[3px] bg-slate-800 rounded-full" />
                    <motion.div animate={{ height: [10, 14, 10] }} transition={{ repeat: Infinity, duration: 1.1, delay: 0.1 }} className="w-[3px] bg-slate-800 rounded-full" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-slate-800 uppercase ml-1">Live Reel</span>
                </div>
                <div className="flex -space-x-1.5">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-5 h-5 rounded-full border border-white" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=32" className="w-5 h-5 rounded-full border border-white" alt="avatar" />
                  <img src="https://i.pravatar.cc/100?img=44" className="w-5 h-5 rounded-full border border-white" alt="avatar" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Manifesto Section */}
        <section className="h-screen w-full flex items-center justify-center px-6 lg:px-24 pb-20 pointer-events-none">
          <motion.div 
            style={{ opacity: manifestoOpacity, y: manifestoY }}
            className="w-full max-w-6xl z-10 relative pointer-events-auto flex flex-col md:flex-row justify-between items-center"
          >
            {/* Minimalist Info - Left */}
            <div className="hidden md:flex flex-col gap-4 text-black w-1/3">
              <span className="font-bold text-xs uppercase tracking-widest opacity-50">01. Core Principle</span>
              <p className="text-sm font-medium leading-relaxed max-w-[200px]">
                Adversado represents the synthesis of avant-garde aesthetics and technological precision.
              </p>
            </div>

            {/* Main Content - Right */}
            <div className="flex flex-col items-end text-right w-full md:w-2/3">
              {/* Extremely Bold Condensed Text */}
              <div className="flex flex-col font-black text-black uppercase tracking-tighter" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}>
                <h2 className="text-[14vw] md:text-[120px] leading-[0.85] m-0 p-0 transform scale-y-[1.2] origin-right mix-blend-difference">FUTURE</h2>
                <h2 className="text-[14vw] md:text-[120px] leading-[0.85] m-0 p-0 transform scale-y-[1.2] origin-right mix-blend-difference">FORGED</h2>
              </div>
              
              <div className="mt-12 md:mt-16 flex flex-col gap-2 font-bold text-black uppercase tracking-tight text-lg md:text-2xl max-w-2xl text-right" style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", transform: 'scaleY(1.1)', transformOrigin: 'right' }}>
                <p className="leading-[1.1] mix-blend-difference">
                  GLOBAL AI PRODUCTION HOUSE,<br />
                  DEFINING THE NEXT DIGITAL ERA.
                </p>
                <p className="mt-1 text-sm md:text-lg mix-blend-difference">
                  AI. 3D. CGI. FX.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Excellence List */}
        <section className="h-screen w-full flex items-center justify-center px-6 lg:px-24 pb-20 pointer-events-none">
          <motion.div 
            style={{ opacity: section3Opacity, y: section3Y, scale: section3Scale }}
            className="w-full max-w-6xl pointer-events-auto z-10 relative mt-20 flex flex-col xl:flex-row gap-12 items-center justify-end"
          >
             {/* Spacer for Fixed Asterisk layout on desktop */}
             <div className="hidden xl:block w-80 shrink-0"></div>

             {/* Content List */}
             <div className="dark-glass-panel flex flex-col overflow-hidden w-full">
              {[
                { title: "DRAGONFLY'S STATE OF AIRDROPS REPORT 2025", snippet: "We analyzed data from over 12 airdrops (11 geoblocked airdrops and 1 non-geoblocked airdrop as a control) that conducted airdrops between 2019 and...", category: "RESEARCH" },
                { title: "IN DEFENSE OF EXPONENTIALS", snippet: "I used to tell founders, the reaction you are going to get to your launch is not hate, it's indifference. By default, nobody cares about your new chain. I have t...", category: "OPINION" },
                { title: "THE COMPREHENSIVE GUIDE TO TOKEN COMPENSATION", snippet: "Designing token-based compensation is a hard problem, especially given token liquidity and the volatility in crypto markets. To date, the topic has bee...", category: "RECRUITING" },
                { title: "DRAGONFLY'S 2023 CRYPTO COMPENSATION REPORT", snippet: "Crypto moves fast, and industry compensation data is scarce — especially comprehensive analyses. This can be a stumbling block for startups seeking t...", category: "RECRUITING" },
                { title: "STABLECOIN PAYMENTS FROM THE GROUND UP: A $94 BILLION STUDY BY ARTEMIS, CASTLE ISLAND, AND DRAGONFLY", snippet: "Stablecoins have quickly become a credible alternative to traditional payment and settlement networks. In just five years, their supply has grown from unde...", category: "RESEARCH" }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start md:items-center py-6 px-6 md:px-10 border-b border-white/5 last:border-0 hover:bg-white transition-colors duration-300 cursor-pointer">
                  <div className="flex-1 w-full md:w-[35%]">
                    <h3 className="text-white group-hover:text-black text-sm md:text-[15px] font-semibold tracking-wide transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex-1 w-full md:w-[45%]">
                    <p className="text-white group-hover:text-black text-sm md:text-[15px] font-light transition-colors duration-300 line-clamp-2 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>
                  <div className="w-full md:w-[20%] flex items-center justify-between md:justify-end gap-8 shrink-0 mt-2 md:mt-0">
                    <span className="text-white group-hover:text-black text-[11px] font-bold tracking-widest uppercase transition-colors duration-300">
                      {item.category}
                    </span>
                    <div className="grid grid-cols-2 gap-1 shrink-0">
                      <div className="w-1.5 h-1.5 bg-white/50 group-hover:bg-black transition-colors duration-300"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 group-hover:bg-black transition-colors duration-300"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 group-hover:bg-black transition-colors duration-300"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Spacer */}
        <div className="h-32" />

        {/* Section 4: Projects (Table) */}
        <section className="w-full relative z-20 py-20 px-6 lg:px-24 text-white" id="projects-section">
          <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter mb-16">Selected Projects</h2>
          <div className="w-full border-t border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between py-6 border-b border-white/20 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                <div className="w-16">Number</div>
                <div className="w-64">Image</div>
                <div className="flex-1">Title</div>
                <div className="w-48 hidden md:block">City</div>
                <div className="w-32 text-right">Date</div>
                <div className="w-12 text-right"></div>
            </div>
            
            {/* Rows */}
            {projects.map((proj, i) => (
                <div key={proj.id} 
                    className="flex items-center justify-between py-10 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-all duration-300 group relative"
                    onMouseEnter={() => setHoveredProject(i)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <div className="w-16 font-mono text-xs text-slate-500 group-hover:text-white transition-colors">{proj.id}</div>
                    
                    {/* Image Column */}
                    <div className="w-64 h-20 relative">
                        <AnimatePresence mode="wait">
                            {hoveredProject === i ? (
                                <motion.div
                                    key="image"
                                    className="absolute inset-0 w-full h-full z-50 overflow-hidden rounded-lg shadow-2xl"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    <img src={proj.image} className="w-full h-full object-cover" />
                                </motion.div>
                            ) : (
                                <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center text-slate-600 text-xs">
                                    Preview
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex-1 font-bold text-2xl uppercase tracking-tighter group-hover:pl-4 transition-all duration-300">{proj.title}</div>
                    <div className="w-48 text-slate-500 hidden md:block text-xs uppercase tracking-widest">{proj.city}</div>
                    <div className="w-32 text-slate-400 text-right font-mono text-sm">{proj.date}</div>
                    
                    <div className="w-12 text-right">
                        <ArrowRight className="inline-block w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2" />
                    </div>
                </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />
        <VideoSection />
        <Footer />
      </div>

      {/* Persistent Asterisk Container */}
      <motion.div 
        style={{ 
           opacity: asteriskOpacity,
           x: asteriskX,
           y: asteriskY,
           scale: asteriskScale,
           rotateZ: asteriskRotate,
           borderRadius: asteriskRadius
        }}
        className="fixed inset-0 m-auto w-80 h-80 flex items-center justify-center pointer-events-none z-50"
      >
        <motion.div 
          animate={{ rotateX: [20, 35, 20], rotateY: [15, -15, 15], y: [-15, 15, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="glass-asterisk"
        >
          <motion.div 
            className="asterisk-bar" 
            style={{ x: bar1X, y: bar1Y, z: bar1Z, rotateZ: bar1RotZ, rotateX: bar1RotX, rotateY: bar1RotY }}
          >
            <div className="bar-face front"></div>
            <div className="bar-face back"></div>
            <div className="bar-face right"></div>
            <div className="bar-face left"></div>
            <div className="bar-face top"></div>
            <div className="bar-face bottom"></div>
          </motion.div>
          <motion.div 
            className="asterisk-bar" 
            style={{ x: bar2X, y: bar2Y, z: bar2Z, rotateZ: bar2RotZ, rotateX: bar2RotX, rotateY: bar2RotY }}
          >
            <div className="bar-face front"></div>
            <div className="bar-face back"></div>
            <div className="bar-face right"></div>
            <div className="bar-face left"></div>
            <div className="bar-face top"></div>
            <div className="bar-face bottom"></div>
          </motion.div>
          <motion.div 
            className="asterisk-bar" 
            style={{ x: bar3X, y: bar3Y, z: bar3Z, rotateZ: bar3RotZ, rotateX: bar3RotX, rotateY: bar3RotY }}
          >
            <div className="bar-face front"></div>
            <div className="bar-face back"></div>
            <div className="bar-face right"></div>
            <div className="bar-face left"></div>
            <div className="bar-face top"></div>
            <div className="bar-face bottom"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <video 
              src="https://www.pexels.com/download/video/8721925/"
              autoPlay
              loop
              controls
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
