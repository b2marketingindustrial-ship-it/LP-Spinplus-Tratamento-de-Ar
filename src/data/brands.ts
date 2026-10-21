/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Só fica no projeto se alguma seção escolhida declarar o primitivo
 * `BrandCarousel` no manifesto. `scripts/compose.mjs` remove este arquivo, o
 * componente e `src/assets/brands/` quando nenhuma seção usa o carrossel, para
 * não deixar componente morto (PROMPT-PADRAO-LP, regra 12).
 *
 * Spinplus: a LP atende uma única marca, a Ingersoll Rand. Com menos de 4 logos o
 * carrossel não renderiza — o nome da marca aparece na copy, que não depende de
 * autorização de uso do logo (entrada 7, pendente em docs/BRIEFING.md).
 */
import type { ImageMetadata } from 'astro'

import ingersollRand from '@assets/brands/ingersoll-rand.webp'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands = [
  { name: 'Ingersoll Rand', src: ingersollRand },
] as const satisfies readonly Brand[]
