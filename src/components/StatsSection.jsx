import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./AboutSection.css";
import banner1 from "../assets/images/mini_banner/banner.jpg";

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="por-que-nosotros">
      <div className="about-container">

      
        <div className="about-text" data-aos="fade-right">
          <h2>¿Por qué estudiar con nosotros?</h2>

          <div className="why-item">
            <h5>🎓 Flexibilidad de horarios</h5>
            <p>
              Elige el turno que mejor se adapte a tu ritmo de vida. Accede a una educación de calidad sin pagar mensualidades.
            </p>
          </div>

          <div className="why-item">
            <h5>🌱 Formación integral</h5>
            <p>
              Desarrolla habilidades blandas y competencias transversales que complementan tu perfil profesional.
            </p>
          </div>

          <div className="why-item">
            <h5>🏅 Titulación rápida</h5>
            <p>
              Completa tu carrera técnica en solo 3 años, ahorrando tiempo y esfuerzo. También podrás acceder a una segunda carrera en corto plazo.
            </p>
          </div>

          <div className="why-item">
            <h5>🔧 Experiencia práctica</h5>
            <p>
              Desde el primer ciclo aplicarás tus conocimientos, fortaleciendo tu experiencia y mejorando tu empleabilidad.
            </p>
          </div>
        </div>

        
        <div className="about-image" data-aos="fade-left">
          <img src={banner1} alt="Imagen institucional" />
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
