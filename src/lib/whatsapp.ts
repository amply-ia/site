const PHONE = "5515988372081"

// monta o link do WhatsApp com a mensagem (já traduzida) passada
export function waUrl(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
}

// fallback em PT pra usos sem contexto de idioma
export const WHATSAPP_URL = waUrl(
  "Olá! Vim pelo site da Amply e quero ver uma demonstração do bot + CRM para minha loja.",
)
