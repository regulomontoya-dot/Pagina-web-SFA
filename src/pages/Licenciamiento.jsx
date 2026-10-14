import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import logoLicenciamiento from "../assets/images/logo.png"; 
import "./Matricula.css"; // reutilizamos el mismo estilo base

const Licenciamiento = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="gestion-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold text-uppercase">Rumbo al Licenciamiento</h1>
          <p className="lead">Comprometidos con la calidad educativa</p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5 text-center" data-aos="fade-up">
                {/*  Títulos principales */}

        <h2 className="fw-bold  mb-5">RUMBO AL LICENCIAMIENTO</h2>

        {/*  Subtítulo */}
        <h4 className="text-uppercase fw-bold text-dark">
          INSTITUTO DE EDUCACIÓN SUPERIOR TECNOLÓGICO PÚBLICO
        </h4>
        <h3 className="fw-bold  mb-4">"JUAN VELASCO ALVARADO"</h3>
        {/*  Imagen central */}
        <img
          src={logoLicenciamiento}
          alt="Rumbo al Licenciamiento"
          className="img-fluid mx-auto d-block mb-4 licenciamiento-logo"
        />

        {/* 🔹 Periodo de vigencia (editable) */}
        <div className="licenciamiento-periodo mb-4">
          <p className="fw-bold text-secondary">
            📅 <em>Aquí irá el período de vigencia del licenciamiento</em>
          </p>
        </div>

        {/* 🔹 Mensaje institucional final */}
        <p className="fw-bold text-uppercase  mt-4 fs-5">
          Trabajando juntos rumbo al licenciamiento 💪
        </p>
      </div>
    </section>
  );
};

export default Licenciamiento;
