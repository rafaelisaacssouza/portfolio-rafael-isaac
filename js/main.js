/* =========================================================
   CONTEÚDO — edite aqui.
   Para usar imagem real em qualquer mídia, troque o texto do
   placeholder por { src: "caminho/da/imagem.jpg", alt: "..." }.
   ========================================================= */
/* Imagens otimizadas (WebP 2x, exportadas do Figma), em assets/img/. Mantidas fora de CASES para leitura. */
const IMG = {
  "ds-hero": "assets/img/ds-hero.webp",
  "ds-cover": "assets/img/ds-cover.webp",
  "ds-cor": "assets/img/ds-cor.webp",
  "ds-tipo": "assets/img/ds-tipo.webp",
  "ds-button": "assets/img/ds-button.webp",
  "ds-antesdepois": "assets/img/ds-antesdepois.webp",
  "ds-cardinput": "assets/img/ds-cardinput.webp",
  "lx-hero": "assets/img/lx-hero.webp",
  "lx-cover": "assets/img/lx-cover.webp",
  "lx-detail": "assets/img/lx-detail.webp",
  "lx-ident": "assets/img/lx-ident.webp",
  "lx-comp": "assets/img/lx-comp.webp",
  "pcp-hero": "assets/img/pcp-hero.webp",
  "pcp-cover": "assets/img/pcp-cover.webp",
  "pcp-todas": "assets/img/pcp-todas.webp",
  "pcp-detalhe": "assets/img/pcp-detalhe.webp",
  "wd-cooptures": "assets/img/wd-cooptures.webp",
  "wd-vorus": "assets/img/wd-vorus.webp",
};

const SITE = {
  name: "Rafael Isaac",
  fullName: "Rafael Isaac Silva de Souza",
  email: "rafaelisaacssouza@gmail.com",
  linkedin: "#", // TODO: link do LinkedIn
  github: "#", // TODO: link do GitHub
  cv: "https://docs.google.com/document/d/1rFLKWrrkzA1NkQYP4j9J9EM0CjIAY_mxXlP2uFAb3CQ/edit?usp=sharing",
  about: [
    "Atuo na interseção entre design e desenvolvimento, transformando problemas complexos em interfaces claras, consistentes e prontas para produção. Sou bacharel em Sistemas de Informação pela Libertas Faculdades Integradas, aplico Design Thinking, as heurísticas de Nielsen e design systems no meu processo, e sigo em constante evolução em UX/UI Design e arquitetura de frontend."
  ],
  experience: [
    ["Emsoft", "Frontend Developer & UX/UI Designer", "Atual"],
    ["Nexus Web", "Freelancer Web Designer", "Atual"],
    ["Anísio Visual", "Designer", "2020 – 2021"],
  ],
  education: [
    [
      "Libertas Faculdades Integradas",
      "Bacharelado em Sistemas de Informação",
      "2025",
    ],
  ],
};

const CASES = [
  {
    slug: "controle-pcp",
    title: "Controle PCP",
    context: "Emsoft",
    role: "Pesquisa, UX/UI e front-end",
    year: "—", // TODO
    type: "Sistema web",
    stack: "—", // TODO
    cardLine:
      "Tarefas dos empilhadeiristas de um armazém de café, do papel para o tempo real.",
    summary:
      "Sistema web que substituiu o controle por planilha impressa na gestão das tarefas dos empilhadeiristas de um armazém de café.",
    metric: {
      from: "4h",
      fromLabel: "para mapear, configurar e entregar as tarefas",
      to: "40min",
      toLabel: "com o sistema, sem deslocamento",
    },
    hero: {
      src: IMG["pcp-hero"],
      alt: "Tela de tarefas atribuídas do Controle PCP: navegação por etapas no topo e quadro com uma coluna por operador, cada uma com resumo da carga, barra de progresso e cards de tarefa com tipo de serviço, cliente e detalhes.",
    },
    cover: {
      src: IMG["pcp-cover"],
      alt: "Capa do projeto Controle PCP: quadro de tarefas atribuídas por operador.",
    },
    story: [
      {
        title: "Contexto",
        p: [
          "A gestão de produção de um armazém de café precisava de controle total sobre o trabalho dos empilhadeiristas. O projeto começou com uma pesquisa junto a essa área para entender como as tarefas eram planejadas, distribuídas e acompanhadas.",
        ],
      },
      {
        title: "Problema",
        p: [
          "Tudo era manual. As tarefas eram organizadas numa planilha, impressas e entregues em mãos a cada operador, com a explicação feita verbalmente. Esse ciclo levava cerca de quatro horas.",
          "Não havia acompanhamento durante o turno. O retorno só vinha no dia seguinte, então tarefas paravam pela metade ou eram concluídas sem que a gestão soubesse.",
          "Parte das tarefas já estava digitalizada em outro produto da empresa, mas cobria só um setor e não tinha uma plataforma de gerenciamento própria.",
        ],
      },
      {
        title: "Solução",
        p: [
          "Uma interface que centraliza o ciclo completo das tarefas, do cadastro à conclusão.",
        ],
        list: [
          [
            "Integração via API",
            "Importação das tarefas que já existiam no outro produto, com cadastro de tarefas novas.",
          ],
          [
            "Organização por setores",
            "Todas as tarefas disponíveis divididas por setor, não mais restritas a um só.",
          ],
          [
            "Pré-configuração",
            "Tarefas recorrentes pré-configuradas, com espaço para observações antes de liberar.",
          ],
          [
            "Atribuição ao operador",
            "Uma etapa dedicada para detalhar a tarefa e atribuí-la a um empilhadeirista.",
          ],
          [
            "Kanban por operador",
            "Cada operador tem a lista do turno em ordem cronológica.",
          ],
          [
            "Medição de tempo",
            "Um contador registra a duração de cada atividade e gera métricas de execução.",
          ],
          [
            "Conclusão automatizada",
            "A conclusão chega pela API de outro aplicativo, então o sistema sabe exatamente quando cada tarefa terminou.",
          ],
        ],
      },
      {
        title: "Resultado",
        p: [
          "A preparação e distribuição das tarefas caiu de cerca de quatro horas para cerca de quarenta minutos. A gestão passou a acompanhar a produção em tempo real e ganhou métricas de tempo por atividade que antes não existiam.",
        ],
      },
    ],
    gallery: [
      {
        src: IMG["pcp-todas"],
        alt: "Tela Todas as tarefas: tabela com documento, cliente, tipo de serviço, armazém, volume e data, tarefas sem data definida sinalizadas e barra flutuante para atribuir as tarefas selecionadas a um operador.",
        size: "s6",
      },
      {
        src: IMG["pcp-detalhe"],
        alt: "Detalhe do quadro de atribuição: cabeçalho azul de cada operador com resumo e progresso, card em andamento destacado com o tempo decorrido e cards na fila numerados por ordem.",
        size: "s6",
      },
    ],
  },
  {
    slug: "design-system-emsoft",
    title: "Design System Emsoft",
    context: "Emsoft",
    role: "Design system e biblioteca de componentes",
    year: "—",
    type: "Design System",
    stack: "Figma, npm",
    cardLine:
      "A identidade da marca traduzida em uma linguagem única para todos os sistemas.",
    summary:
      "Tradução da identidade visual da marca para uma identidade de software, com componentes, regras e hierarquias, distribuída como biblioteca interna via npm.",
    metric: {
      to: "1",
      toLabel: "linguagem visual para todos os sistemas da empresa",
    },
    hero: {
      src: IMG["ds-hero"],
      alt: "Banner do Design System Emsoft: logotipo da Emsoft e símbolo da marca em azul sobre fundo azul-marinho, com a descrição da documentação derivada do Manual de Identidade Visual.",
    },
    cover: {
      src: IMG["ds-cover"],
      alt: "Capa do projeto Design System Emsoft: logotipo e símbolo da marca sobre fundo azul-marinho.",
    },
    story: [
      {
        title: "Contexto",
        p: [
          "Quando entrei, o setor web ainda estava se estruturando e a equipe aprendia boa parte do processo. A empresa já tinha identidade visual de marca, mas ela não chegava aos produtos digitais.",
        ],
      },
      {
        title: "Problema",
        p: [
          "Cada software tinha uma aparência diferente, e eles não pareciam ser da mesma empresa. Sem padrões definidos, cada produto novo começava do zero, refazendo decisões de interface que já tinham sido tomadas.",
        ],
      },
      {
        title: "Solução",
        list: [
          [
            "Da marca para o software",
            "Tradução da identidade visual existente em uma linguagem de interface.",
          ],
          [
            "Componentes, regras e hierarquias",
            "Uma base comum, predefinida, para todos os produtos.",
          ],
          [
            "Reutilização",
            "Componentes criados num contexto servem para os outros, só com as adaptações necessárias.",
          ],
          ["Figma", "Protótipo e documentação do sistema."],
          [
            "Biblioteca interna via npm",
            "Componentes publicados como pacote interno, sem depender de bibliotecas externas. Isso reduz a exposição a vulnerabilidades e a injeção pela cadeia de dependências.",
          ],
        ],
      },
      {
        title: "Resultado",
        p: [
          "Todos os sistemas da empresa agora têm a mesma identidade. Produtos novos partem de componentes prontos, e a dependência de pacotes de terceiros diminuiu.",
        ],
      },
    ],
    gallery: [
      // Tokens de cor e tipografia
      {
        src: IMG["ds-cor"],
        alt: "Página de cores do Design System: escala do azul institucional de blue/400 a blue/900, escala de neutros e as cores de suporte red/400 e yellow/400, cada cor identificada pelo seu token.",
        size: "s6",
      },
      {
        src: IMG["ds-tipo"],
        alt: "Página de tipografia do Design System: escala de font/h1 (48px) a font/caption (13px), com Poppins nos títulos e Oxygen no texto de corpo.",
        size: "s6",
      },
      // Componentes
      {
        src: IMG["ds-button"],
        alt: "Variantes do componente Button: Default, Secondary, Destructive, Outline, Ghost e Link.",
        size: "s6",
      },
      {
        src: IMG["ds-cardinput"],
        alt: "Componentes Card e Input: card de plano com título, descrição e botão Contratar, ao lado de um campo de e-mail corporativo com rótulo.",
        size: "s6",
      },
      {
        src: IMG["ds-antesdepois"],
        alt: "Antes e depois do Portal Emsoft. À esquerda, a tela antiga, com cabeçalho escuro, cards coloridos por tipo de movimentação e tabela com linhas azuis alternadas. À direita, a tela refeita com o Design System, com menu lateral azul, cards neutros de indicadores e tabela de movimentações em tons de cinza. Nomes de cliente e usuário substituídos por textos genéricos.",
        size: "s12",
      },
    ],
  },
  {
    slug: "lexum",
    title: "Lexum",
    context: "Lexum",
    role: "Design: conceito, pesquisa e protótipo",
    year: "—",
    type: "SaaS · em desenvolvimento",
    stack: "—",
    cardLine:
      "SaaS para o jurídico de imobiliárias, unificando três sistemas em uma plataforma.",
    summary:
      "Conceito e protótipo de um SaaS para o setor jurídico de empresas do ramo imobiliário, pensado para centralizar o trabalho hoje dividido entre três sistemas diferentes.",
    metric: {
      from: "3",
      fromLabel: "sistemas de empresas diferentes",
      to: "1",
      toLabel: "plataforma integrada",
    },
    hero: {
      src: IMG["lx-hero"],
      alt: "Tela Dashboard Executivo do protótipo Lexum: menu lateral terracota, indicadores de processos no topo, gráficos de processos por ano e encerrados, distribuição por contingência, mapa de tags jurídicas e painel de insights.",
    },
    cover: {
      src: IMG["lx-cover"],
      alt: "Capa do projeto Lexum: recorte do Dashboard Executivo com menu lateral, indicadores e gráficos.",
    },
    story: [
      {
        title: "Contexto",
        p: [
          "O projeto partiu de uma necessidade do setor jurídico de empresas de imóveis. Fiz o conceito e o protótipo do produto.",
        ],
      },
      {
        title: "Problema",
        p: [
          "Para trabalhar, a equipe precisava usar três softwares de empresas diferentes, sem nenhum lugar que integrasse essas informações.",
        ],
      },
      {
        title: "Solução",
        list: [
          [
            "Conceito do produto",
            "Como a plataforma funcionaria e de que forma unificaria o fluxo de trabalho.",
          ],
          [
            "Pesquisa de integrações",
            "O produto depende de três sistemas públicos. Mapeei o consumo das APIs de cada um, incluindo quais são pagas e quais são gratuitas.",
          ],
          ["Protótipo", "Protótipo navegável da plataforma."],
        ],
      },
      {
        title: "Status",
        p: [
          "Produto em desenvolvimento. Atuação concentrada na etapa de design, com entrega de conceito, pesquisa, protótipo navegável e design system.",
        ],
      },
    ],
    gallery: [
      {
        src: IMG["lx-detail"],
        alt: "Detalhe do Dashboard: gráfico de processos encerrados por ano, mapa de tags jurídicas com contagem por marcador e painel de insights com tendência, concentração, crescimento e atenção.",
        size: "s6",
      },
      {
        src: IMG["lx-ident"],
        alt: "Identidade visual do Lexum: paleta com terracota principal, dourado de destaque, texto, superfície e borda, e tipografia Roboto.",
        size: "s6",
      },
      {
        src: IMG["lx-comp"],
        alt: "Componentes do design system do Lexum: botões primário, secundário e ghost, etiquetas, seleções com checkbox, radio e toggle, e card de processo com ação.",
        size: "s12",
      },
    ],
  },
];

/* Web design: sites institucionais e landing pages. */
const WEB = [
  {
    title: "Cooptures",
    context: "Nexus Web",
    type: "Site institucional",
    url: "https://cooptures.com.br",
    line: "Site da Cooperativa de Eventos e Turismo do Espírito Santo, com agenda de eventos e tema WordPress próprio.",
    cover: { src: IMG["wd-cooptures"], alt: "Página inicial do site da Cooptures: vista aérea da Terceira Ponte e da baía de Vitória com o título Conectando saberes, culturas e oportunidades." },
  },
  {
    title: "Vórus",
    context: "Nexus Web",
    type: "Landing page",
    url: "https://vorus.plimper.com.br",
    line: "Landing page da marca pet do Grupo Cacal, com linha de produtos, diferenciais e animações de scroll.",
    cover: { src: IMG["wd-vorus"], alt: "Página inicial da landing page Vórus: faixa vinho com frases da marca, título Quem pede, repet e foto de patas de cachorro e gato sobre a mão de uma pessoa." },
  },
];

/* =========================================================
   RENDER
   ========================================================= */
const app = document.getElementById("app");
const pad = (n) => String(n).padStart(2, "0");

function media(m, cls = "") {
  if (m && typeof m === "object" && m.src) {
    return `<div class="media ${cls}"><img src="${m.src}" alt="${m.alt || ""}" loading="lazy"></div>`;
  }
  const label = typeof m === "string" ? m : (m && m.label) || "Imagem";
  return `<div class="media ${cls}" role="img" aria-label="Espaço para imagem: ${label}"><div class="ph"><span>${label}</span><span>Substituir</span></div></div>`;
}

function home() {
  const works = CASES.map(
    (c, i) => `
    <a class="work ${i === 0 ? "is-wide" : ""}" href="#/case/${c.slug}">
      ${media(c.cover || c.hero)}
      <div class="work-body">
        <h3 class="work-title">${c.title}</h3>
        <span class="work-context">${c.context !== "—" ? c.context + ", " : ""}${c.type}</span>
        <p class="work-line">${c.cardLine}</p>
      </div>
    </a>`,
  ).join("");

  const webWorks = WEB.map(
    (w) => `
    <article class="work work-web">
      ${media(w.cover)}
      <div class="work-body">
        <h3 class="work-title">${w.title}</h3>
        <span class="work-context">${w.context}, ${w.type}</span>
        <p class="work-line">${w.line}</p>
        ${w.url ? `<a class="work-cta" href="${w.url}" target="_blank" rel="noopener">Ver projeto <span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>`,
  ).join("");

  const rows = (list) =>
    list
      .map(
        ([a, b, c]) => `
    <div class="row grid"><span class="r-org">${a}</span><span class="r-role">${b}</span><span class="r-time">${c}</span></div>`,
      )
      .join("");

  return `
  <section class="duo" style="--split:50%">
    <div class="duo-layer duo-design" aria-hidden="true">
      <div class="duo-card">
        <span class="dc-label">Card / Projeto</span>
        <div class="dc-media"></div>
        <div class="dc-title"></div>
        <div class="dc-text"></div>
        <div class="dc-text short"></div>
        <div class="dc-btn">Ver caso</div>
        <i class="h tl"></i><i class="h tr"></i><i class="h bl"></i><i class="h br"></i>
        <span class="dc-size">360 × 420</span>
      </div>
      <div class="dc-swatches"><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="duo-layer duo-code" aria-hidden="true">
      <pre class="duo-card"><code><b>&lt;article</b> <i>class</i>=<s>"card"</s><b>&gt;</b>
  <b>&lt;img</b> <i>src</i>=<s>{caso.capa}</s> <b>/&gt;</b>
  <b>&lt;h3&gt;</b>{caso.titulo}<b>&lt;/h3&gt;</b>
  <b>&lt;p&gt;</b>{caso.resumo}<b>&lt;/p&gt;</b>
  <b>&lt;a</b> <i>href</i>=<s>"#/case/{caso.slug}"</s><b>&gt;</b>
    Ver caso
  <b>&lt;/a&gt;</b>
<b>&lt;/article&gt;</b>

<u>.card</u> {
  <i>padding</i>: <s>var(--s3)</s>;
  <i>border-radius</i>: <s>16px</s>;
  <i>background</i>: <s>var(--surface)</s>;
}</code></pre>
    </div>
    <div class="duo-text wrap grid">
    <h1 class="sr-only">Rafael Isaac, UX/UI Designer e Frontend Developer</h1>
    <div class="duo-side duo-side-design">
      <h2>designer</h2>
      <p>UX/UI Designer que transforma processos complexos em interfaces claras, do fluxo ao design system.</p>
    </div>
    <div class="duo-side duo-side-code">
      <h2>&lt;coder&gt;</h2>
      <p>Frontend Developer que constrói interfaces performáticas, acessíveis e escaláveis.</p>
    </div>
    </div>
    <span class="duo-divider" aria-hidden="true"></span>
  </section>


  <section class="section" id="trabalhos">
    <div class="wrap">
      <div class="section-head grid">
        <h2>Trabalhos selecionados <span class="count">[${pad(CASES.length)}]</span></h2>
        <p>Sistemas internos, design system e produtos digitais.</p>
      </div>
      <div class="works grid">${works}</div>
    </div>
  </section>

  <section class="section" id="web-design">
    <div class="wrap">
      <div class="section-head grid">
        <h2>Web design <span class="count">[${pad(WEB.length)}]</span></h2>
        <p>Sites institucionais e landing pages, do layout no Figma à implementação responsiva.</p>
      </div>
      <div class="works grid">${webWorks}</div>
    </div>
  </section>

  <section class="section" id="sobre">
    <div class="wrap">
      <div class="section-head grid"><h2>Sobre</h2></div>
      <div class="grid">
        <div class="about-text">${SITE.about.map((p) => `<p>${p}</p>`).join("")}</div>
        <div class="rows">
          <p class="rows-label">Experiência <span class="count">[${pad(SITE.experience.length)}]</span></p>
          ${rows(SITE.experience)}
          <p class="rows-label">Formação</p>
          ${rows(SITE.education)}
        </div>
      </div>
    </div>
  </section>

  ${contact()}`;
}

function contact() {
  return `
  <section class="contact" id="contato">
    <div class="wrap grid">
      <h2>Para vagas, projetos ou uma conversa, me escreva.</h2>
      <a class="mail link" href="mailto:${SITE.email}">${SITE.email}</a>
      <div class="footer grid full">
        <span class="f-copy">© ${new Date().getFullYear()} ${SITE.fullName}</span>
        <div class="f-links">
          <a class="link" href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a class="link" href="${SITE.github}" target="_blank" rel="noopener">GitHub</a>
          <a class="link" href="${SITE.cv}" target="_blank" rel="noopener">CV</a>
        </div>
      </div>
    </div>
  </section>`;
}

function caseView(c) {
  const i = CASES.indexOf(c);
  const next = CASES[(i + 1) % CASES.length];
  const m = c.metric;

  const story = c.story
    .map(
      (s) => `
    <div class="story-block grid">
      <h2>${s.title}</h2>
      <div class="story-body">
        ${(s.p || []).map((p) => `<p>${p}</p>`).join("")}
        ${s.list ? `<ul>${s.list.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join("")}</ul>` : ""}
      </div>
    </div>`,
    )
    .join("");

  return `
  <article>
    <section class="case-top">
      <div class="wrap grid">
        <a class="back link" href="#/" data-scroll="trabalhos">Voltar aos trabalhos</a>
        <h1>${c.title}</h1>
        <p class="case-summary">${c.summary}</p>
        <dl class="case-meta grid">
          <div><dt>Contexto</dt><dd>${c.context}</dd></div>
          <div><dt>Papel</dt><dd>${c.role}</dd></div>
          <div><dt>Tipo</dt><dd>${c.type}</dd></div>
          <div><dt>Stack</dt><dd>${c.stack}</dd></div>
        </dl>
      </div>
    </section>

    <section class="case-hero"><div class="wrap">${media(c.hero)}</div></section>

    <section class="story"><div class="wrap">${story}</div></section>

    <section class="wrap">
      <div class="metric grid ${m.from ? "" : "single"}">
        ${m.from ? `<div class="metric-from"><div class="metric-value">${m.from}</div><p class="metric-label">Antes: ${m.fromLabel}</p></div>` : ""}
        <div class="metric-to"><div class="metric-value">${m.to}</div><p class="metric-label">${m.from ? "Depois: " : ""}${m.toLabel}</p></div>
      </div>
    </section>

    <section class="wrap"><div class="gallery grid">${c.gallery.map((g) => media(g.src ? g : g.label, g.size)).join("")}</div></section>

    <a class="next" href="#/case/${next.slug}">
      <div class="wrap grid">
        <small>Próximo projeto</small>
        <strong>${next.title}</strong>
      </div>
    </a>
  </article>
  ${contact()}`;
}

/* =========================================================
   ROUTER
   ========================================================= */
/* O visualizador do claude.ai roda a página num iframe isolado, onde clicar
   em links "#/..." nem sempre dispara hashchange. Por isso a rota atual fica
   em memória e os cliques são tratados aqui; a URL é atualizada só quando
   o ambiente permite. */
let pendingScroll = null;
const readHash = () => {
  try {
    return location.hash || "#/";
  } catch (e) {
    return "#/";
  }
};
let current = readHash();

function go(path) {
  current = path;
  try {
    history.pushState(null, "", path);
  } catch (e) {
    /* sandbox: segue só em memória */
  }
  route();
}

function route() {
  const hash = current || "#/";
  const match = hash.match(/^#\/case\/([\w-]+)/);
  const c = match && CASES.find((x) => x.slug === match[1]);

  app.style.animation = "none";
  void app.offsetHeight;
  app.style.animation = "";

  if (c) {
    app.innerHTML = caseView(c);
    document.title = `${c.title} — ${SITE.name}`;
    window.scrollTo(0, 0);
  } else {
    app.innerHTML = home();
    document.title = `${SITE.name} — Frontend Developer & UX/UI Designer`;
    if (pendingScroll) {
      const el = document.getElementById(pendingScroll);
      requestAnimationFrame(() => el && el.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }
  pendingScroll = null;
}

document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const href = a.getAttribute("href");
  const id = a.dataset.scroll;
  const onHome = !/^#\/case\//.test(current);
  if (id && onHome) {
    const el = document.getElementById(id);
    el &&
      el.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    return;
  }
  pendingScroll = id || null;
  go(href);
});

const syncFromUrl = () => {
  const h = readHash();
  if (h !== current) {
    current = h;
    route();
  }
};
window.addEventListener("hashchange", syncFromUrl);
window.addEventListener("popstate", syncFromUrl);
route();

/* =========================================================
   GRID OVERLAY (botão ou tecla G)
   ========================================================= */
const overlay = document.querySelector(".overlay");
const og = document.getElementById("overlay-grid");
const toggle = document.querySelector(".grid-toggle");

function buildOverlay() {
  const n =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--cols"),
    ) || 12;
  og.innerHTML = "<span></span>".repeat(n);
}
function setGrid(on) {
  overlay.classList.toggle("on", on);
  toggle.setAttribute("aria-pressed", String(on));
  if (on) buildOverlay();
}
toggle.addEventListener("click", () =>
  setGrid(!overlay.classList.contains("on")),
);
document.addEventListener("keydown", (e) => {
  if (
    e.key.toLowerCase() === "g" &&
    !e.metaKey &&
    !e.ctrlKey &&
    !/input|textarea/i.test(e.target.tagName)
  ) {
    setGrid(!overlay.classList.contains("on"));
  }
});
window.addEventListener(
  "resize",
  () => overlay.classList.contains("on") && buildOverlay(),
);

/* Hero designer | <coder>: a divisória segue o ponteiro e volta ao centro ao sair. */
let duoTarget = 50,
  duoCur = 50,
  duoRaf = 0;
function duoTick() {
  const el = document.querySelector(".duo");
  if (!el) {
    duoRaf = 0;
    return;
  }
  duoCur += (duoTarget - duoCur) * 0.12;
  el.style.setProperty("--split", duoCur.toFixed(2) + "%");
  el.dataset.side = duoCur < 42 ? "code" : duoCur > 58 ? "design" : "";
  duoRaf =
    Math.abs(duoTarget - duoCur) > 0.05 ? requestAnimationFrame(duoTick) : 0;
}
function duoSet(v) {
  duoTarget = v;
  if (!duoRaf) duoRaf = requestAnimationFrame(duoTick);
}
document.addEventListener("pointermove", (e) => {
  const el = e.target.closest && e.target.closest(".duo");
  if (!el) {
    if (duoTarget !== 50) duoSet(50);
    return;
  }
  const r = el.getBoundingClientRect();
  duoSet(Math.min(85, Math.max(15, ((e.clientX - r.left) / r.width) * 100)));
});
document.documentElement.addEventListener("pointerleave", () => duoSet(50));
