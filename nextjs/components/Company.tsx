const pillars = [
  { num: '1.782+',  label: 'clientes gerenciados no sistema' },
  { num: '5.674',   label: 'ordens de serviço no histórico' },
  { num: 'R$956k+', label: 'em orçamentos controlados' },
  { num: '12',      label: 'módulos integrados na plataforma' },
]

const points = [
  'Criado por quem opera uma empresa de segurança eletrônica real — não por consultores externos',
  'Implantação guiada — não te abandonamos após contratar',
  'Suporte com especialistas que entendem do seu negócio',
  'Atualizações constantes baseadas em uso real do sistema',
  'Sem contrato de fidelidade — ficamos porque entregamos valor',
]

export default function Company() {
  return (
    <section id="empresa" className="company-section" aria-labelledby="company-title">
      <div className="container">
        <div className="company-inner">
          {/* LEFT */}
          <div className="company-text">
            <div className="section-label">A EMPRESA</div>
            <h2 id="company-title" className="section-title">
              Criado por quem opera<br />uma empresa de segurança<br />
              <span className="gradient-text">todos os dias.</span>
            </h2>
            <p>
              O <strong>ROMASYSTEM</strong> não nasceu numa sala de reunião. Nasceu da necessidade real
              de gerir a <strong>Alarmes Roma</strong> — empresa de segurança eletrônica com mais de
              1.700 clientes ativos. Antes eram planilhas Google e AppSheet. Chegou um momento em que
              isso não dava conta.
            </p>
            <p>
              Filipi Roma, fundador e desenvolvedor, construiu o sistema do zero para resolver os próprios
              problemas operacionais. Cada módulo foi desenhado a partir de processos reais, dores reais e
              decisões que só quem vive o negócio consegue tomar.
            </p>

            <div className="company-pillars">
              {pillars.map(({ num, label }) => (
                <div key={num} className="company-pillar">
                  <div className="company-pillar-num">{num}</div>
                  <div className="company-pillar-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="company-statement">
            <div className="company-founder-card">
              <div className="company-founder-avatar">FR</div>
              <div className="company-founder-info">
                <strong>Filipi Martins</strong>
                <span>Desenvolvedor &amp; Fundador</span>
              </div>
            </div>
            <div className="company-statement-quote">
              "O ROMASYSTEM foi feito para resolver o que eu vivia no dia a dia da Alarmes Roma —
              OS perdida, cliente sem retorno, financeiro confuso, técnico sem informação.{' '}
              <span>Feito por quem vive o negócio.</span>"
            </div>
            <div className="company-statement-points">
              {points.map(p => (
                <div key={p} className="company-statement-point">
                  <CheckIcon />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#demo" className="btn btn-primary">
                Agendar demonstração gratuita
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--indigo)" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
