import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

//  Importa tus PDF desde la carpeta assets/gestion/
import procesosPDF from "../assets/transparencia/doc_gestion/ProcesosAcademicos.pdf";
import reglamentosPDF from "../assets/transparencia/doc_gestion/ReglamentoInternoSFA.pdf";
import manualPuestoPDF from "../assets/transparencia/doc_gestion/ManualPerfilPuesto.pdf";
import planAnaulPDF from "../assets/transparencia/doc_gestion/PlanAnualTrabajo.pdf";

import "./Matricula.css";

const DocumentosGestion = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const abrirPDF = (pdf) => setSelectedPdf(pdf);
  const cerrarPDF = () => setSelectedPdf(null);

  // Lista de documentos
  const documentos = [
    {
      titulo: "Procesos Académicos",
      pdf: procesosPDF,
    },
    {
      titulo: "Reglamento Institucional",
      pdf: reglamentosPDF,
    },
    {
      titulo: "Manual de perfil de puesto",
      pdf: manualPuestoPDF,
    },
    {
      titulo: "Plan anual de trabajo",
      pdf: planAnaulPDF,
    },
  ];

  return (
    <section className="gestion-page">
      {/*  Banner superior */}
      <div className="info-hero" 
      >
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Documentos de Gestión Institucional</h1>
          <p className="lead">
            Accede a los principales instrumentos de gestión del IESTP “Juan Velasco Alvarado”.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-subtitle mb-3">Documentos de Gestión</h2>
          <p className="text-muted">
            Estos documentos garantizan la organización, transparencia y calidad de la gestión institucional.
          </p>
        </div>

        {/*  Tarjetas de PDFs */}
        <div className="admision-pdfs" data-aos="fade-up">
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

export default DocumentosGestion;
