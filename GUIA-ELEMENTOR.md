# Guia de Replicação no Elementor — Caixinha Mágica Presentes

Este guia mapeia o protótipo HTML para **widgets nativos do Elementor + Elementor Pro**, sem plugins extras. Cada seção do HTML tem um comentário `<!-- Elementor: ... -->` indicando o widget correspondente.

---

## 1. Site Settings (Design System global)

### Global Colors (Site Settings → Design System → Global Colors)
| Nome | Hex | Uso |
|---|---|---|
| Coral (Primary) | `#EC6A51` | Botões, CTAs, footer, destaques |
| Coral Escuro | `#C94B33` | Hover de botões, links (contraste AA) |
| Rosa | `#F3B7AE` | Fundos suaves, cards |
| Laranja | `#F9B042` | Ícones, estrelas, detalhes |
| Laranja Escuro | `#B36F0A` | Texto laranja sobre creme (AA) |
| Amarelo | `#F4D920` | Rabiscos, confetes |
| Verde | `#71C287` | Cards, ícones |
| Verde Escuro | `#2E7C46` | Texto verde sobre creme (AA) |
| Azul | `#8CBADB` | Cards, mapa |
| Azul Escuro | `#23689B` | Texto azul sobre creme (AA), focus |
| Creme (Background) | `#FDF4E9` | Fundo global do site |
| Creme 2 | `#FBEBD7` | Seções alternadas |
| Ink (Texto) | `#46362F` | Texto principal |
| Ink Suave | `#6E594F` | Texto secundário |

> **Importante (acessibilidade):** as cores claras da marca (amarelo, laranja, verde, azul claros) são só para fundos/ícones decorativos. Para TEXTO, usar sempre as versões "Escuro" — elas garantem contraste mínimo 4.5:1 sobre o creme.

### Global Fonts (Site Settings → Design System → Global Fonts)
| Papel | Fonte | Peso | Observação |
|---|---|---|---|
| Primary (títulos) | Quicksand | 700 | Google Fonts nativo do Elementor |
| Secondary (kickers) | Caveat | 700 | Frases manuscritas tipo "presentes" do logo |
| Text (corpo) | Quicksand | 400/500 | 17px, line-height 1.65 |
| Accent (botões) | Quicksand | 700 | — |

### Outros ajustes globais
- **Background do site:** creme `#FDF4E9` (Site Settings → Background)
- **Border radius padrão de cards:** 28px
- **Botões:** border-radius 999px (pílula), padding 14px 30px
- **Container width:** 1160px
- **Sombra de cards:** `0 10px 30px -12px rgba(70,54,47,.18)`

---

## 2. Theme Builder (Elementor Pro)

### Header (Theme Builder → Header, condição: todo o site)
- Container flex horizontal, sticky (Advanced → Motion Effects → Sticky: Top), fundo creme com 92% opacidade + blur (Advanced → Background → backdrop-filter via CSS custom: `backdrop-filter: blur(8px)`)
- **Site Logo** (à esquerda, ~150px) → usar `assets/logo-principal.svg`
- **Nav Menu** (WordPress Menu com as 6 páginas; breakpoint mobile: hambúrguer nativo)
- **Button** verde WhatsApp (`#1FAF54`, hover `#178A42`) com ícone do WhatsApp — link `https://wa.me/NUMERO?text=...`
- Item ativo do menu: pill coral com texto branco (Style → Active)

### Footer (Theme Builder → Footer, condição: todo o site)
- Container fundo **coral** `#EC6A51`, com imagem de fundo `pattern-confete.svg` em baixa opacidade (Background Overlay, opacity ~0.12)
- 4 colunas: Logo (dentro de um card branco arredondado) + texto e Social Icons | Nav (Icon List) | Ocasiões (Icon List) | Contato (Icon List com ícones)
- Barra inferior: Text Editor com © dinâmico (shortcode do ano) + CNPJ

### Single Post (Theme Builder → Single Post)
- Breadcrumb (Rank Math/Yoast via shortcode) + Post Title + Post Info + Featured Image (moldura blob: border-radius `58% 42% 55% 45% / 52% 48% 56% 44%`) + Post Content + Posts relacionados (Posts widget)

### Popup opcional
- Botão flutuante do WhatsApp: usar um **template fixo** com HTML widget ou o recurso de Custom Code (Elementor Pro → Custom Code) colando o `<a class="zap-flutuante">` do protótipo.

---

## 3. Mapa página → widgets

### Home (`index.html`)
| Seção | Estrutura Elementor |
|---|---|
| Hero | Container 2 col → col 1: Heading (badge = Text + ícone), Heading H1, Text Editor, 2× Button, Icon List horizontal (meta) · col 2: Image com border-radius blob + 2–3 Images decorativas em posição absoluta (Motion Effects → Floating) |
| Onda divisória | Shape Divider "Waves" (Container seguinte, cor creme-2) |
| Diferenciais | Container 4 col → 4× **Icon Box** (ícone SVG custom via SVG upload) |
| Categorias | Container 3 col → 6× **Call to Action** (ou Image Box) com fundos em degradê suave |
| Destaque 3D | Container coral (Shape Divider Waves em cima/embaixo) 2 col → Image blob + Heading/Text/Icon List/Button branco |
| Quem somos teaser | Container 2 col → Text + Button / Image blob |
| Depoimentos | **Testimonial Carousel** (Elementor Pro) — 3 depoimentos, estrelas |
| Blog teaser | **Posts** widget (Elementor Pro), 3 colunas, meta de data |
| FAQ | **Accordion** — ativar FAQ Schema no Rank Math/Yoast (a marcação JSON-LD do protótipo serve de referência) |
| Visite a loja | Container 2 col → Icon List + **Google Maps** widget |

### Quem Somos (`quem-somos.html`)
Hero interno (Heading + Text + Image blob) → História (2 col: Image + Text Editor) → Valores (3× Icon Box em cards) → Faixa CTA coral → Visite a loja (template salvo da home).

### Produtos (`produtos.html`)
Hero centralizado com 2 botões → **Marcas que trabalhamos**: grid de 12 Image Box (logo + nome da marca) — trocar cada placeholder de câmera pela logo real assim que chegar (ver `levantamento-logos-marcas.docx`) → por categoria: Container com âncora (CSS ID: `neurodivergentes`, `educativos`, `jogos`, `criativos`, `pelucias`) + grid 4 col de **Image Box + Button** (cada card de categoria tem foto placeholder no topo — trocar pela foto real do produto) → seção "Como comprar" (3× Icon Box numerado em fundo coral).
> Futuro WooCommerce: substituir os grids por **Loop Grid/Products** sem mudar o layout.

### Personalizados 3D (`presentes-personalizados.html`)
Hero 2 col → grid 6 cards "o que dá pra criar" (Image Box) + 1 card CTA → "Como funciona" 4 passos (Icon Box com número em fonte Caveat) → Accordion FAQ → CTA final coral.

### Blog (`blog.html`)
Hero centralizado → **Posts** widget (grade 3 col, paginação nativa) → card de newsletter com **Form** (Elementor Pro, campo e-mail + botão).

### Contato (`contato.html`)
Hero centralizado → 2 col: Icon List de canais + Google Maps | **Form** (Elementor Pro) com campos Nome*, WhatsApp*, E-mail, Assunto (select), Mensagem* — Actions After Submit: e-mail + (opcional) redirect para WhatsApp.

---

## 4. SEO / GEO / AIO no WordPress

1. **Plugin SEO** (Rank Math ou Yoast): copiar `<title>` e `meta description` de cada página do protótipo (estão no `<head>` de cada HTML).
2. **Schema:** o protótipo traz JSON-LD pronto (`ToyStore`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`). No Rank Math: Local SEO ativa o LocalBusiness/ToyStore; FAQ usa o bloco/recurso de FAQ; Articles são automáticos nos posts.
3. **robots.txt e sitemap:** o plugin SEO gera automaticamente; conferir se os bots de IA (GPTBot, ClaudeBot, PerplexityBot) não estão bloqueados (ver `robots.txt` do protótipo).
4. **llms.txt:** subir o arquivo `llms.txt` na raiz do site (via FTP ou gerenciador de arquivos).
5. **Google Business Profile:** cadastrar/reivindicar a ficha da loja com o MESMO nome, endereço e telefone do site (NAP consistente) — é o fator nº 1 de SEO local.
6. **Imagens:** ao subir fotos reais, usar WebP, `alt` descritivo (os placeholders indicam o que fotografar) e nomes de arquivo descritivos (`presente-personalizado-3d-porto-alegre.webp`).

---

## 5. Checklist de substituições antes de publicar

- [x] WhatsApp real: (51) 98910-3293
- [x] Horário real: seg-sex 9h-18h30, sáb 9h-17h
- [x] Endereço real: Rua Dr. Jorge Fayet, 624, Chácara das Pedras, Porto Alegre/RS, CEP 91330-330
- [ ] `caixinhamagicapresentes.com.br` → domínio real contratado
- [ ] Foto placeholders → fotos reais (cada placeholder tem sugestão de foto)
- [ ] Logos das 12 fábricas parceiras (ver `levantamento-logos-marcas.docx`)
- [ ] Coordenadas `geo` exatas no schema (index.html) para o endereço atual
- [ ] `og-capa.jpg` → criar imagem de compartilhamento 1200×630
- [ ] História real em Quem Somos (marcada com `[PLACEHOLDER]`)
- [ ] Depoimentos ilustrativos → avaliações reais (Google/Instagram)
- [ ] Coordenadas geo no schema (latitude/longitude exatas do Google Maps)
