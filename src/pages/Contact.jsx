import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaBook,
  FaUser,
  FaRegCommentDots,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   <section className="contact-page">
  {/*  Banner superior */}
  <div className="contact-hero" data-aos="fade-down">
    <div className="overlay"></div>
    <div className="container text-center text-white">
      <h1 className="fw-bold">Contáctanos</h1>
      <p className="lead">
        Estamos aquí para ayudarte. Escríbenos o visítanos en San Juan de Miraflores.
      </p>
    </div>
  </div>

  {/*  Cuerpo principal (estilo LocalInstitucional) */}
  <div className="container py-5">
    <div className="row g-5">

      {/*  Información de contacto */}
      <div className="col-md-5" data-aos="fade-right">

        <div className="info-card-sede">

          <h3 className="title-sede">Teléfonos</h3>
          <ul className="info-list-sede">
            <li>
              <FaPhoneAlt className="icon-sede" />
              <span><strong>(01) 713-0820</strong></span>
            </li>
            <li>
              <FaPhoneAlt className="icon-sede" />
              <span><strong>999 451 093</strong></span>
            </li>
            <li>
              <FaPhoneAlt className="icon-sede" />
              <span><strong>970 776 040</strong></span>
            </li>
          </ul>

          <h3 className="title-sede">Correos</h3>
          <ul className="info-list-sede">
            <li>
              <FaEnvelope className="icon-sede" />
              <span><strong>sec.academicaiestpsfa@gmail.com</strong></span>
            </li>
            <li>
              <FaEnvelope className="icon-sede" />
              <span><strong>istpsfa@hotmail.com</strong></span>
            </li>
          </ul>

          <h3 className="title-sede">Redes Sociales</h3>
          <ul className="info-list-sede">
            <li>
              <FaFacebook className="icon-sede" />
              <a
                href="https://www.facebook.com/people/IESTP-San-Francisco-De-Asis/100057302656365/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook Oficial
              </a>
            </li>
          </ul>

        </div>
      </div>

      {/*  Mapa */}
      <div className="col-md-7" data-aos="fade-left">

        <div className="">

          <h3 className="title-sede">¿Cómo llegar?</h3>

          <ul className="info-list-sede">
            <li>
              <FaMapMarkerAlt className="icon-sede" />
              <span>
                Av. Pachacútec Nº 4859 y Jr. Francisco Bolognesi Nº 592  
                (altura paradero 12) – Zona Nueva – Tablada de Lurín.
              </span>
            </li>
          </ul>

          <div className="map-container-modern mt-3">
            <iframe
              title="Mapa IESTP San Francisco de Asis"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9532.860301604453!2d-76.938461252838!3d-12.187578027153943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b938d24f2249%3A0x53c6e6b980ea461c!2sInstituto%20San%20Francisco%20de%20Asis!5e0!3m2!1ses!2spe!4v1763607995798!5m2!1ses!2spe"
              width="100%"
              height="300"
              style={{ border: "0", borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Contact;
