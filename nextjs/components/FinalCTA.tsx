const WA = '5513978099969'
const WA_MSG = 'Olá%2C%20vim%20pelo%20site%20da%20Roma%20Solution%20e%20quero%20agendar%20uma%20demonstração%20do%20ROMASYSTEM.'

const guarantees = [
  'Demo 100% gratuita',
  'Sem contrato de fidelidade',
  'Implantação guiada pela nossa equipe',
]

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Chamada para ação final">
      <div className="final-cta-bg" aria-hidden="true" />
      <div className="container text-center">
        <div className="final-cta-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>HORA DE DECIDIR</div>
          <h2 className="final-cta-headline">
            Cada mês sem sistema é dinheiro<br />
            <span className="gradient-text">saindo pelo ralo.</span>
          </h2>
          <p className="final-cta-sub">
            OS perdida, cliente sem retorno, contrato vencendo, inadimplente sem cobrança — isso tudo
            tem custo. A pergunta não é se você vai organizar a operação, mas quanto você vai perder
            até decidir.
          </p>

          <div className="final-urgency-bar">
            {guarantees.map(g => (
              <div key={g} className="urgency-item">
                <CheckIcon />
                <span>{g}</span>
              </div>
            ))}
          </div>

          <div className="final-cta-btns">
            <a href="#demo" className="btn btn-primary btn-xl pulse-glow">
              Agendar demonstração gratuita
              <ArrowIcon />
            </a>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              className="btn btn-whatsapp btn-xl"
              target="_blank"
              rel="noopener"
            >
              <WaIcon />
              Falar no WhatsApp agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#22c55e" strokeWidth="2" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
