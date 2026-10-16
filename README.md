# Portfólio — Rafael Isaac

Portfólio estático (HTML + CSS + JS puro), com rotas por hash (`#/` e `#/case/slug`).

## Estrutura

```
index.html          → marcação da página
css/style.css       → estilos (tokens, grid, componentes)
js/main.js          → conteúdo (SITE, CASES, IMG), roteamento e renderização
assets/img/         → imagens WebP 2x exportadas do Figma
scripts/build.mjs   → gera dist/index.html autocontido
dist/               → saída do build (não versionada)
```

## Como rodar

Abra `index.html` direto no navegador ou use um servidor local:

```bash
npm run dev        # npx serve .
```

## Build (arquivo único)

```bash
npm run build
```

Gera `dist/index.html` com CSS e JS inline e as imagens embutidas como data URI —
o formato publicado no claude.ai.

## Onde editar

- Conteúdo: objetos `SITE` e `CASES` em `js/main.js`.
- Imagens: objeto `IMG`, logo antes de `SITE`. Para trocar uma imagem, substitua o arquivo em
  `assets/img/` ou aponte a chave para outro caminho. Mídias aceitam `{ src, alt }`; texto simples vira placeholder.
- Grid: 12 colunas (desktop), 8 (tablet), 4 (mobile). Tecla **G** mostra o overlay.
- Roteamento: os cliques em links `#/...` são tratados pelo script (compatível com o iframe do claude.ai).

## Pendências (marcadas com TODO no código)

- Links de LinkedIn, GitHub e CV
- Ano e stack de alguns projetos
- Contexto do Lexum (freelance ou pessoal)
