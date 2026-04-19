const modules = [
  {
    num: '01', title: 'CRM de Clientes',
    color: '',
    desc: '1.782+ clientes cadastrados com protocolo, status (monitorado, lead, em negociação, cancelado), histórico completo e funil de conversão.',
  },
  {
    num: '02', title: 'Orçamentos Profissionais',
    color: 'feature-icon-orange',
    desc: '1.373 orçamentos gerados. Crie propostas com itens do estoque, monitoria e instalação. Aprovados com um clique, R$956k em receita controlada.',
  },
  {
    num: '03', title: 'Ordens de Serviço',
    color: 'feature-icon-purple',
    desc: '5.674 OS registradas. Abertas, encaminhadas para técnico, finalizadas com assinatura. Histórico completo por cliente e por técnico.',
  },
  {
    num: '04', title: 'Agenda Operacional',
    color: 'feature-icon-orange',
    desc: 'Visitas de orçamento, instalações monitoradas/não-monitoradas e comodatos. Visualização mensal e semanal com legenda por tipo de evento.',
  },
  {
    num: '05', title: 'Estoque Completo',
    color: 'feature-icon-green',
    desc: '271 itens cadastrados em 22 categorias. Controle de entradas e saídas, alerta de estoque baixo, valor de compra e venda por item.',
  },
  {
    num: '06', title: 'Gestão de Colaboradores',
    color: 'feature-icon-purple',
    desc: '29 colaboradores em 11 departamentos — monitores, técnicos, administrativo. Controle de status ativo/inativo e data de entrada.',
  },
  {
    num: '07', title: 'Financeiro Completo',
    color: 'feature-icon-orange',
    desc: 'Recebimentos, despesas, fluxo de caixa, dashboard financeiro, categorias e contas bancárias. Saiba em segundos quanto sua empresa está gerando.',
  },
  {
    num: '08', title: 'Gestão de Cancelamentos',
    color: 'feature-icon-red',
    desc: 'Protocolo estruturado: EM TRATATIVA → CANCELADO → REVERTIDO. Controle de valor em risco por mês. Reduza churn com dados concretos.',
  },
  {
    num: '09', title: 'Comunicação Interna',
    color: 'feature-icon-purple',
    desc: 'Mensagens internas entre a equipe. Caixa de entrada e enviadas, tudo dentro do sistema — sem misturar com WhatsApp pessoal.',
  },
  {
    num: '10', title: 'Gestão de Instalações',
    color: 'feature-icon-orange',
    desc: 'Controle de instalações agendadas, em andamento e finalizadas. Cada instalação vinculada ao cliente, técnico e ordem de serviço.',
  },
  {
    num: '11', title: 'Gestão de Frotas',
    color: 'feature-icon-green',
    desc: '11 veículos monitorados (carros e motos). Status disponível/em uso/manutenção, fotos e placas. Saiba onde cada veículo da equipe está.',
  },
  {
    num: '12', title: 'Administração e Permissões',
    color: 'feature-icon-purple',
    desc: 'Gestão de usuários com níveis de acesso por módulo. Importação de clientes e orçamentos via CSV com mapeamento inteligente de colunas.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-label">O ROMASYSTEM</div>
        <h2 id="features-title" className="section-title">
          12 módulos.<br /><span className="gradient-text">Um sistema só.</span>
        </h2>
        <p className="section-sub text-center">
          Do primeiro contato com o cliente até o controle de frotas e permissões de equipe —
          o ROMASYSTEM cobre 100% da operação de uma empresa de segurança eletrônica.
          Testado em produção com 1.782 clientes reais.
        </p>

        <div className="features-grid-wide">
          {modules.map(({ num, title, color, desc }) => (
            <div key={num} className="feature-card">
              <div className={`feature-icon ${color}`} aria-hidden="true">
                <GridIcon />
              </div>
              <div className="feature-module-tag">MÓDULO {num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <a href="#demo" className="btn btn-primary btn-xl">
            Ver todos os módulos em uma demo
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
