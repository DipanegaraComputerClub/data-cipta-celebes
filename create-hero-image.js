const fs = require('fs');
const path = require('path');

// Create a simple SVG and save it as PNG (we'll use SVG directly)
const svg = `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background Gradient -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f5f8ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#bfdbfe;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="blockGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4a6cf7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563eb;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="blockGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="600" fill="url(#bgGradient)"/>
  
  <!-- Decorative Blocks -->
  <rect x="50" y="100" width="200" height="200" rx="20" fill="url(#blockGradient1)" opacity="0.9" filter="drop-shadow(0 10px 20px rgba(74,108,247,0.3))"/>
  <rect x="300" y="200" width="200" height="250" rx="20" fill="url(#blockGradient2)" opacity="0.85" filter="drop-shadow(0 10px 20px rgba(14,165,233,0.3))"/>
  <rect x="150" y="350" width="200" height="150" rx="20" fill="url(#blockGradient1)" opacity="0.8" filter="drop-shadow(0 10px 20px rgba(74,108,247,0.2))"/>
  
  <!-- Floating Circles -->
  <circle cx="450" cy="120" r="40" fill="none" stroke="#4a6cf7" stroke-width="2" opacity="0.3"/>
  <circle cx="450" cy="120" r="30" fill="none" stroke="#4a6cf7" stroke-width="2" opacity="0.2"/>
  <circle cx="120" cy="480" r="35" fill="none" stroke="#0ea5e9" stroke-width="2" opacity="0.3"/>
  
  <!-- Tech Icons -->
  <text x="150" y="210" font-size="60" text-anchor="middle" fill="white" opacity="0.8">&lt;/&gt;</text>
  <text x="400" y="320" font-size="50" text-anchor="middle" fill="white" opacity="0.8">⚙️</text>
  <text x="250" y="430" font-size="50" text-anchor="middle" fill="white" opacity="0.8">🚀</text>
</svg>`;

const outputPath = path.join(__dirname, 'public/images/hero/hero-illustration.svg');
fs.writeFileSync(outputPath, svg);
console.log('✓ Hero image created:', outputPath);
