import React from "react";
import "./ConstruccionCivil.css";
import civilImg from "../assets/images/civil.jpg";
import pdfMalla from "../assets/docs/civil.pdf";
import { FaDownload, FaHardHat } from "react-icons/fa";

const ConstruccionCivil = () => {
  return (
    <section className="carrera-detalle">
      {/*  Encabezado Hero */}
      <div className="carrera-hero-modern" style={{ backgroundImage: `url(${civilImg})` }}>
        <div className="carrera-hero-overlay">
          <h1 className="fw-bold">Construcción Civil</h1>
          <p>Formamos profesionales técnicos en obras civiles con liderazgo y calidad.</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="text-primary fw-bold mb-3">
                <FaHardHat className="me-2" />
                TÍTULO: PROFESIONAL TÉCNICO EN CONSTRUCCIÓN CIVIL
              </h3>

              <h5 className="fw-bold text-primary mt-4">DESCRIPCIÓN DEL PERFIL DE EGRESO</h5>
              <p>
                El profesional técnico en Construcción Civil del Instituto de Educación Superior Tecnológico Público
                “Gilda Liliana Ballivián Rosado” tiene competencias para supervisar la información topográfica; elaborar planos,
                replanteos y modelamientos; administrar información, recursos y actividades del proyecto y ejecución de la obra;
                controlar la ejecución de la obra; dirigir los grupos de trabajo; e implementar sistemas de gestión de calidad,
                seguridad, salud y medio ambiente, según normas técnicas y legales correspondientes.
              </p>
              <p>
                Además, se desempeña de manera ética, comunicándose eficazmente, utilizando tecnologías de información,
                fomentando el emprendimiento, la innovación, el liderazgo y el trabajo colaborativo.
              </p>

              <h5 className="fw-bold text-primary mt-4">COMPETENCIA GENERAL</h5>
              <p>
                Planificar, organizar, ejecutar y controlar los trabajos de obras civiles, tomando en cuenta criterios técnicos,
                calidad y seguridad establecidos, controlando el rendimiento de los recursos.
              </p>

              <h5 className="fw-bold text-primary mt-4">COMPETENCIAS ESPECÍFICAS</h5>
              <ul>
                <li>Supervisar la información topográfica según requerimientos del proyecto y normas legales.</li>
                <li>Elaborar planos, replanteos y modelamientos considerando normas técnicas vigentes.</li>
                <li>Administrar recursos e información en la ejecución de obras de construcción.</li>
                <li>Controlar la ejecución de la obra según normas establecidas.</li>
                <li>Dirigir equipos de trabajo y gestionar recursos.</li>
                <li>Implementar sistemas de gestión de calidad, seguridad y medio ambiente.</li>
              </ul>

              <h5 className="fw-bold text-primary mt-4">CAMPOS DE ACCIÓN</h5>
              <p>
                El profesional técnico en Construcción Civil puede desempeñarse en el sector público o privado,
                en empresas constructoras, consultoras o como emprendedor independiente.
              </p>
              <ul>
                <li>Gerente de micro o pequeña empresa</li>
                <li>Supervisor de calidad o de obras</li>
                <li>Asistente de gestión de recursos</li>
                <li>Topógrafo</li>
                <li>Dibujante técnico (AutoCAD, 3D Civil, ArchiCAD)</li>
              </ul>
            </div>
          </div>

          {/* S Panel lateral */}
          <div className="col-lg-4">
            <div className="sidebar-card p-4 rounded-4 shadow-sm text-center bg-white">
              <img src={civilImg} alt="Construcción Civil" className="img-fluid rounded-3 mb-3" />
              <a href={pdfMalla} target="_blank" rel="noopener noreferrer" className="btn btn-download w-100">
                <FaDownload className="me-2" /> Descargar Malla Curricular 2024 (PDF)
              </a>
              <div className="mt-4 text-start">
                <h6 className="text-primary fw-bold">DURACIÓN</h6>
                <p className="mb-2">6 semestres equivalentes a 3 años académicos.</p>
                <h6 className="text-primary fw-bold">TURNOS DE ESTUDIO</h6>
                <p className="mb-0">Nocturno: 6:00 p.m. a 10:20 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstruccionCivil;
