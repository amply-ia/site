import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "pt" | "en"

const dict = {
  pt: {
    nav: { home: "Início", solutions: "Soluções", about: "Quem somos", contact: "Contato" },
    cta: { demo: "Agendar demonstração", how: "Ver como funciona" },
    hero: {
      badge: "Tecnologia & marketing pra sua empresa",
      titleStatic: "Sua empresa",
      rotating: ["vendendo mais", "atendendo 24h", "1ª no Google", "crescendo"],
      subtitle:
        "A Amply cuida da sua presença digital de ponta a ponta: bot de WhatsApp com IA e CRM, site profissional, tráfego pago no Meta e no Google e SEO. Você cuida do negócio — a gente faz a internet vender por você.",
      proof: ["Bot + CRM", "Sites", "Meta & Google Ads", "SEO"],
    },
    solutions: {
      kicker: "Soluções",
      title: "Tudo que sua empresa precisa pra crescer online",
      subtitle:
        "Quatro frentes que trabalham juntas: atendimento automático, site profissional, anúncios e posicionamento no Google.",
      more: "Ver detalhes",
      items: [
        { title: "Bot de WhatsApp + CRM", desc: "IA que atende, qualifica e agenda 24 horas por dia — com o CRM organizando cada lead.", href: "#produto" },
        { title: "Sites profissionais", desc: "Sites rápidos, bonitos e feitos pra transformar visita em cliente.", href: "#sites" },
        { title: "Tráfego pago", desc: "Campanhas no Meta Ads e no Google Ads pra trazer cliente novo todo dia.", href: "#trafego" },
        { title: "SEO & posicionamento", desc: "Sua empresa na primeira página do Google, sem depender só de anúncio.", href: "#seo" },
      ],
    },
    product: {
      kicker: "Solução 01 · Bot + CRM",
      title: "Atendimento no WhatsApp que vende sozinho",
      subtitle:
        'O bot na linha de frente, o CRM por trás. Do primeiro "oi" até o agendamento, tudo automático e organizado.',
      steps: [
        { title: "Atende", desc: "O cliente chama no WhatsApp e o bot responde na hora, com o tom da sua empresa." },
        { title: "Qualifica", desc: "Entende o que a pessoa procura e apresenta seus produtos e serviços, com foto e vídeo." },
        { title: "Agenda", desc: "Marca a visita ou reunião na agenda da equipe e confirma o horário com o cliente." },
        { title: "Organiza", desc: "Tudo cai no CRM: histórico, status e lembretes. Nada se perde." },
      ],
    },
    demo: {
      kicker: "Demo",
      title: "Veja o bot em ação",
      subtitle: 'Exemplo real numa concessionária: do primeiro "oi" até a visita marcada — com vitrine de produtos e tudo salvo no CRM.',
    },
    chat: {
      storeName: "Sua Loja · Amply",
      online: "online agora",
      catalogHeader: "3 opções no seu perfil",
      booked: "Visita agendada · sábado 10h · lead salvo no CRM",
      typing: "Digitando",
      replay: "repetir demo",
      cars: [
        { title: "Hatch 2021 · Completo", price: "R$ 68.900" },
        { title: "Sedan 2020 · Automático", price: "R$ 79.900" },
        { title: "SUV 2022 · Único dono", price: "R$ 112.900" },
      ],
      script: [
        { role: "them", text: "Oi, boa tarde!", time: "14:02" },
        { role: "me", text: "Oii, boa tarde! Seja bem-vindo 😊 Sou do atendimento da loja. Posso te ajudar a achar um carro hoje?", time: "14:02" },
        { role: "them", text: "Pode sim! Queria dar uma olhada no que vocês têm", time: "14:03" },
        { role: "me", text: "Show! Me conta rapidinho: tá procurando algo mais econômico, família ou pra trabalhar? Já te separo umas opções 👇", time: "14:03" },
        { role: "them", text: "Family, algo confortável", time: "14:03" },
        { role: "me", text: "Perfeito! Olha essas três que tão saindo bastante:", time: "14:04" },
        { role: "catalog", time: "14:04" },
        { role: "them", text: "Curti o SUV! Dá pra ver pessoalmente?", time: "14:05" },
        { role: "me", text: "Com certeza 🙌 Você prefere durante a semana ou no fim de semana?", time: "14:05" },
        { role: "them", text: "Sábado de manhã é melhor pra mim", time: "14:06" },
        { role: "me", text: "Fechou! Tenho sábado às 10h livre. Posso já deixar reservado no seu nome?", time: "14:06" },
        { role: "them", text: "Pode sim, obrigado!", time: "14:06" },
        { role: "me", text: "Agendado! ✅ Te espero sábado às 10h pra ver o SUV. Qualquer coisa é só me chamar por aqui 😉", time: "14:07" },
        { role: "booked", time: "14:07" },
      ],
    },
    features: {
      kicker: "Recursos",
      title: "Tudo que o bot da Amply faz pela sua empresa",
      subtitle: "Atendimento, catálogo, agenda, campanhas e relacionamento — num sistema só.",
      items: [
        { title: "Atendimento 24/7", desc: "Responde na hora, de madrugada e fim de semana, de forma natural — e passa pro humano quando precisa." },
        { title: "Mostra seu catálogo", desc: "Apresenta seus produtos e serviços com foto, vídeo e preço, filtrando pelo que o cliente procura." },
        { title: "Agenda sozinho", desc: "Respeita seu horário, evita choque de agenda e confirma com o cliente." },
        { title: "Captura todo contato", desc: "Cada conversa vira lead cadastrado, com histórico salvo pra sempre." },
        { title: "Lista de espera", desc: "Anota o que o cliente queria e avisa assim que fica disponível de novo." },
        { title: "Aniversário automático", desc: "Parabeniza a base sozinho, com o nome e a identidade da sua empresa." },
        { title: "Campanhas em massa", desc: "Dispara ofertas segmentadas com templates aprovados pela Meta." },
        { title: "Reativa leads parados", desc: "Identifica quem sumiu e reabre a conversa, sem trabalho manual." },
        { title: "Painel em tempo real", desc: "Leads, visitas e conversões do dia, da semana e do mês num lugar só." },
        { title: "Catálogo fácil", desc: "Cadastra com foto e vídeo, marca vendido ou reservado e edita em segundos." },
        { title: "Equipe toda junta", desc: "Login por vendedor, histórico de quem atendeu, nada se perde." },
        { title: "Seguro e oficial", desc: "Criptografia, LGPD, isolamento por empresa e WhatsApp oficial da Meta." },
      ],
    },
    sites: {
      kicker: "Solução 02 · Sites",
      title: "Sites que transformam visita em cliente",
      subtitle:
        "Design profissional, carregamento rápido e cada seção pensada pra levar o visitante até o contato.",
      mock: { url: "suaempresa.com.br", cta: "Chamar no WhatsApp" },
      items: [
        { title: "Design sob medida", desc: "Visual moderno, com a cara da sua marca. Nada de template genérico igual ao do concorrente." },
        { title: "Rápido em qualquer tela", desc: "Carrega em segundos no celular e no computador — site lento perde venda." },
        { title: "Feito pra converter", desc: "Textos, botões e seções guiando o visitante até o WhatsApp da sua empresa." },
        { title: "Pronto pro Google", desc: "Estrutura técnica otimizada pra sua empresa ser encontrada desde o primeiro dia." },
      ],
    },
    traffic: {
      kicker: "Solução 03 · Tráfego pago",
      title: "Anúncios que trazem cliente todo dia",
      subtitle:
        "A gente cria, gerencia e otimiza suas campanhas de ponta a ponta. Você só recebe o contato pronto pra fechar.",
      platforms: [
        { name: "Meta Ads", tag: "Instagram · Facebook · WhatsApp", desc: "Sua marca aparecendo todo dia pra quem tem o perfil do seu cliente. Campanhas de reconhecimento, mensagem e venda — com criativo e público testados." },
        { name: "Google Ads", tag: "Pesquisa · YouTube · Display", desc: "Sua empresa no topo na hora exata em que alguém pesquisa o que você vende. Quem procura, encontra você primeiro." },
      ],
      items: [
        { title: "Remarketing", desc: "Quem visitou seu site ou chamou no WhatsApp volta a ver sua marca até fechar." },
        { title: "Otimização contínua", desc: "Testes de público e criativo toda semana: corta o que não performa, escala o que dá resultado." },
        { title: "Relatórios claros", desc: "Quanto investiu, quantos contatos chegaram e quanto custou cada um. Sem mistério." },
      ],
    },
    seo: {
      kicker: "Solução 04 · SEO",
      title: "Sua empresa na primeira página do Google",
      subtitle:
        "Posicionamento orgânico pra ser encontrado todos os dias por quem já procura o que você faz — sem pagar por clique.",
      mock: {
        query: "melhor empresa perto de mim",
        result: "Sua Empresa — referência na sua região",
        url: "suaempresa.com.br",
        badge: "1º lugar",
      },
      items: [
        { title: "SEO técnico", desc: "Velocidade, estrutura e código otimizados pro Google entender — e recomendar — o seu site." },
        { title: "Palavras-chave certas", desc: "Conteúdo focado no que o seu cliente realmente digita na busca." },
        { title: "Google Maps e buscas locais", desc: "Perfil da empresa otimizado pra aparecer no mapa e no “perto de mim”." },
        { title: "Acompanhamento de posição", desc: "Relatório de ranking e tráfego: você vê sua empresa subindo no Google." },
      ],
    },
    before: {
      kicker: "Comparativo",
      title: "O que muda no seu dia a dia",
      colBefore: "Antes",
      colAfter: "Com Amply",
      rows: [
        { before: "Cliente manda WhatsApp 23h, só responde de manhã", after: "Resposta na hora, mesmo de madrugada" },
        { before: 'Vendedor passa o dia respondendo "tem esse produto?"', after: "Bot responde, vendedor foca em fechar" },
        { before: "Cliente que queria o produto X foi embora", after: "Lista de espera avisa quando ele chega" },
        { before: "Aniversário do cliente esquecido", after: "Mensagem automática parabenizando" },
        { before: "Sem como mandar promoção pra base", after: "Campanha em massa em 2 cliques" },
        { before: "Vendedor sai e leva os contatos", after: "Tudo fica no sistema, da empresa" },
      ],
    },
    results: {
      kicker: "Resultados",
      title: "Resultado pra sua empresa",
      items: [
        "Mais atendimentos sem aumentar a equipe",
        "Menos cliente perdido por demora",
        "Mais visitas e reuniões agendadas",
        "Mais vendas recuperadas com a lista de espera",
        "Relacionamento contínuo com a base",
        "Equipe focada em vender, não em digitar",
      ],
    },
    about: {
      label: "Quem somos",
      title: "Tecnologia e marketing feitos pra vender, não pra complicar.",
      p1: "A Amply nasceu da prática de quem vive vendas no dia a dia. A gente viu empresa boa perder cliente por demora na resposta, site fraco e anúncio mal feito — e resolveu mudar isso.",
      p2: "Hoje cuidamos da presença digital completa: atendimento automático com IA, sites profissionais, campanhas no Meta e no Google e posicionamento orgânico. Tudo integrado, com um time só.",
      p3: "Sua empresa presente, respondendo e vendendo — 24 horas por dia.",
    },
    crmSection: {
      label: "O CRM por trás do bot",
      title: "Seu negócio inteiro num painel",
      subtitle: "Leads, estoque, agenda, conversas e faturamento — tudo organizado e em tempo real.",
    },
    crm: {
      admin: "Administrador",
      menu: ["Início", "Estoque", "Vendidos", "Leads", "Agenda", "Conversas", "Lista de Espera", "Templates", "Campanhas", "Assistente", "Configurações"],
      lightMode: "Modo Claro",
      logout: "Sair",
      stats: [
        { n: "0", l: "Leads hoje" },
        { n: "0", l: "Visitas" },
        { n: "0", l: "Conversas" },
        { n: "0", l: "Aguardando" },
        { n: "2", l: "Em negociação" },
      ],
      acquisition: "Captação",
      leads7: "Leads · últimos 7 dias",
      leadsCaptured: "leads captados",
      pipeline: "Pipeline",
      funnel: "Funil por Status",
      totalLeads: "total de leads",
      open: "Em aberto",
      negotiation: "Negociação",
      revenue: "Faturamento",
      last7: "Últimos 7 dias",
      revenuePeriod: "receita no período",
      sale: "venda",
      showValues: "Conferir valores",
      hide: "Ocultar",
      money: "R$ 1.500.000",
      days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Hoje"],
    },
    contact: {
      label: "Fale conosco",
      title: "Bora colocar sua empresa pra vender 24h?",
      subtitle: "Fala com a gente no WhatsApp. A gente entende o momento do seu negócio e monta o plano certo: bot, site, tráfego, SEO — ou tudo junto.",
      button: "Fale conosco no WhatsApp",
      waText: "Olá! Quero conhecer as soluções da Amply pra minha empresa.",
    },
    footer: {
      nav: "Links do rodapé",
      tagline: "Tecnologia e marketing digital pra sua empresa · amply.ia.br",
      legal: "© 2026 · WhatsApp é marca da Meta Platforms, sem vínculo com a Amply.",
      company: "JOAO VITOR MEDEIROS DOS SANTOS — CNPJ 59.736.692/0001-83",
      address: "Rua Benedito Lopes Vieira, 144 — Vila Regina, Itapetininga/SP — CEP 18209-360",
      contactLabel: "contato:",
      email: "joao@amplyia.com.br",
    },
    theme: { toggle: "Alternar tema claro e escuro" },
    lang: { toggle: "Trocar idioma" },
    whatsapp: { label: "Falar com a Amply no WhatsApp" },
  },

  en: {
    nav: { home: "Home", solutions: "Solutions", about: "About", contact: "Contact" },
    cta: { demo: "Book a demo", how: "See how it works" },
    hero: {
      badge: "Tech & marketing for your business",
      titleStatic: "Your business",
      rotating: ["selling more", "open 24/7", "#1 on Google", "growing"],
      subtitle:
        "Amply handles your digital presence end to end: an AI WhatsApp bot with CRM, a professional website, paid traffic on Meta and Google, and SEO. You run the business — we make the internet sell for you.",
      proof: ["Bot + CRM", "Websites", "Meta & Google Ads", "SEO"],
    },
    solutions: {
      kicker: "Solutions",
      title: "Everything your business needs to grow online",
      subtitle:
        "Four fronts working together: automated service, a professional website, paid ads and Google positioning.",
      more: "See details",
      items: [
        { title: "WhatsApp bot + CRM", desc: "AI that answers, qualifies and books 24/7 — with a CRM organizing every lead.", href: "#produto" },
        { title: "Professional websites", desc: "Fast, beautiful sites built to turn visitors into customers.", href: "#sites" },
        { title: "Paid traffic", desc: "Meta Ads and Google Ads campaigns bringing in new customers every day.", href: "#trafego" },
        { title: "SEO & positioning", desc: "Your business on Google's first page, without relying on ads alone.", href: "#seo" },
      ],
    },
    product: {
      kicker: "Solution 01 · Bot + CRM",
      title: "WhatsApp service that sells on its own",
      subtitle:
        'The bot on the front line, the CRM behind it. From the first "hi" to the booking, everything automatic and organized.',
      steps: [
        { title: "Answers", desc: "The customer messages on WhatsApp and the bot replies instantly, in your company's voice." },
        { title: "Qualifies", desc: "Understands what the person wants and presents your products and services, with photos and videos." },
        { title: "Schedules", desc: "Books the visit or meeting on your team's calendar and confirms the time with the customer." },
        { title: "Organizes", desc: "Everything lands in the CRM: history, status and reminders. Nothing gets lost." },
      ],
    },
    demo: {
      kicker: "Demo",
      title: "See the bot in action",
      subtitle: 'A real example at a car dealership: from the first "hi" to the booked visit — with the product showcase and everything saved in the CRM.',
    },
    chat: {
      storeName: "Your Store · Amply",
      online: "online now",
      catalogHeader: "3 picks for you",
      booked: "Visit booked · Saturday 10am · lead saved in CRM",
      typing: "Typing",
      replay: "replay demo",
      cars: [
        { title: "Hatchback 2021 · Loaded", price: "R$ 68,900" },
        { title: "Sedan 2020 · Automatic", price: "R$ 79,900" },
        { title: "SUV 2022 · One owner", price: "R$ 112,900" },
      ],
      script: [
        { role: "them", text: "Hi, good afternoon!", time: "2:02 PM" },
        { role: "me", text: "Hi! Good afternoon 😊 I'm from the store's team. Can I help you find a car today?", time: "2:02 PM" },
        { role: "them", text: "Yes! I'd like to see what you have", time: "2:03 PM" },
        { role: "me", text: "Great! Quick question: are you after something economical, family-friendly, or for work? I'll line up some options 👇", time: "2:03 PM" },
        { role: "them", text: "Family, something comfortable", time: "2:03 PM" },
        { role: "me", text: "Perfect! Check out these three that are selling fast:", time: "2:04 PM" },
        { role: "catalog", time: "2:04 PM" },
        { role: "them", text: "I like the SUV! Can I see it in person?", time: "2:05 PM" },
        { role: "me", text: "Of course 🙌 Do you prefer a weekday or the weekend?", time: "2:05 PM" },
        { role: "them", text: "Saturday morning works best for me", time: "2:06 PM" },
        { role: "me", text: "Done! I have Saturday at 10am open. Want me to reserve it in your name?", time: "2:06 PM" },
        { role: "them", text: "Yes, thank you!", time: "2:06 PM" },
        { role: "me", text: "Booked! ✅ See you Saturday at 10am to check out the SUV. Anything you need, just message me here 😉", time: "2:07 PM" },
        { role: "booked", time: "2:07 PM" },
      ],
    },
    features: {
      kicker: "Features",
      title: "Everything Amply's bot does for your business",
      subtitle: "Service, catalog, scheduling, campaigns and relationships — in one system.",
      items: [
        { title: "24/7 service", desc: "Replies instantly, late at night and on weekends, naturally — and hands off to a human when needed." },
        { title: "Shows your catalog", desc: "Presents your products and services with photos, videos and prices, filtered by what the customer wants." },
        { title: "Books on its own", desc: "Respects your hours, avoids double-booking and confirms with the customer." },
        { title: "Captures every contact", desc: "Every chat becomes a saved lead, with history kept forever." },
        { title: "Waiting list", desc: "Notes what the customer wanted and alerts them as soon as it's available again." },
        { title: "Automatic birthdays", desc: "Greets your customer base on its own, with your company's name and identity." },
        { title: "Bulk campaigns", desc: "Sends segmented offers using Meta-approved templates." },
        { title: "Reactivates cold leads", desc: "Spots who went quiet and reopens the conversation, no manual work." },
        { title: "Real-time dashboard", desc: "Leads, visits and conversions for the day, week and month in one place." },
        { title: "Easy catalog", desc: "Add items with photos and videos, mark sold or reserved and edit in seconds." },
        { title: "Whole team together", desc: "A login per salesperson, a record of who handled each lead, nothing lost." },
        { title: "Secure and official", desc: "Encryption, data-privacy compliance, per-company isolation and Meta's official WhatsApp." },
      ],
    },
    sites: {
      kicker: "Solution 02 · Websites",
      title: "Websites that turn visitors into customers",
      subtitle:
        "Professional design, fast loading and every section built to guide the visitor to your contact.",
      mock: { url: "yourbusiness.com", cta: "Chat on WhatsApp" },
      items: [
        { title: "Tailor-made design", desc: "A modern look with your brand's identity. No generic template that looks like your competitor's." },
        { title: "Fast on any screen", desc: "Loads in seconds on phones and computers — slow sites lose sales." },
        { title: "Built to convert", desc: "Copy, buttons and sections guiding visitors straight to your WhatsApp." },
        { title: "Google-ready", desc: "An optimized technical structure so your business gets found from day one." },
      ],
    },
    traffic: {
      kicker: "Solution 03 · Paid traffic",
      title: "Ads that bring in customers every day",
      subtitle:
        "We create, manage and optimize your campaigns end to end. You just receive contacts ready to close.",
      platforms: [
        { name: "Meta Ads", tag: "Instagram · Facebook · WhatsApp", desc: "Your brand in front of the right audience every day. Awareness, messaging and sales campaigns — with tested creatives and audiences." },
        { name: "Google Ads", tag: "Search · YouTube · Display", desc: "Your business at the top the exact moment someone searches for what you sell. Whoever's looking finds you first." },
      ],
      items: [
        { title: "Remarketing", desc: "People who visited your site or messaged you keep seeing your brand until they close." },
        { title: "Constant optimization", desc: "Weekly audience and creative tests: cut what underperforms, scale what works." },
        { title: "Clear reporting", desc: "How much you invested, how many contacts arrived and what each one cost. No mystery." },
      ],
    },
    seo: {
      kicker: "Solution 04 · SEO",
      title: "Your business on Google's first page",
      subtitle:
        "Organic positioning so people already searching for what you do find you every day — without paying per click.",
      mock: {
        query: "best business near me",
        result: "Your Business — the reference in your area",
        url: "yourbusiness.com",
        badge: "#1 spot",
      },
      items: [
        { title: "Technical SEO", desc: "Speed, structure and code optimized so Google understands — and recommends — your site." },
        { title: "The right keywords", desc: "Content focused on what your customer actually types into search." },
        { title: "Google Maps & local search", desc: "An optimized business profile to show up on the map and in “near me” searches." },
        { title: "Rank tracking", desc: "Ranking and traffic reports: watch your business climb on Google." },
      ],
    },
    before: {
      kicker: "Comparison",
      title: "What changes in your day-to-day",
      colBefore: "Before",
      colAfter: "With Amply",
      rows: [
        { before: "Customer messages at 11pm, only gets a reply in the morning", after: "Instant reply, even late at night" },
        { before: 'Salesperson spends the day answering "is this available?"', after: "The bot answers, the salesperson focuses on closing" },
        { before: "The customer who wanted product X walked away", after: "The waiting list alerts them when it arrives" },
        { before: "Customer's birthday forgotten", after: "Automatic birthday message" },
        { before: "No way to send promos to your base", after: "Bulk campaign in 2 clicks" },
        { before: "A salesperson leaves and takes the contacts", after: "Everything stays in the system, owned by the company" },
      ],
    },
    results: {
      kicker: "Results",
      title: "Results for your business",
      items: [
        "More conversations without growing the team",
        "Fewer customers lost to slow replies",
        "More visits and meetings booked",
        "More sales recovered with the waiting list",
        "Ongoing relationship with your base",
        "A team focused on selling, not typing",
      ],
    },
    about: {
      label: "About us",
      title: "Tech and marketing built to sell, not to complicate.",
      p1: "Amply was born from the day-to-day reality of sales. We watched good businesses lose customers to slow replies, weak websites and poorly run ads — and decided to change that.",
      p2: "Today we handle the whole digital presence: AI-powered service, professional websites, Meta and Google campaigns and organic positioning. All integrated, with a single team.",
      p3: "Your business present, responding and selling — 24 hours a day.",
    },
    crmSection: {
      label: "The CRM behind the bot",
      title: "Your whole business in one dashboard",
      subtitle: "Leads, inventory, scheduling, conversations and revenue — all organized and in real time.",
    },
    crm: {
      admin: "Administrator",
      menu: ["Home", "Inventory", "Sold", "Leads", "Calendar", "Chats", "Waiting List", "Templates", "Campaigns", "Assistant", "Settings"],
      lightMode: "Light Mode",
      logout: "Log out",
      stats: [
        { n: "0", l: "Leads today" },
        { n: "0", l: "Visits" },
        { n: "0", l: "Chats" },
        { n: "0", l: "Waiting" },
        { n: "2", l: "In negotiation" },
      ],
      acquisition: "Acquisition",
      leads7: "Leads · last 7 days",
      leadsCaptured: "leads captured",
      pipeline: "Pipeline",
      funnel: "Funnel by Status",
      totalLeads: "total leads",
      open: "Open",
      negotiation: "Negotiation",
      revenue: "Revenue",
      last7: "Last 7 days",
      revenuePeriod: "revenue in period",
      sale: "sale",
      showValues: "Show values",
      hide: "Hide",
      money: "R$ 1,500,000",
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Today"],
    },
    contact: {
      label: "Get in touch",
      title: "Ready to get your business selling 24/7?",
      subtitle: "Talk to us on WhatsApp. We'll understand where your business is and build the right plan: bot, website, ads, SEO — or all of it.",
      button: "Chat with us on WhatsApp",
      waText: "Hi! I'd like to learn about Amply's solutions for my business.",
    },
    footer: {
      nav: "Footer links",
      tagline: "Tech and digital marketing for your business · amply.ia.br",
      legal: "© 2026 · WhatsApp is a trademark of Meta Platforms, not affiliated with Amply.",
      // dados cadastrais não se traduzem: razão social, CNPJ e endereço ficam idênticos em PT/EN
      company: "JOAO VITOR MEDEIROS DOS SANTOS — CNPJ 59.736.692/0001-83",
      address: "Rua Benedito Lopes Vieira, 144 — Vila Regina, Itapetininga/SP — CEP 18209-360",
      contactLabel: "contact:",
      email: "joao@amplyia.com.br",
    },
    theme: { toggle: "Toggle light and dark theme" },
    lang: { toggle: "Switch language" },
    whatsapp: { label: "Chat with Amply on WhatsApp" },
  },
} as const

function detectLang(): Lang {
  if (typeof window === "undefined") return "pt"
  const saved = localStorage.getItem("lang")
  if (saved === "pt" || saved === "en") return saved
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en"
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => any }
const LangContext = createContext<Ctx>({ lang: "pt", setLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l)
    setLangState(l)
  }

  // t("a.b.c") navega no dicionário e devolve string OU array (pra .map)
  const t = (key: string): any => {
    const parts = key.split(".")
    let cur: any = dict[lang]
    for (const p of parts) cur = cur?.[p]
    return cur ?? key
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useT() {
  return useContext(LangContext)
}
