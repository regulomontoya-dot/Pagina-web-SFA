import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";

import banner1 from "../assets/admision_matricula/admision/banner1.jpg";
import banner2 from "../assets/admision_matricula/admision/banner2.jpg";
import banner3 from "../assets/admision_matricula/admision/banner3.jpg";


import "./Admision.css";

const banners = [
  banner1, banner2, banner3
];

const Admision = () => {
  const [index, setIndex] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + banners.length) % banners.length);
  const next = () => setIndex((i) => (i + 1) % banners.length);
  const abrirPDF = (pdf) => setSelectedPdf(pdf);
  const cerrarPDF = () => setSelectedPdf(null);

   return (
    <section className="admision-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Admisión 2025</h1>
          <p className="lead">
            Ven y estudia los Programas de Estudios que tenemos para ti.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="row align-items-start">
          {/*  Modalidades */}
          <div className="col-lg-6 col-md-12" data-aos="fade-right">
            <h2 className="section-subtitle mb-4">Modalidades de Admisión</h2>
            <p className="text-muted mb-4">
              El Proceso de Admisión del Instituto de Educación Superior
              Tecnológico Público <strong>“Juan Velasco Alvarado”</strong>{" "}
              comprende las siguientes modalidades:
            </p>

            <div className="modalidad">
              <h5 className="fw-bold ">a. Ordinaria:</h5>
              <p>Se realiza periódicamente a través de una evaluación considerando condiciones de calidad...</p>
            </div>
            <div className="modalidad">
              <h5 className="fw-bold ">b. Por Exoneración:</h5>
              <p>Contempla la Admisión a deportistas calificados, estudiantes talentosos o servicio militar voluntario.</p>
            </div>
            <div className="modalidad">
              <h5 className="fw-bold ">c. Por Ingreso Extraordinario:</h5>
              <p>Proceso autorizado por el MINEDU para becas y programas especiales, según normativa vigente.</p>
            </div>
          </div>

          {/*  Slider de banners */}
          <div className="col-lg-6 col-md-12 mt-5 mt-lg-0" data-aos="fade-left">
            <div className="banner-slider-container">
              <div className="banner-slider">
                {banners.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Banner ${i + 1}`}
                    className={i === index ? "active" : ""}
                    onClick={() => setFullscreenImg(src)}
                  />
                ))}
              </div>
              <button className="banner-arrow left" onClick={prev}>&#10094;</button>
              <button className="banner-arrow right" onClick={next}>&#10095;</button>
            </div>
          </div>
        </div>

      


      </div>


      {/*  Imagen fullscreen */}
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <img src={fullscreenImg} alt="Ampliado" className="fullscreen-img" />
        </div>
      )}
    </section>
  );
};

export default Admision;
