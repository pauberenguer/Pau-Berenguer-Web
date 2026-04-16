#!/bin/bash
# Genera páginas HTML completas para preview local
# Usa carpetas con index.html para URLs limpias
DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/_preview"
rm -rf "$OUT"
mkdir -p "$OUT"

CSS=$(<"$DIR/CUSTOM_CSS.css")
HEAD=$(<"$DIR/HEAD_CODE.html")

pages=(
  "1-landing:."
  "2-gracias:gracias"
  "3-politica-privacidad:politica-privacidad"
  "4-terminos:terminos"
  "5-optin:optin"
  "6-gracias-llamada:gracias-llamada"
)

for entry in "${pages[@]}"; do
  folder="${entry%%:*}"
  path="${entry##*:}"
  BODY=$(<"$DIR/pages/$folder/BODY_CONTENT.html")

  mkdir -p "$OUT/$path"
  cat > "$OUT/$path/index.html" <<ENDHTML
<!DOCTYPE html>
<html lang="es" data-theme="a">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pau Berenguer — IA</title>
${HEAD}
<style>
${CSS}
</style>
</head>
<body>
${BODY}
</body>
</html>
ENDHTML

  echo "✓ /$path"
done

# Copy assets
for f in "$DIR/assets/"*; do
  cp "$f" "$OUT/" 2>/dev/null
done

echo ""
echo "Preview generado en _preview/"
echo "Abriendo en http://localhost:8081"
echo ""
echo "  /                    → Landing"
echo "  /gracias             → Gracias"
echo "  /politica-privacidad → Privacidad"
echo "  /terminos            → Términos"
echo "  /optin               → Optin"
echo "  /gracias-llamada     → Gracias Llamada"
echo ""
echo "Pulsa Ctrl+C para parar"
echo ""
cd "$OUT"
python3 -m http.server 8081
