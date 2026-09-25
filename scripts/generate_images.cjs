const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

function makePNG(width, height, pixelFn) {
  const rowSize = width * 4 + 1;
  const raw = Buffer.alloc(rowSize * height);
  for (let y = 0; y < height; y++) {
    raw[y * rowSize] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = pixelFn(x, y, width, height);
      const idx = y * rowSize + 1 + x * 4;
      raw[idx] = Math.max(0, Math.min(255, Math.round(r)));
      raw[idx + 1] = Math.max(0, Math.min(255, Math.round(g)));
      raw[idx + 2] = Math.max(0, Math.min(255, Math.round(b)));
      raw[idx + 3] = Math.max(0, Math.min(255, Math.round(a !== undefined ? a : 255)));
    }
  }

  function crc32(buf) {
    let crc = -1;
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
    }
    return (crc ^ -1) >>> 0;
  }
  const table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
    table[i] = c;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
    return Buffer.concat([len, t, data, crcBuf]);
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  const idat = zlib.deflateSync(raw, { level: 8 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Hero Image: susan_moraes_site_hero.png
// Palette: Sand (#EFECE6), Sage (#8A9A86), Warm Clay (#C4B8A5), Slate Ink (#3B423E)
console.log('Rendering Hero image...');
const heroBuf = makePNG(960, 600, (x, y, w, h) => {
  const u = x / w;
  const v = y / h;
  // Soft ambient gradient from top-left (warm light) to bottom-right (sage shadow)
  const distLight = Math.hypot(u - 0.2, v - 0.2);
  const lightFactor = Math.max(0, 1 - distLight * 0.9);
  
  // Base colors: Sand Warm (239, 236, 230) to Sage Grey (138, 154, 134)
  let r = 240 - v * 45 + lightFactor * 25;
  let g = 236 - v * 40 + lightFactor * 22;
  let b = 228 - v * 52 + lightFactor * 18;

  // Architectural surface: subtle horizontal grain and stone tabletop
  const tableLevel = 0.65;
  if (v > tableLevel) {
    const tableProgress = (v - tableLevel) / (1 - tableLevel);
    r = 215 - tableProgress * 30 + (Math.sin(u * 80) * 2);
    g = 208 - tableProgress * 28 + (Math.sin(u * 80) * 2);
    b = 196 - tableProgress * 25 + (Math.sin(u * 80) * 2);
  }

  // Ceramic vessel silhouette (soft organic vase)
  const vaseCenterX = 0.58;
  const vaseCenterY = 0.62;
  const dx = (u - vaseCenterX) * (w / h);
  const dy = v - vaseCenterY;
  const vaseWidth = 0.12 * (1 - 0.6 * Math.sin((dy + 0.15) * 8));
  if (dy > -0.22 && dy < 0.12 && Math.abs(dx) < vaseWidth) {
    const edgeDist = Math.abs(dx) / vaseWidth;
    const vaseShade = 0.6 + 0.4 * (1 - edgeDist) + (dx > 0 ? -0.15 : 0.15);
    r = 145 * vaseShade;
    g = 158 * vaseShade;
    b = 142 * vaseShade;
  }

  // Botanical branch curves
  const branch1 = Math.sin((v - 0.3) * 6) * 0.05 + 0.58;
  if (v > 0.25 && v < 0.5 && Math.abs(u - branch1) < 0.006) {
    r = 95; g = 105; b = 92;
  }
  // Delicate leaves
  const leaf1Dist = Math.hypot((u - 0.52) * 1.5, v - 0.35);
  if (leaf1Dist < 0.035) {
    r = 138; g = 154; b = 134;
  }
  const leaf2Dist = Math.hypot((u - 0.63) * 1.5, v - 0.28);
  if (leaf2Dist < 0.04) {
    r = 150; g = 168; b = 145;
  }

  // Fine paper texture / gentle grain
  const grain = ((x * 13 + y * 73) % 17) / 17 - 0.5;
  r += grain * 4;
  g += grain * 4;
  b += grain * 4;

  return [r, g, b, 255];
});
fs.writeFileSync(path.join(publicDir, 'susan_moraes_site_hero.png'), heroBuf);

// 2. Retrato: susan_moraes_retrato.png
console.log('Rendering Retrato image...');
const portraitBuf = makePNG(720, 960, (x, y, w, h) => {
  const u = x / w;
  const v = y / h;
  
  // Warm studio background with gentle light beam
  const lightBeam = Math.max(0, 1 - Math.abs((u * 0.8 + v * 0.3) - 0.5) * 1.8);
  let r = 238 - v * 28 + lightBeam * 18;
  let g = 233 - v * 25 + lightBeam * 16;
  let b = 224 - v * 35 + lightBeam * 12;

  // Gentle architectural arches in background
  const archDist = Math.hypot(u - 0.5, v - 0.4);
  if (archDist > 0.35 && archDist < 0.358) {
    r -= 15; g -= 15; b -= 15;
  }

  // Portrait silhouette & presence (elegant posture)
  // Head
  const headDist = Math.hypot((u - 0.5) * 1.25, v - 0.38);
  if (headDist < 0.14) {
    // Face warm natural tone with soft shadows
    const faceLight = (u < 0.48 ? 0.95 : 0.82) - (v - 0.3) * 0.3;
    r = 218 * faceLight;
    g = 186 * faceLight;
    b = 166 * faceLight;
  }
  // Hair contour
  const hairDist = Math.hypot((u - 0.5) * 1.15, v - 0.35);
  if (hairDist < 0.165 && (v < 0.45 || Math.abs(u - 0.5) > 0.11)) {
    r = 58; g = 50; b = 46;
  }
  // Shoulders & Linen Sage Blazer
  const shoulderDist = Math.hypot((u - 0.5) * 0.9, (v - 0.65) * 0.8);
  if (shoulderDist < 0.38 && v >= 0.48) {
    const drapeLight = 0.85 + 0.15 * Math.sin(u * 20);
    r = 138 * drapeLight;
    g = 154 * drapeLight;
    b = 134 * drapeLight;
  }
  // Inner neutral linen blouse
  if (v >= 0.50 && Math.abs(u - 0.5) < 0.08 && v < 0.75) {
    r = 242; g = 240; b = 234;
  }

  const grain = ((x * 19 + y * 67) % 19) / 19 - 0.5;
  r += grain * 3;
  g += grain * 3;
  b += grain * 3;

  return [r, g, b, 255];
});
fs.writeFileSync(path.join(publicDir, 'susan_moraes_retrato.png'), portraitBuf);

// 3. Consultorio: susan_moraes_consultorio.png
console.log('Rendering Consultorio image...');
const consultorioBuf = makePNG(1100, 550, (x, y, w, h) => {
  const u = x / w;
  const v = y / h;

  // Window view with serene bamboo garden on the right
  const isWindow = u > 0.55 && v < 0.85;
  let r, g, b;

  if (isWindow) {
    // Window garden: soft sage daylight and bamboo silhouettes
    const gardenLight = 1 - (u - 0.55) * 0.3;
    r = 210 * gardenLight;
    g = 228 * gardenLight;
    b = 205 * gardenLight;

    // Bamboo stalks
    for (let stalkX of [0.65, 0.72, 0.80, 0.88, 0.94]) {
      if (Math.abs(u - stalkX) < 0.012) {
        r = 110; g = 135; b = 100;
      }
    }
    // Window mullions (minimalist black frame)
    if (Math.abs(u - 0.55) < 0.008 || Math.abs(u - 0.77) < 0.006 || Math.abs(v - 0.45) < 0.006) {
      r = 45; g = 48; b = 46;
    }
  } else {
    // Warm interior: lime wash wall + warm oak floor
    const floorStart = 0.68;
    if (v > floorStart) {
      // Warm natural oak floor planks
      const plankY = ((v - floorStart) * 12) % 1;
      const plankShade = 0.95 + 0.1 * Math.sin(u * 15);
      r = (195 - plankY * 15) * plankShade;
      g = (168 - plankY * 12) * plankShade;
      b = (142 - plankY * 10) * plankShade;
    } else {
      // Warm mineral wall with soft natural shadow
      const wallDist = Math.hypot(u - 0.3, v - 0.2);
      r = 240 - wallDist * 25;
      g = 236 - wallDist * 22;
      b = 228 - wallDist * 26;
    }

    // Designer therapy armchair silhouette
    const chairCenterX = 0.32;
    const chairCenterY = 0.62;
    const cdx = (u - chairCenterX) * 2;
    const cdy = (v - chairCenterY) * 2;
    if (cdx * cdx + cdy * cdy < 0.12 && v > 0.48) {
      // Cream textured fabric
      r = 225 - cdy * 30;
      g = 220 - cdy * 28;
      b = 210 - cdy * 25;
    }
    // Oak side table
    if (u > 0.44 && u < 0.50 && v > 0.60 && v < 0.75) {
      r = 160; g = 132; b = 105;
    }
  }

  return [r, g, b, 255];
});
fs.writeFileSync(path.join(publicDir, 'susan_moraes_consultorio.png'), consultorioBuf);

// 4. Contato: susan_moraes_contato.png
console.log('Rendering Contato image...');
const contatoBuf = makePNG(800, 600, (x, y, w, h) => {
  const u = x / w;
  const v = y / h;

  // Soft atmospheric warm morning corner
  const lightFactor = Math.max(0, 1 - Math.hypot(u - 0.15, v - 0.15) * 0.9);
  let r = 242 - v * 35 + lightFactor * 20;
  let g = 238 - v * 30 + lightFactor * 18;
  let b = 230 - v * 40 + lightFactor * 15;

  // Flowing linen drape texture (waving curves)
  const drapeCurve = Math.sin(v * 8) * 0.08 + 0.35;
  if (u < drapeCurve) {
    const drapeShade = 0.9 + 0.15 * Math.cos(u * 25 + v * 5);
    r = 232 * drapeShade;
    g = 228 * drapeShade;
    b = 218 * drapeShade;
  }

  // Travertine ceramic cup & saucer
  const cupX = 0.62;
  const cupY = 0.60;
  const cupDist = Math.hypot((u - cupX) * 1.4, v - cupY);
  if (cupDist < 0.11) {
    const ceramicLight = 0.8 + 0.25 * (1 - cupDist / 0.11);
    r = 210 * ceramicLight;
    g = 205 * ceramicLight;
    b = 195 * ceramicLight;
  }
  // Delicate sage leaf resting on table
  const leafDist = Math.hypot(u - 0.72, v - 0.62);
  if (leafDist < 0.035) {
    r = 138; g = 154; b = 134;
  }

  const grain = ((x * 11 + y * 79) % 13) / 13 - 0.5;
  r += grain * 3;
  g += grain * 3;
  b += grain * 3;

  return [r, g, b, 255];
});
fs.writeFileSync(path.join(publicDir, 'susan_moraes_contato.png'), contatoBuf);

console.log('All 4 images generated successfully in /public!');
