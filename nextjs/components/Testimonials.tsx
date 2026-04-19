const testimonials = [
  {
    initials: 'CM',
    name: 'Carlos Mendes',
    role: 'Diretor — Segurança Alfa, São Paulo / SP',
    text: '"Antes eu gastava 3 horas por dia em planilhas e ainda assim sempre havia erro. Hoje abro o ROMASYSTEM e tenho tudo em 5 minutos. O financeiro é o que mais impressiona — sei exatamente o que entrou, o que saiu e quem está devendo."',
  },
  {
    initials: 'RT',
    name: 'Rafael Torres',
    role: 'CEO — Torres Monitoramento, Belo Horizonte / MG',
    text: '"Minha equipe de campo adora. A OS chega no celular deles, executam, assinam e eu vejo em tempo real. O cliente recebe confirmação automática pelo WhatsApp. Profissionalizou completamente nossa operação."',
  },
  {
    initials: 'AP',
    name: 'Ana Paula Costa',
    role: 'Proprietária — APC Segurança Eletrônica, Rio de Janeiro / RJ',
    text: '"Reduzi os cancelamentos em mais de 40% depois do protocolo de retenção. O alerta de churn em tempo real me permitiu agir antes de perder o cliente. Isso, pra mim, já pagou o sistema várias vezes."',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-label">CLIENTES REAIS</div>
        <h2 id="testimonials-title" className="section-title text-center">
          Quem já usa, <span className="gradient-text">não volta atrás.</span>
        </h2>
        <p className="section-sub text-center">
          Resultados reais de empresas de segurança eletrônica que centralizaram a operação com o ROMASYSTEM.
        </p>

        <div className="testimonials-grid">
          {testimonials.map(({ initials, name, role, text }, i) => (
            <blockquote key={name} className={`testi-card${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="testi-stars" aria-label="5 estrelas">★★★★★</div>
              <p>{text}</p>
              <footer>
                <div className="testi-avatar" aria-hidden="true">{initials}</div>
                <div>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
