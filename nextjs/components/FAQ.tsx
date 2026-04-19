'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Qual é o preço do ROMASYSTEM?',
    a: 'O valor é personalizado conforme o tamanho da sua operação e os módulos que você utiliza. Trabalhamos com mensalidade sem fidelidade. Agende a demo e nossa equipe apresenta a proposta adequada para a sua empresa — sem surpresas.',
  },
  {
    q: 'O ROMASYSTEM funciona para empresas de qualquer tamanho?',
    a: 'Sim. Atendemos desde empresas com 20 clientes até centrais com mais de 2.000. A plataforma escala conforme você cresce — você não precisará trocar de sistema quando a empresa dobrar de tamanho.',
  },
  {
    q: 'Preciso de conhecimento técnico para usar?',
    a: 'Não. O ROMASYSTEM foi desenhado para ser intuitivo para quem opera — não para quem programa. Nossa equipe faz toda a implantação e treina sua equipe. Em menos de uma semana, todo mundo já está operando com confiança.',
  },
  {
    q: 'Posso migrar meus dados do sistema atual ou das planilhas?',
    a: 'Sim. Nossa equipe realiza a migração de clientes, contratos, histórico e dados financeiros de forma segura e sem downtime. Você não perde nada do que já tem.',
  },
  {
    q: 'Como funciona no celular? Minha equipe de campo vai conseguir usar?',
    a: 'Sim. O sistema é 100% responsivo e funciona em qualquer dispositivo. O técnico de campo recebe a OS no celular, registra o atendimento, coleta a assinatura digital do cliente e finaliza — tudo pelo celular.',
  },
  {
    q: 'Tem fidelidade ou contrato longo?',
    a: 'Não. Trabalhamos com mensalidade e você pode cancelar quando quiser. Nossa confiança está na qualidade do produto — não em contratos que prendem.',
  },
  {
    q: 'Como é o suporte pós-contratação?',
    a: 'Suporte via WhatsApp e chat com especialistas que entendem de segurança eletrônica. São pessoas que conhecem o setor e sabem como ajudar sua operação na prática.',
  },
  {
    q: 'Posso personalizar o sistema para a realidade da minha empresa?',
    a: 'Sim. Durante a implantação, configuramos fluxos, campos, relatórios e automações de acordo com o seu processo atual. Não é um sistema engessado — ele se adapta à forma como você opera.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-label">PERGUNTAS FREQUENTES</div>
        <h2 id="faq-title" className="section-title text-center">
          Suas dúvidas, <span className="gradient-text">respondidas direto.</span>
        </h2>

        <div className="faq-list">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={q} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {q}
                  <svg
                    className="faq-chevron"
                    viewBox="0 0 24 24" width="20" height="20"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    aria-hidden="true"
                    style={{ transform: isOpen ? 'rotate(180deg)' : undefined, transition: 'transform 0.3s ease' }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-answer${isOpen ? ' open' : ''}`}>
                  <p>{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
