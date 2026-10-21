/**
 * Dados da seção "Vitrine de produtos" (biblioteca B2, fase: oferta).
 *
 * Os 22 equipamentos de tratamento de ar da LP estática, filtráveis por família, na
 * estrutura do catálogo original (variante local do componente).
 * Sem descrição: a LP estática só tinha foto e nome, e a descrição é tudo ou nada.
 * As fotos vieram do site da Spinplus e foram centralizadas em 800×600, sem retoque.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import refrigeracao10150 from '@assets/vitrine/refrigeracao-10-150.png'
import refrigeracao360024000 from '@assets/vitrine/refrigeracao-3600-24000.png'
import refrigeracaoNirvana from '@assets/vitrine/refrigeracao-nirvana.png'
import refrigeracaoSemCiclo from '@assets/vitrine/refrigeracao-sem-ciclo.png'
import refrigeracaoSerieDa from '@assets/vitrine/refrigeracao-serie-da.png'
import adsorcaoSemAquecimento from '@assets/vitrine/adsorcao-sem-aquecimento.png'
import adsorcaoHoc1088 from '@assets/vitrine/adsorcao-hoc-1088.png'
import adsorcaoHoc1191 from '@assets/vitrine/adsorcao-hoc-1191.png'
import adsorcaoHoc420 from '@assets/vitrine/adsorcao-hoc-420.png'
import adsorcao42226 from '@assets/vitrine/adsorcao-42-226.png'
import adsorcaoVentilador from '@assets/vitrine/adsorcao-ventilador.png'
import adsorcaoDIla from '@assets/vitrine/adsorcao-d-ila.png'
import adsorcaoHl from '@assets/vitrine/adsorcao-hl.png'
import adsorcaoModular from '@assets/vitrine/adsorcao-modular.png'
import adsorcaoPontoDeUso from '@assets/vitrine/adsorcao-ponto-de-uso.png'
import adsorcaoHla from '@assets/vitrine/adsorcao-hla.png'
import filtroAcoCarbono from '@assets/vitrine/filtro-aco-carbono.png'
import filtroSerieF from '@assets/vitrine/filtro-serie-f.png'
import drenoLiquidator from '@assets/vitrine/dreno-liquidator.png'
import drenoEletronico from '@assets/vitrine/dreno-eletronico.png'
import drenoPnldIi from '@assets/vitrine/dreno-pnld-ii.png'
import valvulaDreno from '@assets/vitrine/valvula-dreno.png'

/** Marca, linha ou família. `logo` é opcional: sem ela, vale o nome. */
export interface ShowcaseGroup {
  id: string
  label: string
  logo: Photo | null
  /** Ícone do botão de filtro (variante local, estrutura da LP estática). */
  icon: IconName
}

export interface ShowcaseItem {
  id: string
  /** id de um grupo de `groups`, ou '' quando a vitrine não é agrupada. */
  group: string
  title: string
  /** 1 frase, 50–90 caracteres. '' quando a vitrine é só foto e nome. */
  description: string
  photo: Photo
}

export const showcase = {
  eyebrow: 'Catálogo de equipamentos',
  title: 'Soluções completas para tratamento de ar comprimido',
  /** Trecho do título destacado em vermelho, como na LP estática. */
  highlight: 'Soluções completas',
  text: 'Secadores, filtros e drenos Ingersoll Rand para a sua planta. Filtre pela família e peça o dimensionamento do modelo que atende à sua vazão.',
  groups: [
    { id: 'refrigeracao', label: 'Refrigeração', logo: null, icon: 'snowflake' },
    { id: 'adsorcao', label: 'Adsorção', logo: null, icon: 'waves' },
    { id: 'filtros', label: 'Filtros', logo: null, icon: 'funnel' },
    { id: 'drenos', label: 'Drenos', logo: null, icon: 'droplet' },
  ],
  items: [
    {
      id: 'refrigeracao-10-150',
      group: 'refrigeracao',
      title: 'Secador por refrigeração 10–150 CFM',
      description: '',
      photo: { src: refrigeracao10150, alt: 'Secador por refrigeração 10–150 CFM Ingersoll Rand' },
    },
    {
      id: 'refrigeracao-3600-24000',
      group: 'refrigeracao',
      title: 'Secadores por refrigeração 3.600 a 24.000 CFM',
      description: '',
      photo: {
        src: refrigeracao360024000,
        alt: 'Secadores por refrigeração 3.600 a 24.000 CFM Ingersoll Rand',
      },
    },
    {
      id: 'refrigeracao-nirvana',
      group: 'refrigeracao',
      title: 'Secadores por refrigeração Nirvana',
      description: '',
      photo: { src: refrigeracaoNirvana, alt: 'Secadores por refrigeração Nirvana Ingersoll Rand' },
    },
    {
      id: 'refrigeracao-sem-ciclo',
      group: 'refrigeracao',
      title: 'Secadores por refrigeração sem ciclo',
      description: '',
      photo: {
        src: refrigeracaoSemCiclo,
        alt: 'Secadores por refrigeração sem ciclo Ingersoll Rand',
      },
    },
    {
      id: 'refrigeracao-serie-da',
      group: 'refrigeracao',
      title: 'Secadores por refrigeração Série DA',
      description: '',
      photo: {
        src: refrigeracaoSerieDa,
        alt: 'Secadores por refrigeração Série DA Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-sem-aquecimento',
      group: 'adsorcao',
      title: 'Secador por adsorção sem aquecimento',
      description: '',
      photo: {
        src: adsorcaoSemAquecimento,
        alt: 'Secador por adsorção sem aquecimento Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-hoc-1088',
      group: 'adsorcao',
      title: 'Secador por adsorção HOC 1.088/23.703 m³/h',
      description: '',
      photo: {
        src: adsorcaoHoc1088,
        alt: 'Secador por adsorção HOC 1.088/23.703 m³/h Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-hoc-1191',
      group: 'adsorcao',
      title: 'Secador por adsorção HOC 1.191/24.119 m³/h',
      description: '',
      photo: {
        src: adsorcaoHoc1191,
        alt: 'Secador por adsorção HOC 1.191/24.119 m³/h Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-hoc-420',
      group: 'adsorcao',
      title: 'Secadores por adsorção HOC 420/3.680 m³/h',
      description: '',
      photo: {
        src: adsorcaoHoc420,
        alt: 'Secadores por adsorção HOC 420/3.680 m³/h Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-42-226',
      group: 'adsorcao',
      title: 'Secador por adsorção 4,2 a 226 m³/min',
      description: '',
      photo: { src: adsorcao42226, alt: 'Secador por adsorção 4,2 a 226 m³/min Ingersoll Rand' },
    },
    {
      id: 'adsorcao-ventilador',
      group: 'adsorcao',
      title: 'Adsorção com ventilador 4,2 a 226 m³/min',
      description: '',
      photo: {
        src: adsorcaoVentilador,
        alt: 'Secador por adsorção com ventilador 4,2 a 226 m³/min Ingersoll Rand',
      },
    },
    {
      id: 'adsorcao-d-ila',
      group: 'adsorcao',
      title: 'Secador por adsorção D-ILA',
      description: '',
      photo: { src: adsorcaoDIla, alt: 'Secador por adsorção D-ILA Ingersoll Rand' },
    },
    {
      id: 'adsorcao-hl',
      group: 'adsorcao',
      title: 'Secador por adsorção HL',
      description: '',
      photo: { src: adsorcaoHl, alt: 'Secador por adsorção HL Ingersoll Rand' },
    },
    {
      id: 'adsorcao-modular',
      group: 'adsorcao',
      title: 'Secador por adsorção modular',
      description: '',
      photo: { src: adsorcaoModular, alt: 'Secador por adsorção modular Ingersoll Rand' },
    },
    {
      id: 'adsorcao-ponto-de-uso',
      group: 'adsorcao',
      title: 'Secador por adsorção ponto de uso',
      description: '',
      photo: { src: adsorcaoPontoDeUso, alt: 'Secador por adsorção ponto de uso Ingersoll Rand' },
    },
    {
      id: 'adsorcao-hla',
      group: 'adsorcao',
      title: 'Secadores por adsorção HLA',
      description: '',
      photo: { src: adsorcaoHla, alt: 'Secadores por adsorção HLA Ingersoll Rand' },
    },
    {
      id: 'filtro-aco-carbono',
      group: 'filtros',
      title: 'Filtros coalescentes em aço carbono',
      description: '',
      photo: { src: filtroAcoCarbono, alt: 'Filtros coalescentes em aço carbono Ingersoll Rand' },
    },
    {
      id: 'filtro-serie-f',
      group: 'filtros',
      title: 'Filtros coalescentes Série F',
      description: '',
      photo: { src: filtroSerieF, alt: 'Filtros coalescentes Série F Ingersoll Rand' },
    },
    {
      id: 'dreno-liquidator',
      group: 'drenos',
      title: 'Dreno sem perdas Liquidator',
      description: '',
      photo: { src: drenoLiquidator, alt: 'Dreno sem perdas Liquidator Ingersoll Rand' },
    },
    {
      id: 'dreno-eletronico',
      group: 'drenos',
      title: 'Drenos eletrônicos sem perda',
      description: '',
      photo: { src: drenoEletronico, alt: 'Drenos eletrônicos sem perda Ingersoll Rand' },
    },
    {
      id: 'dreno-pnld-ii',
      group: 'drenos',
      title: 'Drenos sem perda PNLD II',
      description: '',
      photo: { src: drenoPnldIi, alt: 'Drenos sem perda PNLD II Ingersoll Rand' },
    },
    {
      id: 'valvula-dreno',
      group: 'drenos',
      title: 'Válvulas eletrônicas de dreno',
      description: '',
      photo: { src: valvulaDreno, alt: 'Válvulas eletrônicas de dreno Ingersoll Rand' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  groups: readonly ShowcaseGroup[]
  items: readonly ShowcaseItem[]
}
