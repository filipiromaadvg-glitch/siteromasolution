/**
 * ROMASYSTEM — main.js
 * Tracking, Segurança, Formulário, Scroll, FAQ, Menu Mobile
 * ============================================
 * CONFIGURE:
 *   - WHATSAPP_NUMBER  → número do WhatsApp (só dígitos, com DDI)
 *   - RECAPTCHA_SITE_KEY → chave do reCAPTCHA v3
 * ============================================
 */

// ============================================
// CONFIG — edite aqui
// ============================================
const WHATSAPP_NUMBER = '5513978099969'; // ← CONFIGURE: ex: 5511987654321
const RECAPTCHA_SITE_KEY = 'SEU_SITE_KEY'; // ← CONFIGURE: chave do reCAPTCHA v3

// ============================================
// UTILITÁRIOS DE SEGURANÇA
// ============================================

/** Escapa HTML para prevenir XSS */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const map = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#x27;', '/':'&#x2F;' };
  return str.replace(/[&<>"'/]/g, c => map[c]);
}

/** Remove caracteres perigosos de input */
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')      // Remove tags HTML
    .replace(/[<>{}();'"\\]/g, '') // Remove chars especiais
    .trim()
    .substring(0, 300);           // Limita tamanho
}

/** Rate limit por chave no sessionStorage — evita spam */
const RateLimit = {
  check(key, maxAttempts = 3, windowMs = 60000) {
    try {
      const stored = JSON.parse(sessionStorage.getItem(`rl_${key}`) || '[]');
      const now = Date.now();
      const recent = stored.filter(t => now - t < windowMs);
      if (recent.length >= maxAttempts) return false;
      recent.push(now);
      sessionStorage.setItem(`rl_${key}`, JSON.stringify(recent));
      return true;
    } catch { return true; } // Em caso de erro, não bloqueia
  }
};

/** Validação de WhatsApp (BR: 10–11 dígitos) */
function isValidPhone(phone) {
  const clean = phone.replace(/\D/g, '');
  return clean.length >= 10 && clean.length <= 11;
}

/** Formata número do WhatsApp para URL wa.me */
function formatWhatsApp(phone) {
  const digits = phone.replace(/\D/g, '');
  // Adiciona DDI Brasil se não tiver
  return digits.startsWith('55') ? digits : `55${digits}`;
}

// ============================================
// TRACKING — eventos customizados
// ============================================
const Track = {
  /** Dispara evento no GA4, FB Pixel e dataLayer */
  event(name, params = {}) {
    try {
      if (typeof gtag === 'function') gtag('event', name, params);
    } catch {}
    try {
      if (typeof fbq === 'function') fbq('trackCustom', name, params);
    } catch {}
    try {
      if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: name, ...params });
    } catch {}
  },

  /** Rastreia clique em botão com data-track */
  click(element) {
    const trackId = element.getAttribute('data-track');
    if (!trackId) return;
    const labels = {
      hero_demo:       { name:'CTA_Click', category:'Hero', label:'Agendar Demo' },
      hero_whatsapp:   { name:'WhatsApp_Click', category:'Hero', label:'WhatsApp Hero' },
      header_demo:     { name:'CTA_Click', category:'Header', label:'Agendar Demo' },
      header_whatsapp: { name:'WhatsApp_Click', category:'Header', label:'WhatsApp Header' },
      mobile_demo:     { name:'CTA_Click', category:'Mobile Menu', label:'Agendar Demo' },
      mobile_whatsapp: { name:'WhatsApp_Click', category:'Mobile Menu', label:'WhatsApp Mobile' },
      mid_cta_1:       { name:'CTA_Click', category:'Mid CTA 1', label:'Organizar empresa' },
      mid_cta_2:       { name:'CTA_Click', category:'Mid CTA 2', label:'Escalar operação' },
      form_submit:     { name:'Lead_Submit', category:'Form', label:'Lead Form' },
      final_demo:      { name:'CTA_Click', category:'Final CTA', label:'Agendar Demo' },
      final_whatsapp:  { name:'WhatsApp_Click', category:'Final CTA', label:'WhatsApp Final' },
      footer_whatsapp: { name:'WhatsApp_Click', category:'Footer', label:'WhatsApp Footer' },
      whatsapp_float:  { name:'WhatsApp_Click', category:'Float Button', label:'WhatsApp Float' },
    };
    const cfg = labels[trackId];
    if (!cfg) return;
    this.event(cfg.name, { event_category: cfg.category, event_label: cfg.label });
    try {
      if (typeof fbq === 'function' && cfg.name === 'WhatsApp_Click') fbq('track', 'Contact');
      if (typeof fbq === 'function' && cfg.name === 'Lead_Submit')    fbq('track', 'Lead');
    } catch {}
  },

  /** Scroll depth tracking: 25%, 50%, 75%, 100% */
  initScrollDepth() {
    const milestones = [25, 50, 75, 90];
    const fired = new Set();
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total    = document.documentElement.scrollHeight;
      const pct      = Math.round((scrolled / total) * 100);
      milestones.forEach(m => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          this.event('Scroll_Depth', { depth: `${m}%` });
        }
      });
    }, { passive: true });
  }
};

// ============================================
// HEADER SCROLL
// ============================================
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ============================================
// MENU MOBILE
// ============================================
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const open = () => {
    menu.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => menu.classList.contains('open') ? close() : open());
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      // Fecha todos
      items.forEach(i => {
        i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        i.querySelector('.faq-answer')?.classList.remove('open');
      });
      // Abre o clicado (se estava fechado)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
}

// ============================================
// TRACKING — cliques em botões data-track
// ============================================
function initTracking() {
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-track]');
    if (el) Track.click(el);
  });
  Track.initScrollDepth();
}

// ============================================
// FORMULÁRIO DE LEAD
// Lead form → valida → reCAPTCHA → WhatsApp
// ============================================
function initLeadForm() {
  const form    = document.getElementById('lead-form');
  if (!form) return;

  const fields = {
    name:     { el: form.querySelector('#f-name'),     err: form.querySelector('#f-name-error') },
    company:  { el: form.querySelector('#f-company'),  err: form.querySelector('#f-company-error') },
    whatsapp: { el: form.querySelector('#f-whatsapp'), err: form.querySelector('#f-whatsapp-error') },
    clients:  { el: form.querySelector('#f-clients'),  err: form.querySelector('#f-clients-error') },
  };
  const submitBtn   = form.querySelector('#form-submit');
  const btnText     = form.querySelector('#btn-text');
  const btnLoading  = form.querySelector('#btn-loading');
  const successMsg  = form.querySelector('#form-feedback-success');
  const errorMsg    = form.querySelector('#form-feedback-error');

  /** Valida um campo e exibe erro */
  function validateField(key) {
    const f = fields[key];
    if (!f?.el) return true;
    let valid = true;
    let msg = '';

    const val = f.el.value.trim();

    if (key === 'name') {
      if (!val) { msg = 'Nome é obrigatório.'; valid = false; }
      else if (val.length < 2) { msg = 'Nome muito curto.'; valid = false; }
    }
    if (key === 'company') {
      if (!val) { msg = 'Empresa é obrigatória.'; valid = false; }
    }
    if (key === 'whatsapp') {
      if (!val) { msg = 'WhatsApp é obrigatório.'; valid = false; }
      else if (!isValidPhone(val)) { msg = 'Número inválido. Ex: (11) 99999-9999'; valid = false; }
    }
    if (key === 'clients') {
      if (!val) { msg = 'Selecione uma faixa de clientes.'; valid = false; }
    }

    if (f.err) f.err.textContent = msg;
    f.el.style.borderColor = valid ? '' : 'rgba(239,68,68,0.5)';
    return valid;
  }

  // Validação em tempo real ao sair do campo
  Object.keys(fields).forEach(key => {
    const f = fields[key];
    if (f?.el) {
      f.el.addEventListener('blur', () => validateField(key));
      f.el.addEventListener('input', () => {
        if (f.err?.textContent) validateField(key);
      });
    }
  });

  // Formatação automática do WhatsApp
  const waInput = fields.whatsapp?.el;
  if (waInput) {
    waInput.addEventListener('input', () => {
      let v = waInput.value.replace(/\D/g, '').substring(0, 11);
      if (v.length > 2 && v.length <= 6)        v = `(${v.substring(0,2)}) ${v.substring(2)}`;
      else if (v.length > 6 && v.length <= 10)  v = `(${v.substring(0,2)}) ${v.substring(2,6)}-${v.substring(6)}`;
      else if (v.length > 10)                   v = `(${v.substring(0,2)}) ${v.substring(2,7)}-${v.substring(7)}`;
      waInput.value = v;
    });
  }

  /** Mostra estado de loading */
  function setLoading(loading) {
    submitBtn.disabled = loading;
    if (btnText)    btnText.style.display    = loading ? 'none' : 'inline';
    if (btnLoading) btnLoading.style.display = loading ? 'flex' : 'none';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Rate limit: máximo 3 tentativas por minuto
    if (!RateLimit.check('lead_form', 3, 60000)) {
      if (errorMsg) {
        errorMsg.style.display = 'flex';
        errorMsg.querySelector('div').innerHTML = 'Muitas tentativas. Aguarde 1 minuto ou <a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" rel="noopener">fale pelo WhatsApp</a>.';
      }
      return;
    }

    // Valida todos os campos
    const allValid = Object.keys(fields).map(k => validateField(k)).every(Boolean);
    if (!allValid) {
      // Foca no primeiro campo com erro
      const firstError = Object.values(fields).find(f => f.err?.textContent)?.el;
      firstError?.focus();
      return;
    }

    // Sanitiza inputs
    const name    = sanitizeInput(fields.name.el.value);
    const company = sanitizeInput(fields.company.el.value);
    const phone   = formatWhatsApp(fields.whatsapp.el.value);
    const clients = escapeHtml(fields.clients.el.value);

    setLoading(true);
    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg)   errorMsg.style.display   = 'none';

    try {
      // reCAPTCHA v3
      let recaptchaToken = '';
      if (typeof grecaptcha !== 'undefined' && RECAPTCHA_SITE_KEY !== 'SEU_SITE_KEY') {
        recaptchaToken = await new Promise((resolve, reject) => {
          grecaptcha.ready(() => {
            grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'lead_form' })
              .then(resolve)
              .catch(reject);
          });
        });
        const tokenInput = document.getElementById('recaptcha-token');
        if (tokenInput) tokenInput.value = recaptchaToken;
      }

      // Aqui você pode integrar com seu backend (ex: Formspree, EmailJS, API própria)
      // Por padrão, redireciona direto para o WhatsApp com os dados coletados
      await new Promise(r => setTimeout(r, 800)); // Pequena pausa para UX

      // Tracking — Lead gerado
      Track.event('Lead_Generated', {
        event_category: 'Form',
        event_label: 'Lead Form Submit',
        clients_range: clients
      });
      try { if (typeof fbq === 'function') fbq('track', 'Lead'); } catch {}

      // Mostra mensagem de sucesso
      if (successMsg) successMsg.style.display = 'flex';
      form.reset();
      setLoading(false);

      // Monta mensagem personalizada para o WhatsApp
      const msg = encodeURIComponent(
        `Olá! Vim pelo site da RomaSolution.\n\n` +
        `👤 Nome: ${name}\n` +
        `🏢 Empresa: ${company}\n` +
        `👥 Clientes: ${clients}\n\n` +
        `Gostaria de agendar uma demonstração do ROMASYSTEM.`
      );

      // Redireciona para WhatsApp após 1.5s
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
      }, 1500);

    } catch (err) {
      setLoading(false);
      if (errorMsg) errorMsg.style.display = 'flex';
      console.error('Form error:', err);
    }
  });
}

// ============================================
// SMOOTH SCROLL PARA ÂNCORAS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ============================================
// INICIA TUDO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initFaq();
  initTracking();
  initLeadForm();
  initSmoothScroll();
});
