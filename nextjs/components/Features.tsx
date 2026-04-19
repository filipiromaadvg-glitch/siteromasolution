const modules = [
  { num: '01', title: 'CRM Completo',                color: '',                  desc: 'Gerencie todo o ciclo do cliente: prospecção, proposta, contrato, manutenção e renovação. Histórico completo em um clique.' },
  { num: '02', title: 'Orçamentos Profissionais',    color: 'feature-icon-orange', desc: 'Crie propostas com sua logo, envie por e-mail ou WhatsApp e acompanhe o status em tempo real. Feche mais contratos.' },
  { num: '03', title: 'Gestão de Contratos',         color: 'feature-icon-purple', desc: 'Contratos digitais com assinatura eletrônica, alertas de vencimento e renovação com um clique. Zero papel.' },
  { num: '04', title: 'Ordens de Serviço',           color: 'feature-icon-orange', desc: 'Crie, atribua e acompanhe cada OS em tempo real. O técnico recebe no celular, executa e assina digitalmente.' },
  { num: '05', title: 'Agenda Operacional',          color: 'feature-icon-purple', desc: 'Agende instalações, manutenções e visitas técnicas com visualização de calendário e mapa integrado.' },
  { num: '06', title: 'Gestão de Equipe',            color: 'feature-icon-orange', desc: 'Gerencie colaboradores, cargos, produtividade e comissões. Saiba o desempenho de cada técnico com dados concretos.' },
  { num: '07', title: 'Financeiro Completo',         color: 'feature-icon-green',  desc: 'Receitas, despesas, DRE, fluxo de caixa e relatórios detalhados. Saiba exatamente quanto sua empresa lucrou — em segundos.' },
  { num: '08', title: 'Cobrança e Inadimplência',   color: 'feature-icon-red',    desc: 'Boletos automáticos, alertas de vencimento por WhatsApp, régua de cobrança e painel de inadimplentes. Receba o que é seu.' },
  { num: '09', title: 'Retenção de Clientes',       color: 'feature-icon-red',    desc: 'Protocolo estruturado para cancelamentos. Registre tentativas, motivos e contrapropostas. Reduza churn com dados.' },
  { num: '10', title: 'WhatsApp Integrado',         color: 'feature-icon-whatsapp', desc: 'Atendimento, confirmações de OS, cobranças e alertas direto do sistema — sem misturar com o WhatsApp pessoal.' },
  { num: '11', title: 'Relatórios em Tempo Real',   color: 'feature-icon-purple', desc: 'Dashboards com KPIs, gráficos de receita, inadimplência, OS e churn. Tome decisões com dados — não com achismo.' },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-label">O ROMASYSTEM</div>
        <h2 id="features-title" className="section-title">
          11 módulos.<br /><span className="gradient-text">Um sistema só.</span>
        </h2>
        <p className="section-sub text-center">
          O ROMASYSTEM cobre 100% dos processos de uma empresa de segurança eletrônica — do primeiro
          contato com o cliente até a cobrança automática. Sem precisar de outro sistema.
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
