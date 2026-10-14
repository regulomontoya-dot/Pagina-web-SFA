import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import directora from "../assets/images/entrada.jpg";
import logo from "../assets/images/logo.png";
import banner1 from "../assets/nosotros/presentacion/banner1.jpg";
import banner2 from "../assets/nosotros/presentacion/banner2.jpg";
import banner3 from "../assets/nosotros/presentacion/banner3.jpg";

import "./Presentacion.css";

const Presentacion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="informacion-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">COMPROMETIDOS CON EL PROGRESO EDUCATIVO Y SOCIAL DE LIMA SUR DESDE 1991</h1>
          <p className="lead">
            Instituto de Excelencia Tecnológica — San Francisco de asis.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        

        {/*  Sección Directora y mensaje institucional */}
        <div className="row align-items-center mt-5 presentacion-directora">
          <div className="col-lg-4 text-center" >
            <img
              src={directora}
              alt="Directora Elsa Mary Castilla Almeyda"
              className="foto-directora"
            />
          
          </div>

          <div className="col-lg-8" >
            <h3 className="section-subtitle mb-3 text-danger-custom">
              Reseña Histórica
            </h3>
            <div className="mensaje">
              <p>
                El Instituto de Educación Superior Tecnológico Público “San Francisco de Asís” 
                fue fundado en respuesta a la iniciativa de la comunidad de Tablada de Lurín y 
                reconocido oficialmente el 21 de octubre de 1991 mediante la Resolución Ministerial 
                N° 1693-91-ED. Sus actividades comenzaron el 11 de mayo de 1993 con las carreras 
                de Contabilidad, Electricidad y Enfermería Técnica.
              </p>
              <p>
                Inicialmente, el instituto contaba con un terreno de 30,575.50 m². Sin embargo, 
                entre 1985 y 1987, 11,000 m² fueron invadidos, quedando disponibles 19,335.50 m². 
                En el año 2000, COFOPRI realizó una nueva demarcación, quedando inscrito este 
                terreno en los Registros Públicos.
              </p>
             
            </div>
          </div>
        </div>

        {/*  Banner inferior con 3 fotos */}
       {/* <div className="banner-slider">
        <div className="slide-track">
          <img src={banner1} alt="Campus 1" />
          <img src={banner2} alt="Campus 2" />
          <img src={banner3} alt="Campus 3" /> /*}
          {/* Repite las mismas imágenes para el loop suave */}
         {/* <img src={banner1} alt="Campus 1 duplicado" />
          <img src={banner2} alt="Campus 2 duplicado" />
          <img src={banner3} alt="Campus 3 duplicado" />
        </div>
      </div>
      /*}

          {/*  Reseña Histórica */}
      <div className="timeline-section" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-danger-custom">Linea de Tiempo</h2>

     


    <div className="timeline">

      <div className="timeline-item left" data-aos="fade-up">
        <div className="timeline-content">
          <h4>1985 – 1987</h4>
          <p>
            Durante este periodo, de los 30 ,575.50 m² iniciales del terreno, 
            aproximadamente 11 ,000 m² fueron invadidos, quedando disponibles 19 ,335.50 m².
          </p>
        </div>
      </div>

      <div className="timeline-item right" data-aos="fade-up">
        <div className="timeline-content">
          <h4>1991 – Reconocimiento Oficial</h4>
          <p>
            El Instituto es reconocido oficialmente mediante la Resolución Ministerial 
            N.º 1693-91-ED, en respuesta a la iniciativa y esfuerzo de la comunidad de 
            Tablada de Lurín.
          </p>
        </div>
      </div>

      <div className="timeline-item left" data-aos="fade-up">
        <div className="timeline-content">
          <h4>1993 – Inicio de Actividades Académicas</h4>
          <p>
            Se inician las actividades institucionales con las carreras profesionales de: 
            Contabilidad, Electricidad, Enfermería Técnica.
          </p>
        </div>
      </div>

      <div className="timeline-item right" data-aos="fade-up">
        <div className="timeline-content">
          <h4>2000 – Saneamiento Físico Legal del Terreno</h4>
          <p>
            El COFOPRI realiza la nueva demarcación del terreno y formaliza el 
            saneamiento físico-legal de los 19 ,335.50 m², los cuales quedan 
            inscritos en los Registros Públicos.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

 {/* Logo final */}
          <div className="text-center mt-5" data-aos="zoom-in">
            <img src={logo} alt="Logo Gilda Ballivián" className="historia-logo" />
            <p className="fw-semibold mt-3 text-secondary">
              Instituto de Excelencia Tecnológica del Cono Sur — San Juan de Miraflores, Lima - Perú
            </p>
          </div>

      </div>
    </section>
  );
};

export default Presentacion;
