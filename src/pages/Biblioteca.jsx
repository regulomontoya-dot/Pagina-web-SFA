import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen } from "react-icons/fa";

import "./Matricula.css";

const Biblioteca = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="matricula-page">
      {/*  Banner superior (idéntico al resto del sitio) */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Biblioteca Virtual</h1>
          <p className="lead">
            Accede a los recursos digitales del Instituto “Juan Velasco Alvarado”.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5 text-center" data-aos="fade-up">
        <div className="biblioteca-contenido mx-auto" style={{ maxWidth: "800px" }}>
          <FaBookOpen
            size={90}
            color="#004aad"
            className="mb-4"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
          />
          <h2 className="section-subtitle mb-3">Biblioteca Virtual Institucional</h2>
          <p className="text-muted mb-4">
            <strong>Un Lugar para poder Leer, Conocer e Investigar tu Materia.</strong> 
          </p>

          <p className="text-muted mb-5">
            Bienvenidos a la Biblioteca Digital del IESTP Juan Velasco Alvarado, 
            donde encontrarás una amplia gama de recursos académicos en formato digital. 
            Nuestra biblioteca está disponible las 24 horas del día, los 7 días de la 
            semana, lo que te permite acceder al conocimiento desde cualquier lugar y 
            en cualquier momento. Con una amplia variedad de contenido actualizado, 
            ahorro de tiempo y esfuerzo en la búsqueda, y un enfoque en la sostenibilidad, 
            nuestra Biblioteca Digital es el lugar ideal para expandir tus conocimientos 
            y alcanzar tus metas académicas y profesionales
          </p>

          {/*  Botón institucional con ícono */}
          <a
            href="https://www.digitaliapublishing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-descargar d-inline-flex align-items-center gap-2"
            data-aos="zoom-in"
          >
            <FaBookOpen size={22} />
            Ir a la Biblioteca Virtual
          </a>
        </div>
      </div>
    </section>
  );
};

export default Biblioteca;
