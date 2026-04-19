'use client'

import { useState, useRef } from 'react'

const WA = '5513978099969'

function sanitize(str: string) {
  return str.replace(/<[^>]*>/g, '').replace(/[<>{}();'"\\]/g, '').trim().slice(0, 300)
}

function isValidPhone(phone: string) {
  const clean = phone.replace(/\D/g, '')
  return clean.length >= 10 && clean.length <= 11
}

function formatWA(phone: string) {
  const d = phone.replace(/\D/g, '')
  return d.startsWith('55') ? d : `55${d}`
}

export default function Demo() {
  const [name, setName]       = useState('')
  const [company, setCompany] = useState('')
  const [whatsapp, setWA]     = useState('')
  const [clients, setClients] = useState('')
  const [errors, setErrors]   = useState<Record<string, string>>({})
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function formatPhone(value: string) {
    let v = value.replace(/\D/g, '').slice(0, 11)
    if (v.length > 10) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`
    else if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`
    return v
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim() || name.trim().length < 2) e.name = 'Nome é obrigatório.'
    if (!company.trim()) e.company = 'Empresa é obrigatória.'
    if (!whatsapp.trim() || !isValidPhone(whatsapp)) e.whatsapp = 'Número inválido. Ex: (13) 99999-9999'
    if (!clients) e.clients = 'Selecione uma faixa de clientes.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    await new Promise(r => setTimeout(r, 800))

    const n = sanitize(name)
    const c = sanitize(company)
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Roma Solution.\n\n👤 Nome: ${n}\n🏢 Empresa: ${c}\n👥 Clientes: ${clients}\n\nGostaria de agendar uma demonstração do ROMASYSTEM.`
    )
    setStatus('success')
    setTimeout(() => { window.open(`https://wa.me/${WA}?text=${msg}`, '_blank') }, 1500)
  }

  return (
    <section id="demo" className="demo-section" aria-labelledby="demo-title">
      <div className="demo-bg" aria-hidden="true">
        <div className="demo-glow" />
      </div>
      <div className="container">
        <div className="demo-inner">
          {/* LEFT */}
          <div className="demo-text">
            <div className="section-label">AGENDAR DEMONSTRAÇÃO</div>
            <h2 id="demo-title">
              Veja o ROMASYSTEM<br />
              <span className="gradient-text">funcionando ao vivo.</span>
            </h2>
            <p>
              30 minutos. Gratuito. Sem compromisso. Você vê o sistema com dados reais do setor
              de segurança — e sai sabendo exatamente o que ele resolve na sua operação.
            </p>
            <ul className="demo-benefits">
              {[
                'Demonstração personalizada para o seu porte e realidade',
                'Tire todas as dúvidas com um especialista no setor',
                'Receba uma proposta comercial personalizada',
                'Acesso imediato ao sistema após a contratação',
              ].map(b => (
                <li key={b}>
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>
            <div className="demo-urgency">
              <ClockIcon />
              <span>Nossa equipe responde em até <strong>2 horas úteis</strong></span>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="demo-form-wrapper">
            <div className="demo-form-card">
              <h3>Agende sua demonstração gratuita</h3>
              <p className="form-subtitle">
                Preencha abaixo e entraremos em contato para confirmar o melhor horário.
              </p>

              <form className="lead-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="f-name">Seu nome <span aria-hidden="true">*</span></label>
                  <input
                    id="f-name" type="text" placeholder="Como podemos te chamar?"
                    value={name} onChange={e => setName(e.target.value)}
                    required maxLength={100} autoComplete="given-name"
                    style={errors.name ? { borderColor: 'rgba(239,68,68,0.5)' } : {}}
                  />
                  {errors.name && <div className="field-error">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-company">Nome da empresa <span aria-hidden="true">*</span></label>
                  <input
                    id="f-company" type="text" placeholder="Ex: Segurança Total LTDA"
                    value={company} onChange={e => setCompany(e.target.value)}
                    required maxLength={150} autoComplete="organization"
                    style={errors.company ? { borderColor: 'rgba(239,68,68,0.5)' } : {}}
                  />
                  {errors.company && <div className="field-error">{errors.company}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-whatsapp">WhatsApp <span aria-hidden="true">*</span></label>
                  <input
                    id="f-whatsapp" type="tel" placeholder="(13) 99999-9999"
                    value={whatsapp}
                    onChange={e => setWA(formatPhone(e.target.value))}
                    required maxLength={20} autoComplete="tel"
                    style={errors.whatsapp ? { borderColor: 'rgba(239,68,68,0.5)' } : {}}
                  />
                  {errors.whatsapp && <div className="field-error">{errors.whatsapp}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="f-clients">Quantos clientes você tem hoje? <span aria-hidden="true">*</span></label>
                  <select
                    id="f-clients" value={clients}
                    onChange={e => setClients(e.target.value)} required
                    style={errors.clients ? { borderColor: 'rgba(239,68,68,0.5)' } : {}}
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    <option value="1-50">Até 50 clientes</option>
                    <option value="51-150">51 a 150 clientes</option>
                    <option value="151-500">151 a 500 clientes</option>
                    <option value="500+">Mais de 500 clientes</option>
                  </select>
                  {errors.clients && <div className="field-error">{errors.clients}</div>}
                </div>

                {status === 'success' && (
                  <div className="form-feedback form-feedback--success" role="alert">
                    <CheckIcon />
                    <div><strong>Solicitação recebida!</strong><br />Redirecionando para o WhatsApp...</div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-feedback form-feedback--error" role="alert">
                    <AlertIcon />
                    <div>Erro ao enviar. <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener">Fale pelo WhatsApp</a>.</div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-full btn-xl" disabled={status === 'loading'}>
                  {status === 'loading'
                    ? <><span className="spinner" aria-hidden="true" /> Processando...</>
                    : 'Agendar minha demonstração gratuita'
                  }
                </button>

                <p className="form-legal">
                  <LockIcon />
                  Seus dados estão seguros. Não fazemos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f97316" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const AlertIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)
const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)
