const steps = [
  {
    num: '01',
    title: 'Você agenda uma demo',
    desc: '30 minutos. Sem enrolação. Mostramos o ROMASYSTEM funcionando com dados reais do setor de segurança — e já mapeamos os seus gargalos.',
  },
  {
    num: '02',
    title: 'Configuramos tudo para você',
    desc: 'Nossa equipe faz a implantação, migra seus dados e treina sua equipe. Você não precisa entender de tecnologia. Isso é problema nosso.',
  },
  {
    num: '03',
    title: 'Sua operação escala',
    desc: 'Com a operação centralizada e automatizada, você foca no que importa: vender mais, atender melhor e crescer com controle.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="how-section" aria-labelledby="how-title">
      <div className="container">
        <div className="section-label text-center">PROCESSO SIMPLES</div>
        <h2 id="how-title" className="section-title text-center">
          Três passos para<br /><span className="gradient-text">operar com controle total</span>
        </h2>

        <div className="how-steps">
          {steps.map(({ num, title, desc }, i) => (
            <>
              <div key={num} className={`how-step${i > 0 ? ` delay-${i}` : ''}`}>
                <div className="step-number" aria-hidden="true">{num}</div>
                <div className="step-icon" aria-hidden="true">
                  <CalendarIcon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              {i < steps.length - 1 && <div className="how-connector" aria-hidden="true" />}
            </>
          ))}
        </div>
      </div>

      {/* Mid CTA 2 */}
      <div className="cta-mid cta-mid-dark" style={{ marginTop: '4rem' }}>
        <div className="container text-center">
          <h3 className="cta-mid-headline">
            Não é um sistema genérico adaptado para segurança. É um sistema criado do zero para o setor.
          </h3>
          <p className="cta-mid-text">
            Cada tela, cada fluxo, cada relatório foi pensado para a realidade de quem opera uma empresa de segurança eletrônica.
          </p>
          <a href="#demo" className="btn btn-primary btn-xl">
            Quero ver isso funcionando
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
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
