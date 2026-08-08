/**
 * Copia estáticos e public para dentro do .next/standalone,
 * permitindo rodar `node .next/standalone/server.js` localmente.
 *
 * Estrutura esperada (igual ao Dockerfile):
 *   .next/standalone/.next/static/   <- .next/static/
 *   .next/standalone/public/         <- public/
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";

const root = new URL("../", import.meta.url);

const staticSrc = new URL(".next/static/", root);
const staticDst = new URL(".next/standalone/.next/static/", root);

const publicSrc = new URL("public/", root);
const publicDst = new URL(".next/standalone/public/", root);

function copyDir(src, dst) {
  if (!existsSync(src)) {
    console.log(`[standalone] fonte não encontrada, ignorado: ${src.pathname}`);
    return;
  }
  mkdirSync(dst, { recursive: true });
  cpSync(src, dst, { recursive: true });
  console.log(`[standalone] copiado ${src.pathname} -> ${dst.pathname}`);
}

copyDir(staticSrc, staticDst);
copyDir(publicSrc, publicDst);
