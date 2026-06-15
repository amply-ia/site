import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "pt" | "en"

const dict = {
  pt: {
    nav: { home: "Início", product: "Produto", about: "Quem somos", contact: "Contato" },
    cta: { demo: "Agendar demonstração", how: "Ver como funciona" },
    hero: {
      badge: "Bot + CRM para concessionárias",
      titleStatic: "O vendedor",
      rotating: ["incansável", "instantâneo", "atencioso", "inteligente", "24 horas"],
      subtitle:
        "A Amply junta bot com IA e CRM num lugar só. Ele conversa com o lead na hora, manda foto e vídeo do carro, agenda a visita e organiza tudo pra sua equipe entrar só pra fechar.",
      proof: ["Resposta em segundos", "Atendimento 24/7", "WhatsApp oficial Meta"],
    },
    product: {
      kicker: "O produto",
      title: "Um sistema só pra vender mais carro",
      subtitle:
        'O bot na linha de frente, o CRM por trás. Do primeiro "oi" até a visita marcada, tudo automático e organizado.',
      steps: [
        { title: "Atende", desc: "O lead chama no WhatsApp e o bot responde na hora, com o tom da sua loja." },
        { title: "Qualifica", desc: "Entende o que a pessoa procura e mostra os carros do estoque, com foto e vídeo." },
        { title: "Agenda", desc: "Marca a visita na agenda da equipe e confirma o horário com o cliente." },
        { title: "Organiza", desc: "Tudo cai no CRM: histórico, status e lembretes. Nada se perde." },
      ],
    },
    demo: {
      kicker: "Demo",
      title: "Veja o bot em ação",
      subtitle: 'Do primeiro "oi" até a visita marcada — com a vitrine de carros e tudo salvo no CRM.',
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
      title: "Tudo que o Amply faz pela sua loja",
      subtitle: "Atendimento, estoque, agenda, campanhas e relacionamento — num sistema só.",
      items: [
        { title: "Atendimento 24/7", desc: "Responde na hora, de madrugada e fim de semana, de forma natural — e passa pro humano quando precisa." },
        { title: "Mostra o estoque", desc: "Filtra por marca, ano e preço, manda foto e vídeo do carro e sugere parecidos." },
        { title: "Agenda sozinho", desc: "Respeita seu horário, evita choque de agenda e confirma com o cliente." },
        { title: "Captura todo contato", desc: "Cada conversa vira lead cadastrado, com histórico salvo pra sempre." },
        { title: "Lista de espera", desc: "Anota o carro que faltou e avisa o cliente assim que um parecido entra." },
        { title: "Aniversário automático", desc: "Parabeniza a base sozinho, com o nome e a identidade da sua loja." },
        { title: "Campanhas em massa", desc: "Dispara ofertas segmentadas com templates aprovados pela Meta." },
        { title: "Reativa leads parados", desc: "Identifica quem sumiu e reabre a conversa, sem trabalho manual." },
        { title: "Painel em tempo real", desc: "Leads, visitas e conversões do dia, da semana e do mês num lugar só." },
        { title: "Estoque fácil", desc: "Cadastra com foto e vídeo, marca vendido/reservado e edita em segundos." },
        { title: "Equipe toda junta", desc: "Login por vendedor, histórico de quem atendeu, nada se perde." },
        { title: "Seguro e oficial", desc: "Criptografia, LGPD, isolamento por loja e WhatsApp oficial da Meta." },
      ],
    },
    before: {
      kicker: "Comparativo",
      title: "O que muda no seu dia a dia",
      colBefore: "Antes",
      colAfter: "Com Amply",
      rows: [
        { before: "Cliente manda WhatsApp 23h, só responde de manhã", after: "Resposta na hora, mesmo de madrugada" },
        { before: 'Vendedor passa o dia respondendo "tem esse carro?"', after: "Bot responde, vendedor foca em fechar" },
        { before: "Cliente que queria o carro X foi embora", after: "Lista de espera avisa quando o carro chega" },
        { before: "Aniversário do cliente esquecido", after: "Mensagem automática parabenizando" },
        { before: "Sem como mandar promoção pra base", after: "Campanha em massa em 2 cliques" },
        { before: "Vendedor sai e leva os contatos", after: "Tudo fica no sistema, da empresa" },
      ],
    },
    results: {
      kicker: "Resultados",
      title: "Resultado pra sua loja",
      items: [
        "Mais atendimentos sem contratar vendedor",
        "Menos cliente perdido por demora",
        "Mais visitas agendadas no fim de semana",
        "Mais vendas recuperadas com a lista de espera",
        "Relacionamento contínuo com a base",
        "Equipe focada em vender, não em digitar",
      ],
    },
    about: {
      label: "Quem somos",
      title: "Tecnologia feita pra vender carro, não pra complicar.",
      p1: "A Amply nasceu da prática de quem vive o dia a dia de vendas. A gente viu o lead esfriar por demora na resposta e resolveu mudar isso.",
      p2: "Construímos uma ferramenta que atende na hora, organiza cada conversa e deixa a operação profissional — sem a loja precisar de uma equipe gigante pra dar conta do WhatsApp.",
      p3: "Atendimento instantâneo, no número oficial da sua loja, com tudo registrado pra sua equipe fechar.",
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
      title: "Bora colocar seu showroom pra atender 24h?",
      subtitle: "Fala com a gente no WhatsApp. A gente te mostra a Amply funcionando e monta tudo pra sua loja.",
      button: "Fale conosco no WhatsApp",
      waText: "Olá! Quero conhecer a Amply pra minha loja.",
    },
    footer: {
      nav: "Links do rodapé",
      tagline: "CRM e bot com IA para concessionárias · amply.ia.br",
      legal: "© 2026 · WhatsApp é marca da Meta Platforms, sem vínculo com a Amply.",
    },
    theme: { toggle: "Alternar tema claro e escuro" },
    lang: { toggle: "Trocar idioma" },
    whatsapp: { label: "Falar com a Amply no WhatsApp" },
  },

  en: {
    nav: { home: "Home", product: "Product", about: "About", contact: "Contact" },
    cta: { demo: "Book a demo", how: "See how it works" },
    hero: {
      badge: "Bot + CRM for car dealerships",
      titleStatic: "The salesperson",
      rotating: ["tireless", "instant", "attentive", "smart", "24/7"],
      subtitle:
        "Amply combines an AI bot and a CRM in one place. It chats with the lead instantly, sends car photos and videos, books the visit, and organizes everything so your team just closes the deal.",
      proof: ["Replies in seconds", "24/7 support", "Official Meta WhatsApp"],
    },
    product: {
      kicker: "The product",
      title: "One system to sell more cars",
      subtitle:
        'The bot on the front line, the CRM behind it. From the first "hi" to the booked visit, everything automatic and organized.',
      steps: [
        { title: "Answers", desc: "The lead messages on WhatsApp and the bot replies instantly, in your store's voice." },
        { title: "Qualifies", desc: "Understands what the person wants and shows cars from your inventory, with photos and videos." },
        { title: "Schedules", desc: "Books the visit on your team's calendar and confirms the time with the customer." },
        { title: "Organizes", desc: "Everything lands in the CRM: history, status and reminders. Nothing gets lost." },
      ],
    },
    demo: {
      kicker: "Demo",
      title: "See the bot in action",
      subtitle: 'From the first "hi" to the booked visit — with the car showcase and everything saved in the CRM.',
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
      title: "Everything Amply does for your store",
      subtitle: "Support, inventory, scheduling, campaigns and relationships — in one system.",
      items: [
        { title: "24/7 support", desc: "Replies instantly, late at night and on weekends, naturally — and hands off to a human when needed." },
        { title: "Shows your inventory", desc: "Filters by make, year and price, sends car photos and videos, and suggests similar ones." },
        { title: "Books on its own", desc: "Respects your hours, avoids double-booking and confirms with the customer." },
        { title: "Captures every contact", desc: "Every chat becomes a saved lead, with history kept forever." },
        { title: "Waiting list", desc: "Notes the car you didn't have and alerts the customer as soon as a similar one arrives." },
        { title: "Automatic birthdays", desc: "Greets your customer base on its own, with your store's name and identity." },
        { title: "Bulk campaigns", desc: "Sends segmented offers using Meta-approved templates." },
        { title: "Reactivates cold leads", desc: "Spots who went quiet and reopens the conversation, no manual work." },
        { title: "Real-time dashboard", desc: "Leads, visits and conversions for the day, week and month in one place." },
        { title: "Easy inventory", desc: "Add cars with photos and videos, mark sold/reserved and edit in seconds." },
        { title: "Whole team together", desc: "A login per salesperson, a record of who handled each lead, nothing lost." },
        { title: "Secure and official", desc: "Encryption, data-privacy compliance, per-store isolation and Meta's official WhatsApp." },
      ],
    },
    before: {
      kicker: "Comparison",
      title: "What changes in your day-to-day",
      colBefore: "Before",
      colAfter: "With Amply",
      rows: [
        { before: "Customer messages at 11pm, only gets a reply in the morning", after: "Instant reply, even late at night" },
        { before: 'Salesperson spends the day answering "do you have this car?"', after: "The bot answers, the salesperson focuses on closing" },
        { before: "The customer who wanted car X walked away", after: "The waiting list alerts them when the car arrives" },
        { before: "Customer's birthday forgotten", after: "Automatic birthday message" },
        { before: "No way to send promos to your base", after: "Bulk campaign in 2 clicks" },
        { before: "A salesperson leaves and takes the contacts", after: "Everything stays in the system, owned by the company" },
      ],
    },
    results: {
      kicker: "Results",
      title: "Results for your store",
      items: [
        "More conversations without hiring",
        "Fewer customers lost to slow replies",
        "More visits booked on weekends",
        "More sales recovered with the waiting list",
        "Ongoing relationship with your base",
        "A team focused on selling, not typing",
      ],
    },
    about: {
      label: "About us",
      title: "Tech built to sell cars, not to complicate.",
      p1: "Amply was born from the day-to-day reality of sales. We saw leads go cold from slow replies and decided to change that.",
      p2: "We built a tool that replies instantly, organizes every conversation and makes the operation professional — without your store needing a huge team to keep up with WhatsApp.",
      p3: "Instant service, on your store's official number, with everything recorded for your team to close.",
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
      title: "Ready to put your showroom on the clock, 24/7?",
      subtitle: "Talk to us on WhatsApp. We'll show you Amply in action and set everything up for your store.",
      button: "Chat with us on WhatsApp",
      waText: "Hi! I'd like to learn about Amply for my store.",
    },
    footer: {
      nav: "Footer links",
      tagline: "AI bot + CRM for car dealerships · amply.ia.br",
      legal: "© 2026 · WhatsApp is a trademark of Meta Platforms, not affiliated with Amply.",
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
