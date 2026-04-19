const items = [
  { num: '1.782+',   label: 'Clientes gerenciados na plataforma' },
  { num: '5.674',    label: 'Ordens de serviço no histórico' },
  { num: 'R$956k+',  label: 'Em orçamentos controlados' },
  { num: '12',       label: 'Módulos integrados em 1 sistema' },
]

export default function ProofBar() {
  return (
    <section className="proof-bar" aria-label="Prova social">
      <div className="container">
        <div className="proof-grid">
          {items.map(({ num, label }, i) => (
            <>
              <div key={num} className="proof-item">
                <strong className="proof-number">{num}</strong>
                <span>{label}</span>
              </div>
              {i < items.length - 1 && <div className="proof-divider" aria-hidden="true" />}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
