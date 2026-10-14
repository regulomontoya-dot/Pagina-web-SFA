 import React, { useState, useEffect } from "react";
import "./Contabilidad.css";
import bannerImg from "../assets/images/fachada.jpg";
import carreraImg from "../assets/programa_estudios/electricidadIndustrial/electricidad-industrial.jpg";
import ReglamentoPDF from "../assets/programa_estudios/electricidadIndustrial/ReglamentoInterno.pdf";

import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/electricidadIndustrial/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/electricidadIndustrial/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/electricidadIndustrial/minibanner3.jpg";


const ElectricidadIndustrial = () => {
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
           Programa de estudio Electricidad Industrial
          </h1>
           </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en Electricidad Industrial
              </h3>
              <p>
                El Programa de Estudios de Electricidad Industrial del Instituto San Francisco 
                de Asís está diseñado para formar profesionales técnicos altamente calificados 
                en el ámbito de los sistemas eléctricos industriales. A través de una combinación 
                de teoría, práctica y el uso de tecnologías de vanguardia, el programa prepara 
                a los estudiantes para enfrentar los desafíos de la industria eléctrica moderna.
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
                  
                </div>
                <div className="tab-content mt-4">
                {activeTab === "perfil" && (
                    <div className="tab-section fade-in">
                    <h5 className=" fw-bold mb-3">Perfil del Egresado</h5>
                    <p>El egresado del programa de Electricidad Industrial del Instituto San 
                      Francisco de Asís es un profesional técnico altamente capacitado para diseñar, 
                      instalar, operar y mantener sistemas eléctricos industriales, enfocándose 
                      en la eficiencia, la seguridad y la sostenibilidad.
                    </p>
                    <p>
                      Posee una sólida formación en principios eléctricos, normas técnicas, y manejo 
                      de herramientas y equipos especializados, además de habilidades para la instalación, 
                      operación y mantenimiento de circuitos eléctricos y sistemas de control 
                      automatizado, así como para el diagnóstico y reparación de motores, generadores 
                      y transformadores.
                    </p>
                    <p>
                      Es capaz de aplicar normas nacionales e internacionales de seguridad eléctrica, 
                      diseñar sistemas energéticamente eficientes y utilizar software especializado 
                      en simulación y diseño eléctrico.
                    </p>
                    <p>
                      Complementa su formación técnica con competencias blandas como trabajo en equipo, 
                      comunicación efectiva, compromiso ético y adaptación a cambios tecnológicos, 
                      permitiéndole destacarse en industrias de manufactura, construcción, generación y 
                      distribución de energía, o emprender proyectos propios. Este perfil integral 
                      garantiza una preparación adecuada para enfrentar los desafíos de la industria 
                      eléctrica moderna.
                    </p>
                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                        El egresado del programa de Electricidad Industrial del Instituto 
                        San Francisco de Asís tiene la capacidad de desempeñarse en una amplia 
                        variedad de sectores productivos. Entre ellos se encuentran industrias 
                        de manufactura, construcción, generación y distribución de energía, 
                        empresas de mantenimiento industrial y servicios eléctricos, así como 
                        en proyectos de automatización y eficiencia energética.
                    </p>
                    <p>
                      Puede ocupar cargos como técnico en mantenimiento eléctrico, instalador 
                      de sistemas eléctricos industriales, operador de sistemas automatizados, 
                      diseñador de circuitos eléctricos o consultor en eficiencia energética. 
                      Asimismo, está capacitado para emprender proyectos propios en el área 
                      eléctrica, brindando soluciones innovadoras y sostenibles a sus clientes.
                    </p>
                    <p>
                      Su formación le permite adaptarse a los avances tecnológicos en el sector 
                      eléctrico, garantizar la seguridad en las instalaciones y contribuir al 
                      desarrollo sostenible, siendo un profesional clave en el ámbito industrial y 
                      energético.
                    </p>
                   
                    </div>
                )}

            

                </div>

              </div>
            </div>
          </div>

          {/* Panel lateral */}
          <div className="col-lg-4">
            <div className="sidebar-card p-4 rounded-4 shadow-sm text-center bg-white">
              <img src={carreraImg} alt="Arquitectura de Plataformas" className="img-fluid rounded-3 mb-3" />
              <button onClick={() => abrirPDF(ReglamentoPDF)} className="btn btn-download w-100 mb-3">
                
            <FaFilePdf className="me-2" /> Resolución de Autorización
            </button>

           

              

              <div className="mt-4 text-start contacto-box">
                <h6 className="fw-bold mb-2">INFORMACIÓN DE CONTACTO</h6>
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

export default ElectricidadIndustrial;
