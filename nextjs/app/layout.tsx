import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'ROMASYSTEM — Sistema Completo para Empresas de Segurança Eletrônica | Roma Solution',
  description: 'O ROMASYSTEM centraliza CRM, OS, contratos, financeiro, cobrança e WhatsApp em um único sistema. Desenvolvido pela Roma Solution para empresas de segurança eletrônica.',
  keywords: 'sistema para empresa de segurança, software gestão segurança eletrônica, ERP segurança eletrônica, sistema CRM segurança, controle OS segurança, romasystem, roma solution',
  authors: [{ name: 'Roma Solution' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://romasolution.com.br/',
    title: 'ROMASYSTEM — Sistema para Empresas de Segurança | Roma Solution',
    description: 'CRM, OS, contratos, financeiro, cobrança e WhatsApp integrados em um único sistema.',
    images: [{ url: 'https://romasolution.com.br/og-image.jpg' }],
    locale: 'pt_BR',
    siteName: 'Roma Solution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROMASYSTEM — Sistema para Empresas de Segurança | Roma Solution',
    description: 'CRM, OS, contratos, financeiro e WhatsApp em um só sistema.',
    images: ['https://romasolution.com.br/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://romasolution.com.br/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800;900&display=swap"
        />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'ROMASYSTEM',
              description: 'Sistema completo para empresas de segurança eletrônica: CRM, OS, contratos, financeiro, cobrança e WhatsApp integrados.',
              url: 'https://romasolution.com.br',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
              publisher: {
                '@type': 'Organization',
                name: 'Roma Solution',
                url: 'https://romasolution.com.br',
                email: 'contato@romasolution.com.br',
              },
            }),
          }}
        />
      </head>
      <body>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>

        {/* GA4 — CONFIGURE: substitua G-XXXXXXXXXX */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX',{send_page_view:true});`}
        </Script>

        {/* Facebook Pixel — CONFIGURE: substitua XXXXXXXXXXXXXXXX */}
        <Script id="fbpixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','XXXXXXXXXXXXXXXX');fbq('track','PageView');`}
        </Script>
      </body>
    </html>
  )
}
