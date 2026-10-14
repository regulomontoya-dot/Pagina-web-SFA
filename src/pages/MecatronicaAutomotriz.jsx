import React, { useState, useEffect } from "react";
import "./ArquitecturaPlataformas.css";
import bannerImg from "../assets/images/fachada.jpg";
import carreraImg from "../assets/programa_estudios/mecatronica/mecatronica.jpg";
import pdfResolucion from "../assets/programa_estudios/mecatronica/resolucion-mecatronica.pdf";
import pdfPrograma from "../assets/programa_estudios/mecatronica/programa-mecatronica.pdf";
import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/mecatronica/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/mecatronica/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/mecatronica/minibanner3.jpg";



const MecatronicaAutomotriz = () => {
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
            Programa de Estudios Mecatronica Automotriz 
          </h1>
          <p className="subtitulo">Al servicios de los autos - ¡En solo 3 años sé un profesional de éxito, ven únete a nosotros!</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="text-primary fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en MECATRÓNICA AUTOMOTRIZ
              </h3>
              <p>
                ¿Apasionado por la tecnología y los vehículos? ¡Conviértete en un 
                experto en Mecatrónica Automotriz! Nuestro programa de formación te 
                brinda la oportunidad de desarrollar las habilidades y conocimientos 
                necesarios para diagnosticar, mantener y reparar vehículos livianos 
                con total precisión y eficiencia. De la mano de profesionales altamente 
                calificados y experimentados en el sector automotriz, aprenderás a 
                aplicar las últimas tecnologías en mecatrónica, dominarás el uso de 
                herramientas y equipos especializados, y adquirirás las competencias 
                para gestionar y administrar talleres automotrices de manera exitosa.
              </p>

              <p>
                Conviértete en un profesional integral, altamente demandado por las 
                empresas automotrices, y disfruta de una carrera profesional desafiante 
                y gratificante. ¡Empieza hoy mismo tu camino hacia el éxito en Mecatrónica Automotriz!
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
                        El Egresado del Programa Profesional Técnico en Mecatrónica Automotriz 
                        está capacitado en realizar el diagnóstico, mantenimiento, configuración,
                         reparación y conversión del sistema de combustible en los sistemas mecánicos, 
                         eléctricos y de transmisión de los vehículos automotrices de acuerdo a 
                         manuales técnicos, procedimientos y normativa vigente. Asimismo, se 
                         comunica de manera efectiva y asertiva, maneja el idioma inglés para 
                         interpretar planos, manuales y comunicar instrucciones vinculadas a la 
                         profesión, también utiliza herramientas de tecnología de la información, 
                         es capaz de abordar situaciones y solucionar problemas de manera ética, 
                         es innovador, emprendedor, colaborativos y lidera procesos de mejora 
                         continua en los espacios donde se desenvuelve.
                   </p>

                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                       El profesional Técnico en Mecatrónica Automotriz esta capacitado  
                       podrá desempeñase en las empresas del sector productivo y comercialización 
                       automotriz en las siguientes áreas:
                    </p>
                    <div className="row">
                        <div className="row">
                        <ul className="styled-list">
                            <li>Área de taller de servicios de diagnóstico, mantenimiento y reparación de vehículos</li>
                            <li>Área de almacén de respuestos automotrices</li>
                            <li>Área de revisiones técnicas vehiculares</li>
                            <li>Área de proyecos de innovación automotriz</li>
                            <li>Área de capacitación en vehículos o maquinarias</li>
                            <li>Área de manufactura de vehículos</li>
                            
                        
                            <li>Área de ensamblaje de vehículos</li>
                            <li>Área de control de calidad de vehículos y componentes</li>
                            <li>Área de Post Delivery Inspection (PDI)</li>
                            <li>Área de Pre Delivery Inspection (PDI)</li>
                            <li>Área de Conversión vehicular</li>
                            <li>Área de taller vehículos de flotas de transporte público</li>
                            
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
                        Profesional Técnico en «MECATRÓNICA AUTOMOTRIZ»
                    </p>
                    <p>Además, se otorgan 3 certificaciones modulares:</p>
                    <ul className="styled-list">
                        <li>Mantenimiento Programado de Vehículos Automotores y Sistemas de Suspensión, Dirección y Frenos</li>
                        <li>Mantenimiento de los Sistemas Eléctricos, Electrónicos y de Transimisión en Vehiculos Automotores</li>
                        <li>Mantenimiento de Motores de Combustión Interna y Conversación de Sistemas de Combustibles en Vehiculos Automotores</li>
                    </ul>
                    </div>
                )}

                  {activeTab === "itinerario" && (
                    <div className="tab-section fade-in">
                      <h5 className="text-primary fw-bold mb-4">Itinerario Formativo</h5>

                      <div className="itinerario-periodo">
                        <h6>Primer Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Fluido y Lubricantes Automotrices</li>
                          <li>Mediciones Eléctricos Automotrices</li>
                          <li>Mantenimiento de Chasis y Carrocería</li>
                          <li>Mantenimiento de Sistema de Suspensión</li>
                          <li>Sistema Electrohidráulicos</li>
                          <li>Mecánica y Metrología</li>
                          <li>Comunicación Oral</li>
                          <li>Inglés para la Comunicación Oral</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Segundo Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Alineamiento y Balanceo de Ruedas</li>
                          <li>Mediciones Electrónicas Automotrices</li>
                          <li>Mantenimiento de Sistema de Dirección</li>
                          <li>Mantenimiento de Sistema de Frenos</li>
                          <li>Sistema Electroneumáticos</li>
                          <li>Interpretación y Producción de Textos</li>
                          <li>Comprensión y Redacción en Inglés</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Tercer Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Sistema de Carga</li>
                          <li>Sistema de Luces</li>
                          <li>Sistema de Arranque</li>
                          <li>Sistema de Encendido</li>
                          <li>Sistema Auxiliares Automotores</li>
                          <li>Sistema de Calefacción y Aire Acondicionado</li>
                          <li>Aplicaciones en Internet</li>
                          <li>Comportamiento Ético</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Cuarto Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Sistema de Transmisión Mecánica</li>
                          <li>Sistema de Transmisión Automática</li>
                          <li>Sistema Diferencial</li>
                          <li>Sistema de Transmisión Auxiliar</li>
                          <li>Tecnología de Soldadura</li>
                          <li>Ofimática</li>
                          <li>Solución de Problemas</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Quinto Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Sistema de Seguridad del Vehículo</li>
                          <li>Mantenimiento Mecánico de Motores Otto</li>
                          <li>Sistema de Inyección de Motores Otto</li>
                          <li>Mantenimiento de Sistema Microelectrónicas del Vehículo</li>
                          <li>Redes y Sistemas Electrónicos</li>
                          <li>Fundamentos de Investigación Tecnológica</li>
                          <li>Cultura Física y Deporte</li>
                        </ul>
                      </div>

                      <div className="itinerario-periodo">
                        <h6>Sexto Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                          <li>Mantenimiento Mecánico de Motores Diésel</li>
                          <li>Sistema de Inyección de Motores Diésel</li>
                          <li>Sistema Auxiliares Vehículos Pesados</li>
                          <li>Sistema de Conversión Dual</li>
                          <li>Sistema Automotores Eléctricos e Híbridos</li>
                          <li>Rectificaciones Automotrices</li>
                          <li>Innovación Tecnológica</li>
                          <li>Oportunidad de Negocio</li>
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
                href="https://drive.google.com/drive/folders/1HoVSkZFgu9q6Gwot05__3CB3mdxkvYiu"
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

      {/* Modal PDF */}
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

export default MecatronicaAutomotriz;
