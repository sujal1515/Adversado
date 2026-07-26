const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add 5th project
const proj4 = `    image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca2626?q=80&w=2000&auto=format&fit=crop"\n  }`;
const proj5 = `    image: "https://images.unsplash.com/photo-1599643478524-fb66f7ca2626?q=80&w=2000&auto=format&fit=crop"\n  },\n  {\n    id: "05",\n    title: "LCDO FESTIVAL",\n    type: "MUSIC FESTIVAL",\n    date: "NOVEMBER 2024",\n    role: "FULL DESIGN DEV",\n    tools: ["JS", "NUXT", "VUE", "CSS", "LENOIS", "PRISMIC"],\n    description: "WEBSITE FOR THE ELECTRONIC MUSIC FESTIVAL LOCATED IN SOUTH OF FRANCE.",\n    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop"\n  }`;
code = code.replace(proj4, proj5);

// 2. We need a way to pass colors for the project. Let's add color properties to the projects array!
// Instead of that, we can just define them in the component.

// 3. Update the Center Images Carousel keyframes.
const oldKeyframes = `const keyframes = [0.428, 0.568, 0.708, 0.848];`;
const newKeyframes = `const keyframes = [0.45, 0.55, 0.65, 0.75, 0.85];`;
code = code.replace(oldKeyframes, newKeyframes);

fs.writeFileSync('src/App.tsx', code);
console.log('patched projects');
