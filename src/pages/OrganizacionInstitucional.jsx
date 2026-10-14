import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OrganizacionInstitucional.css";
import { FaUsersCog, FaChevronDown, FaSearchPlus, FaTimes } from "react-icons/fa";
import organigramaImg from "../assets/nosotros/organizacion/organigrama.jpg";
import pdfOrganigrama from "../assets/nosotros/organizacion/organigrama.pdf"; // 🔹 Importa el PDF directamente

const OrganizacionInstitucional = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const areas = [
    {
      titulo: "Dirección General",
      descripcion:
        "Representante legal y máxima autoridad institucional, tiene a su cargo la conducción académica, institucional y administrativa.",
    },
    {
      titulo: "Consejo Directivo",
      descripcion:
        "Responsable de asesorar al Director General en materias formativas e institucionales.",
    },
    {
      titulo: "Secretaría de Dirección",
      descripcion:
        "Responsable de mantener la información institucional organizada.",
    },
    {
      titulo: "Jefe del Área de Administración",
      descripcion:
        "Gestiona y provee los recursos necesarios para la óptima gestión institucional.",
    },
    {
      titulo: "Secretaría Académica",
      descripcion:
        "Organiza y administra los registros de servicios académicos, seguimiento del egresado y titulación.",
    },
    {
      titulo: "Jefe de Unidad Académica",
      descripcion:
        "Implementa acciones técnicas, pedagógicas, planes, programas curriculares, valores éticos, sociales y formación profesional.",
    },
    {
      titulo: "Jefe de Bienestar y Empleabilidad",
      descripcion:
        "Responsable de tutoría, consejería, bienestar, salud, asistencia social, orientación profesional, bolsa de empleos y prácticas para el bienestar personal del estudiante.",
    },
    {
      titulo: "Jefe de Unidad de Investigación",
      descripcion:
        "Supervisa y coordina todas las actividades de investigación. Incluye la planificación estratégica, la gestión de recursos y personal, la búsqueda de financiamiento, el seguimiento de proyectos, la difusión de resultados y el cumplimiento de normativas éticas y legales.",
    },
    {
      titulo: "Jefe de Unidad de Formación Continua",
      descripcion:
        "Planificar, coordinar y ejecutar programas de formación que satisfagan las necesidades del mercado laboral. Implica diseñar cursos, gestionar recursos y relaciones con socios externos, evaluar la efectividad de los programas y garantizar el cumplimiento normativo.",
    },
  ];

  return (
    <section className="organizacion-page">
      {/*  Banner superior */}
      <div className="org-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Organización Institucional</h1>
          <p className="lead">Conoce las funciones de cada área</p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="row align-items-start">
          {/*  Acordeones */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            {areas.map((area, index) => (
              <div
                key={index}
                className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <FaUsersCog className="accordion-icon" />
                  <h4>{area.titulo}</h4>
                  <FaChevronDown className="accordion-arrow" />
                </div>
                <div
                  className="accordion-content"
                  style={{
                    maxHeight: activeIndex === index ? "250px" : "0px",
                    padding: activeIndex === index ? "0 1.5rem 1rem 1.5rem" : "0 1.5rem",
                  }}
                >
                  <p>{area.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          {/*  Imagen PDF (clic para abrir visor modal) */}
          <div className="col-lg-6 text-center">
            <h2 className="section-title mb-3">Organigrama Institucional</h2>
            <div className="organigrama-container" onClick={() => setShowPdf(true)}>
              <img
                src={organigramaImg}
                alt="Organigrama Institucional"
                className="organigrama-img"
              />
              <div className="zoom-icon">
                <FaSearchPlus />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/*  Modal visor PDF */}
      {showPdf && (
  <div className="pdf-modal" onClick={() => setShowPdf(false)}>
    <div
      className="pdf-modal-content-wide"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close-btn" onClick={() => setShowPdf(false)}>
        <FaTimes size={20} />
      </button>

      {/*  Clave única para reiniciar la vista del PDF */}
      <iframe
        key={Date.now()} // 🔹 cada vez que se abre el modal, fuerza recarga
        src={`${pdfOrganigrama}#view=FitH`}
        title="Organigrama Institucional"
        className="pdf-full-view-wide"
      ></iframe>
    </div>
  </div>
)}
    </section>
  );
};

export default OrganizacionInstitucional;
