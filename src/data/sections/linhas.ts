/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * As quatro famílias de tratamento de ar da Spinplus, da LP estática. As fotos são
 * os recortes dos produtos em 800×600, sobre o painel claro do card. A estrutura da
 * seção é a da LP estática (variante local do componente); `dark` continua nos dados
 * só pelo contrato da biblioteca, e os ids batem com os grupos da vitrine para o
 * "Ver modelos" filtrar o catálogo.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import linha4 from '@assets/linhas/linha-4.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linhas de produto',
  title: 'Quatro famílias para cada etapa do tratamento',
  /** Trecho do título destacado em vermelho, como na LP estática. */
  highlight: 'cada etapa',
  text: 'Da remoção do condensado ao ar com ponto de orvalho negativo. A escolha depende da vazão, da pressão e da qualidade de ar do seu processo.',
  items: [
    {
      id: 'refrigeracao',
      tag: 'Secagem padrão',
      title: 'Secador por refrigeração',
      description: 'Ponto de orvalho positivo para a maioria das linhas industriais.',
      photo: {
        src: linha1,
        alt: 'Secador de ar comprimido por refrigeração Ingersoll Rand da linha Nirvana',
      },
      features: [
        'Faixa de 10 a 24.000 CFM',
        'Versões cíclicas e sem ciclo',
        'Linha Nirvana e Série DA',
      ],
      dark: false,
    },
    {
      id: 'adsorcao',
      tag: 'Secagem crítica',
      title: 'Secador por adsorção',
      description: 'Ar com ponto de orvalho negativo para processos críticos.',
      photo: {
        src: linha2,
        alt: 'Secador de ar comprimido por adsorção Ingersoll Rand da linha HLA',
      },
      features: [
        'Versões a frio, a quente e HOC',
        'Ponto de orvalho de −40 °C',
        'De 90 a 8.000 CFM',
      ],
      dark: false,
    },
    {
      id: 'filtros',
      tag: 'Filtragem',
      title: 'Filtros coalescentes',
      description: 'Retenção de óleo e particulado antes dos pontos de uso.',
      photo: {
        src: linha3,
        alt: 'Filtro coalescente de ar comprimido Ingersoll Rand da Série F',
      },
      features: [
        'Série F e corpo em aço carbono',
        'Protegem secador e instrumentação',
        'Elementos originais Ingersoll Rand',
      ],
      dark: false,
    },
    {
      id: 'drenos',
      tag: 'Drenagem',
      title: 'Drenos',
      description: 'Descarte do condensado sem jogar ar comprimido fora.',
      photo: {
        src: linha4,
        alt: 'Dreno eletrônico de condensado Ingersoll Rand da linha Liquidator',
      },
      features: [
        'Eletrônicos e pneumáticos',
        'Operação sem perda de ar',
        'Liquidator, PNLD II e válvulas',
      ],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
