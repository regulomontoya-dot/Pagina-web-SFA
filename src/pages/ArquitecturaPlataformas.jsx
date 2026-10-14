import React, { useState, useEffect } from "react";
import "./ArquitecturaPlataformas.css";


import bannerImg from "../assets/programa_estudios/arquitectura/minibanner1.jpg";
import carreraImg from "../assets/programa_estudios/arquitectura/arquitectura.jpg";
import pdfResolucion from "../assets/programa_estudios/arquitectura/resolucion-arquitectura.pdf";
import pdfPrograma from "../assets/programa_estudios/arquitectura/programa-arquitectura.pdf";
import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/arquitectura/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/arquitectura/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/arquitectura/minibanner3.jpg";



const ArquitecturaPlataformas = () => {
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
      <div className="carrera-hero-modern" style={{ backgroundImage: `url(${bannerImg})` }}  >
        <div className="carrera-hero-overlay">
          <h1 className="fw-bold text-uppercase text-white text-center">
            Arquitectura de Plataformas y Servicios de Tecnologías de la Información
          </h1>
          <p className="subtitulo">A la vanguardia de la tecnología - ¡En solo 3 años sé un profesional de éxito, ven únete a nosotros!</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="text-primary fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en Arquitectura de Plataformas y Servicios de TI
              </h3>
              <p>
                Forma profesionales especialistas en TI, contamos con un plan de estudios modular
                orientado al desarrollo de capacidades que permitan contribuir a la generación de 
                valor dentro de las organizaciones basado: en el desarrollo de Sistemas de Software 
                para diversas plataformas y dispositivos móviles, implementar redes de equipos de cómputo, 
                definir el mejor equipamiento de tecnología y dar un soporte tecnológico.
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
                        El Profesional Técnico en <strong>Arquitectura de Plataformas y Servicios de Tecnologías de la Información</strong>
                        está capacitado para atender requerimientos, incidentes y problemas de primer nivel, ejecutar acciones de monitoreo,
                        mantenimiento preventivo y diseño de arquitecturas tecnológicas bajo estándares de calidad y seguridad.
                    </p>
                    <p>
                        Se comunica de manera asertiva y efectiva, interpreta manuales y diagramas en inglés; se desempeña colaborativamente,
                        resuelve problemas bajo principios éticos, demostrando liderazgo, innovación y dominio de herramientas informáticas.
                    </p>
                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                        El profesional podrá desempeñarse en instituciones públicas y privadas, empresas de servicios, comercio y producción
                        en las siguientes áreas:
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                        <ul className="styled-list">
                            <li>Área de programación</li>
                            <li>Área de servicios en el desarrollo de sistemas</li>
                            <li>Área de soporte técnico</li>
                            <li>Área de control de sistemas y servicios de red</li>
                            <li>Área de comercialización de accesorios informáticos</li>
                            <li>Área de estadística</li>
                            <li>Área de logística</li>
                            <li>Área de patrimonio</li>
                        </ul>
                        </div>
                        <div className="col-md-6">
                        <ul className="styled-list">
                            <li>Área de comercio electrónico</li>
                            <li>Área de instalación y configuración de redes informáticas</li>
                            <li>Área de diseño gráfico y publicidad</li>
                            <li>Áreas de informática</li>
                            <li>Área de desarrollo y gestión de bases de datos</li>
                            <li>Área de producción audiovisual</li>
                            <li>Área de desarrollo de software</li>
                            <li>Área de innovación pedagógica</li>
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
                        Profesional Técnico en “Arquitectura de Plataformas y Servicios de Tecnologías de la Información”
                    </p>
                    <p>Además, se otorgan 3 certificaciones modulares:</p>
                    <ul className="styled-list">
                        <li>Soporte en Tecnologías de la Información</li>
                        <li>Desarrollo de Software e Integración de Sistemas de Información</li>
                        <li>Diseño y Mantenimiento de Plataformas Tecnológicas</li>
                    </ul>
                    </div>
                )}

                {activeTab === "itinerario" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-4">Itinerario Formativo</h5>

                    <div className="itinerario-periodo">
                        <h6>Primer Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Lógica Algorítmica</li>
                        <li>Mantenimiento de Equipos Informáticos</li>
                        <li>Manejo de Herramientas Digitales</li>
                        <li>Organización y Modelamiento de Procesos de Negocio</li>
                        <li>Organización de Recursos de Tecnología de Información</li>
                        <li>Comunicación Oral</li>
                        <li>Aplicaciones en Internet</li>
                        <li>Educación Física y Deportiva</li>
                        </ul>
                    </div>

                    <div className="itinerario-periodo">
                        <h6>Segundo Periodo <span>(6 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Desarrollo de Aplicaciones Estructuradas</li>
                        <li>Diagnóstico y Solución de Incidentes</li>
                        <li>Aplicaciones y Herramientas Digitales</li>
                        <li>Modelamiento de Base de Datos</li>
                        <li>Interpretación y Producción de Textos</li>
                        <li>Ofimática</li>
                        </ul>
                    </div>

                    <div className="itinerario-periodo">
                        <h6>Tercer Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Desarrollo de Aplicaciones Orientadas a Objetos</li>
                        <li>Administración de Sistemas Operativos Monopuestos</li>
                        <li>Seguridad de Información e Informática</li>
                        <li>Administración de Base de Datos</li>
                        <li>Estadística Computacional</li>
                        <li>Estrategias para la Resolución de Problemas</li>
                        <li>Inglés: Comunicación Oral</li>
                        </ul>
                    </div>

                    <div className="itinerario-periodo">
                        <h6>Cuarto Periodo <span>(7 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Desarrollo de Aplicaciones con Base de Datos</li>
                        <li>Redes y Conectividad de Datos</li>
                        <li>Herramientas de Diseño Gráfico</li>
                        <li>Metodologías de Desarrollo de Software</li>
                        <li>Herramientas y Técnicas de Control de Calidad</li>
                        <li>Comportamiento Ético</li>
                        <li>Comprensión y Redacción en Inglés</li>
                        </ul>
                    </div>

                    <div className="itinerario-periodo">
                        <h6>Quinto Periodo <span>(6 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Desarrollo de Aplicaciones Móviles</li>
                        <li>Sistemas Operativos Multiusuario</li>
                        <li>Herramientas de Animación Digital</li>
                        <li>Diseño Web del Lado Cliente</li>
                        <li>Marketing Digital y Comercio Electrónico</li>
                        <li>Fundamentos de Innovación Tecnológica</li>
                        </ul>
                    </div>

                    <div className="itinerario-periodo">
                        <h6>Sexto Periodo <span>(8 Unidades Didácticas)</span></h6>
                        <ul className="styled-list">
                        <li>Desarrollo de Aplicaciones Web Lado Servidor</li>
                        <li>Configuración de Equipos de Comunicación y Seguridad</li>
                        <li>Tecnologías y Herramientas Emergentes</li>
                        <li>Desarrollo de Aplicaciones Corporativas</li>
                        <li>Tecnologías de Cloud Computing</li>
                        <li>Herramientas para Contenidos Audiovisuales</li>
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

export default ArquitecturaPlataformas;
