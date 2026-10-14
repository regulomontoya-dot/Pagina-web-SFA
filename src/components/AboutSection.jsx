import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import aboutImg from "../assets/images/entrada.jpg";

const AboutSection = () => {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-container">
        <div className="about-text">
          <h2>Bienvenidos <br>
          </br>I.E.S.T.P San Francisco de Asís</h2>
          <p>
            Como director, mi compromiso es formar profesionales competentes en 
            Contabilidad y Electrotecnia Industrial, integrando una sólida educación 
            teórica con experiencias prácticas que preparen a nuestros estudiantes 
            para los desafíos del mercado laboral. Nuestro equipo docente está 
            dedicado a guiar a cada estudiante en su desarrollo integral.
          </p>
          <p>
            Los invito a participar activamente en nuestras actividades y a 
            aprovechar las oportunidades que ofrecemos. Juntos, construiremos 
            un entorno educativo enriquecedor que impulse su crecimiento y los 
            prepare para ser agentes de cambio en la sociedad.
          </p>
         <div className="director-info">
            <Link to="/director" className="director-name">
              Wildor Porfirio Javier Villafuerte
            </Link>
            <p className="director-title">Director de la Institución</p>
          </div>

        </div>
        <div className="about-image">
          <img src={aboutImg} alt="Instituto Gilda Ballivián" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
