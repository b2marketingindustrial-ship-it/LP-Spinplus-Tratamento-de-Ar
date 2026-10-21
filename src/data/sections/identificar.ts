/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Variante "o que define a tecnologia certa" (colhida da LP Wortec): os 6 itens são
 * as variáveis que definem o tratamento de ar, não dados a enviar. A vazão, a
 * pressão e a qualidade de ar vêm do texto de contato da LP estática; as outras três
 * aguardam validação do comercial (docs/BRIEFING.md). São 6 exatos.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dimensionamento',
  title: 'O que define o tratamento de ar certo?',
  text: 'Não precisa ter todos os dados em mãos. Envie o que você tiver e a equipe técnica indica secador, filtragem e drenagem para a sua instalação.',
  microcopy: 'Retorno com apoio técnico',
  items: [
    { icon: 'trend-up', label: 'Vazão', hint: 'em CFM ou m³/min' },
    { icon: 'target', label: 'Pressão', hint: 'de trabalho da rede' },
    { icon: 'droplet', label: 'Ponto de orvalho', hint: 'exigido pelo processo' },
    { icon: 'badge-check', label: 'Qualidade do ar', hint: 'classe ISO 8573-1' },
    { icon: 'flame', label: 'Temperatura', hint: 'ambiente e de entrada' },
    { icon: 'gear', label: 'Compressor', hint: 'modelo e potência' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
