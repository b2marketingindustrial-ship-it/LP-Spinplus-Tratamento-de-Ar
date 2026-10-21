/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Os 5 diferenciais vêm da LP estática de tratamento de ar, que os tirou do
 * briefing; o banner é o mesmo da LP Spinplus Manutenção. São 5 exatos: o grid é
 * `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

// Banner enviado pelo cliente para a LP de manutenção: o navy à esquerda já vem fundido na foto.
import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Especialista em ar', 'comprimido industrial.'],
  text: `Há mais de 20 anos em ar comprimido, a ${site.brandShort} distribui no Rio de Janeiro os equipamentos de tratamento de ar Ingersoll Rand, com equipe certificada pelo fabricante e elementos originais.`,
  scene: {
    src: cenario,
    alt: 'Técnico de óculos de proteção fazendo diagnóstico com aparelho de medição na unidade compressora aberta de um compressor',
  },
  reasons: [
    {
      icon: 'calendar',
      title: 'Mais de 20 anos',
      description: 'Dedicados a ar comprimido.',
    },
    {
      icon: 'gear',
      title: 'Atuação especializada',
      description: 'Foco em geração e tratamento de ar.',
    },
    {
      icon: 'shield',
      title: 'Distribuição no RJ',
      description: 'Distribuidor Ingersoll Rand no estado.',
    },
    {
      icon: 'users',
      title: 'Técnicos certificados',
      description: 'Certificação pela Ingersoll Rand.',
    },
    {
      icon: 'layers',
      title: 'Portfólio completo',
      description: 'Refrigeração, adsorção, filtragem e drenagem.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
