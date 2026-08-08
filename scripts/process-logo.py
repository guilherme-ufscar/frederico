"""Remove o fundo preto do logotipo, gerando versão transparente.
Critério: mantém pixels onde há cor visível (canal máximo > limiar) e
reforça os dourados; fundo preto puro vira transparente."""
from PIL import Image
import numpy as np

src = "logo.webp"
dst = "public/logo-transparente.png"

img = Image.open(src).convert("RGBA")
arr = np.array(img).astype(np.float32)

r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]

# "Brilho máximo" — preto puro tem ~0 em tudo; qualquer traço de cor sobe
mx = np.maximum(np.maximum(r, g), b)

# Fundo preto: mx < 45. Dourado desenhado: mx > 45 (com transição suave)
alpha_new = np.clip((mx - 45) / 30.0, 0, 1) * (a / 255.0)

out = arr.copy()
out[..., 3] = alpha_new * 255

Image.fromarray(out.astype(np.uint8)).save(dst)
print("gerado", dst)

a2 = alpha_new
print("transparentes:", (a2 == 0).sum())
print("opacos:", (a2 >= 0.9).sum())
print("semi:", ((a2 > 0) & (a2 < 0.9)).sum())
print("alpha medio:", round(float(a2.mean()), 1))
