# Caixinha Mágica Presentes — Protótipo do site institucional

Protótipo navegável em HTML/CSS puro, criado para aprovação do cliente e posterior replicação no **Elementor + Elementor Pro** (ver `GUIA-ELEMENTOR.md`).

## Como visualizar
Abra `index.html` em qualquer navegador (duplo clique). Todas as páginas são navegáveis entre si.

## Páginas
- `index.html` — Home
- `quem-somos.html` — Quem Somos
- `produtos.html` — Produtos (com âncoras por categoria)
- `presentes-personalizados.html` — Personalizados em impressão 3D
- `blog.html` — Blog + `blog/` com 3 artigos SEO prontos
- `contato.html` — Contato com formulário

## SEO / GEO / AIO já incluído
- Title + meta description únicos por página
- JSON-LD: `ToyStore` (LocalBusiness), `Service`, `FAQPage`, `Article`, `BreadcrumbList`
- Open Graph para redes sociais
- `sitemap.xml`, `robots.txt` (liberando bots de IA) e `llms.txt`
- Conteúdo com palavras-chave locais ("Porto Alegre", "Chácara das Pedras") e respostas diretas no 1º parágrafo (AIO)

## O que precisa ser preenchido (buscar por estes textos)
| Placeholder | Onde | Substituir por |
|---|---|---|
| `caixinhamagicapresentes.com.br` | canonical, og:url, schema, sitemap | domínio real |
| `[PLACEHOLDER — história real...]` | quem-somos.html | história contada pelo cliente |
| Blocos "FOTO: ..." | todas as páginas | fotos reais (cada bloco sugere o enquadramento) |
| Logos das fábricas | produtos.html (seção "Marcas que trabalhamos") | ver `levantamento-logos-marcas.docx` |
| Depoimentos | home | avaliações reais |
| `og-capa.jpg` | meta og:image | criar arte 1200×630 |
| Coordenadas `geo` no schema (index.html) | aproximadas para a Chácara das Pedras | latitude/longitude exatas do Google Maps p/ o novo endereço |

## Dados confirmados da loja
- **Razão social:** Caixinha Magica Presentes LTDA — CNPJ 62.164.712/0001-01
- **Endereço:** Rua Dr. Jorge Fayet, 624 — Chácara das Pedras, Porto Alegre/RS, CEP 91330-330
- **Horário:** Segunda a sexta, 9h às 18h30 · Sábado, 9h às 17h
- **WhatsApp:** (51) 98910-3293
- **Instagram:** @caixinhamagica.presentes
- **Entrega:** até 3h em Porto Alegre (motoboy) · todo o Brasil pelos Correios
- **Identidade visual:** Manual em `G:\_F5 - HD\Artes\CAIXINHA MÁGICA PRESENTES\MIV\` (cores e logos replicados em `css/style.css` e `assets/`)
