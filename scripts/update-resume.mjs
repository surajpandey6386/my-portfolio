// Usage: npm run resume -- path/to/new-resume.pdf
import fs from "fs";
const src = process.argv[2];
if (!src || !fs.existsSync(src) || !src.toLowerCase().endsWith(".pdf")) {
  console.error("Provide a path to an existing .pdf file.");
  process.exit(1);
}
fs.rmSync("public/resume.pdf", { force: true });
fs.copyFileSync(src, "public/resume.pdf");
const f = "src/data/data.js";
fs.writeFileSync(
  f,
  fs
    .readFileSync(f, "utf8")
    .replace(/resumeVersion = '[^']*'/, `resumeVersion = '${Date.now()}'`),
);
console.log("Resume replaced. Commit and push to redeploy.");
