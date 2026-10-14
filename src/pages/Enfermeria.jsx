import React, { useState, useEffect } from "react";
import "./ArquitecturaPlataformas.css";

import bannerImg from "../assets/images/fachada.jpg";
import carreraImg from "../assets/programa_estudios/enfermeria/enfermeria.jpg";
import pdfResolucion from "../assets/programa_estudios/enfermeria/resolucion-enfermeria.pdf";
import pdfPrograma from "../assets/programa_estudios/enfermeria/programa-enfermeria.pdf";
import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/enfermeria/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/enfermeria/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/enfermeria/minibanner3.jpg";



const Enfermeria = () => {
  const [activeTab, setActiveTab] = useState("perfil");

  const [selectedPdf, setSelectedPdf] = useState(null);

  const abrirPDF = (pdf) => {
    setSelectedPdf(pdf);
  };

  const cerrarPDF = () => {
    setSelectedPdf(null);
  };


  return (
    <section className="carrera-detalle page-animate">
      {/*  Banner superior */}
      <div className="carrera-hero-modern" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="carrera-hero-overlay">
          <h1 className="fw-bold text-uppercase text-white text-center">
            Programa de Estudio Enfermeria Tecnica
          </h1>
          <p className="subtitulo">Dando la seguridad al paciente - ¡En solo 3 años sé un profesional de éxito, ven únete a nosotros!</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="text-primary fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en Enfermeria Tecnica
              </h3>
              <p>
                Se distingue por su enfoque en una educación de excelencia, impartida 
                por un selecto grupo de docentes altamente calificados y experimentados. 
                Esta formación integral te permitirá adquirir las competencias necesarias 
                para planificar, organizar y ejecutar servicios de enfermería de manera 
                integral, brindando atención de calidad y calidez a personas, familias y 
                comunidades en todos los niveles de prevención y atención en salud, 
                desde la promoción de hábitos saludables hasta el cuidado de pacientes 
                con alta complejidad. Todo ello, bajo estrictos estándares de ética 
                profesional, bioseguridad y protocolos establecidos, garantizando la 
                seguridad tanto de los pacientes como del personal sanitario
              </p>
                Estarás preparado para desenvolverte con éxito en diversos ámbitos del 
                sector salud, incluyendo hospitales, clínicas, centros de atención primaria, 
                instituciones de geriatría y pediatría, entre otros. Tu perfil profesional 
                te permitirá brindar atención oportuna y eficaz en situaciones de 
                emergencia y urgencia, convirtiéndote en un agente fundamental para el 
                bienestar de las personas.
              <p>

              </p>

              {/*  Pestañas */}
              <div className="tabs-container">
                <div className="tabs">
                  <button
                    className={activeTab === "perfil" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("perfil")}
                  >
                    Perfil de Egresado
                  </button>
                  <button
                    className={activeTab === "ambito" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("ambito")}
                  >
                    Ámbito Laboral
                  </button>
                  <button
                    className={activeTab === "certificaciones" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("certificaciones")}
                  >
                    Certificaciones
                  </button>
                  <button
                    className={activeTab === "itinerario" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("itinerario")}
                  >
                    Itinerario Formativo
                  </button>
                </div>
                <div className="tab-content mt-4">
                {activeTab === "perfil" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Perfil del Egresado</h5>
                    <p>
                        El Egresado del Programa Profesional Técnico en Enfermería Técnica, 
                        tiene una formación sólida, que lo hace competente para integrarse 
                        al equipo de salud, en la promoción y prevención en salud además 
                        asiste en la atención de las necesidades básicas y cuidados integrales 
                        de la salud en las diferentes etapas de vida aplicando el enfoque 
                        intercultural y de derechos, de género y familiar en concordancia 
                        con la normativa correspondiente. Se comunica de manera efectiva, 
                        aplica las TIC en su quehacer profesional, utiliza el idioma inglés 
                        en el desarrollo de actividades, promueve la cultura y practicas 
                        deportes. así mismo es innovador e identifica oportunidades de 
                        negocio, soluciona problema de su entorno y aplica la ética en 
                        los espacios donde se desenvuelve, respetando la línea de autoridad, 
                        en el ejercicio de su profesión.
                    </p>
                   
                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                        El profesional Técnico en Enfermeria Técnica esta capacitado  
                        podrá desempeñase en instituciones públicas y privadas en las 
                        siguientes áreas:
                    </p>
                    <div className="row">
                        <div className="row">
                        <ul className="styled-list">
                            <li>Área de Emergencia</li>
                            <li>Área de Tópico</li>
                            <li>Área de Triaje</li>
                            <li>Área de Pediatría</li>
                            <li>Área de Neonatología</li>
                            <li>Área de Medicina General</li>
                            <li>Área de Promoción de la Salud</li>
                            <li>Área de Oncológica</li>
                            <li>Área de Gineco-Obstetricia</li>
                            <li>Área de Apoyo al Diágnóstico</li>
                            <li>Área de Esterilización</li>
                            <li>Área de Cirugía</li>
                            <li>Área de Cuidados Intensivos e Intermedios</li>
                            
                        </ul>
                        </div>
                    </div>
                    </div>
                )}

                {activeTab === "certificaciones" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Certificaciones</h5>
                    <p>
                        Al culminar los 3 años de estudios, el estudiante obtiene el título a nombre de la Nación:
                    </p>
                    <p className="fw-bold text-primary">
                        Profesional Técnico en «TÉCNICA EN FARMACIA»
                    </p>
                    <p>Además, se otorgan 3 certificaciones modulares:</p>
                    <ul className="styled-list">
                        <li>Prevención de Salud en Establecimientos Farmacéuticos</li>
                        <li>Expendio y Procesos Administrativos en los Establecimientos Farmacéuticos</li>
                        <li>Asistencia en la elaboración de Productos farmacéuticos y afines</li>
                    </ul>
                    </div>
                )}

                    {activeTab === "itinerario" && (
                  <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-4">Itinerario Formativo</h5>

                    <div className="itinerario-periodo">
                      <h6>Primer Periodo <span>(7 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Epidemiología General</li>
                        <li>Primeros Auxilios</li>
                        <li>Anatomía Funcional</li>
                        <li>Educación para la Salud</li>
                        <li>Comunicación Oral</li>
                        <li>Aplicaciones en Internet</li>
                        <li>Educación Física y Deportiva</li>
                      </ul>
                    </div>

                    <div className="itinerario-periodo">
                      <h6>Segundo Periodo <span>(7 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Inmunizaciones</li>
                        <li>Salud Pública</li>
                        <li>Salud Comunitaria</li>
                        <li>Salud Ocupacional</li>
                        <li>Fundamentos de Investigación</li>
                        <li>Interpretación y Producción de Texto</li>
                        <li>Ofimática</li>
                      </ul>
                    </div>

                    <div className="itinerario-periodo">
                      <h6>Tercer Periodo <span>(6 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Documentación en Salud</li>
                        <li>Asistencia Básica Hospitalaria</li>
                        <li>Nutrición y Dietas</li>
                        <li>Procedimientos Invasivos y No Invasivos</li>
                        <li>Inglés para la Comunicación Oral</li>
                        <li>Estrategias para la Resolución de Problemas</li>
                      </ul>
                    </div>

                    <div className="itinerario-periodo">
                      <h6>Cuarto Periodo <span>(7 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Bioseguridad</li>
                        <li>Muestras Biológicas</li>
                        <li>Administración de Medicamentos</li>
                        <li>Bioética en la Asistencia al Usuario</li>
                        <li>Asistencia al Usuario con Patologías</li>
                        <li>Comportamiento Ético</li>
                        <li>Comprensión y Redacción en Inglés</li>
                      </ul>
                    </div>

                    <div className="itinerario-periodo">
                      <h6>Quinto Periodo <span>(6 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Asistencia al Adulto Mayor</li>
                        <li>Salud Materna</li>
                        <li>Salud Bucal</li>
                        <li>Fisioterapia y Rehabilitación</li>
                        <li>Asistencia al Usuario Quirúrgico</li>
                        <li>Fundamentos de Innovación Tecnológica</li>
                      </ul>
                    </div>

                    <div className="itinerario-periodo">
                      <h6>Sexto Periodo <span>(6 Unidades Didácticas)</span></h6>
                      <ul className="styled-list">
                        <li>Salud Mental</li>
                        <li>Salud del Niño y Adolescente</li>
                        <li>Asistencia al Usuario Oncológico</li>
                        <li>Medicina Alternativa y Complementaria</li>
                        <li>Innovación Tecnológica</li>
                        <li>Plan de Negocios</li>
                      </ul>
                    </div>
                  </div>
                )}

                </div>

              </div>
            </div>
          </div>

          {/*  Panel lateral */}
          <div className="col-lg-4">
            <div className="sidebar-card p-4 rounded-4 shadow-sm text-center bg-white">
              <img src={carreraImg} alt="Arquitectura de Plataformas" className="img-fluid rounded-3 mb-3" />
              <button onClick={() => abrirPDF(pdfResolucion)} className="btn btn-download w-100 mb-3">
                
            <FaFilePdf className="me-2" /> Resolución de Autorización
            </button>

            <button onClick={() => abrirPDF(pdfPrograma)} className="btn btn-download w-100 mb-3">
            <FaFilePdf className="me-2" /> Programa de Estudios
            </button>

              <a
                href="https://drive.google.com/drive/folders/147AdHhbMtB7c_zxfWm9D_SorlkB3ul-M/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary w-100"
              >
                Ver Sílabos
              </a>

              <div className="mt-4 text-start contacto-box">
                <h6 className="text-primary fw-bold mb-2">INFORMACIÓN DE CONTACTO</h6>
                <p className="mb-2"><FaMapMarkerAlt className="me-2 text-primary" />Av. José Olaya Nº 120, San Gabriel, V.M.T</p>
                <p className="mb-2"><FaPhoneAlt className="me-2 text-primary" />(01) 500 6177</p>
                 <p className="horario-lineas">
                    <FaClock className="me-2 text-primary" />
                    Diurno: 8:00 a.m. - 1:00 p.m. <br />
                    <span>Nocturno: 5:30 p.m. - 10:00 p.m.</span>
                </p>

                <div className="social-links mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/*  Banner inferior con 3 fotos */}
        <div className="banner-slider">
        <div className="slide-track">
          <img src={banner1} alt="Campus 1" />
          <img src={banner2} alt="Campus 2" />
          <img src={banner3} alt="Campus 3" />
          {/* Repite las mismas imágenes para el loop suave */}
          <img src={banner1} alt="Campus 1 duplicado" />
          <img src={banner2} alt="Campus 2 duplicado" />
          <img src={banner3} alt="Campus 3 duplicado" />
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

export default Enfermeria;
