const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function extractTransparentSplash() {
  const blackPath = "/Users/koi/.gemini/antigravity/brain/f0f3dbc4-4627-4f31-b6c7-b6f971734ff4/splash_icon_solid_black_1794073558868.jpg";
  const whitePath = "/Users/koi/.gemini/antigravity/brain/f0f3dbc4-4627-4f31-b6c7-b6f971734ff4/splash_icon_solid_white_1794073572431.jpg";

  const { data: blackBuf, info: meta } = await sharp(blackPath).raw().toBuffer({ resolveWithObject: true });
  const { data: whiteBuf } = await sharp(whitePath).raw().toBuffer({ resolveWithObject: true });

  const width = meta.width;
  const height = meta.height;
  const channels = meta.channels; // 3 (RGB)

  const outputBuf = Buffer.alloc(width * height * 4); // RGBA

  let transparentPixels = 0;
  let opaquePixels = 0;

  for (let i = 0; i < width * height; i++) {
    const rB = blackBuf[i * 3];
    const gB = blackBuf[i * 3 + 1];
    const bB = blackBuf[i * 3 + 2];

    const rW = whiteBuf[i * 3];
    const gW = whiteBuf[i * 3 + 1];
    const bW = whiteBuf[i * 3 + 2];

    // Smith-Blinn formula:
    // rW - rB = 255 * (1 - alpha)
    // 1 - alpha = (rW - rB) / 255
    const diffR = Math.max(0, rW - rB);
    const diffG = Math.max(0, gW - gB);
    const diffB = Math.max(0, bW - bB);

    // Alpha is 1 - average diff / 255
    const avgDiff = (diffR + diffG + diffB) / 3.0;
    let alpha = 255 - avgDiff;

    // Threshold pure background
    if (alpha < 4) {
      alpha = 0;
      transparentPixels++;
    } else if (alpha > 250) {
      alpha = 255;
      opaquePixels++;
    }

    let rOut = rB;
    let gOut = gB;
    let bOut = bB;

    if (alpha > 0) {
      // Un-premultiply
      const aNorm = alpha / 255.0;
      rOut = Math.min(255, Math.round(rB / aNorm));
      gOut = Math.min(255, Math.round(gB / aNorm));
      bOut = Math.min(255, Math.round(bB / aNorm));
    } else {
      rOut = 0;
      gOut = 0;
      bOut = 0;
    }

    outputBuf[i * 4] = rOut;
    outputBuf[i * 4 + 1] = gOut;
    outputBuf[i * 4 + 2] = bOut;
    outputBuf[i * 4 + 3] = Math.round(alpha);
  }

  console.log(`Dimensions: ${width}x${height}`);
  console.log(`Transparent pixels: ${transparentPixels}, Opaque pixels: ${opaquePixels}`);

  const outPath = path.join(__dirname, "../public/splash-icon-transparent.png");
  await sharp(outputBuf, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log("Saved transparent splash icon to:", outPath);

  // Also create resized versions for splash screens (512x512, 384x384, 256x256, 128x128):
  const sizes = [512, 384, 256, 128];
  for (const size of sizes) {
    const sizeOut = path.join(__dirname, `../public/icons/splash/splash-${size}.png`);
    await sharp(outPath).resize(size, size).png().toFile(sizeOut);
    console.log(`Created splash size ${size}x${size}`);
  }
}

extractTransparentSplash().catch(console.error);

