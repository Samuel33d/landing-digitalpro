'use client'

import { useEffect, useRef, useState } from 'react'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Importar jQuery dinamicamente
    const loadJQuery = async () => {
      const $ = (await import('jquery')).default

      if (!formRef.current) return

      const $form = $(formRef.current)

      // Validacion en tiempo real con jQuery
      $form.find('input, select, textarea').on('blur', function() {
        validateField($(this))
      })

      $form.find('input, select, textarea').on('input', function() {
        const $field = $(this)
        if ($field.hasClass('error')) {
          validateField($field)
        }
      })

      // Funcion de validacion de campo
      function validateField($field: JQuery<HTMLElement>): boolean {
        const fieldName = $field.attr('name')
        const value = ($field.val() as string || '').trim()
        let isValid = true
        let errorMessage = ''

        // Remover clases previas
        $field.removeClass('error valid')
        $field.siblings('.error-message').removeClass('show')

        switch (fieldName) {
          case 'name':
            if (value.length < 2) {
              isValid = false
              errorMessage = 'Por favor, ingresa tu nombre'
            }
            break
          case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
              isValid = false
              errorMessage = 'Por favor, ingresa un email valido'
            }
            break
          case 'phone':
            const phoneRegex = /^[\d\s\+\-\(\)]{9,}$/
            if (!phoneRegex.test(value)) {
              isValid = false
              errorMessage = 'Por favor, ingresa un telefono valido'
            }
            break
          case 'business':
            if (!value) {
              isValid = false
              errorMessage = 'Por favor, selecciona una opcion'
            }
            break
        }

        // Aplicar estilos
        if (isValid && value) {
          $field.addClass('valid')
        } else if (!isValid) {
          $field.addClass('error')
          const $errorMsg = $field.siblings('.error-message')
          if ($errorMsg.length) {
            $errorMsg.text(errorMessage).addClass('show')
          }
        }

        return isValid
      }

      // Manejar envio del formulario
      $form.on('submit', function(e) {
        e.preventDefault()

        let isFormValid = true

        // Validar todos los campos requeridos
        $form.find('input[required], select[required]').each(function() {
          if (!validateField($(this))) {
            isFormValid = false
          }
        })

        if (!isFormValid) {
          // Scroll al primer error
          const $firstError = $form.find('.error').first()
          if ($firstError.length) {
            $('html, body').animate({
              scrollTop: $firstError.offset()!.top - 100
            }, 500)
          }
          return
        }

        // Animacion de carga
        const $submitBtn = $form.find('button[type="submit"]')
        $submitBtn.addClass('form-loading').prop('disabled', true)

        // Recoger datos del formulario
        const formData = {
          name: ($form.find('#name').val() as string),
          email: ($form.find('#email').val() as string),
          phone: ($form.find('#phone').val() as string),
          business: ($form.find('#business').val() as string),
          message: ($form.find('#message').val() as string)
        }

        console.log('Lead capturado:', formData)

        // Simular envio (aqui iria el webhook de n8n)
        setTimeout(() => {
          $submitBtn.removeClass('form-loading').prop('disabled', false)
          $form.find('.success-message').addClass('show')
          ;($form[0] as HTMLFormElement).reset()
          $form.find('input, select, textarea').removeClass('valid error')
          setIsSubmitted(true)

          // Ocultar mensaje despues de 5 segundos
          setTimeout(() => {
            $form.find('.success-message').removeClass('show')
            setIsSubmitted(false)
          }, 5000)
        }, 1500)
      })

      // Efecto de focus mejorado
      $form.find('input, select, textarea').on('focus', function() {
        $(this).parent().addClass('focused')
      }).on('blur', function() {
        $(this).parent().removeClass('focused')
      })
    }

    loadJQuery()
  }, [])

  return (
    <section className="cta" id="contacto">
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content">
          <div className="reveal">
            <span className="section-label">¿Listo para empezar?</span>
            <h2>Hablemos de como hacer <span className="glow-text">crecer</span> tu negocio</h2>
            <p>Agenda una consulta gratuita de 15 minutos. Sin compromiso, sin presion. Solo soluciones.</p>
          </div>

          <div className="contact-form reveal">
            <form id="leadForm" ref={formRef}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                  <span className="error-message"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                  <span className="error-message"></span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="+34 600 000 000" required />
                  <span className="error-message"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="business">Tipo de negocio</label>
                  <select id="business" name="business" required>
                    <option value="">Selecciona una opcion</option>
                    <option value="servicios">Servicios profesionales</option>
                    <option value="comercio">Comercio / Tienda</option>
                    <option value="restauracion">Restauracion / Hosteleria</option>
                    <option value="salud">Salud / Bienestar</option>
                    <option value="otro">Otro</option>
                  </select>
                  <span className="error-message"></span>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">¿Que necesitas mejorar?</label>
                <textarea id="message" name="message" placeholder="Cuentanos brevemente que te gustaria lograr con tu presencia digital..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Quiero mi consulta gratuita
                <HiArrowRight size={20} />
              </button>
              <div className="success-message">
                <h4><HiCheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />¡Mensaje enviado!</h4>
                <p>Te contactaremos en menos de 24 horas. Gracias por tu interes.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
