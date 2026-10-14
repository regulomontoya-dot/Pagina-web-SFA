import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

//import fachada from "../assets/images/fachada.jpg";
import becadosPDF from "../assets/admision_matricula/becas/RELACION-DE-BECADOS-2025-I.pdf";

import "./BecasCredito.css";

const BecasCreditos = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const abrirPDF = (pdf) => setSelectedPdf(pdf);
  const cerrarPDF = () => setSelectedPdf(null);

  return (
    <section className="becas-page">
      {/* Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Becas y Créditos Educativos</h1>
          <p className="lead">
            Oportunidades de apoyo económico para nuestros estudiantes destacados.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container py-5">
        {/* Tipos de becas */}
        <div
          className="becas-info bg-white rounded-4 shadow-sm p-4 mb-4"
          data-aos="fade-up"
        >
          <h3 className="section-subtitle mb-3">Tipos de Becas</h3>
          <ul className="styled-list">
            <li>
              Descuento del <strong>100%</strong> en la matrícula a los{" "}
              <strong>primeros puestos</strong> de cada ciclo de los 5 programas
              de estudios.
            </li>
            <li>
              Descuento del <strong>50%</strong> en la matrícula a los{" "}
              <strong>estudiantes que realizan servicio militar acuartelado</strong>.
            </li>
            <li>
              Otras becas otorgadas por el{" "}
              <strong>IESTP “Juan Velasco Alvarado”</strong>, la{" "}
              <strong>DRELM</strong> o el <strong>MINEDU</strong>.
            </li>
          </ul>
        </div>

        {/* Condiciones */}
        <div
          className="becas-info bg-white rounded-4 shadow-sm p-4"
          
        >
          <h3 className="section-subtitle mb-3">Condiciones</h3>
          <ul className="styled-list">
            <li>Obtener el <strong>primer puesto</strong> al finalizar el ciclo de estudios.</li>
            <li>Contar con <strong>constancia de servicio militar activo</strong>.</li>
            <li>
              Presentar <strong>carnet que acredite ser licenciado</strong> de las Fuerzas Armadas.
            </li>
          </ul>
        </div>

        {/* Documento único */}
        <div className="admision-pdfs mt-5">
          <h2 className="text-center section-subtitle mb-4">
            Relación de Becados 2025
          </h2>
          <p className="text-center text-muted mb-4">
            📄 Consulta la lista oficial de estudiantes beneficiados con{" "}
            <strong>becas y descuentos otorgados por el IESTP “Juan Velasco Alvarado”</strong>.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3 col-sm-6 d-flex justify-content-center">
              <div
                className="pdf-card text-center"
                onClick={() => abrirPDF(becadosPDF)}
              >
                <div className="pdf-icon">
                  <FaFilePdf size={50} color="#004aad" />
                </div>
                <p className="pdf-titulo mt-3">Relación de Becados 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Modal PDF */}
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

export default BecasCreditos;
