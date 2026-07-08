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
| `5551999999999` | todos os links wa.me | número real do WhatsApp |
| `(51) 99999-9999` | textos visíveis | número formatado real |
| `[CONFIRMAR HORÁRIO]` / `[CONFIRMAR]` | home, contato, rodapés | horário real |
| `caixinhamagicapresentes.com.br` | canonical, og:url, schema, sitemap | domínio real |
| `[PLACEHOLDER — história real...]` | quem-somos.html | história contada pelo cliente |
| Blocos "FOTO: ..." | todas as páginas | fotos reais (cada bloco sugere o enquadramento) |
| Depoimentos | home | avaliações reais |
| `og-capa.jpg` | meta og:image | criar arte 1200×630 |

## Dados confirmados da loja
- **Razão social:** Caixinha Magica Presentes LTDA — CNPJ 62.164.712/0001-01
- **Endereço:** Rua Dr. Ernesto Ludwig, 501, Loja 2 — Chácara das Pedras, Porto Alegre/RS, CEP 91330-420
- **Instagram:** @caixinhamagica.presentes
- **Identidade visual:** Manual em `G:\_F5 - HD\Artes\CAIXINHA MÁGICA PRESENTES\MIV\` (cores e logos replicados em `css/style.css` e `assets/`)
