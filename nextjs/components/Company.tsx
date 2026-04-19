const pillars = [
  { num: '+500',     label: 'empresas atendidas no setor' },
  { num: '+15 anos', label: 'de expertise em segurança eletrônica' },
  { num: '100%',     label: 'focado no setor de segurança' },
  { num: '99.9%',    label: 'de uptime garantido' },
]

const points = [
  'Implantação guiada — não te abandonamos após contratar',
  'Suporte com especialistas que entendem do seu negócio',
  'Atualizações constantes baseadas em feedback real dos clientes',
  'Sistema que escala junto com o crescimento da sua empresa',
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
              Criado por quem conhece<br />o setor de segurança<br />
              <span className="gradient-text">por dentro.</span>
            </h2>
            <p>
              A <strong>Roma Solution</strong> não é uma software house que resolveu entrar no mercado
              de segurança. Somos especialistas com mais de 15 anos operando no setor — conhecemos cada
              gargalo, cada processo e cada dor de quem gerencia uma empresa de segurança eletrônica.
            </p>
            <p>
              O ROMASYSTEM nasceu dessa experiência. Cada módulo foi desenvolvido com base em operações
              reais, em conversas com donos de empresas e em processos que já testamos, quebramos e
              reconstruímos até funcionar de verdade.
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
            <div className="company-statement-quote">
              "Não vendemos software. Vendemos{' '}
              <span>controle sobre a operação</span>{' '}
              de quem construiu uma empresa de segurança do zero e não pode se dar ao luxo de operar no escuro."
            </div>
            <div className="company-statement-points">
              {points.map(p => (
                <div key={p} className="company-statement-point">
                  <CheckIcon />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '0.5rem' }}>
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
