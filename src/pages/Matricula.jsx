import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

import fachada from "../assets/images/fachada.jpg";

import pdfMatricula1 from "../assets/admision_matricula/matricula/Cronograma-de-Matricula-2025-I.pdf";
import pdfMatricula2 from "../assets/admision_matricula/matricula/Cronograma-de-Matricula-2025-II.pdf";

import "./Matricula.css";

const Matricula = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const abrirPDF = (pdf) => setSelectedPdf(pdf);
  const cerrarPDF = () => setSelectedPdf(null);

  const documentos = [
    { titulo: "MATRÍCULA 2025 – I", pdf: pdfMatricula1 },
    { titulo: "MATRÍCULA 2025 – II", pdf: pdfMatricula2 },
  ];

  return (
    <section className="matricula-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Matrícula 2025</h1>
          <p className="lead">Proceso de matrícula para estudiantes del Instituto Juan Velasco Alvarado</p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="matricula-info bg-white rounded-4 shadow-sm p-4" data-aos="fade-up">
          <h3 className="section-subtitle mb-3">Información General</h3>
          <p className="text-muted" style={{ textAlign: "justify", lineHeight: "1.8" }}>
            Se debe hacer el depósito de <strong>S/. 200.00</strong> en el Banco de la Nación, a la
            <strong> Cuenta Corriente N° 0000289051</strong>; luego debe canjear el voucher de pago en Tesorería.
            Posteriormente, el área encargada le hará entrega del <strong>Recibo de Caja</strong>.
          </p>
        </div>

        {/*  Sección de PDFs */}
        <div className="admision-pdfs mt-5">
          <h2 className="text-center section-subtitle mb-4">Documentos de Matrícula 2025</h2>
          <div className="row g-4 justify-content-center">
            {documentos.map((doc, i) => (
              <div key={i} className="col-md-3 col-sm-6 d-flex justify-content-center">
                <div className="pdf-card text-center" onClick={() => abrirPDF(doc.pdf)}>
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
          <div className="pdf-modal-content-wide" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={cerrarPDF}>✕</button>
            <iframe src={`${selectedPdf}#view=FitH`} title="Vista PDF" className="pdf-full-view-wide"></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Matricula;
