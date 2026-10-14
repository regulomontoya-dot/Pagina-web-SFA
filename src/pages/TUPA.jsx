import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import tupaPDF from "../assets/tramite/TUPA-2025.pdf"; // 📄 tu PDF
import "./Matricula.css";

const Tupa = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const abrirPDF = () => setSelectedPdf(tupaPDF);
  const cerrarPDF = () => setSelectedPdf(null);

  return (
    <section className="gestion-page">
      {/*  Banner */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Texto Único de Procedimientos Administrativos</h1>
          <p className="lead">
            Conoce las tasas educativas de pago de diferentes conceptos para el año 2025.
          </p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container py-5" data-aos="fade-up">
        <div className="row justify-content-center">
          {/*  Columna izquierda (texto y contacto) */}
          <div className="col-lg-5 col-md-12 mb-4">
            <h3 className="section-subtitle mb-3">Contactos</h3>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <FaPhone className="me-2 text-primary" />
                <strong>Teléfono:</strong> 01 500 6177
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-primary" />
                <strong>Correo:</strong> secretaria.academica@iestpjva.edu.pe
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-primary" />
                <strong>Dirección:</strong> Av. José Olaya Nº 120, San Gabriel, V.M.T.
              </li>
            </ul>

            
          </div>

          {/*  Columna derecha (PDF o imagen ilustrativa opcional) */}
          <div className="col-lg-7 col-md-12">
            <p className="text-muted text-justify">
              El <strong>Texto Único de Procedimientos Administrativos (TUPA)</strong> 
              es el documento que regula los derechos de tramitación y tasas educativas 
              aplicables a los diferentes servicios ofrecidos por el Instituto. 
              Aquí podrás consultar los costos actualizados y los procedimientos 
              administrativos correspondientes al año 2025.
            </p>

            {/* Botón PDF */}
            <div className="text-center mt-4">
              <button
                onClick={abrirPDF}
                className="btn-descargar d-inline-flex align-items-center gap-2"
              >
                <FaFilePdf size={22} />
                Ver TUPA 2025
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal PDF */}
      {selectedPdf && (
        <div className="pdf-modal" onClick={cerrarPDF}>
          <div
            className="pdf-modal-content-wide"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={cerrarPDF}>
              ✕
            </button>
            <iframe
              src={`${selectedPdf}#view=FitH`}
              title="Vista PDF"
              className="pdf-full-view-wide"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tupa;
