'use client'

import { HiGlobeAlt, HiSearch, HiDeviceMobile } from 'react-icons/hi'
import { ReactNode } from 'react'

interface Service {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: <HiGlobeAlt size={36} />,
    title: 'Web Profesional',
    description: 'Diseno moderno y optimizado para convertir visitantes en clientes reales.',
    features: [
      'Diseno personalizado a tu marca',
      '100% responsive (movil, tablet, PC)',
      'Velocidad de carga optimizada',
      'Formularios de contacto inteligentes',
      'Integracion WhatsApp directa'
    ]
  },
  {
    icon: <HiSearch size={36} />,
    title: 'SEO Local',
    description: 'Aparece en los primeros resultados cuando buscan lo que ofreces.',
    features: [
      'Investigacion de palabras clave',
      'Optimizacion on-page completa',
      'Google My Business optimizado',
      'Estructura SEO tecnico',
      'Velocidad y rendimiento'
    ]
  },
  {
    icon: <HiDeviceMobile size={36} />,
    title: 'Contenido Redes',
    description: 'Contenido estrategico que genera engagement y atrae clientes ideales.',
    features: [
      'Estrategia de contenido mensual',
      'Diseno de posts profesionales',
      'Calendario editorial completo',
      'Textos persuasivos',
      'Guia de marca visual'
    ]
  }
]

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">Que incluye el pack</span>
          <h2>Todo lo que necesitas para <span className="glow-text">dominar</span> online</h2>
          <p>Un sistema completo disenado para trabajar en conjunto y multiplicar tus resultados.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-card-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
