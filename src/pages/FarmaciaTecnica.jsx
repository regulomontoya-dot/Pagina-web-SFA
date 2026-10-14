import React, { useState, useEffect } from "react";
import "./ArquitecturaPlataformas.css";
import bannerImg from "../assets/images/fachada.jpg";
import carreraImg from "../assets/programa_estudios/farmacia/farmacia.jpg";
import pdfResolucion from "../assets/programa_estudios/farmacia/resolucion-farmacia.pdf";
import pdfPrograma from "../assets/programa_estudios/farmacia/programa-farmacia.pdf";
import { FaFilePdf, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import banner1 from "../assets/programa_estudios/farmacia/minibanner1.jpg";
import banner2 from "../assets/programa_estudios/farmacia/minibanner2.jpg";
import banner3 from "../assets/programa_estudios/farmacia/minibanner3.jpg";



const FarmaciaTecnica = () => {
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
            Programa de Estudio Farmacia Tecnica
          </h1>
          <p className="subtitulo">Para el mundo farmaceutico - ¡En solo 3 años sé un profesional de éxito, ven únete a nosotros!</p>
        </div>
      </div>

      {/*  Contenido */}
      <div className="container my-5">
        <div className="row g-4">
          {/*  Información principal */}
          <div className="col-lg-8">
            <div className="info-card p-4 shadow-sm rounded-4 bg-white">
              <h3 className="text-primary fw-bold mb-3 text-uppercase">
                TÍTULO: Profesional Técnico en TÉCNICA EN FARMACIA
              </h3>
              <p>
                ¿Te apasiona ayudar a los demás y te interesa el mundo de la salud? 
                Si tu respuesta es sí, entonces la carrera de Técnico en Farmacia es 
                ideal para ti. En este programa de formación de 3 años, adquirirás 
                los conocimientos y habilidades necesarios para convertirte en un 
                profesional integral, capaz de dispensar medicamentos, brindar asesoría 
                farmacológica a los pacientes y colaborar en la atención integral de la salud.
              </p>
              <p>
                Desarrollarás habilidades de comunicación interpersonal y empatía, para 
                brindar a los pacientes la atención y el asesoramiento que necesitan. Además, 
                estarás capacitado para trabajar en equipo con otros profesionales de la 
                salud para garantizar la mejor atención posible a los pacientes.
              </p>
              <p>
                No te pierdas esta oportunidad de convertirte en un profesional altamente 
                demandado y con un gran impacto en la sociedad. Inicia hoy mismo tu camino 
                hacia una carrera gratificante y llena de satisfacciones en el apasionante 
                mundo de la farmacia.
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
                        El Egresado del Programa Profesional Técnica en Farmacia es competente 
                        para realizar actividades de prevención en salud individual y colectiva 
                        aplicando el enfoque intercultural, realiza el expendio de productos 
                        farmacéuticos, dispositivos médicos y productos sanitarios, además 
                        asiste en los procesos administrativos de establecimientos farmacéuticos, 
                        asimismo apoya en la preparación de fórmulas magistrales y oficinales 
                        en los establecimientos farmacéuticos según normas vigentes.
                    </p>
                    <p>
                        Se comunica de manera efectiva, aplica las TIC en su quehacer profesional, 
                        utiliza el idioma de inglés en el desarrollo de sus actividades, promueve 
                        la cultura y practica deportes, así mismo es innovador e identificar 
                        oportunidades de negocio, soluciona problemas de su entorno y aplica la 
                        ética en los espacios donde se desenvuelve, respetando la línea de autoridad, 
                        en el ejercicio de su profesión.
                    </p>
                    </div>
                )}

                {activeTab === "ambito" && (
                    <div className="tab-section fade-in">
                    <h5 className="text-primary fw-bold mb-3">Ámbito Laboral</h5>
                    <p>
                        El profesional Técnica en Farmacia esta capacitado  y supervisado 
                        que podrá desempeñase en las siguientes áreas
                    </p>
                    <div className="row">
                        <div className="row">
                        <ul className="styled-list">
                            <li>Área de Producción de Prepación Galenicos</li>
                            <li>Área de Acondicionamiento de Productos Farmaceuticos</li>
                            <li>Área de Control de Calidad</li>
                            <li>Área de Distribución y Transporte</li>
                            <li>Área de Almacenamiento de Productos Farmaceuticos</li>
                            <li>ÁÁrea de Recepción</li>
                            <li>Área de Expendio</li>
                            <li>Área Administrativa</li>
        
                            <li>Área de Farmacovigilancia y Tecnovigilancia</li>
                            <li>Área de Elaboración y Expendio de Preparados Farmacéuticos</li>
                            <li>Área de Representación Medica</li>
                
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
      <h6>Primer Periodo <span>(7 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Prevención de salud en farmacia</li>
        <li>Farmacología básica y medicamentos esenciales</li>
        <li>Anatomía funcional</li>
        <li>Procesos bioquímicos</li>
        <li>Comunicación Oral</li>
        <li>Aplicaciones en Internet</li>
        <li>Educación Física y Deportiva</li>
      </ul>
    </div>

    <div className="itinerario-periodo">
      <h6>Segundo Periodo <span>(6 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Administración farmacéutica</li>
        <li>Administración de medicamentos</li>
        <li>Primeros auxilios</li>
        <li>Seguridad y salud ocupacional</li>
        <li>Interpretación y Producción de Textos</li>
        <li>Ofimática</li>
      </ul>
    </div>

    <div className="itinerario-periodo">
      <h6>Tercer Periodo <span>(6 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Clasificación de productos farmacéuticos</li>
        <li>Normativa legal en la administración farmacéutica</li>
        <li>Procedimientos para el aseguramiento de la calidad en los establecimientos farmacéuticos</li>
        <li>Farmacología Básica</li>
        <li>Inglés para la Comunicación Oral</li>
        <li>Estrategias para la Resolución de Problemas</li>
      </ul>
    </div>

    <div className="itinerario-periodo">
      <h6>Cuarto Periodo <span>(6 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Farmacología aplicada en patologías</li>
        <li>Abastecimiento y expendio de productos farmacéuticos y afines</li>
        <li>Sistema informático en establecimientos farmacéuticos</li>
        <li>Buenas prácticas de oficina farmacéutica</li>
        <li>Comportamiento Ético</li>
        <li>Comprensión y Redacción en Inglés</li>
      </ul>
    </div>

    <div className="itinerario-periodo">
      <h6>Quinto Periodo <span>(5 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Farmacognosia y fitoterapia</li>
        <li>Operaciones básicas en la industria farmacéutica</li>
        <li>Procesamiento y registro de insumos</li>
        <li>Tecnología farmacéutica</li>
        <li>Fundamentos de Innovación Tecnológica</li>
      </ul>
    </div>

    <div className="itinerario-periodo">
      <h6>Sexto Periodo <span>(6 Unidades Didácticas)</span></h6>
      <ul className="styled-list">
        <li>Técnicas de control de calidad en la industria farmacéutica</li>
        <li>Técnicas para la elaboración de preparados farmacéuticos</li>
        <li>Técnicas de procesamiento de productos sanitarios</li>
        <li>Asistencia en elaboración de productos naturales</li>
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
                href="https://drive.google.com/drive/folders/1OH-yjZzeF8a8uQcXrHuw-pOAnJh_0AbD"
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

export default FarmaciaTecnica;
