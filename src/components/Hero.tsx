'use client'

import Link from 'next/link'
import { HiArrowRight, HiChartBar, HiBell, HiTrendingUp } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="hero">
      <div className="parallax-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
        <div className="particles">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{ left: `${(i + 1) * 10}%`, animationDelay: `${i}s` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">Agencia de Marketing Digital</p>
            <h1>Tu negocio en una <span className="glow-text">maquina de ventas</span></h1>
            <p>Web + SEO + Redes sociales. Todo lo que necesitas para atraer clientes y multiplicar tus ventas.</p>
            <div className="hero-buttons">
              <Link href="#contacto" className="btn btn-primary">
                Quiero mi pack digital
                <HiArrowRight size={20} />
              </Link>
              <Link href="#servicios" className="btn btn-outline">Ver que incluye</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">+200%</div>
                <div className="stat-label">Mas visibilidad</div>
              </div>
              <div className="stat">
                <div className="stat-number">3x</div>
                <div className="stat-label">Mas leads</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Trabajando</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-wrapper">
              <div className="hero-card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-icon">
                      <HiChartBar size={28} />
                    </div>
                    <div>
                      <div className="card-title">Dashboard en tiempo real</div>
                      <div className="card-subtitle">Resultados que puedes medir</div>
                    </div>
                  </div>
                  <div className="card-metrics">
                    <div className="metric">
                      <div className="metric-value">847</div>
                      <div className="metric-label">Visitas/mes</div>
                    </div>
                    <div className="metric">
                      <div className="metric-value">12.4%</div>
                      <div className="metric-label">Conversion</div>
                    </div>
                    <div className="metric">
                      <div className="metric-value">+34</div>
                      <div className="metric-label">Leads nuevos</div>
                    </div>
                    <div className="metric">
                      <div className="metric-value">#3</div>
                      <div className="metric-label">Posicion Google</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-element float-1">
                <HiBell size={18} className="float-icon" /> Nuevo lead capturado
              </div>
              <div className="floating-element float-2">
                <HiTrendingUp size={18} className="float-icon" /> +15% esta semana
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
