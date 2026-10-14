import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaMapMarkedAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./LocalInstitucional.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaCity, FaGlobeAmericas, FaFlag } from "react-icons/fa";


// Imágenes del mini banner
//import sede1 from "../assets/nosotros/local/banner1.jpg";
//import sede2 from "../assets/nosotros/local/banner2.jpg";
//import sede3 from "../assets/nosotros/local/banner3.jpg";

const LocalInstitucional = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const googleMapsUrl =
    "https://maps.app.goo.gl/r9bpUA2riufVdLHM8";

  /*const images = [sede1, sede2, sede3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanza automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };*/

  return (
    <section className="local-page">
      {/*  Banner principal (sin cambios) */}
      <div className="local-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Información de Sede Principal</h1>
          <p className="lead">
            Conoce la ubicación y datos principales de nuestra institución.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="row g-5 align-items-stretch">
          {/* Lado izquierdo */}
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            {/* Mini banner con flechas */}

            {/* Mini banner con flechas 

            <div className="mini-banner mb-4 position-relative">
            {images.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`Imagen ${index + 1}`}
                className={`mini-banner-img ${index === currentIndex ? "active" : ""}`}
                />
            ))}*/}

            {/* Flechas 
            <button className="arrow left" onClick={prevSlide}>
                <FaChevronLeft />
            </button>
            <button className="arrow right" onClick={nextSlide}>
                <FaChevronRight />
            </button>

            </div>*/}

              
            {/* Google Maps */}
            <div className="mini-map position-relative flex-grow-1">
              <iframe
                title="Ubicación del IESTP Juan Velasco Alvarado"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9532.860301604453!2d-76.938461252838!3d-12.187578027153943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b938d24f2249%3A0x53c6e6b980ea461c!2sInstituto%20San%20Francisco%20de%20Asis!5e0!3m2!1ses!2spe!4v1763607995798!5m2!1ses!2spe"
                width="100%" 
             height="100%" 
             
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">

             </iframe>
              

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mapa-flotante"
              >
                <FaExternalLinkAlt className="me-2" />
                Visitar
              </a>
            </div>
          </div>

          {/*  Lado derecho */}
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-left"
          >
            <div className="info-card-suave">
              <h3 className="text-primary mb-4 section-subtitle">
                Información de la Sede Principal
              </h3>

              <p className="descripcion">
                
                El Instituto de Educación Superior Tecnológico Público{" "}
                <strong>“San Francisco de Asís”</strong> , tiene su sede principal ubicada:
              </p>
              <br />

             <ul className="info-list mb-4">

  <li>
    <FaMapMarkerAlt className="icon-info" />
    <strong>Dirección:</strong> Av. Pachacútec Nº 4859 y Jr. Francisco 
    Bolognesi Nº 592 (altura paradero 12) – Zona Nueva – Tablada de Lurín.
  </li>

  <li>
    <FaPhoneAlt className="icon-info" />
    <strong>Teléfono:</strong> (01) 713-0820 / 680-9708 / 6809709
  </li>

  <li>
    <FaCity className="icon-info" />
    <strong>Distrito:</strong> Villa María del Triunfo
  </li>

  <li>
    <FaFlag className="icon-info" />
    <strong>Provincia:</strong> Lima
  </li>

  <li>
    <FaGlobeAmericas className="icon-info" />
    <strong>País:</strong> Perú
  </li>

</ul>


              <p className="descripcion mb-4">
                Nuestra institución ofrece una variedad de programas 
                técnicos diseñados para preparar a los estudiantes para el mercado 
                laboral y contribuir al desarrollo socioeconómico de la región
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalInstitucional;
