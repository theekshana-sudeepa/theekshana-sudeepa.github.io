import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const ssrOutDir = path.join(rootDir, "dist-ssr");

// 1. Build lightweight SSR entry using Vite's native SSR bundler
execFileSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["vite", "build", "--ssr", "src/entry-server.jsx", "--outDir", "dist-ssr"],
  { stdio: "inherit", cwd: rootDir }
);

try {
  // 2. Render React 19 component tree to static HTML string
  const entryPath = path.join(ssrOutDir, "entry-server.js");
  const { render } = await import(pathToFileURL(entryPath).href);
  const appHtml = render();

  // 3. Inject pre-rendered HTML into dist/index.html
  const indexPath = path.join(distDir, "index.html");
  const template = fs.readFileSync(indexPath, "utf-8");
  const target = '<div id="root"></div>';

  if (!template.includes(target)) {
    throw new Error("Could not locate <div id=\"root\"></div> in dist/index.html");
  }

  const prerendered = template.replace(target, `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(indexPath, prerendered, "utf-8");
  console.log(`Pre-rendered ${appHtml.length} bytes of static HTML into dist/index.html`);
} finally {
  // 4. Clean up temporary SSR bundle
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}
