# Briefing da LP — registro da entrevista

> Preenchido pelo agente durante a leitura do briefing, a composição e a entrevista (PROMPT-PADRAO-LP, seções 0 a 0.3). Uma linha por entrada, atualizada assim que a resposta é confirmada. Se a sessão cair, o agente lê este arquivo e retoma da primeira entrada com status `pendente`.
>
> Status: `pendente` · `confirmado` · `default` (assumiu o valor padrão) · `pendência` (falta asset ou decisão do cliente) · `extraído` / `inferido` / `conflito` (vindos do documento de briefing, seção 0 do prompt)

## Origem: documento do cliente

| Campo                          | Valor                                                                                                                                                                                                                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arquivo recebido               | LP estática `harpyacessory-ux/LP-Tratamento-de-ar-spinplus-` (HTML/CSS/JS, clonada em `../LP-Tratamento-de-ar-spinplus`) e o briefing que veio nela, `docs/briefing-cliente/briefing_spinplus_compressores_parafuso.md`                                                     |
| Tipo                           | B (conteúdo solto) — a LP estática é a fonte de texto, fotos e decisões; o briefing é da oferta de **compressores de parafuso**, não de tratamento de ar, e só serviu para o núcleo da empresa                                                                              |
| Lido integralmente em          | `20/10/2026`                                                                                                                                                                                                                                                                |
| Referências visuais do cliente | **LP Spinplus Manutenção** (`../LP-ISPINPLUS-MANUTENCAO`) — pedido do usuário em 20/10/2026: "aplique os mesmos padrões da LP Spinplus manutenção de compressores". O layout da LP estática (catálogo com filtro lateral, rodapé de 4 colunas, topbar) **não** foi aplicado |
| Dados não aplicados por padrão | topbar com telefone, e-mail e redes; rodapé de 4 colunas com links do site; botão "Leia mais" por produto                                                                                                                                                                   |

### Mapa de aproveitamento

| Bloco da LP estática       | Veredito   | Destino                                      | Motivo                                                                                           |
| -------------------------- | ---------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| HERO                       | equivale   | Hero (estrutura fixa) + `hero` em content.ts | texto, selos e banner aproveitados; selo IR virou o eyebrow                                      |
| Linhas de produto (4)      | equivale   | `linhas`                                     | 4 famílias com 3 características cada                                                            |
| Catálogo (22 equipamentos) | equivale   | `vitrine`                                    | amplitude de catálogo reconhecida pela foto; o filtro lateral virou uma prateleira por família   |
| Diferenciais (5)           | equivale   | `diferenciais`                               | 5 itens exatos                                                                                   |
| Segmentos (8 rótulos)      | cabe em    | `segmentos`                                  | a seção pede descrição e 3 bullets por setor, que a LP estática não tinha — redigidos, a validar |
| Contato                    | equivale   | Cotação (estrutura fixa)                     | texto aproveitado; o pedido de vazão/pressão/qualidade também alimentou `identificar`            |
| Topbar e rodapé            | descartado | —                                            | estrutura fixa do padrão                                                                         |

## Campanha

| Campo                      | Valor                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Foco desta LP              | tratamento de ar comprimido (secadores, filtros e drenos Ingersoll Rand)                                                   |
| Fora desta execução        | compressores de parafuso (briefing recebido) e manutenção (LP própria)                                                     |
| Palavra-chave principal    | `tratamento de ar comprimido` — **pendência**: expressão da categoria, herdada da LP estática, sem campanha que a confirme |
| Origem                     | sem briefing de campanha                                                                                                   |
| Área atendida              | estado do Rio de Janeiro — eyebrow e selo do hero, selo da cotação                                                         |
| Negativas de oferta        | nenhuma informada                                                                                                          |
| Negativas de intenção      | nenhuma informada                                                                                                          |
| Claims proibidos           | nenhum informado. Nenhum percentual de eficiência na página (o briefing veta "8% / 13%" sem comprovação)                   |
| Divergência de vocabulário | —                                                                                                                          |

## Composição

Aplicada em: `20/10/2026` · comando: `npm run compose -- linhas vitrine identificar segmentos diferenciais`

### Seções escolhidas

| Fase       | Seção          | Fundo     | Respiro     | Por que entrou                                                                                         |
| ---------- | -------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | as 4 famílias da LP estática                                                                           |
| oferta     | `vitrine`      | branco    | pt-20 pb-10 | os 22 equipamentos com foto e nome                                                                     |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | bloco navy obrigatório da fase; variante "o que define a tecnologia certa" (vazão, pressão, qualidade) |
| prova      | `segmentos`    | cinza-100 | pt-6 pb-16  | os 8 setores da LP estática                                                                            |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | os 5 diferenciais                                                                                      |

### Seções descartadas

| Seção            | Motivo do descarte                          | O que faria ela entrar                      |
| ---------------- | ------------------------------------------- | ------------------------------------------- |
| `processo`       | processo comercial não confirmado           | 4 a 6 etapas reais do atendimento           |
| `especificacoes` | sem ficha técnica por modelo                | vazão, pressão, ponto de orvalho por modelo |
| `perguntas`      | sem dúvidas reais do comercial              | 4 a 8 perguntas com respostas verificadas   |
| `clientes`       | sem logos autorizados nem números com fonte | logos + 3 números com escopo                |
| `aplicacoes`     | sem fotos de operação                       | 4 contextos com foto 1200×900               |

## Entradas do núcleo

| #   | Entrada                 | Status    | Valor confirmado                                                           | Referência / observação                                                                          |
| --- | ----------------------- | --------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1   | MARCA                   | extraído  | Spinplus                                                                   | igual à LP de manutenção                                                                         |
| 2   | MARCA_CURTA             | extraído  | Spinplus                                                                   |                                                                                                  |
| 3   | PRODUTO_PRINCIPAL       | extraído  | Tratamento de ar comprimido                                                | H1 da LP estática                                                                                |
| 4   | CONTEXTO_DE_USO         | extraído  | Ingersoll Rand                                                             | mesmo formato da manutenção: H1 = produto + marca atendida                                       |
| 5   | PUBLICO                 | inferido  | indústrias do RJ com sistema de ar comprimido                              |                                                                                                  |
| 6   | HERO                    | extraído  | texto e selos da LP estática                                               |                                                                                                  |
| 7   | MARCAS_ATENDIDAS        | pendência | logo Ingersoll Rand no header e no carrossel                               | mesma situação da manutenção: autorização de uso do logo não registrada                          |
| 8   | SELOS_DE_CONFIANCA      | extraído  | 20+ anos · distribuidor IR no RJ · técnicos certificados                   |                                                                                                  |
| 9   | ENDERECO                | extraído  | Estrada do Outeiro Santo, 631, Boxes 15/16 - Taquara, Rio de Janeiro - RJ  |                                                                                                  |
| 10  | URL_FINAL + PRIVACIDADE | definido  | `https://spinplus.com.br/tratamento-de-ar/`                                | URL publicada (21/10/2026); a provisória dava 404. Privacidade: a do site                        |
| 11  | SHORTCODES              | default   | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]` | os mesmos da manutenção                                                                          |
| 12  | WHATSAPP                | default   | vazio (sem botão flutuante)                                                | como na manutenção; o CTA "Chamar no WhatsApp" da cotação continua                               |
| 13  | STACK + PUBLICACAO      | default   | Astro, padrão B2                                                           | o repositório estático (`harpy`) ainda tem a versão HTML — publicar lá substitui o site estático |
| 14  | TOKENS_DE_COR + FONTE   | extraído  | os da manutenção (navy Spinplus, vermelho de marcação)                     | `src/styles/global.css` trazido da manutenção                                                    |
| 15  | CAMPANHA                | pendência | ver "Campanha"                                                             |                                                                                                  |

## Entradas por seção

### `linhas` — Linhas de produto

| Item / campo | Status   | Valor confirmado                        | Observação                                                                                                                                           |
| ------------ | -------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4 famílias   | extraído | refrigeração, adsorção, filtros, drenos | card escuro: drenos                                                                                                                                  |
| features     | extraído | as 12 da LP estática                    | dois itens seguem **inferidos** na LP estática: "ponto de orvalho positivo/negativo" e "protegem secador e instrumentação" — validar com o comercial |

### `vitrine` — Vitrine de produtos

| Item / campo | Status   | Valor confirmado     | Observação                                      |
| ------------ | -------- | -------------------- | ----------------------------------------------- |
| 22 itens     | extraído | nomes da LP estática | sem descrição (tudo ou nada); 4 grupos sem logo |

### `identificar` — Painel de apoio

| Item / campo                              | Status    | Valor confirmado                | Observação                                       |
| ----------------------------------------- | --------- | ------------------------------- | ------------------------------------------------ |
| Vazão, pressão, qualidade do ar           | extraído  | texto de contato da LP estática |                                                  |
| Ponto de orvalho, temperatura, compressor | pendência | redigidos                       | **validar com o comercial** quais dados ele pede |

### `segmentos` — Segmentos atendidos

| Item / campo         | Status    | Valor confirmado                                        | Observação                                                                    |
| -------------------- | --------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 7 setores + "outras" | extraído  | os 8 da LP estática, com metalurgia e siderurgia juntas | o 8º lugar é obrigatoriamente "outras"                                        |
| descrições e bullets | pendência | redigidos a partir do uso do ar em cada setor           | **validar com o comercial**; sem foto de setor, cada aba mostra o painel navy |

### `diferenciais` — Diferenciais

| Item / campo   | Status   | Valor confirmado                        | Observação                                        |
| -------------- | -------- | --------------------------------------- | ------------------------------------------------- |
| 5 diferenciais | extraído | os 5 da LP estática                     | "Portfólio industrial" virou "Portfólio completo" |
| frase          | extraído | "Uma empresa que faz só ar comprimido." |                                                   |

## Assets

| Asset               | Arquivo                          | Status     | Observação                                                                                                                    |
| ------------------- | -------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Logo                | `src/assets/LOGO.png`            | confirmado | o da manutenção (598×200)                                                                                                     |
| Logo Ingersoll Rand | `src/assets/marca-ingersoll.png` | pendência  | o da manutenção; autorização de uso não registrada (entrada 7)                                                                |
| Banner do hero      | `src/assets/heroBg.png`          | confirmado | `hero-sala-compressores.webp` da LP estática (render IR com secador e filtros), 1899×828 → 1981×900, recorte na borda direita |

| Asset                | Arquivo                                         | Status     | Observação                                                                                                               |
| -------------------- | ----------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| Linhas (4)           | `src/assets/linhas/linha-*.png` (600×800)       | pendência  | recortes do site da Spinplus sobre painel claro, no formato vertical da variante; fotos de origem pequenas (326 a 447px) |
| Vitrine (22)         | `src/assets/vitrine/*.png` (800×600)            | pendência  | fotos do site sem tratamento, centralizadas; recorte padronizado continua pendente                                       |
| Fundo do painel navy | `src/assets/identificar/sala-ar-comprimido.jpg` | confirmado | `sala-compressores-ingersoll.webp` da LP estática, que estava sem uso                                                    |
| Diferenciais         | `src/assets/diferenciais/cenario.jpg`           | confirmado | o banner da manutenção (técnico em diagnóstico)                                                                          |
| Segmentos            | —                                               | pendência  | sem fotos de setor                                                                                                       |

## Desvios do padrão

Todos herdados da LP Spinplus Manutenção, a pedido do usuário (20/10/2026). O registro
completo de cada um, com medidas e motivos, está no `docs/BRIEFING.md` daquela LP.

| Peça           | Como foi trazida                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header         | arquivo da manutenção: barra branca, logos Spinplus \| Ingersoll Rand com separador, tagline navy                                                                                                                                                                                                                                                                                                                                                   |
| Hero           | arquivo da manutenção (terceira versão: navy da marca, banner ancorado ao fim do texto, 3 pontos soltos, card de vidro com o chat)                                                                                                                                                                                                                                                                                                                  |
| Cotação        | merge de 3 vias: texto à esquerda, área do shortcode do formulário à direita, sem caixa e sem nota de LGPD                                                                                                                                                                                                                                                                                                                                          |
| `global.css`   | merge de 3 vias com o template v2.9.0: escala tipográfica, divisórias arredondadas (`--lp-round`), tokens da manutenção                                                                                                                                                                                                                                                                                                                             |
| `check-lp.mjs` | merge de 3 vias: assinaturas A8 repinadas como na manutenção, com a faixa de proporção da logo do v2.9.0                                                                                                                                                                                                                                                                                                                                            |
| `icons.ts`     | merge de 3 vias: engrenagem, `calendar`, `offshore` e `hard-hat` da manutenção                                                                                                                                                                                                                                                                                                                                                                      |
| `linhas`       | **estrutura original da LP estática** (pedido do usuário em 20/10/2026, `ProductLines.astro`): bloco navy de ponta a ponta, rótulo vermelho com traço, título com destaque vermelho (`highlight`) e parágrafo ao lado, grade 2×2 de cards brancos horizontais com chip, 3 características e "Ver modelos", que filtra o catálogo                                                                                                                    |
| `vitrine`      | **estrutura original da LP estática** (pedido do usuário em 20/10/2026, `ProductShowcase.astro`): faixa navy com rótulo, título com destaque, texto e total; barra lateral de filtros por família (fixa ao rolar) e grade de 3 colunas. Os grupos viraram os filtros (`icon` novo em cada grupo). O link de cada card é o `cta.card` ("Falar com especialista") e abre o atendimento, no lugar do "Leia mais" da estática, que só levava ao contato |
| `diferenciais` | variante local da manutenção (`WhyBrand.astro`): banner fundido no navy e faixa branca com os 5 diferenciais                                                                                                                                                                                                                                                                                                                                        |
| `identificar`  | **variante nova nesta LP** (`SupportPanel.astro`), no desenho do "Como funciona" da manutenção: navy de ponta a ponta com foto ao fundo, 6 variáveis em duas colunas com número vermelho, fio vermelho fechando                                                                                                                                                                                                                                     |
| `segmentos`    | componente da biblioteca v2.9.0, com título na escala única e respiro compensado no componente                                                                                                                                                                                                                                                                                                                                                      |

**Linhas e catálogo em navy.** A estrutura original põe as duas seções em azul, logo depois
do hero navy: a página passa a ter navy em sequência (hero → linhas → faixa do catálogo).
É desvio da regra de dois blocos navy no miolo, por pedido do usuário. O `check:lp` não o
acusa, porque lê o `carriesNavy` dos manifestos, e não a cor renderizada.

**Respiro padronizado como na manutenção** (pedido do usuário em 20/10/2026): 80px entre
o conteúdo e a borda de cada seção no desktop e 64px no celular, em seções claras e blocos
navy (`py-16 lg:py-20`), medidos no navegador a partir da borda visível. A faixa navy e o
corpo do catálogo usam esse respiro; em `segmentos` a compensação fica no componente
(`pt-10 lg:pt-14` no cabeçalho e 16px no fim), sobre o `pt-6 pb-16` do ritmo. Largura única:
container de 1320px com 40px de padding em todas as seções.

**Correção de tipo em `segmentos`.** Com nenhum setor com foto, o tipo inferido dos dados
perde `photo` e `astro check` falha. O componente passou a tipar os itens pela interface
`Segment`. A mesma correção cabe na biblioteca do starter.

**Mesmo risco das variantes da manutenção:** `npm run compose` recopia os componentes da
biblioteca e desfaz as variantes. Depois de recompor, restaure do git:
`git checkout -- src/components/sections/ProductLines.astro src/components/sections/ProductShowcase.astro src/components/sections/WhyBrand.astro src/components/sections/SupportPanel.astro src/components/sections/SegmentsShowcase.astro`.

**Avisos conhecidos do check:lp:** proporção e resolução das fotos de `linhas` (recorte
justo do produto, sem margem, como na LP estática; as fotos de origem têm 134 a 351px),
proporção do banner de `diferenciais` (o mesmo aviso da manutenção) e títulos longos da
vitrine.

### Ajustes de 21/10/2026 (pedidos do usuário)

- **H1 em duas linhas, texto do usuário:** `Soluções de tratamento de ar` / `comprimido sob medida`, com "sob medida" em vermelho. As linhas ficam em `hero.titleLines` e o `hero.title` (o que o `check:lp` compara) é a junção delas, então a palavra-chave continua no H1. A partir de 1280px cada linha fica sem quebra e a primeira (718px) avança sobre a coluna 2 do grid, reservada ao banner e vazia neste hero; abaixo disso o título quebra naturalmente. No celular o H1 desceu para 36px (era 44px e ocupava cinco linhas). A marca saiu do H1 e foi para o eyebrow ("Distribuidor autorizado Ingersoll Rand").
- **Texto do hero mais comercial B2B:** "Secadores, filtros coalescentes e drenos Ingersoll Rand dimensionados para a vazão e a pressão da sua planta, com suporte técnico de quem é distribuidor no RJ."
- **Sem quantidade de produtos na página:** saiu o destaque "22 equipamentos" da faixa do catálogo, o "22" do texto dela, os contadores dos filtros e os chips "5 modelos", "11 modelos" etc. das linhas, que viraram a etapa do tratamento (Secagem padrão, Secagem crítica, Filtragem, Drenagem).
- **Segmentos:** "Setores que a Spinplus já atende" virou "Tratamento de ar para cada setor industrial".
- **Margens e espaçamentos:** medidos no navegador em 390, 1024, 1280, 1440 e 1920px. Todas as seções alinham com o header (40px até 1280, container de 1320px acima); o header no celular passou de 16 para 24px, como as seções. Cabeçalho → conteúdo padronizado em 48px (`mt-12`) em linhas e segmentos, como na cotação.
- **Filtro do catálogo fixo na rolagem:** o `overflow-hidden` do bloco anulava o `sticky`; virou `overflow-clip`, que recorta os cantos sem criar contêiner de rolagem.
- **Painel de dimensionamento:** título em duas linhas (coluna de 560px; variáveis em 620px). A foto aparece no bloco inteiro: véu de 86–78% sob o texto, 42% no vão entre as colunas e 70–76% sob as variáveis. Contraste do texto branco no pior caso (foto branca atrás): cerca de 8,7:1 à esquerda e 7:1 à direita.
- **Diferenciais:** "Uma empresa que faz só ar comprimido." virou "Especialista em ar comprimido industrial.", sem a restrição do "só".
- **Cotação:** título "Fale com a equipe técnica da Spinplus." e eyebrow "Fale com a Spinplus" (o antigo repetia o título).
- **Cotação → rodapé igual à manutenção:** o empilhamento das divisórias (`z-index` decrescente em `global.css`) cobria só 6 seções, as da manutenção; esta LP tem 7, e o rodapé pintava por cima da cotação, mostrando uma faixa de 48px com a borda no meio. A escada agora vai até 8 seções. O componente do rodapé é o mesmo da manutenção, com os tokens de cor do v2.9.0.
- **Transição hero → linhas:** as duas seções são navy e a curva sumia. O hero fecha com o fio vermelho de 3px dos outros blocos navy e uma sombra que o descola de linhas.

## Aprovação

- [ ] Composição apresentada e aprovada pelo usuário em: `____/____/______`
- [ ] Resumo da entrevista apresentado e aprovado pelo usuário em: `____/____/______`
- [x] Padrão B2 versão: `2.9.0`
