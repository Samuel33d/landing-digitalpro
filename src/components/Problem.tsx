'use client'

import { HiEmojiSad, HiLightningBolt } from 'react-icons/hi'

export default function Problem() {
  return (
    <section className="problem">
      <div className="problem-parallax"></div>
      <div className="container">
        <div className="problem-content">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">El problema</span>
            <h2>¿Te suena <span className="glow-text">familiar</span>?</h2>
          </div>
          <div className="problem-grid">
            <div className="problem-side reveal-left">
              <div className="side-header">
                <div className="side-icon">
                  <HiEmojiSad size={28} />
                </div>
                <div className="side-title">Sin presencia digital</div>
              </div>
              <ul className="problem-list">
                <li>Tienes un negocio increible pero nadie te encuentra online</li>
                <li>Tu web parece de 2010 y no genera confianza</li>
                <li>Publicas en redes pero no conviertes seguidores en clientes</li>
                <li>La competencia te esta comiendo el mercado digital</li>
                <li>No tienes tiempo ni conocimientos para hacerlo tu mismo</li>
              </ul>
            </div>
            <div className="solution-side reveal-right">
              <div className="side-header">
                <div className="side-icon">
                  <HiLightningBolt size={28} />
                </div>
                <div className="side-title">Con nuestro pack digital</div>
              </div>
              <ul className="solution-list">
                <li>Una web profesional que convierte visitantes en clientes</li>
                <li>SEO optimizado para que te encuentren en Google</li>
                <li>Contenido estrategico que genera confianza y ventas</li>
                <li>Presencia digital completa y coherente</li>
                <li>Todo listo para funcionar, sin que tengas que hacer nada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
