const WA = '5513978099969'

export default function Hero() {
  return (
    <section className="hero" aria-label="Seção principal">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner container">
        {/* TEXT */}
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            ROMA SOLUTION APRESENTA
          </div>
          <h1 className="hero-headline">
            Sua empresa de segurança<br />
            está crescendo.<br />
            <span className="gradient-text">Sua operação, não.</span>
          </h1>
          <p className="hero-sub">
            O <strong>ROMASYSTEM</strong> centraliza CRM, orçamentos, OS, agenda,
            financeiro, cobrança, frotas e equipe em um único sistema — criado exclusivamente para
            empresas de segurança eletrônica.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn btn-primary btn-xl pulse-glow">
              Ver o sistema ao vivo
              <ArrowIcon />
            </a>
            <a
              href={`https://wa.me/${WA}?text=Olá%2C%20vim%20pelo%20site%20e%20quero%20conhecer%20o%20ROMASYSTEM.`}
              className="btn btn-whatsapp btn-xl"
              target="_blank"
              rel="noopener"
            >
              <WaIcon />
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-trust">
            <TrustItem text="Demo gratuita de 30 min — sem enrolação" />
            <TrustItem text="Sem contrato de fidelidade" />
            <TrustItem text="Suporte de quem entende de segurança eletrônica" />
          </div>
        </div>

        {/* DASHBOARD MOCKUP — fiel ao ROMASYSTEM real */}
        <div className="hero-mockup" aria-label="Prévia do ROMASYSTEM">
          <div className="mockup-browser">
            <div className="browser-bar" aria-hidden="true">
              <div className="browser-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="browser-url">app.romasystem.com.br</div>
              <div className="browser-secure">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#22c55e" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>

            <div className="dashboard rs-dashboard" aria-hidden="true">
              {/* SIDEBAR */}
              <aside className="dash-sidebar rs-sidebar">
                <div className="rs-logo-wrap">
                  <div className="rs-logo-icon">
                    <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
                      <rect width="32" height="32" rx="8" fill="#f97316"/>
                      <path d="M8 22l5-10 4 7 3-5 4 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="rs-logo-text">
                    <div className="rs-logo-name">
                      <span className="rs-roma">ROMA</span>
                      <span className="rs-system">SYSTEM</span>
                    </div>
                    <div className="rs-logo-sub">SEGURANÇA ELETRÔNICA</div>
                  </div>
                </div>

                <nav className="rs-nav">
                  <div className="rs-nav-label">GESTÃO</div>
                  <NavItem label="Clientes" active />
                  <NavItem label="Colaboradores" />
                  <NavItem label="Orçamentos" />
                  <NavItem label="Agenda" />
                  <NavItem label="Estoque" />
                  <div className="rs-nav-label">FINANCEIRO</div>
                  <NavItem label="Financeiro" />
                  <NavItem label="Cancelamentos" />
                  <div className="rs-nav-label">OPERAÇÃO</div>
                  <NavItem label="Ordem de Serviço" />
                  <NavItem label="Instalações" />
                  <NavItem label="Gestão de Frotas" />
                </nav>

                <div className="rs-user-bar">
                  <div className="rs-avatar">FR</div>
                  <div>
                    <div className="rs-user-name">Filipi Roma</div>
                    <div className="rs-user-role">Admin</div>
                  </div>
                </div>
              </aside>

              {/* MAIN CONTENT */}
              <div className="dash-main rs-main">
                <div className="rs-topbar">
                  <div>
                    <div className="rs-greeting">Boa noite, Filipi 👋</div>
                    <div className="rs-date">sábado, 18 de abril de 2026</div>
                  </div>
                  <div className="rs-online">● Sistema online</div>
                </div>

                <div className="rs-cards">
                  <RSCard label="CLIENTES" value="1.782" sub="1.343 monitorados" accent="#3b82f6" />
                  <RSCard label="ORÇAMENTOS" value="1.373" sub="797 aprovados" accent="#f97316" />
                  <RSCard label="OS TOTAL" value="5.674" sub="992 finalizadas" accent="#22c55e" />
                  <RSCard label="ESTOQUE" value="178" sub="itens ativos" accent="#8b5cf6" />
                </div>

                <div className="rs-alert">
                  <span className="rs-alert-icon">📋</span>
                  <span><strong>10 ordens de serviço finalizadas</strong> · #e6650d · #36043a · +7 mais</span>
                  <span>→</span>
                </div>

                <div className="rs-section-title">AÇÕES RÁPIDAS</div>
                <div className="rs-quick">
                  <QuickBtn label="Novo Cliente" bg="#eff6ff" />
                  <QuickBtn label="Novo Orçamento" bg="#fff7ed" />
                  <QuickBtn label="Nova O.S." bg="#fef2f2" />
                  <QuickBtn label="Agendamento" bg="#f0fdf4" />
                </div>
              </div>
            </div>
          </div>
          <div className="mockup-glow" aria-hidden="true" />
          <div className="mockup-badge" aria-hidden="true">
            <span className="badge-dot" />
            ROMASYSTEM — 1.782 clientes gerenciados em produção real
          </div>
        </div>
      </div>
    </section>
  )
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`rs-nav-item${active ? ' rs-nav-active' : ''}`}>
      <span>{label}</span>
      {active && <span className="rs-nav-dot" />}
    </div>
  )
}

function RSCard({ label, value, sub, accent }: { label: string; value: string; sub: string; accent: string }) {
  return (
    <div className="rs-card" style={{ borderTopColor: accent } as React.CSSProperties}>
      <div className="rs-card-label" style={{ color: accent } as React.CSSProperties}>{label}</div>
      <div className="rs-card-value">{value}</div>
      <div className="rs-card-sub">{sub}</div>
    </div>
  )
}

function QuickBtn({ label, bg }: { label: string; bg: string }) {
  return (
    <div className="rs-quick-btn" style={{ background: bg } as React.CSSProperties}>
      <span>{label}</span>
    </div>
  )
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="trust-item">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#22c55e" strokeWidth="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {text}
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
