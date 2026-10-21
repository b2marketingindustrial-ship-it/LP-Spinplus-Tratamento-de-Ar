/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Conteúdo da Spinplus, extraído da LP estática de tratamento de ar
 * (harpyacessory-ux/LP-Tratamento-de-ar-spinplus-) e do briefing (docs/BRIEFING.md).
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu produto',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

/** H1 em duas linhas fixas no desktop; a palavra-chave da campanha passa de uma para a outra. */
const heroTitleLines = ['Soluções de tratamento de ar', 'comprimido sob medida'] as const

export const hero = {
  /** A marca atendida saiu do H1 (pedido do usuário em 21/10/2026) e fica aqui. */
  eyebrow: `Distribuidor autorizado ${site.context}`,
  /** Carrega a palavra-chave da campanha (entrada 15). É o que o check:lp compara. */
  title: heroTitleLines.join(' '),
  titleLines: heroTitleLines,
  /** Trecho do H1 destacado em vermelho. */
  highlight: 'sob medida',
  text: 'Secadores, filtros coalescentes e drenos Ingersoll Rand\ndimensionados para a vazão e a pressão da sua planta,\ncom suporte técnico de quem é distribuidor no RJ.',
  banner: {
    src: heroBg,
    alt: 'Sala de ar comprimido Ingersoll Rand com secador por refrigeração, filtros coalescentes, compressores de parafuso e reservatório',
  },
  points: [
    { icon: 'calendar', line1: 'Mais de 20 anos', line2: 'em ar comprimido' },
    { icon: 'shield', line1: 'Distribuidor Ingersoll', line2: 'Rand no RJ' },
    { icon: 'users', line1: 'Técnicos certificados', line2: 'pela fabricante' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleLines: readonly [string, string]
  highlight: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Fale com a Spinplus',
  title: 'Fale com a equipe técnica da Spinplus.',
  text: 'Informe a vazão, a pressão de trabalho e a qualidade de ar que o processo exige. Nossa equipe técnica retorna com a indicação de secador, filtragem e drenagem para a sua instalação.',
  trust: [
    { icon: 'shield', label: 'Técnicos certificados Ingersoll Rand' },
    { icon: 'gear', label: 'Equipamentos e elementos originais' },
    { icon: 'map-pin', label: 'Atendimento em todo o estado do RJ' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
