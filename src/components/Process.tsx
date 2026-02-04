'use client'

const steps = [
  {
    number: 1,
    title: 'Consulta inicial',
    description: 'Entendemos tu negocio, objetivos y competencia'
  },
  {
    number: 2,
    title: 'Estrategia',
    description: 'Disenamos el plan perfecto para tu caso'
  },
  {
    number: 3,
    title: 'Ejecucion',
    description: 'Creamos web, SEO y contenido'
  },
  {
    number: 4,
    title: 'Lanzamiento',
    description: 'Publicamos y optimizamos resultados'
  }
]

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="process-bg"></div>
      <div className="container">
        <div className="process-header reveal">
          <span className="section-label">Como trabajamos</span>
          <h2>De la idea a los <span className="glow-text">resultados</span></h2>
        </div>
        <div className="process-timeline">
          <div className="process-line"></div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step reveal">
                <div className="step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
