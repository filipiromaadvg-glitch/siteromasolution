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
            O <strong>ROMASYSTEM</strong> centraliza CRM, orçamentos, contratos, OS, agenda,
            financeiro, cobrança e WhatsApp em um único sistema — criado exclusivamente para
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

        {/* DASHBOARD MOCKUP */}
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
            <div className="dashboard" aria-hidden="true">
              <aside className="dash-sidebar">
                <div className="dash-logo">RS</div>
                <nav className="dash-nav">
                  {[
                    { label: 'Dashboard', active: true },
                    { label: 'CRM / Clientes' },
                    { label: 'Ordens de Serviço' },
                    { label: 'Financeiro' },
                    { label: 'Agenda' },
                    { label: 'WhatsApp' },
                  ].map(({ label, active }) => (
                    <div key={label} className={`dash-nav-item${active ? ' active' : ''}`}>
                      <span>{label}</span>
                    </div>
                  ))}
                </nav>
              </aside>

              <div className="dash-main">
                <div className="dash-header-bar">
                  <div className="dash-title">Dashboard — Visão Geral</div>
                  <div className="dash-avatar">RS</div>
                </div>

                <div className="dash-stats">
                  <StatCard icon="cyan" value="342" label="Clientes Ativos" trend="▲ 12% este mês" />
                  <StatCard icon="orange" value="28" label="OS em Aberto" trend="▲ 3 hoje" />
                  <StatCard icon="green" value="R$98k" label="Faturamento/mês" trend="▲ 8%" />
                </div>

                <div className="dash-chart">
                  <div className="chart-title">Receita Mensal — 2025</div>
                  <div className="chart-bars">
                    {[
                      { label: 'Jan', h: '55%' },
                      { label: 'Fev', h: '70%' },
                      { label: 'Mar', h: '60%' },
                      { label: 'Abr', h: '80%' },
                      { label: 'Mai', h: '75%' },
                      { label: 'Jun', h: '95%', active: true },
                    ].map(({ label, h, active }) => (
                      <div key={label} className={`chart-bar${active ? ' active' : ''}`} style={{ '--h': h } as React.CSSProperties}>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dash-table">
                  <div className="table-row table-header">
                    <span>Cliente</span><span>Status</span><span>Valor</span>
                  </div>
                  <div className="table-row"><span>Seg. Alfa LTDA</span><span className="badge-green">Ativo</span><span>R$450</span></div>
                  <div className="table-row"><span>Casa Forte</span><span className="badge-green">Ativo</span><span>R$320</span></div>
                  <div className="table-row"><span>Comércio BH</span><span className="badge-yellow">Pendente</span><span>R$280</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mockup-glow" aria-hidden="true" />
          <div className="mockup-badge" aria-hidden="true">
            <span className="badge-dot" />
            ROMASYSTEM — Produto Roma Solution
          </div>
        </div>
      </div>
    </section>
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

function StatCard({ icon, value, label, trend }: { icon: string; value: string; label: string; trend: string }) {
  return (
    <div className="dash-stat-card">
      <div className={`stat-icon stat-${icon}`} />
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-trend up">{trend}</div>
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
