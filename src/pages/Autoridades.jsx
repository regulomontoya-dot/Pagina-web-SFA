import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Autoridades.css";
import { FaUserTie, FaUser, FaEnvelope, FaSitemap } from "react-icons/fa";


import wildor from "../assets/images/logo.png";
import julio from "../assets/images/logo.png";
import jesus from "../assets/images/logo.png";
import hipolito from "../assets/images/logo.png";
import maria from "../assets/images/logo.png";
import juan from "../assets/images/logo.png";
import carlos from "../assets/images/logo.png";
import florentino from "../assets/images/logo.png";
import magdalena from "../assets/images/logo.png";

const Autoridades = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  
  const autoridades = [
    {
      frase:
        "Comprometido con liderar una educación técnica de calidad que transforme vidas y fomente el desarrollo local y nacional.",
      nombre: "Wildor Porfirio Javier Villafuerte",
      cargo: "Director General",
      correo: "wildor.javier@iestpsfa.edu.pe",
      foto: wildor,
    },
    {
      frase:
        "Impulsando la excelencia académica con innovación y valores para formar profesionales competitivos.",
      nombre: "Julio César Barraza Fernández",
      cargo: "Jefe de Unidad Académica",
      correo: "julio.barraza@iestpsfa.edu.pe",
      foto: julio,
    },
    {
      frase:
        "Gestionando con eficiencia y responsabilidad los recursos para el crecimiento institucional.",
      nombre: "Jesús Diógenes Coronel Floríndez",
      cargo: "Jefe de Unidad Administrativa",
      correo: "jesus.coronel@iestpsfa.edu.pe",
      foto: jesus,
    },
    {
      frase:
        "Velando por un proceso académico organizado y transparente al servicio de estudiantes y docentes.",
      nombre: "Hipólito Percy Huamán Saldivar",
      cargo: "Secretario Académico",
      correo: "hipolito.huaman@iestpsfa.edu.pe",
      foto: hipolito,
    },
    {
      frase:
        "Fomentando el bienestar y las oportunidades laborales para el desarrollo integral de nuestra comunidad educativa.",
      nombre: "María Olga Mego Díaz",
      cargo: "Jefa de Unidad de Bienestar y Empleabilidad",
      correo: "maria.mego@iestpsfa.edu.pe",
      foto: maria,
    },
    {
      frase:
        "Promoviendo la investigación como pilar fundamental para el progreso y la innovación educativa.",
      nombre: "Juan Efraín Valencia Charaja",
      cargo: "Jefe de Unidad de Investigación",
      correo: "juan.valencia@iestpsfa.edu.pe",
      foto: juan,
    },
    {
      frase:
        "Fortaleciendo los estándares de calidad para asegurar una formación técnica de excelencia.",
      nombre: "Carlos William Vega Matos",
      cargo: "Coordinador de Área de Calidad",
      correo: "carlos.vega@iestpsfa.edu.pe",
      foto: carlos,
    },
  ];


  const coordinadores = [
    {
      frase:
        "Formando futuros contadores con ética, conocimientos y habilidades para contribuir al desarrollo económico.",
      nombre: "Florentino Jorge Pérez Altamirano",
      cargo: "Coordinador de Área Académica de Contabilidad",
      correo: "florentino.perez@iestpsfa.edu.pe",
      foto: florentino,
    },
    {
      frase:
        "Capacitando profesionales en electricidad industrial con enfoque práctico y compromiso con la innovación tecnológica.",
      nombre: "Magdalena Choque Cayllahua",
      cargo: "Coordinadora de Área Académica de Electricidad Industrial",
      correo: "magdalena.choque@iestpsfa.edu.pe",
      foto: magdalena,
    },
  ];

  return (
    <section className="autoridades-page">
      {/* Banner superior */}
      <div className="autoridades-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">
            Autoridades del IESTP “San Francisco de Asís”
          </h1>
          <p className="lead">
            Comprometidos con liderar una educación técnica de calidad que
            transforme vidas y fomente el desarrollo local y nacional.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5 text-center">
        <h2 className="section-title mb-4 text-primary">Equipo Directivo</h2>

        <div className="row g-4 justify-content-center">
          {autoridades.map((a, i) => (
            <div
              className="col-md-6 col-lg-4 d-flex justify-content-center"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="autoridad-card">
                <img src={a.foto} alt={a.nombre} className="autoridad-foto" />
                <div className="autoridad-info text-start">
                  <p className="autoridad-frase">“{a.frase}”</p>
                  <p className="autoridad-linea">
                    <FaUserTie className="autoridad-icon" /> {a.nombre}
                  </p>
                  <p className="autoridad-linea">
                    <FaSitemap className="autoridad-icon" /> {a.cargo}
                  </p>
                  <p className="autoridad-linea">
                    <FaEnvelope className="autoridad-icon" />
                    <a
                      href={`mailto:${a.correo}`}
                      className="autoridad-correo"
                    >
                      {a.correo}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-subtitle mt-5 text-primary">
          Coordinadores de Áreas
        </h2>

        <div className="row g-4 justify-content-center mt-3">
          {coordinadores.map((c, i) => (
            <div
              className="col-md-6 col-lg-4 d-flex justify-content-center"
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="autoridad-card">
                <img src={c.foto} alt={c.nombre} className="autoridad-foto" />
                <div className="autoridad-info text-start">
                  <p className="autoridad-frase">“{c.frase}”</p>
                  <p className="autoridad-linea">
                    <FaUser className="autoridad-icon" /> {c.nombre}
                  </p>
                  <p className="autoridad-linea">
                    <FaSitemap className="autoridad-icon" /> {c.cargo}
                  </p>
                  <p className="autoridad-linea">
                    <FaEnvelope className="autoridad-icon" />
                    <a
                      href={`mailto:${c.correo}`}
                      className="autoridad-correo"
                    >
                      {c.correo}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autoridades;
