import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Matricula.css";


import registraLogo from "../assets/o_paginas/enlaces/registra.png";
import titulaLogo from "../assets/o_paginas/enlaces/titula.png";
import conectaLogo from "../assets/o_paginas/enlaces/conecta.png";
import avanzaLogo from "../assets/o_paginas/enlaces/avanza.png";
import consultaLogo from "../assets/o_paginas/enlaces/consulta.png";
import sigepLogo from "../assets/o_paginas/enlaces/sigep.png";
import trabajoLogo from "../assets/o_paginas/enlaces/trabajo.png";
import mineduLogo from "../assets/o_paginas/enlaces/minedu.png";

const EnlacesInstitucionales = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const institucionales = [
    {
      titulo: "REGISTRA – Sistema de Información de Gestión Académica",
      descripcion:
        "Apoya la gestión académica de los institutos de educación superior en procesos de admisión, matrícula y evaluación.",
      img: registraLogo,
      link: "https://registra.minedu.gob.pe/",
    },
    {
      titulo: "TITULA – Sistema de Información de Grados y Títulos",
      descripcion:
        "Permite registrar grados y títulos de institutos superiores e incorporarlos al Registro Nacional del MINEDU.",
      img: titulaLogo,
      link: "https://titula.minedu.gob.pe/",
    },
    {
      titulo: "CONECTA – Sistema de Seguimiento de Egresados",
      descripcion:
        "Da seguimiento a los egresados de institutos tecnológicos y su inserción laboral.",
      img: conectaLogo,
      link: "https://conecta.minedu.gob.pe/",
    },
    {
      titulo: "AVANZA – Sistema de Gestión Docente",
      descripcion:
        "Facilita los procesos de gestión, evaluación y nombramiento de docentes en la educación superior.",
      img: avanzaLogo,
      link: "https://avanza.minedu.gob.pe/",
    },
    {
      titulo: "Consulta de Títulos Tecnológicos y Pedagógicos",
      descripcion:
        "Consulta títulos registrados en el Registro Nacional de Certificados, Grados y Títulos.",
      img: consultaLogo,
      link: "https://titulos.minedu.gob.pe/",
    },
    {
      titulo: "SIGEP – Sistema Integrado de Gestión de Personal",
      descripcion:
        "Gestión en línea de escalafón, plazas y personal del sector educación.",
      img: sigepLogo,
      link: "https://sigep.minedu.gob.pe/",
    },
    {
      titulo: "Ministerio de Trabajo y Promoción del Empleo",
      descripcion:
        "Promueve el empleo digno, la empleabilidad y la protección de los derechos laborales.",
      img: trabajoLogo,
      link: "https://www.gob.pe/mtpe",
    },
    {
      titulo: "Ministerio de Educación",
      descripcion:
        "Diseña y ejecuta políticas educativas nacionales y programas de formación docente y estudiantil.",
      img: mineduLogo,
      link: "https://www.gob.pe/minedu",
    },
  ];

  const educativos = [
    {
      titulo: "Transciende como Profesional en Contabilidad",
      descripcion:
        "Aprende más de 100 cursos y diplomados sobre temas contables, tributarios y laborales.",
      link: "https://www.cursos-contabilidad.pe/",
    },
    {
      titulo: "Formación Digital y Herramientas Profesionales",
      descripcion:
        "Descubre cursos online y programas de capacitación para impulsar tu carrera o negocio.",
      link: "https://talentodigital.gob.pe/",
    },
    {
      titulo: "Capacítate y Certifícate sin Costo",
      descripcion:
        "Más de 85 cursos disponibles para fortalecer tus habilidades laborales y profesionales.",
      link: "https://empleabilidad.mtpe.gob.pe/",
    },
    {
      titulo: "Conecta Empleo – Fundación Telefónica",
      descripcion:
        "Programa gratuito de formación digital para potenciar tu perfil profesional.",
      link: "https://conectaempleo-formacion.fundaciontelefonica.com/",
    },
  ];

  return (
    <section className="matricula-page">
      {/* Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Enlaces Institucionales</h1>
          <p className="lead">
            Accede a los principales sistemas y portales educativos del MINEDU y aliados.
          </p>
        </div>
      </div>

      {/*  Sistemas de registro */}
      <div className="container py-5">
        <h2 className="section-subtitle text-center mb-4" data-aos="fade-up">
          Sistemas de Registro de Información
        </h2>

        <div className="row g-4 justify-content-center">
          {institucionales.map((s, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in">
              <div className="enlace-card text-center">
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enlace-logo-container"
                >
                  <img src={s.img} alt={s.titulo} className="enlace-logo" />
                </a>
                <h5 className="fw-bold text-primary mt-3">{s.titulo}</h5>
                <p className="text-muted">{s.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/*  Enlaces educativos 
        <div className="mt-5" data-aos="fade-up">
          <h2 className="section-subtitle text-center mb-4">Enlaces Educativos</h2>
          <div className="row g-4 justify-content-center">
            {educativos.map((e, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in">
                <div className="enlace-card text-center">
                  <div className="enlace-logo-placeholder">
                    
                  </div>
                  <h5 className="fw-bold text-primary mt-3">{e.titulo}</h5>
                  <p className="text-muted">{e.descripcion}</p>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-descargar mt-2 d-inline-flex align-items-center gap-2"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default EnlacesInstitucionales;
