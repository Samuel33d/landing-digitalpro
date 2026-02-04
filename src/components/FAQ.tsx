'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Cuanto tiempo tarda en estar listo?',
    answer: 'El pack completo (web + SEO + contenido) esta listo en 2-3 semanas. Te mantenemos informado en cada etapa del proceso con actualizaciones constantes.'
  },
  {
    question: '¿Necesito saber de tecnologia?',
    answer: 'Para nada. Nosotros nos encargamos de todo lo tecnico. Solo necesitamos informacion sobre tu negocio y tus objetivos. Tu te enfocas en lo que mejor sabes hacer.'
  },
  {
    question: '¿Que pasa despues de la entrega?',
    answer: 'Incluimos soporte por 30 dias para resolver cualquier duda. Tambien ofrecemos planes de mantenimiento mensual si necesitas actualizaciones continuas.'
  },
  {
    question: '¿Puedo ver ejemplos de trabajos anteriores?',
    answer: '¡Claro! Durante la consulta inicial te mostramos casos de exito similares a tu sector para que veas exactamente lo que podemos lograr juntos.'
  },
  {
    question: '¿Cual es la inversion?',
    answer: 'Cada proyecto es unico, por eso preferimos conocer tus necesidades antes de darte un precio. Agenda una consulta gratuita y te damos un presupuesto personalizado sin compromiso.'
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-header reveal">
          <span className="section-label">Preguntas frecuentes</span>
          <h2>¿Tienes <span className="glow-text">dudas</span>?</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item reveal ${activeIndex === index ? 'active' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
