// Gera dist/index.html autocontido: CSS e JS inline, imagens como data URI.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = p => readFileSync(join(root, p), "utf8");

const css = read("css/style.css");
const js = read("js/main.js").replace(/"(assets\/img\/[\w-]+\.webp)"/g, (_, src) =>
  `"data:image/webp;base64,${readFileSync(join(root, src)).toString("base64")}"`
);

const html = read("index.html")
  .replace('<link rel="stylesheet" href="css/style.css">', () => `<style>\n${css}</style>`)
  .replace('<script src="js/main.js"></script>', () => `<script>\n${js}</script>`);

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/index.html"), html);
console.log(`dist/index.html gerado (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)`);
