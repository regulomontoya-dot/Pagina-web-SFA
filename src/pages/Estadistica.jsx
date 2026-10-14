  import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

import fachada from "../assets/images/fachada.jpg";

//  PDFs desde carpeta assets/estadistica
import ingresantes_matriculadosPDF from "../assets/transparencia/estadisticas/ingresantes_matriculado_egresados.pdf";
import titulados_becasPDF from "../assets/transparencia/estadisticas/titulados_becas.pdf";
import relacion_becadosPDF from "../assets/transparencia/estadisticas/relacion_becados_2024.pdf";

import "./Matricula.css"; // reutiliza tu mismo CSS institucional

const Estadistica = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const abrirPDF = (pdf) => setSelectedPdf(pdf);
  const cerrarPDF = () => setSelectedPdf(null);

  // Lista de PDFs
  const documentos = [
    {
      titulo: "Estadística de Interesantes, Matriculados y Egresados​",
      pdf: ingresantes_matriculadosPDF,
    },
    {
      titulo: "Estadística de Titulados y Becas Otorgados​",
      pdf: titulados_becasPDF,
    },
     {
      titulo: "Estadística de Relación de Estudiantes Becados 2024",
      pdf: relacion_becadosPDF,
    },
  ];

  return (
    <section className="gestion-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Estadística Institucional</h1>
          <p className="lead">
            Datos e indicadores del Instituto de Educación Superior Tecnológico Público “Juan Velasco Alvarado”.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-subtitle mb-3">Estadística General</h2>
          <p className="text-muted">
            Consulta los informes estadísticos oficiales sobre el número de estudiantes 
            ingresantes, matriculados, egresados, titulados y beneficiados con becas institucionales.
          </p>
        </div>

        {/*  Tarjetas de PDFs */}
        <div className="admision-pdfs" >
          <div className="row g-4 justify-content-center">
            {documentos.map((doc, i) => (
              <div
                key={i}
                className="col-md-3 col-sm-6 d-flex justify-content-center"
              >
                <div
                  className="pdf-card text-center"
                  onClick={() => abrirPDF(doc.pdf)}
                >
                  <div className="pdf-icon">
                    <FaFilePdf size={50} color="#9d2d2dff" />
                  </div>
                  <p className="pdf-titulo mt-3">{doc.titulo}</p>
                </div>
              </div>
            ))}
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
              src={`${selectedPdf}#zoom=page-width&view=FitH`}
              title="Vista PDF"
              className="pdf-full-view-wide"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Estadistica;
