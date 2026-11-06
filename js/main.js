/* =========================================================
   CONTEÚDO — edite aqui.
   Textos bilíngues usam { pt: "...", en: "..." }. Texto simples vale para os dois idiomas.
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

const ROLE = "Product Designer & Frontend Developer";

const SITE = {
  name: "Rafael Isaac",
  fullName: "Rafael Isaac Silva de Souza",
  email: "rafaelisaacssouza@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafael-isaac/",
  github: "https://github.com/rafaelisaacssouza",
  cv: "https://docs.google.com/document/d/1rFLKWrrkzA1NkQYP4j9J9EM0CjIAY_mxXlP2uFAb3CQ/edit?usp=sharing",

  /* Resumo da página inicial */
  summary: {
    pt: "Sou Product Designer e Frontend Developer no Brasil. Desde 2020, transformo processos complexos em interfaces simples e intuitivas, e depois escrevo o código delas.",
    en: "I’m a Product Designer and Frontend Developer based in Brazil. Since 2020, I’ve been turning complex processes into simple, intuitive interfaces, and then writing the code for them.",
  },

  /* Página Sobre (#/sobre) */
  about: {
    pt: [
      "Comecei como designer aos quatro anos. Bom, mais ou menos. Foi quando descobri como abrir o Paint, fazer um desenho e imprimir para colorir.",
      "Sendo uma criança curiosa que cresceu junto com a internet, visitei inúmeros sites e blogs e joguei vários jogos, o que me fez experienciar todo tipo de interface. Meu primeiro contato com desenvolvimento foi em 2011, criando um blog de memes, que era febre na época, e tentando adicionar um CSS customizado no meu blog do Tumblr para trocar o cursor padrão por uma mãozinha de rock. O blog não viralizou: desconfio que a maioria das visitas era minha mesmo.",
      "Entrei na faculdade em Engenharia Mecânica (sim, eu era meio nerd de matemática na época), e foi lá que tive meu primeiro contato com programação e percebi que queria trabalhar com tecnologia.",
      "Minha carreira em design começou na Anísio Visual, uma empresa de comunicação visual que imprime vinil e produz fachadas para comércios. Lá eu usava as principais ferramentas de design vetorial para criar artes, montar orçamentos e estimar custos de operação. Foi onde aprendi na prática a revisar uma arte pensando em hierarquia, contraste e se ela dá leitura, avaliando se o anúncio de fato funciona para quem passa na rua. Nessa época, deixei a engenharia e fui para Sistemas de Informação.",
      "Senti na pele a falta de design centrado nas pessoas no meu primeiro emprego em tecnologia, como técnico de suporte. Eu e meus colegas sofríamos todos os dias com uma plataforma mal construída e mal projetada: um simples registro de dados podia levar mais de 20 minutos, porque precisávamos digitar a mesma informação em três sistemas diferentes. A empresa priorizava a qualidade de serviço aos clientes, mas as pessoas que acordavam cedo e mantinham o negócio funcionando nunca foram consideradas.",
      "Depois disso, comecei a criar sites e landing pages para empresas e agências de marketing, e foi isso que de fato me colocou no mercado.",
      "Então, no meu último ano de faculdade, entrei na Emsoft, que atende o setor de armazenagem de café, e foi aí que tudo mudou. Passei a projetar telas desktop e mobile para pessoas com níveis muito diferentes de familiaridade digital, de equipes administrativas a produtores rurais e operadores de máquinas. Tornar a tecnologia acessível para elas, e saber que meu trabalho ajuda milhares de trabalhadores a ter uma rotina mais tranquila e mais qualidade de vida, me mostrou o quanto esse trabalho importa.",
      "Apesar dos meus privilégios, trabalhei em vários serviços braçais, como eletricista, motorista de cargas de aço e vendedor. Sei como é ser a pessoa que faz o trabalho pesado enquanto as ferramentas atrapalham.",
      "Por isso, antes de desenhar qualquer tela, procuro entender exatamente qual problema estou resolvendo, colocando em primeiro lugar a qualidade de vida de todos que vão usar as minhas ferramentas.",
      "Esse caminho não foi planejado, mas cada passo me levou a algo que eu amo: dar função à criatividade, entender o comportamento humano por trás da tela e resolver problemas em poucos cliques (não é isso que hoje chamam de ansiedade?).",
      "Hoje sou Frontend Developer e Product Designer na Emsoft e também faço projetos freelance, do primeiro rascunho ao site no ar. Moro no Brasil, ainda abrindo ferramentas e descobrindo como elas funcionam.",
    ],
    en: [
      "I started as a designer at four years old. Well, sort of. That’s when I figured out how to open Paint, draw something, and print it so I could color it in.",
      "As a curious kid growing up alongside the internet, I visited countless websites and blogs and played all sorts of games, which let me experience all kinds of interfaces. My first contact with development came in 2011, building a meme blog (back when everyone had one) and trying to add custom CSS to my Tumblr blog to change the default cursor to a rock-on hand. The blog never went viral: I suspect most of the visits were mine.",
      "I started college in Mechanical Engineering (yes, I was kind of a math nerd back then), and that’s where I got my first introduction to programming and realized I wanted to work with technology.",
      "My design career started at Anísio Visual, a visual communication company that prints vinyl and builds storefront signage for businesses. There I used the main vector design tools to create artwork, put together quotes and estimate operating costs. That’s where I learned hands-on to review artwork for hierarchy, contrast and readability, judging whether an ad actually works for someone passing by. Around that time, I left engineering and switched to an Information Systems degree.",
      "I felt the lack of human-centered design firsthand at my first job in tech, as a support technician. My coworkers and I struggled every day with a poorly built, poorly designed platform: a simple data entry task could take over 20 minutes, because we had to type the same information into three different systems. The company prioritized service quality for its clients, but the people who woke up early and kept the business running were never considered.",
      "After that, I started building websites and landing pages for businesses and marketing agencies, which is what truly got me into the market.",
      "Then, in my last year of college, I landed a job at Emsoft, serving the coffee storage sector, and that’s where everything changed. I started designing desktop and mobile screens for people with very different levels of digital familiarity, from office staff to rural producers and machine operators. Making technology accessible to them, and knowing my work helps thousands of workers have a smoother routine and a better quality of life, showed me how much this work matters.",
      "Despite my privileges, I’ve worked many manual jobs, as an electrician, a truck driver hauling steel and a salesman. I know what it’s like to be the person doing the hard work while the tools get in the way.",
      "That’s why, before designing any screen, I first try to understand exactly which problem I’m solving, putting the quality of life of everyone who will use my tools first.",
      "This path wasn’t planned, but every step led me somewhere I love: bringing function to creativity, understanding the human behavior behind the screen, and solving problems in just a few clicks (isn’t that what they call anxiety these days?).",
      "Today I’m a Frontend Developer and Product Designer at Emsoft, and I also take on freelance projects, from the first sketch to a live website. I’m based in Brazil, still opening tools and figuring them out.",
    ],
  },

  experience: [
    ["Emsoft", "Frontend Developer & Product Designer", { pt: "Atual", en: "Present" }],
    ["Glitch Co.", { pt: "Product Designer & Frontend Developer · Freelance", en: "Product Designer & Frontend Developer · Freelance" }, { pt: "Atual", en: "Present" }],
    ["Topcon", { pt: "Técnico de suporte", en: "Support Technician" }, "2023 – 2024"],
    ["Anísio Visual", { pt: "Designer comercial", en: "Commercial Designer" }, "2020 – 2021"],
  ],
  education: [
    [
      "Libertas Faculdades Integradas",
      { pt: "Bacharelado em Sistemas de Informação", en: "Bachelor’s in Information Systems" },
      "2025",
    ],
  ],
};

/* Textos da interface */
const UI = {
  navWork: { pt: "Trabalhos", en: "Work" },
  navAbout: { pt: "Sobre", en: "About" },
  navContact: { pt: "Contato", en: "Contact" },
  langSwitch: { pt: "EN", en: "PT" },
  langSwitchLabel: { pt: "Switch to English", en: "Mudar para português" },
  heroH1: { pt: "Rafael Isaac, Product Designer e Frontend Developer", en: "Rafael Isaac, Product Designer and Frontend Developer" },
  heroDesign: {
    pt: "Product Designer que transforma processos complexos em interfaces claras, do fluxo ao design system.",
    en: "Product Designer who turns complex processes into clear interfaces, from flow to design system.",
  },
  heroCode: {
    pt: "Frontend Developer que constrói interfaces performáticas, acessíveis e escaláveis.",
    en: "Frontend Developer who builds fast, accessible and scalable interfaces.",
  },
  worksTitle: { pt: "Trabalhos selecionados", en: "Selected work" },
  worksDesc: { pt: "Sistemas internos, design system e produtos digitais.", en: "Internal systems, a design system and digital products." },
  webTitle: { pt: "Web design", en: "Web design" },
  webDesc: {
    pt: "Sites institucionais e landing pages, do layout no Figma à implementação responsiva.",
    en: "Institutional websites and landing pages, from the Figma layout to the responsive build.",
  },
  sideTitle: { pt: "Projetos pessoais", en: "Side projects" },
  sideDesc: { pt: "Ferramentas abertas que eu construo por conta própria.", en: "Open tools I build on my own." },
  viewProject: { pt: "Ver projeto", en: "View project" },
  aboutTitle: { pt: "Sobre", en: "About" },
  readMore: { pt: "Ler a história completa", en: "Read the full story" },
  experience: { pt: "Experiência", en: "Experience" },
  education: { pt: "Formação", en: "Education" },
  contactTitle: { pt: "Para vagas, projetos ou uma conversa, me escreva.", en: "For jobs, projects or just a chat, drop me a line." },
  back: { pt: "Voltar aos trabalhos", en: "Back to work" },
  context: { pt: "Contexto", en: "Context" },
  role: { pt: "Papel", en: "Role" },
  type: { pt: "Tipo", en: "Type" },
  stack: { pt: "Stack", en: "Stack" },
  before: { pt: "Antes", en: "Before" },
  after: { pt: "Depois", en: "After" },
  next: { pt: "Próximo projeto", en: "Next project" },
  imgSlot: { pt: "Espaço para imagem", en: "Image placeholder" },
  replace: { pt: "Substituir", en: "Replace" },
};

const CASES = [
  {
    slug: "controle-pcp",
    title: "Controle PCP",
    context: "Emsoft",
    role: { pt: "Pesquisa, UX/UI e front-end", en: "Research, UX/UI and front-end" },
    year: "—", // TODO
    type: { pt: "Sistema web", en: "Web system" },
    stack: "—", // TODO
    cardLine: {
      pt: "Tarefas dos empilhadeiristas de um armazém de café, do papel para o tempo real.",
      en: "Forklift operators’ tasks at a coffee warehouse, from paper to real time.",
    },
    summary: {
      pt: "Sistema web que substituiu o controle por planilha impressa na gestão das tarefas dos empilhadeiristas de um armazém de café.",
      en: "A web system that replaced a printed spreadsheet in managing the forklift operators’ tasks at a coffee warehouse.",
    },
    metric: {
      from: "4h",
      fromLabel: { pt: "para mapear, configurar e entregar as tarefas", en: "to map, set up and hand out the tasks" },
      to: "40min",
      toLabel: { pt: "com o sistema, sem deslocamento", en: "with the system, no walking around" },
    },
    hero: {
      src: IMG["pcp-hero"],
      alt: {
        pt: "Tela de tarefas atribuídas do Controle PCP: navegação por etapas no topo e quadro com uma coluna por operador, cada uma com resumo da carga, barra de progresso e cards de tarefa com tipo de serviço, cliente e detalhes.",
        en: "Assigned tasks screen in Controle PCP: step navigation at the top and a board with one column per operator, each with a workload summary, progress bar and task cards showing service type, client and details.",
      },
    },
    cover: {
      src: IMG["pcp-cover"],
      alt: {
        pt: "Capa do projeto Controle PCP: quadro de tarefas atribuídas por operador.",
        en: "Controle PCP cover: board of tasks assigned per operator.",
      },
    },
    story: [
      {
        title: { pt: "Contexto", en: "Context" },
        p: [
          {
            pt: "A gestão de produção de um armazém de café precisava de controle total sobre o trabalho dos empilhadeiristas. O projeto começou com uma pesquisa junto a essa área para entender como as tarefas eram planejadas, distribuídas e acompanhadas.",
            en: "The production management team at a coffee warehouse needed full control over the forklift operators’ work. The project started with research alongside that team to understand how tasks were planned, distributed and tracked.",
          },
        ],
      },
      {
        title: { pt: "Problema", en: "Problem" },
        p: [
          {
            pt: "Tudo era manual. As tarefas eram organizadas numa planilha, impressas e entregues em mãos a cada operador, com a explicação feita verbalmente. Esse ciclo levava cerca de quatro horas.",
            en: "Everything was manual. Tasks were organized in a spreadsheet, printed and handed to each operator, with the explanation given verbally. This cycle took about four hours.",
          },
          {
            pt: "Não havia acompanhamento durante o turno. O retorno só vinha no dia seguinte, então tarefas paravam pela metade ou eram concluídas sem que a gestão soubesse.",
            en: "There was no tracking during the shift. Feedback only came the next day, so tasks stalled halfway or were finished without management knowing.",
          },
          {
            pt: "Parte das tarefas já estava digitalizada em outro produto da empresa, mas cobria só um setor e não tinha uma plataforma de gerenciamento própria.",
            en: "Some tasks were already digitized in another company product, but it covered only one sector and had no management platform of its own.",
          },
        ],
      },
      {
        title: { pt: "Solução", en: "Solution" },
        p: [
          {
            pt: "Uma interface que centraliza o ciclo completo das tarefas, do cadastro à conclusão.",
            en: "An interface that brings the full task cycle together, from registration to completion.",
          },
        ],
        list: [
          [
            { pt: "Integração via API", en: "API integration" },
            { pt: "Importação das tarefas que já existiam no outro produto, com cadastro de tarefas novas.", en: "Imports the tasks that already existed in the other product, plus registration of new ones." },
          ],
          [
            { pt: "Organização por setores", en: "Organized by sector" },
            { pt: "Todas as tarefas disponíveis divididas por setor, não mais restritas a um só.", en: "All available tasks split by sector, no longer limited to just one." },
          ],
          [
            { pt: "Pré-configuração", en: "Pre-configuration" },
            { pt: "Tarefas recorrentes pré-configuradas, com espaço para observações antes de liberar.", en: "Recurring tasks pre-configured, with room for notes before release." },
          ],
          [
            { pt: "Atribuição ao operador", en: "Assignment to operators" },
            { pt: "Uma etapa dedicada para detalhar a tarefa e atribuí-la a um empilhadeirista.", en: "A dedicated step to detail each task and assign it to a forklift operator." },
          ],
          [
            { pt: "Kanban por operador", en: "Kanban per operator" },
            { pt: "Cada operador tem a lista do turno em ordem cronológica.", en: "Each operator has the shift’s list in chronological order." },
          ],
          [
            { pt: "Medição de tempo", en: "Time tracking" },
            { pt: "Um contador registra a duração de cada atividade e gera métricas de execução.", en: "A timer records how long each activity takes and generates execution metrics." },
          ],
          [
            { pt: "Conclusão automatizada", en: "Automated completion" },
            { pt: "A conclusão chega pela API de outro aplicativo, então o sistema sabe exatamente quando cada tarefa terminou.", en: "Completion comes through another app’s API, so the system knows exactly when each task ended." },
          ],
        ],
      },
      {
        title: { pt: "Resultado", en: "Result" },
        p: [
          {
            pt: "A preparação e distribuição das tarefas caiu de cerca de quatro horas para cerca de quarenta minutos. A gestão passou a acompanhar a produção em tempo real e ganhou métricas de tempo por atividade que antes não existiam.",
            en: "Preparing and distributing tasks dropped from about four hours to about forty minutes. Management now tracks production in real time and has time-per-activity metrics that didn’t exist before.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: IMG["pcp-todas"],
        alt: {
          pt: "Tela Todas as tarefas: tabela com documento, cliente, tipo de serviço, armazém, volume e data, tarefas sem data definida sinalizadas e barra flutuante para atribuir as tarefas selecionadas a um operador.",
          en: "All tasks screen: table with document, client, service type, warehouse, volume and date, tasks without a set date flagged, and a floating bar to assign the selected tasks to an operator.",
        },
        size: "s6",
      },
      {
        src: IMG["pcp-detalhe"],
        alt: {
          pt: "Detalhe do quadro de atribuição: cabeçalho azul de cada operador com resumo e progresso, card em andamento destacado com o tempo decorrido e cards na fila numerados por ordem.",
          en: "Detail of the assignment board: each operator’s blue header with summary and progress, the in-progress card highlighted with elapsed time, and queued cards numbered in order.",
        },
        size: "s6",
      },
    ],
  },
  {
    slug: "design-system-emsoft",
    title: "Design System Emsoft",
    context: "Emsoft",
    role: { pt: "Design system e biblioteca de componentes", en: "Design system and component library" },
    year: "—",
    type: "Design System",
    stack: "Figma, npm",
    cardLine: {
      pt: "A identidade da marca traduzida em uma linguagem única para todos os sistemas.",
      en: "The brand identity translated into a single language for every system.",
    },
    summary: {
      pt: "Tradução da identidade visual da marca para uma identidade de software, com componentes, regras e hierarquias, distribuída como biblioteca interna via npm.",
      en: "Translating the brand’s visual identity into a software identity, with components, rules and hierarchies, distributed as an internal npm library.",
    },
    metric: {
      to: "1",
      toLabel: { pt: "linguagem visual para todos os sistemas da empresa", en: "visual language for every system in the company" },
    },
    hero: {
      src: IMG["ds-hero"],
      alt: {
        pt: "Banner do Design System Emsoft: logotipo da Emsoft e símbolo da marca em azul sobre fundo azul-marinho, com a descrição da documentação derivada do Manual de Identidade Visual.",
        en: "Emsoft Design System banner: Emsoft logo and brand symbol in blue on a navy background, with a description of the documentation derived from the Visual Identity Manual.",
      },
    },
    cover: {
      src: IMG["ds-cover"],
      alt: {
        pt: "Capa do projeto Design System Emsoft: logotipo e símbolo da marca sobre fundo azul-marinho.",
        en: "Emsoft Design System cover: logo and brand symbol on a navy background.",
      },
    },
    story: [
      {
        title: { pt: "Contexto", en: "Context" },
        p: [
          {
            pt: "Quando entrei, o setor web ainda estava se estruturando e a equipe aprendia boa parte do processo. A empresa já tinha identidade visual de marca, mas ela não chegava aos produtos digitais.",
            en: "When I joined, the web team was still taking shape and learning much of the process. The company already had a brand identity, but it didn’t reach its digital products.",
          },
        ],
      },
      {
        title: { pt: "Problema", en: "Problem" },
        p: [
          {
            pt: "Cada software tinha uma aparência diferente, e eles não pareciam ser da mesma empresa. Sem padrões definidos, cada produto novo começava do zero, refazendo decisões de interface que já tinham sido tomadas.",
            en: "Each piece of software looked different, and they didn’t seem to come from the same company. With no defined standards, every new product started from scratch, redoing interface decisions that had already been made.",
          },
        ],
      },
      {
        title: { pt: "Solução", en: "Solution" },
        list: [
          [
            { pt: "Da marca para o software", en: "From brand to software" },
            { pt: "Tradução da identidade visual existente em uma linguagem de interface.", en: "Translating the existing visual identity into an interface language." },
          ],
          [
            { pt: "Componentes, regras e hierarquias", en: "Components, rules and hierarchies" },
            { pt: "Uma base comum, predefinida, para todos os produtos.", en: "A common, predefined foundation for every product." },
          ],
          [
            { pt: "Reutilização", en: "Reuse" },
            { pt: "Componentes criados num contexto servem para os outros, só com as adaptações necessárias.", en: "Components built for one context serve the others, with only the necessary adjustments." },
          ],
          ["Figma", { pt: "Protótipo e documentação do sistema.", en: "Prototype and documentation of the system." }],
          [
            { pt: "Biblioteca interna via npm", en: "Internal npm library" },
            {
              pt: "Componentes publicados como pacote interno, sem depender de bibliotecas externas. Isso reduz a exposição a vulnerabilidades e a injeção pela cadeia de dependências.",
              en: "Components published as an internal package, without relying on external libraries. This reduces exposure to vulnerabilities and supply-chain injection.",
            },
          ],
        ],
      },
      {
        title: { pt: "Resultado", en: "Result" },
        p: [
          {
            pt: "Todos os sistemas da empresa agora têm a mesma identidade. Produtos novos partem de componentes prontos, e a dependência de pacotes de terceiros diminuiu.",
            en: "Every system in the company now shares the same identity. New products start from ready-made components, and reliance on third-party packages has dropped.",
          },
        ],
      },
    ],
    gallery: [
      // Tokens de cor e tipografia
      {
        src: IMG["ds-cor"],
        alt: {
          pt: "Página de cores do Design System: escala do azul institucional de blue/400 a blue/900, escala de neutros e as cores de suporte red/400 e yellow/400, cada cor identificada pelo seu token.",
          en: "Design System colors page: institutional blue scale from blue/400 to blue/900, a neutral scale and the support colors red/400 and yellow/400, each identified by its token.",
        },
        size: "s6",
      },
      {
        src: IMG["ds-tipo"],
        alt: {
          pt: "Página de tipografia do Design System: escala de font/h1 (48px) a font/caption (13px), com Poppins nos títulos e Oxygen no texto de corpo.",
          en: "Design System typography page: scale from font/h1 (48px) to font/caption (13px), with Poppins for headings and Oxygen for body text.",
        },
        size: "s6",
      },
      // Componentes
      {
        src: IMG["ds-button"],
        alt: {
          pt: "Variantes do componente Button: Default, Secondary, Destructive, Outline, Ghost e Link.",
          en: "Button component variants: Default, Secondary, Destructive, Outline, Ghost and Link.",
        },
        size: "s6",
      },
      {
        src: IMG["ds-cardinput"],
        alt: {
          pt: "Componentes Card e Input: card de plano com título, descrição e botão Contratar, ao lado de um campo de e-mail corporativo com rótulo.",
          en: "Card and Input components: a plan card with title, description and a call-to-action button, next to a labeled corporate email field.",
        },
        size: "s6",
      },
      {
        src: IMG["ds-antesdepois"],
        alt: {
          pt: "Antes e depois do Portal Emsoft. À esquerda, a tela antiga, com cabeçalho escuro, cards coloridos por tipo de movimentação e tabela com linhas azuis alternadas. À direita, a tela refeita com o Design System, com menu lateral azul, cards neutros de indicadores e tabela de movimentações em tons de cinza. Nomes de cliente e usuário substituídos por textos genéricos.",
          en: "Before and after of the Emsoft Portal. On the left, the old screen, with a dark header, cards colored by movement type and a table with alternating blue rows. On the right, the screen rebuilt with the Design System, with a blue sidebar, neutral KPI cards and a movements table in shades of gray. Client and user names replaced with generic text.",
        },
        size: "s12",
      },
    ],
  },
  {
    slug: "lexum",
    title: "Lexum",
    context: "Lexum",
    role: { pt: "Design: conceito, pesquisa e protótipo", en: "Design: concept, research and prototype" },
    year: "—",
    type: { pt: "SaaS · em desenvolvimento", en: "SaaS · in development" },
    stack: "—",
    cardLine: {
      pt: "SaaS para o jurídico de imobiliárias, unificando três sistemas em uma plataforma.",
      en: "A SaaS for real estate legal teams, unifying three systems into one platform.",
    },
    summary: {
      pt: "Conceito e protótipo de um SaaS para o setor jurídico de empresas do ramo imobiliário, pensado para centralizar o trabalho hoje dividido entre três sistemas diferentes.",
      en: "Concept and prototype of a SaaS for the legal departments of real estate companies, designed to bring together work that is currently split across three different systems.",
    },
    metric: {
      from: "3",
      fromLabel: { pt: "sistemas de empresas diferentes", en: "systems from different companies" },
      to: "1",
      toLabel: { pt: "plataforma integrada", en: "integrated platform" },
    },
    hero: {
      src: IMG["lx-hero"],
      alt: {
        pt: "Tela Dashboard Executivo do protótipo Lexum: menu lateral terracota, indicadores de processos no topo, gráficos de processos por ano e encerrados, distribuição por contingência, mapa de tags jurídicas e painel de insights.",
        en: "Executive Dashboard screen of the Lexum prototype: terracotta sidebar, case indicators at the top, charts of cases per year and closed cases, distribution by contingency, a legal tag map and an insights panel.",
      },
    },
    cover: {
      src: IMG["lx-cover"],
      alt: {
        pt: "Capa do projeto Lexum: recorte do Dashboard Executivo com menu lateral, indicadores e gráficos.",
        en: "Lexum cover: crop of the Executive Dashboard with sidebar, indicators and charts.",
      },
    },
    story: [
      {
        title: { pt: "Contexto", en: "Context" },
        p: [
          {
            pt: "O projeto partiu de uma necessidade do setor jurídico de empresas de imóveis. Fiz o conceito e o protótipo do produto.",
            en: "The project came from a need in the legal departments of real estate companies. I created the product concept and prototype.",
          },
        ],
      },
      {
        title: { pt: "Problema", en: "Problem" },
        p: [
          {
            pt: "Para trabalhar, a equipe precisava usar três softwares de empresas diferentes, sem nenhum lugar que integrasse essas informações.",
            en: "To do their job, the team had to use three pieces of software from different companies, with nowhere to bring that information together.",
          },
        ],
      },
      {
        title: { pt: "Solução", en: "Solution" },
        list: [
          [
            { pt: "Conceito do produto", en: "Product concept" },
            { pt: "Como a plataforma funcionaria e de que forma unificaria o fluxo de trabalho.", en: "How the platform would work and how it would unify the workflow." },
          ],
          [
            { pt: "Pesquisa de integrações", en: "Integration research" },
            {
              pt: "O produto depende de três sistemas públicos. Mapeei o consumo das APIs de cada um, incluindo quais são pagas e quais são gratuitas.",
              en: "The product relies on three public systems. I mapped how to consume each one’s APIs, including which are paid and which are free.",
            },
          ],
          [
            { pt: "Protótipo", en: "Prototype" },
            { pt: "Protótipo navegável da plataforma.", en: "A clickable prototype of the platform." },
          ],
        ],
      },
      {
        title: "Status",
        p: [
          {
            pt: "Produto em desenvolvimento. Atuação concentrada na etapa de design, com entrega de conceito, pesquisa, protótipo navegável e design system.",
            en: "Product in development. My work focused on the design stage, delivering the concept, research, a clickable prototype and a design system.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: IMG["lx-detail"],
        alt: {
          pt: "Detalhe do Dashboard: gráfico de processos encerrados por ano, mapa de tags jurídicas com contagem por marcador e painel de insights com tendência, concentração, crescimento e atenção.",
          en: "Dashboard detail: chart of closed cases per year, a legal tag map with counts per tag and an insights panel with trend, concentration, growth and attention.",
        },
        size: "s6",
      },
      {
        src: IMG["lx-ident"],
        alt: {
          pt: "Identidade visual do Lexum: paleta com terracota principal, dourado de destaque, texto, superfície e borda, e tipografia Roboto.",
          en: "Lexum visual identity: a palette with main terracotta, gold accent, text, surface and border, and Roboto typography.",
        },
        size: "s6",
      },
      {
        src: IMG["lx-comp"],
        alt: {
          pt: "Componentes do design system do Lexum: botões primário, secundário e ghost, etiquetas, seleções com checkbox, radio e toggle, e card de processo com ação.",
          en: "Lexum design system components: primary, secondary and ghost buttons, tags, checkbox, radio and toggle selections, and a case card with an action.",
        },
        size: "s12",
      },
    ],
  },
];

/* Web design: sites institucionais e landing pages. */
const WEB = [
  {
    title: "Cooptures",
    context: "Glitch Co.",
    type: { pt: "Site institucional", en: "Institutional website" },
    url: "https://cooptures.com.br",
    line: {
      pt: "Site da Cooperativa de Eventos e Turismo do Espírito Santo, com agenda de eventos e tema WordPress próprio.",
      en: "Website for the Espírito Santo Events and Tourism Cooperative, with an events calendar and a custom WordPress theme.",
    },
    cover: {
      src: IMG["wd-cooptures"],
      alt: {
        pt: "Página inicial do site da Cooptures: vista aérea da Terceira Ponte e da baía de Vitória com o título Conectando saberes, culturas e oportunidades.",
        en: "Cooptures website homepage: aerial view of the Terceira Ponte bridge and Vitória bay with the headline Conectando saberes, culturas e oportunidades.",
      },
    },
  },
  {
    title: "Vórus",
    context: "Glitch Co.",
    type: "Landing page",
    url: "https://vorus.plimper.com.br",
    line: {
      pt: "Landing page da marca pet do Grupo Cacal, com linha de produtos, diferenciais e animações de scroll.",
      en: "Landing page for Grupo Cacal’s pet brand, with its product line, differentiators and scroll animations.",
    },
    cover: {
      src: IMG["wd-vorus"],
      alt: {
        pt: "Página inicial da landing page Vórus: faixa vinho com frases da marca, título Quem pede, repet e foto de patas de cachorro e gato sobre a mão de uma pessoa.",
        en: "Vórus landing page homepage: burgundy band with brand phrases, the headline Quem pede, repet, and a photo of dog and cat paws resting on a person’s hand.",
      },
    },
  },
];

/* Projetos pessoais. Para usar uma imagem real, troque `cover` por { src, alt }. */
const SIDE = [
  {
    title: "OpenScreen",
    context: { pt: "Projeto pessoal", en: "Personal project" },
    type: "Open source",
    url: "https://github.com/rafaelisaacssouza/OpenScreen",
    cta: { pt: "Ver no GitHub", en: "View on GitHub" },
    line: {
      pt: "Compartilhamento de tela direto no navegador, só para visualização. Quem compartilha gera um código, quem assiste se conecta e o host aprova cada pessoa. Aberto para quem quiser hospedar a própria versão.",
      en: "Screen sharing straight from the browser, view-only. The host generates a code, viewers connect with it, and the host approves each person. Open for anyone who wants to host their own instance.",
    },
    cover: {
      html: `<div class="os-cover"><div class="os-window"><div class="os-bar"><i></i><i></i><i></i></div><div class="os-screen"><span class="os-live">● LIVE</span></div></div><div class="os-code"><small>code</small><b>A7K-29Q</b></div></div>`,
      alt: {
        pt: "Ilustração do OpenScreen: janela de navegador com a tela sendo compartilhada ao vivo e o código de conexão ao lado.",
        en: "OpenScreen illustration: a browser window with the screen being shared live and the connection code next to it.",
      },
    },
  },
];

/* =========================================================
   IDIOMA
   ========================================================= */
const LANG_KEY = "lang";
let lang = (() => {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch (e) {
    /* sem storage */
  }
  return /^pt/i.test(navigator.language || "") ? "pt" : "en";
})();

/* Lê um valor bilíngue: { pt, en } ou texto simples. */
const L = (v) => (v && typeof v === "object" && !Array.isArray(v) && ("pt" in v || "en" in v) ? v[lang] ?? v.pt : v);

function setLang(next) {
  lang = next;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* sem storage */
  }
  route(true);
}

function syncChrome() {
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-ui]").forEach((el) => {
    el.textContent = L(UI[el.dataset.ui]);
  });
  const sw = document.querySelector("[data-lang-toggle]");
  if (sw) {
    sw.textContent = L(UI.langSwitch);
    sw.setAttribute("aria-label", L(UI.langSwitchLabel));
  }
}

/* =========================================================
   RENDER
   ========================================================= */
const app = document.getElementById("app");
const pad = (n) => String(n).padStart(2, "0");

function media(m, cls = "") {
  if (m && typeof m === "object" && m.html) {
    return `<div class="media ${cls}" role="img" aria-label="${L(m.alt) || ""}">${m.html}</div>`;
  }
  if (m && typeof m === "object" && m.src) {
    return `<div class="media ${cls}"><img src="${m.src}" alt="${L(m.alt) || ""}" loading="lazy"></div>`;
  }
  const label = typeof m === "string" ? m : (m && L(m.label)) || "Imagem";
  return `<div class="media ${cls}" role="img" aria-label="${L(UI.imgSlot)}: ${label}"><div class="ph"><span>${label}</span><span>${L(UI.replace)}</span></div></div>`;
}

const rows = (list) =>
  list
    .map(
      ([a, b, c]) => `
    <div class="row grid"><span class="r-org">${L(a)}</span><span class="r-role">${L(b)}</span><span class="r-time">${L(c)}</span></div>`,
    )
    .join("");

const linkCards = (list) =>
  list
    .map(
      (w) => `
    <article class="work work-web">
      ${media(w.cover)}
      <div class="work-body">
        <h3 class="work-title">${w.title}</h3>
        <span class="work-context">${L(w.context)}, ${L(w.type)}</span>
        <p class="work-line">${L(w.line)}</p>
        ${w.url ? `<a class="work-cta" href="${w.url}" target="_blank" rel="noopener">${L(w.cta || UI.viewProject)} <span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>`,
    )
    .join("");

function home() {
  const works = CASES.map(
    (c, i) => `
    <a class="work ${i === 0 ? "is-wide" : ""}" href="#/case/${c.slug}">
      ${media(c.cover || c.hero)}
      <div class="work-body">
        <h3 class="work-title">${c.title}</h3>
        <span class="work-context">${c.context !== "—" ? c.context + ", " : ""}${L(c.type)}</span>
        <p class="work-line">${L(c.cardLine)}</p>
      </div>
    </a>`,
  ).join("");

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
    <h1 class="sr-only">${L(UI.heroH1)}</h1>
    <div class="duo-side duo-side-design">
      <h2>designer</h2>
      <p>${L(UI.heroDesign)}</p>
    </div>
    <div class="duo-side duo-side-code">
      <h2>&lt;coder&gt;</h2>
      <p>${L(UI.heroCode)}</p>
    </div>
    </div>
    <span class="duo-divider" aria-hidden="true"></span>
  </section>


  <section class="section" id="trabalhos">
    <div class="wrap">
      <div class="section-head grid">
        <h2>${L(UI.worksTitle)} <span class="count">[${pad(CASES.length)}]</span></h2>
        <p>${L(UI.worksDesc)}</p>
      </div>
      <div class="works grid">${works}</div>
    </div>
  </section>

  <section class="section" id="web-design">
    <div class="wrap">
      <div class="section-head grid">
        <h2>${L(UI.webTitle)} <span class="count">[${pad(WEB.length)}]</span></h2>
        <p>${L(UI.webDesc)}</p>
      </div>
      <div class="works grid">${linkCards(WEB)}</div>
    </div>
  </section>

  <section class="section" id="projetos">
    <div class="wrap">
      <div class="section-head grid">
        <h2>${L(UI.sideTitle)} <span class="count">[${pad(SIDE.length)}]</span></h2>
        <p>${L(UI.sideDesc)}</p>
      </div>
      <div class="works grid">${linkCards(SIDE)}</div>
    </div>
  </section>

  <section class="section" id="sobre">
    <div class="wrap">
      <div class="section-head grid"><h2>${L(UI.aboutTitle)}</h2></div>
      <div class="grid">
        <div class="about-text">
          <p>${L(SITE.summary)}</p>
          <a class="work-cta" href="#/sobre">${L(UI.readMore)} <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </section>

  ${contact()}`;
}

function aboutView() {
  const [lead, ...rest] = L(SITE.about);
  return `
  <article>
    <section class="case-top">
      <div class="wrap grid">
        <a class="back link" href="#/" data-scroll="sobre">${L(UI.back)}</a>
        <h1>${L(UI.aboutTitle)}</h1>
        <p class="case-summary">${lead}</p>
      </div>
    </section>

    <section class="about-page">
      <div class="wrap grid">
        <div class="story-body about-body">${rest.map((p) => `<p>${p}</p>`).join("")}</div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="rows">
          <p class="rows-label">${L(UI.experience)} <span class="count">[${pad(SITE.experience.length)}]</span></p>
          ${rows(SITE.experience)}
          <p class="rows-label">${L(UI.education)}</p>
          ${rows(SITE.education)}
        </div>
      </div>
    </section>
  </article>
  ${contact()}`;
}

function contact() {
  return `
  <section class="contact" id="contato">
    <div class="wrap grid">
      <h2>${L(UI.contactTitle)}</h2>
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
      <h2>${L(s.title)}</h2>
      <div class="story-body">
        ${(s.p || []).map((p) => `<p>${L(p)}</p>`).join("")}
        ${s.list ? `<ul>${s.list.map(([t, d]) => `<li><strong>${L(t)}</strong><span>${L(d)}</span></li>`).join("")}</ul>` : ""}
      </div>
    </div>`,
    )
    .join("");

  return `
  <article>
    <section class="case-top">
      <div class="wrap grid">
        <a class="back link" href="#/" data-scroll="trabalhos">${L(UI.back)}</a>
        <h1>${c.title}</h1>
        <p class="case-summary">${L(c.summary)}</p>
        <dl class="case-meta grid">
          <div><dt>${L(UI.context)}</dt><dd>${c.context}</dd></div>
          <div><dt>${L(UI.role)}</dt><dd>${L(c.role)}</dd></div>
          <div><dt>${L(UI.type)}</dt><dd>${L(c.type)}</dd></div>
          <div><dt>${L(UI.stack)}</dt><dd>${c.stack}</dd></div>
        </dl>
      </div>
    </section>

    <section class="case-hero"><div class="wrap">${media(c.hero)}</div></section>

    <section class="story"><div class="wrap">${story}</div></section>

    <section class="wrap">
      <div class="metric grid ${m.from ? "" : "single"}">
        ${m.from ? `<div class="metric-from"><div class="metric-value">${m.from}</div><p class="metric-label">${L(UI.before)}: ${L(m.fromLabel)}</p></div>` : ""}
        <div class="metric-to"><div class="metric-value">${m.to}</div><p class="metric-label">${m.from ? L(UI.after) + ": " : ""}${L(m.toLabel)}</p></div>
      </div>
    </section>

    <section class="wrap"><div class="gallery grid">${c.gallery.map((g) => media(g.src ? g : g.label, g.size)).join("")}</div></section>

    <a class="next" href="#/case/${next.slug}">
      <div class="wrap grid">
        <small>${L(UI.next)}</small>
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

/* keepScroll: ao trocar de idioma, a página é redesenhada sem voltar ao topo. */
function route(keepScroll = false) {
  const y = window.scrollY;
  const hash = current || "#/";
  const match = hash.match(/^#\/case\/([\w-]+)/);
  const c = match && CASES.find((x) => x.slug === match[1]);
  const isAbout = /^#\/(sobre|about)\b/.test(hash);

  syncChrome();
  if (!keepScroll) {
    app.style.animation = "none";
    void app.offsetHeight;
    app.style.animation = "";
  }

  if (c) {
    app.innerHTML = caseView(c);
    document.title = `${c.title} — ${SITE.name}`;
  } else if (isAbout) {
    app.innerHTML = aboutView();
    document.title = `${L(UI.aboutTitle)} — ${SITE.name}`;
  } else {
    app.innerHTML = home();
    document.title = `${SITE.name} — ${ROLE}`;
  }

  if (keepScroll) {
    window.scrollTo(0, y);
  } else if (pendingScroll && !c && !isAbout) {
    const el = document.getElementById(pendingScroll);
    requestAnimationFrame(() => el && el.scrollIntoView());
  } else {
    window.scrollTo(0, 0);
  }
  pendingScroll = null;
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-lang-toggle]")) {
    setLang(lang === "pt" ? "en" : "pt");
    return;
  }
  const a = e.target.closest('a[href^="#/"]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
  e.preventDefault();
  const href = a.getAttribute("href");
  const id = a.dataset.scroll;
  const onHome = !/^#\/(case\/|sobre|about)/.test(current);
  /* Âncora presente na página atual (ex.: Contato): só rola até ela. */
  const local = id && document.getElementById(id);
  if (local && (onHome || id === "contato")) {
    local.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
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

function buildOverlay() {
  const n =
    parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--cols"),
    ) || 12;
  og.innerHTML = "<span></span>".repeat(n);
}
function setGrid(on) {
  overlay.classList.toggle("on", on);
  if (on) buildOverlay();
}
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
