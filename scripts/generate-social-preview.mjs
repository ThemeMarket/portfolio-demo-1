import sharp from "sharp";

const textLayer = Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <text x="310" y="282" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="60" font-weight="700">Walter Joel Castil Corea</text>
    <text x="312" y="340" fill="#c7c2ca" font-family="Arial, Helvetica, sans-serif" font-size="29">Ingeniero en Sistemas de Información</text>
    <text x="80" y="532" fill="#a9a3ad" font-family="Arial, Helvetica, sans-serif" font-size="20">walterjoelcode.github.io</text>
  </svg>
`);

const [logo, background] = await Promise.all([
  sharp("src/assets/logoport.svg").resize(138, 104, { fit: "contain" }).png().toBuffer(),
  sharp("src/assets/social-preview-background.svg").png().toBuffer(),
]);

await sharp(background)
  .composite([
    { input: logo, left: 116, top: 226 },
    { input: textLayer, left: 0, top: 0 },
  ])
  .png()
  .toFile("public/social-preview.png");
