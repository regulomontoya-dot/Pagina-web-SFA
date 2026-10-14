import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserGraduate,
  FaFilePdf,
} from "react-icons/fa";
import "./PlanaDocente.css";

// fotos de Docentes
import vidalon from "../assets/nosotros/plana_docente/perfil.jpg";
import pachas from "../assets/nosotros/plana_docente/perfil.jpg";
import benites from "../assets/nosotros/plana_docente/perfil.jpg";
import tasayco from "../assets/nosotros/plana_docente/perfil.jpg";
import vega from "../assets/nosotros/plana_docente/perfil.jpg";

// CV de Docentes Arquitectura de plataformas
import cvVidalon from "../assets/nosotros/plana_docente/CV_VIDALON_JORGE.pdf";
import cvPachas from "../assets/nosotros/plana_docente/CV_PACHAS_BARRIONUEVO.pdf";
import cvBenites from "../assets/nosotros/plana_docente/CV_BENITES_YGLESIAS.pdf";
import cvTasayco from "../assets/nosotros/plana_docente/CV_TASAYCO_YATACO.pdf";
import cvVega from "../assets/nosotros/plana_docente/CV_VEGA_CRUZ.pdf";
import cvNilton from "../assets/nosotros/plana_docente/CV_GARRIAZO_CASTAÑEDA.pdf";
import cvFlores from "../assets/nosotros/plana_docente/CV_FLORES_VARGAS.pdf";
import cvJoseR from "../assets/nosotros/plana_docente/CV _José_Ricardo.pdf";
import cvAnthony from "../assets/nosotros/plana_docente/CV_Anthony_ Francisco.pdf";
import cvChacaltama from "../assets/nosotros/plana_docente/CV_Chacaltama.pdf";

const PlanaDocente = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const abrirPDF = (pdf) => {
    setSelectedPdf(pdf);
  };

  const cerrarPDF = () => {
    setSelectedPdf(null);
  };

  //  Datos de ejemplo — agrupa por área
  const areas = [
    {
      nombre: "ARQUITECTURA DE PLATAFORMAS Y SERVICIOS TI",
      docentes: [
        { nombre: "HECTOR JORGE VIDALON JORGE", foto: vidalon, cv: cvVidalon },
        { nombre: "PEDRO PACHAS BARRIONUEVO", foto: pachas, cv: cvPachas },
        { nombre: "PATRICIA JANET BENITES YGLESIAS", foto: benites, cv: cvBenites },
        { nombre: "CARLOS TASAYCO YATACO", foto: tasayco, cv: cvTasayco },
        { nombre: "HUMBERTO PABLO VEGA CRUZ", foto: vega, cv: cvVega },
        { nombre: "JOHN HARRY GARRIAZO CASTAÑEDA", foto: vega, cv: cvNilton },
        { nombre: "CHRISTIAN FEDERICO FLORES VARGAS", foto: vega, cv: cvFlores },
        { nombre: "JOSÉ RICARDO CORTEZ CAMACHO", foto: vega, cv: cvJoseR },
        { nombre: "ANTHONY FRANCISCO CHUAN GARCIA", foto: vega, cv: cvAnthony },
        { nombre: "LUIS ALBERTO CHACALTANA ARNAO", foto: vega, cv: cvChacaltama },
      ],
    },

    
 //   {
  //    nombre: "CONTABILIDAD",
   //   docentes: [
    //    { nombre: "ELSA CASTILLA ALMEYDA", foto: elsa, cv: cvElsa },
     //   { nombre: "TERESA CAJO ROJAS", foto: elsa, cv: cvElsa },
      //],
   // },
    //{
      //nombre: "ENFERMERÍA TÉCNICA",
      //docentes: [
       // { nombre: "FABIOLA RODRIGUEZ VEGA", foto: fabiola, cv: cvFabiola },
        //{ nombre: "VICENTE EGUSQUIZA POZO", foto: fabiola, cv: cvFabiola },
      //],
    //},
    //{
      //nombre: "TÉCNICA EN FARMACIA",
     // docentes: [
       // { nombre: "YOLANDA SUAREZ DIAZ", foto: yolanda, cv: cvYolanda },
        //{ nombre: "CARMEN ROSA ACCO GAVILAN", foto: yolanda, cv: cvYolanda },
      //],
   // },
    //{
     // nombre: "DOCENTES DE EMPLEABILIDAD",
     // docentes: [
       // { nombre: "NILTON AQUILES MICHUY SUYO", foto: nilton, cv: cvNilton },
        //{ nombre: "RICHARD MARIO CELIS CALERO", foto: nilton, cv: cvNilton },
      //],
    //},
    
  ];

  return (
    <section className="plana-docente-page">
      {/*  Banner superior */}
      <div className="plana-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Plana Docente</h1>
          <p className="lead">
            Conoce la formación profesional y experiencia de nuestros docentes.
          </p>
        </div>
      </div>

      {/*  Descripción */}
      <div className="container py-5">
        <p className="text-center mb-5 descripcion">
          En esta sección podrás conocer la formación académica y profesional de
          cada uno de los docentes, así como su experiencia en las distintas
          áreas de especialidad.
        </p>

        {/*  Áreas académicas */}
        {areas.map((area, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h3 className="text-primary text-center section-subtitle mb-4">
              {area.nombre}
            </h3>

            <div className="row g-4 justify-content-center">
              {area.docentes.map((docente, i) => (
                <div
                  key={i}
                  className="col-md-3 col-sm-6 d-flex justify-content-center"
                >
                  <div className="docente-card text-center">
                    <div
                      className="docente-foto-container"
                      onClick={() => abrirPDF(docente.cv)}
                    >
                      <img
                        src={docente.foto}
                        alt={docente.nombre}
                        className="docente-foto"
                      />
                      <div className="docente-overlay">
                        <FaFilePdf size={30} color="#fff" />
                        <span>Ver CV</span>
                      </div>
                    </div>
                    <p className="docente-nombre mt-3">
                      <FaUserGraduate className="me-2 text-primary" />
                      {docente.nombre}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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

export default PlanaDocente;
