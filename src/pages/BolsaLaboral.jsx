import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Matricula.css"; // Reutiliza tus estilos globales
import { FaEye } from "react-icons/fa";


//  Imágenes (ajusta las rutas según tus archivos)
import alumnosImg from "../assets/servicios/b_laboral/alumnos.jpg";
import empresasImg from "../assets/servicios/b_laboral/empresas.jpg";
import administrativoImg from "../assets/servicios/b_laboral/administrativo.jpg";
import docenteImg from "../assets/servicios/b_laboral/docentes.jpg";

const BolsaLaboral = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const items = [
    {
      titulo: "Alumnos / Egresados",
      img: alumnosImg,
      enlace: "https://iestpjva.jedu.pe/alumno/entrar",
    },
    {
      titulo: "Empresas",
      img: empresasImg,
      enlace: "https://iestpjva.jedu.pe/empresa/entrar",
    },
    {
      titulo: "Administrativo",
      img: administrativoImg,
      enlace: "https://iestpjva.jedu.pe/admin/entrar",
    },
    {
      titulo: "Docente",
      img: docenteImg,
      enlace: "https://iestpjva.jedu.pe/docente/entrar",
    },
  ];

  return (
    <section className="matricula-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Bolsa Laboral</h1>
          <p className="lead">
            Oportunidades para alumnos, egresados, docentes y empresas asociadas.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5 text-center">
        <h2 className="section-subtitle mb-4" data-aos="fade-up">
          Explora nuestras opciones laborales
        </h2>

        <div className="row g-4 justify-content-center">
          {items.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
              <div className="bolsa-card">
                <div className="bolsa-img-container">
                  <img src={item.img} alt={item.titulo} className="bolsa-img" />
                </div>
                <h5 className="mt-3 fw-bold ">{item.titulo}</h5>
               <a
                href={item.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-descargar mt-2 d-inline-flex align-items-center gap-2"
                >
                <FaEye size={18} />
                 Ver
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BolsaLaboral;
