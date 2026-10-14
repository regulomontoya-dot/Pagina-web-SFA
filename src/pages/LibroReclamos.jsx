import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBookOpen } from "react-icons/fa";

import "./Matricula.css"; // reutilizamos tu estilo base

const LibroReclamos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="gestion-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Libro de Reclamaciones</h1>
          <p className="lead">
            Canal oficial para presentar quejas o reclamos sobre bienes o servicios del Instituto.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8" data-aos="fade-up">
            <h2 className="section-subtitle mb-4 text-center">
              Libro de Reclamaciones Virtual
            </h2>

            <p className="text-muted text-justify mb-4">
              Se denomina <strong>hoja de reclamaciones</strong>,{" "}
              <strong>libro de reclamaciones</strong> o{" "}
              <strong>libro de quejas</strong> a un documento mediante el cual
              un consumidor puede registrar una queja o reclamo referente a un
              bien o servicio recibido. Este mecanismo busca garantizar los
              derechos de los usuarios y promover la mejora continua de la
              atención brindada por el Instituto.
            </p>

            <p className="text-muted mb-4">
              Si deseas presentar un reclamo, puedes hacerlo de manera rápida y
              sencilla ingresando al siguiente enlace del{" "}
              <strong>Libro de Reclamaciones Virtual</strong>.
            </p>

            {/*  Botón de acceso */}
            <div className="text-center mt-4">
              <a
                href="https://docs.google.com/forms/d/1bMXimpN4DKrhuGxtTMyRbZ9tfjcGFiUqUa7d1M_W-lw/viewform?edit_requested=true"  // 🔗 reemplaza con tu enlace real
                target="_blank"
                rel="noopener noreferrer"
                className="btn-descargar"
                data-aos="zoom-in"
              >
                <FaBookOpen size={20} /> Acceder al Libro de Reclamaciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibroReclamos;
