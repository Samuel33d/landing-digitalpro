'use client'

const testimonials = [
  {
    text: 'Antes nadie me encontraba en Google. Ahora recibo 3-4 consultas diarias solo por la web. La mejor inversion que he hecho para mi negocio.',
    avatar: 'MR',
    name: 'Maria Rodriguez',
    role: 'Clinica Dental'
  },
  {
    text: 'El contenido para redes me ahorra horas cada semana. Y lo mejor: los seguidores ahora si preguntan por mis servicios.',
    avatar: 'CL',
    name: 'Carlos Lopez',
    role: 'Consultor Financiero'
  },
  {
    text: 'Profesionales, rapidos y con resultados reales. Mi tienda online paso de 5 a 40 ventas mensuales en solo 3 meses.',
    avatar: 'AG',
    name: 'Ana Garcia',
    role: 'E-commerce Moda'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">Lo que dicen nuestros clientes</span>
          <h2>Negocios que ya estan <span className="glow-text">creciendo</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card reveal">
              <div className="testimonial-quote">&quot;</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
