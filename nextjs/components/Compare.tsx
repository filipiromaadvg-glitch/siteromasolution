const before = [
  'Planilhas desatualizadas e inconsistentes',
  'OS perdida, cliente sem retorno',
  'Contratos vencendo sem que você saiba',
  'Financeiro sem visibilidade real',
  'Cobrança manual e retrabalho constante',
  'WhatsApp pessoal misturado com suporte',
  'Cancelamento sem protocolo',
  '5+ sistemas diferentes sem integração',
]

const after = [
  'Tudo centralizado em um único sistema',
  'OS rastreada e assinada digitalmente',
  'Alertas automáticos de vencimento',
  'Financeiro completo em tempo real',
  'Cobrança automática por WhatsApp',
  'WhatsApp integrado e com histórico',
  'Protocolo de retenção estruturado',
  '1 sistema para toda a operação',
]

export default function Compare() {
  return (
    <section className="compare-section" aria-labelledby="compare-title">
      <div className="container">
        <div className="section-label">COMPARATIVO</div>
        <h2 id="compare-title" className="section-title text-center">A diferença é brutal.</h2>

        <div className="compare-grid">
          <div className="compare-col compare-before">
            <div className="compare-header">
              <span className="compare-badge compare-badge-bad">Sem o ROMASYSTEM</span>
            </div>
            <ul className="compare-list">
              {before.map(item => (
                <li key={item}><span className="compare-icon-bad" aria-hidden="true">✗</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className="compare-vs" aria-hidden="true">VS</div>

          <div className="compare-col compare-after">
            <div className="compare-header">
              <span className="compare-badge compare-badge-good">Com o ROMASYSTEM</span>
            </div>
            <ul className="compare-list">
              {after.map(item => (
                <li key={item}><span className="compare-icon-good" aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
