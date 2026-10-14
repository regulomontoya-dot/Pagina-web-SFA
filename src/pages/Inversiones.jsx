import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Matricula.css"; 

const Inversiones = () => {
  return (
    <section className="gestion-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Inversiones y Recursos Económicos</h1>
          <p className="lead">
            Transparencia sobre la gestión financiera y las inversiones institucionales.
          </p>
        </div>
      </div>

      {/*  Contenido principal con texto + banner lateral */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/*  Texto informativo */}
          <div className="col-lg-5 col-md-12" data-aos="fade-right">
            <h2 className="section-subtitle mb-4">Inversiones</h2>
            <p className="text-muted">
              No se cuenta con inversiones en los últimos años.
            </p>

            <h2 className="section-subtitle mb-4 mt-5">Reinversiones</h2>
            <p className="text-muted">
              No se cuenta con inversiones en los últimos años.
            </p>

            <h2 className="section-subtitle mb-4 mt-5">Donaciones</h2>
            <p className="text-muted">
              No se cuenta con inversiones en los últimos años.
            </p>

            <h2 className="section-subtitle mb-4 mt-5">Obras de infraestructura</h2>
            <p className="text-muted">
              No se cuenta con inversiones en los últimos años.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Inversiones;
