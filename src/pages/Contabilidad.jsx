import React, { useState, useEffect } from "react";
import "./Contabilidad.css";
import bannerImg from "../assets/images/fachada.jpg";
import carreraImg from "../assets/programa_estudios/contabilidad/contabilidad.jpg";
import pdfResolucion from "../assets/programa_estudios/contabilidad/resolucion-contabilidad.pdf";
import pdfPrograma from "../assets/programa_estudios/contabilidad/programa-contabilidad.pdf";
import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/contabilidad/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/contabilidad/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/contabilidad/minibanner3.jpg";



const Contabilidad = () => {
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
      {/* Banner superior */}
      <div className="carrera-hero-modern" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="carrera-hero-overlay">
          <h1 className="fw-bold text-uppercase text-white text-center">
            Programa de Estudio Contabilidad
          </h1>
          <p className="subtitulo">Para crear y administrar la empresa - ¡En solo 3 años sé un profesional de éxito, ven únete a nosotros!</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className=" fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en CONTABILIDAD
              </h3>
              <p>
                 El profesional técnico del programa de estudios de Contabilidad del Instituto de 
                 Educación Superior Tecnológico Público “San Francisco de Asis”, tiene competencias 
                 para desarrollar y supervisar las operaciones contables y financieras; para 
                 formular los estados financieros y actualizar los procedimientos contables y 
                 financieros; según políticas, procedimientos y normativa correspondiente.
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
                    <h5 className=" fw-bold mb-3">Perfil del Egresado</h5>
                    <p>El Egresado del Programa Profesional Técnico en Contabilidad es 
                      competente para desarrollar, supervisar y actualizar las operaciónes
                       de contabilidad y finanzas, ademas formula el estado de situación 
                       financiera de la organización, según política, procedimientos y 
                       normativa correspondiente. Se comunica de manera efectiva, aplica 
                       las TIC en su quehacer profesiional utiliza el idioma ingles en el
                        desarrollo de sus actividades, promueve la cltura y practica 
                        deportivas, asi mismo es innovador e identifica oportunidades de 
                        negocio, soluciona problemas de su entorno y aplica la ética en
                         los espacios donde se desenvuelve, respetando la liena de 
                         autoridad en el ejercicio de su profesión.
                    </p>
                   
                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                        El profesional Técnico en Contabilidad podrá desempeñase en instituciones públicas y privadas en las siguientes áreas:
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                        <ul className="styled-list">
                            <li>Área de Contabilidad</li>
                            <li>Área de Finanzas</li>
                            <li>Área de Auditoria</li>
                            <li>Área de Tributación</li>
                            <li>Área de Costos y Presupuesto</li>
                            <li>Área de Logística y Almacenes</li>
                            <li>Área de Recursos Huamanos</li>
                            <li>Área de Proyectos de Inversión</li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul className="styled-list">
                            <li>Área de Tesorería</li>
                            <li>Área de Analísis Financiero</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                )}
               {activeTab === "certificaciones" && (
                    <div className="tab-section fade-in">
                    <h5 className=" fw-bold mb-3">Certificaciones</h5>
                    <p>
                        Al culminar los 3 años de estudios, el estudiante obtiene el título a nombre de la Nación:
                    </p>
                    <p className="fw-bold ">
                        Profesional Técnico en “CONTABILIDAD”
                    </p>
                    <p>Además, se otorgan 3 certificaciones modulares:</p>
                    <ul className="styled-list">
                        <li>Procesos Contables</li>
                        <li>Contabilidad Pública y Privada</li>
                        <li>Análisis Financiero</li>
                    </ul>
                    </div>
                )}

                {activeTab === "itinerario" && (
                    <div className="tab-section fade-in">
                      <h5 className=" fw-bold mb-4">Itinerario Formativo</h5>

                      <div className="itinerario-periodo">
                        <h6>Primer Periodo <span>(9 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Técnica de Comunicación</li>
                          <li>Lógica y Funciones</li>
                          <li>Cultura Física y Deporte</li>
                          <li>Informática e Internet</li>
                          <li>Contabilidad General I</li>
                          <li>Plan Contable</li>
                          <li>Documentación Comercial y Contable</li>
                          <li>Administración Empresarial</li>
                          <li>Legislación Comercial</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Segundo Periodo <span>(9 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Interpretación y Producción de Textos</li>
                          <li>Estadística General</li>
                          <li>Cultura Artística</li>
                          <li>Ofimática</li>
                          <li>Fundamentos de Investigación</li>
                          <li>Contabilidad General II</li>
                          <li>Legislación Laboral</li>
                          <li>Legislación Tributaria</li>
                          <li>Fundamentos de Costos</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Tercer Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Sociedad y Economía en la Globalización</li>
                          <li>Medio Ambiente y Desarrollo Sostenible</li>
                          <li>Investigación e Innovación Tecnológica</li>
                          <li>Contabilidad de Costos</li>
                          <li>Técnica Presupuestal</li>
                          <li>Contabilidad Gubernamental I</li>
                          <li>Aplicativos Informáticos</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Cuarto Periodo <span>(5 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Comunicación Interpersonal</li>
                          <li>Proyecto de Investigación e Innovación Tecnológica</li>
                          <li>Contabilidad de Sociedades</li>
                          <li>Contabilidad Aplicada</li>
                          <li>Contabilidad Gubernamental II</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Quinto Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Comunicación Empresarial</li>
                          <li>Comportamiento Ético</li>
                          <li>Organización y Constitución de Empresas</li>
                          <li>Formulación de Estados Financieros</li>
                          <li>Formulación y Evaluación de Proyectos</li>
                          <li>Planeamiento de la Auditoría</li>
                          <li>Contabilidad de Entidades Financieras I</li>
                        
                        </ul>
                      </div>


                      <div className="itinerario-periodo">
                        <h6>Sexto Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Liderazgo y Trabajo en Equipo</li>
                          <li>Proyecto Empresarial</li>
                          <li>Legislación e Inserción Laboral</li>
                          <li>Análisis e Interpretación de Estados Financieros</li>
                          <li>Finanzas Públicas</li>
                          <li>Técnicas y Procedimientos de Auditoría</li>
                          <li>Contabilidad de Entidades Financieras II</li>
                          <li>Cálculo Financiero</li>
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
              <button onClick={() => abrirPDF("")} className="btn btn-download w-100 mb-3">
                
            <FaFilePdf className="me-2" /> Resolución de Autorización
            </button>

            <button onClick={() => abrirPDF("")} className="btn btn-download w-100 mb-3">
            <FaFilePdf className="me-2" /> IESTP SFA - Convenios
            </button>
             <button onClick={() => abrirPDF("")} className="btn btn-download w-100 mb-3">
            <FaFilePdf className="me-2" /> Horario General
            </button>
              {/*  
              <a
                href="https://drive.google.com/drive/folders/1_-SaBpB4T8sA3Rt8UIq0Si5M0-7ZXYed"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary w-100"
              >
                Ver Sílabos
              </a>*/}

              <div className="mt-4 text-start contacto-box">
                <h6 className=" fw-bold mb-2">INFORMACIÓN DE CONTACTO</h6>
                <p className="mb-2"><FaMapMarkerAlt className="me-2 " />Av. Prolongacion Pachacútec Cdra. 50 , V.M.T</p>
                <p className="mb-2"><FaPhoneAlt className="me-2 " />970 776 040</p>
                 <p className="horario-lineas">
                    <FaClock className="me-2 " />
                    Diurno: 8:00 a.m. - 1:00 p.m. <br />
                    <span>Nocturno: 5:00 p.m. - 10:00 p.m.</span>
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

export default Contabilidad;
