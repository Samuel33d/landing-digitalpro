'use client'

import Link from 'next/link'
import { HiOutlineLightningBolt, HiHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <div className="logo-icon">
                <HiOutlineLightningBolt size={24} />
              </div>
              DigitalPro
            </Link>
            <p>Transformamos negocios tradicionales en maquinas de ventas digitales. Tu exito online empieza aqui.</p>
          </div>
          <div className="footer-column">
            <h4>Servicios</h4>
            <Link href="#servicios">Web Profesional</Link>
            <Link href="#servicios">SEO Local</Link>
            <Link href="#servicios">Contenido Redes</Link>
          </div>
          <div className="footer-column">
            <h4>Empresa</h4>
            <Link href="#proceso">Como trabajamos</Link>
            <Link href="#faq">Preguntas frecuentes</Link>
            <Link href="#contacto">Contacto</Link>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <Link href="#">Politica de privacidad</Link>
            <Link href="#">Terminos y condiciones</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 DigitalPro. Todos los derechos reservados. Hecho con <HiHeart style={{ display: 'inline', verticalAlign: 'middle', color: '#ef4444' }} /> para negocios que quieren crecer.</p>
        </div>
      </div>
    </footer>
  )
}
