const WA = '5513978099969'

const problems = [
  {
    title: 'Planilhas que ninguém controla',
    desc: 'Cada área da empresa com a sua planilha. Dados inconsistentes, duplicados e retrabalho todo dia. Você nunca sabe qual é o número real.',
  },
  {
    title: 'OS caindo no esquecimento',
    desc: 'Ordem aberta sem atribuição. Técnico sem saber para onde ir. Cliente ligando porque ninguém deu retorno. Isso custa cliente e reputação.',
  },
  {
    title: 'Financeiro no escuro',
    desc: 'Você não sabe quanto entrou esse mês, quem está devendo, qual é o lucro real nem qual cliente está prestes a cancelar. Decisão no chute.',
  },
  {
    title: 'Contratos sem rastreio',
    desc: 'Contrato venceu? Renovação automática? Cliente cancelou? Sem sistema, esses processos dependem da memória das pessoas — e memória falha.',
  },
  {
    title: 'WhatsApp pessoal virou suporte',
    desc: 'Cliente manda no celular do técnico. Sem histórico, sem protocolo. Se o técnico sair, o relacionamento com o cliente some junto.',
  },
  {
    title: 'Clientes saindo sem que você perceba',
    desc: 'Sem protocolo de retenção, sem alerta de churn, sem histórico. O cliente pede cancelamento, a equipe não sabe o que fazer. Você perde receita.',
  },
]

export default function Problem() {
  return (
    <section className="problem-section" id="problema" aria-labelledby="problem-title">
      <div className="container">
        <div className="section-label">O PROBLEMA</div>
        <h2 id="problem-title" className="section-title">
          Você criou uma empresa de segurança.<br />
          Mas o que você opera hoje<br />
          <span className="gradient-text-red">é um caos organizado.</span>
        </h2>
        <p className="section-sub text-center">
          Planilha pra um lado, WhatsApp pessoal pra outro, OS em outro sistema, financeiro em outro lugar.
          Isso não é gestão. É improviso com custo alto.
        </p>

        <div className="problems-grid">
          {problems.map(({ title, desc }, i) => (
            <div key={title} className={`problem-card${i > 0 ? ` delay-${(i % 3) + 1}` : ''}`}>
              <div className="problem-icon" aria-hidden="true">
                <AlertIcon />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mid CTA */}
      <div className="cta-mid" style={{ marginTop: '4rem' }}>
        <div className="container text-center">
          <p className="cta-mid-subtext">
            Enquanto você lida com tudo isso separado, sua concorrência já opera tudo em um único lugar.
          </p>
          <a href="#demo" className="btn btn-primary btn-xl">
            Quero ver como funciona na prática
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
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
