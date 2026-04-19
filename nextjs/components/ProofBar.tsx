const items = [
  { num: '+500',     label: 'Empresas de segurança no sistema' },
  { num: '+15 anos', label: 'No setor de segurança eletrônica' },
  { num: '99.9%',   label: 'Uptime garantido' },
  { num: '11',      label: 'Módulos integrados em 1 sistema' },
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
