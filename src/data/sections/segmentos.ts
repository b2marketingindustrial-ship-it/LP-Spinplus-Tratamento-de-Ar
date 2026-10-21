import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import petroleoGas from '@assets/segmentos/petroleo-gas.png'
import petroquimica from '@assets/segmentos/petroquimica.png'
import energia from '@assets/segmentos/energia.png'
import metalurgiaSiderurgia from '@assets/segmentos/metalurgia-siderurgia.png'
import farmaceutica from '@assets/segmentos/farmaceutica.png'
import alimentos from '@assets/segmentos/alimentos.png'
import offshore from '@assets/segmentos/offshore.png'
import outrosSetores from '@assets/segmentos/outros-setores.png'

export interface Segment {
  id: string
  icon: IconName
  label: string
  description: string
  bullets: readonly [string, string, string]
  photo?: Photo
}

export const segments = {
  eyebrow: 'Segmentos',
  title: 'Tratamento de ar para cada setor industrial',
  text: 'Indústrias em que a qualidade do ar comprimido é parte do processo, não um detalhe.',
  items: [
    {
      id: 'petroleo-gas',
      icon: 'droplet',
      label: 'Petróleo e gás',
      description:
        'Refinarias e terminais em que o ar de instrumento precisa chegar seco e limpo às válvulas, aos atuadores e aos painéis.',
      bullets: [
        'Ar de instrumentação',
        'Atuadores e válvulas de controle',
        'Painéis pressurizados',
      ],
      photo: {
        src: petroleoGas,
        alt: 'Sistema de tratamento de ar em refinaria de petróleo e gás',
      },
    },
    {
      id: 'petroquimica',
      icon: 'box',
      label: 'Petroquímica',
      description:
        'Processos contínuos que dependem de ar comprimido confiável para manter instrumentos e equipamentos em operação.',
      bullets: ['Malhas de controle', 'Sistemas pneumáticos', 'Unidades de processo'],
      photo: { src: petroquimica, alt: 'Sistema de tratamento de ar em planta petroquímica' },
    },
    {
      id: 'energia',
      icon: 'zap',
      label: 'Energia',
      description:
        'Geração e distribuição que exigem ar seco para proteção, acionamento e continuidade das operações críticas.',
      bullets: ['Turbinas e compressores', 'Sistemas de acionamento', 'Instrumentação de processo'],
      photo: { src: energia, alt: 'Tratamento de ar em usina de geração de energia' },
    },
    {
      id: 'metalurgia-siderurgia',
      icon: 'flame',
      label: 'Metalurgia e siderurgia',
      description:
        'Ambientes de alta temperatura e partículas em que a confiabilidade do ar comprimido protege a produção.',
      bullets: ['Fornos e laminadores', 'Válvulas pneumáticas', 'Sistemas de automação'],
      photo: { src: metalurgiaSiderurgia, alt: 'Sistema de ar comprimido em siderúrgica' },
    },
    {
      id: 'farmaceutica',
      icon: 'crosshair',
      label: 'Farmacêutica',
      description:
        'Produção regulada que requer ar limpo e seco para apoiar ambientes controlados e linhas de envase.',
      bullets: ['Linhas de envase', 'Salas limpas', 'Ar de processo'],
      photo: { src: farmaceutica, alt: 'Tratamento de ar em indústria farmacêutica' },
    },
    {
      id: 'alimentos',
      icon: 'utensils',
      label: 'Alimentos',
      description:
        'Processos de envase e embalagem em que a qualidade do ar ajuda a preservar segurança e padronização.',
      bullets: ['Envase e embalagem', 'Sopro de embalagens', 'Automação de linhas'],
      photo: { src: alimentos, alt: 'Tratamento de ar em indústria de alimentos e bebidas' },
    },
    {
      id: 'offshore',
      icon: 'factory',
      label: 'Soluções offshore',
      description:
        'Sistemas compactos e robustos para plataformas, com desempenho confiável sob maresia e operação contínua.',
      bullets: ['Plataformas marítimas', 'Ar de instrumentação', 'Proteção contra corrosão'],
      photo: { src: offshore, alt: 'Sistema de tratamento de ar em plataforma offshore' },
    },
    {
      id: 'outras',
      icon: 'more-horizontal',
      label: 'Outros setores',
      description:
        'Cada aplicação industrial tem uma exigência própria. Avaliamos o seu processo para indicar a solução adequada.',
      bullets: ['Diagnóstico da aplicação', 'Dimensionamento técnico', 'Atendimento especializado'],
      photo: { src: outrosSetores, alt: 'Sistema de tratamento de ar em planta industrial' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Segment, Segment, Segment, Segment, Segment, Segment, Segment, Segment]
}
