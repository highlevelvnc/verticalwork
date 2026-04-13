// ============================================================
// PC WORK VERTICAL — Dados centralizados da marca
// IMPORTANTE: Substituir [PLACEHOLDER] por dados reais
// ============================================================

export const brand = {
  name: 'PC Work Vertical',
  shortName: 'PCWorkVertical',
  tagline: 'Protegemos o Que Outros Não Alcançam.',
  description:
    'Especialistas em Reabilitação de Fachadas e Trabalhos Verticais em Portugal. Engenharia de precisão, materiais certificados, 10 anos de experiência.',
  since: 2014,
  experience: '10 anos',

  location: 'Amadora, Portugal',
  locationFull: 'Amadora, Lisboa, Portugal',

  phone: '966416696',
  phoneDisplay: '+351 966 416 696',
  // PLACEHOLDER: Confirmar email oficial
  email: 'geral@pcworkvertical.pt',

  instagram: '@pcworkvertical',
  instagramUrl: 'https://instagram.com/pcworkvertical',
  whatsapp: '351966416696',
}

// PLACEHOLDER: Substituir por fotografias reais. URLs actuais são Unsplash (stock).
export const images = {
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  about: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
}

export const stats = [
  { value: '10', suffix: 'anos', label: 'de Experiência' },
  // PLACEHOLDER: Confirmar número real de projetos
  { value: '500', suffix: '+', label: 'Projetos Concluídos' },
  { value: '100', suffix: '%', label: 'Segurança Garantida' },
  { value: '24', suffix: 'h', label: 'Resposta Garantida' },
]

export const services = [
  {
    id: 'isolamento',
    number: '01',
    tag: 'ISOLAMENTO',
    title: 'Isolamento de Fachadas',
    description:
      'Especialistas em sistemas térmicos e acústicos de alta performance (ETICS/Cappotto), garantindo eficiência energética e durabilidade estrutural de longa duração.',
    specs: ['ETICS', 'Cappotto', 'Isolamento Térmico', 'Isolamento Acústico'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'remodelacao',
    number: '02',
    tag: 'INTERIORES',
    title: 'Remodelação',
    description:
      'Transformação de espaços com acabamentos premium. Design contemporâneo e execução técnica rigorosa para projetos residenciais e comerciais de exigência elevada.',
    specs: ['Acabamentos Premium', 'Design Contemporâneo', 'Execução Técnica Rigorosa'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'reabilitacao',
    number: '03',
    tag: 'ESTRUTURA',
    title: 'Reabilitação',
    description:
      'Restauração estética e funcional de edifícios degradados, utilizando materiais de última geração para preservação patrimonial e reforço estrutural certificado.',
    specs: ['Reabilitação Estrutural', 'Preservação Patrimonial', 'Materiais Certificados'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Consulta',
    description:
      'Avaliação inicial no local e diagnóstico técnico das necessidades estruturais e estéticas do seu projeto.',
  },
  {
    number: '02',
    title: 'Planeamento',
    description:
      'Definição de cronograma, seleção de materiais técnicos certificados e elaboração de protocolos de segurança rigorosos.',
  },
  {
    number: '03',
    title: 'Execução',
    description:
      'Intervenção por técnicos qualificados utilizando as mais avançadas técnicas de acesso vertical e equipamentos certificados.',
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Verificação final em três fases de controlo de qualidade. Garantia de satisfação total com relatório de acabamento.',
  },
]

export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contacto', href: '#contacto' },
]

// PLACEHOLDER: Substituir por projetos reais com fotografias próprias
export const projects = [
  {
    id: 1,
    title: 'Condomínio Prime Amadora',
    category: 'Reabilitação Total',
    featured: true,
    location: 'Amadora',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Business Center Expo',
    category: 'Isolamento de Fachada',
    featured: false,
    location: 'Lisboa',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Edifício Miradouro',
    category: 'Remodelação',
    featured: false,
    location: 'Amadora',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Residencial Alfragide',
    category: 'Reabilitação Estrutural',
    featured: false,
    location: 'Alfragide',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
]

// PLACEHOLDER: Substituir por testemunhos reais de clientes
export const testimonials = [
  {
    id: 1,
    text: '[PLACEHOLDER: Testemunho real de cliente — descrever resultado do projeto, qualidade e satisfação com o serviço]',
    author: '[Nome do Cliente]',
    role: '[Cargo ou Tipo de Cliente — ex: Gestor de Condomínio, Proprietário]',
    project: '[Nome do Projeto]',
  },
  {
    id: 2,
    text: '[PLACEHOLDER: Testemunho real de cliente — descrever resultado do projeto, qualidade e satisfação com o serviço]',
    author: '[Nome do Cliente]',
    role: '[Cargo ou Tipo de Cliente — ex: Gestor de Condomínio, Proprietário]',
    project: '[Nome do Projeto]',
  },
]
