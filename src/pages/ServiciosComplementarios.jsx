import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Matricula.css"; // reutiliza tu hoja institucional

//  Imágenes representativas (ajusta rutas según tus assets)
import topicoImg from "../assets/servicios/s_complementarios/topico.jpg";
import bienestarImg from "../assets/servicios/s_complementarios/bienestar.jpg";
import psicopedagogicoImg from "../assets/servicios/s_complementarios/psicopedagogico.jpg";
import empleabilidadImg from "../assets/servicios/s_complementarios/empleabilidad.jpg";

const ServiciosComplementarios = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const servicios = [
    {
      titulo: "TÓPICO",
      imagen: topicoImg,
      horario1: "Lunes a Viernes: 7:00 - 13:30 y 16:30 - 22:00 horas",
      personal1: "Carmen del Pilar Miranda Ventosilla",
      horario2: "Lunes a Viernes: 13:30 - 16:30 horas",
      personal2: "Lic. Fabiola Rodríguez Vega",
      ubicacion: "Margen derecha del ingreso a la institución.",
    },
    {
      titulo: "BIENESTAR",
      imagen: bienestarImg,
      horario1: "Lunes a Viernes: 8:00 - 13:00 y 16:00 - 22:00 horas",
      personal1: "Patricia Janet Benites Yglesias",
      ubicacion: "Oficina de Dirección.",
    },
    {
      titulo: "PSICOPEDAGÓGICO",
      imagen: psicopedagogicoImg,
      horario1: "Lunes, Miércoles y Viernes: 16:00 - 20:00 horas",
      horario2: "Martes y Jueves: 10:00 - 14:00 horas",
      personal1: "Gloria Lucía Ingunza Aguilar",
      ubicacion: "Margen derecha del ingreso a la institución.",
    },
    {
      titulo: "EMPLEABILIDAD",
      imagen: empleabilidadImg,
      horario1: "Lunes: 8:00 - 11:00 horas",
      horario2: "Martes: 20:00 - 22:00 horas",
      personal1: "Lic. Marilú Carpio Pérez",
      ubicacion: "En la Sala de Profesores.",
    },
  ];

  return (
    <section className="matricula-page">
      {/*  Banner superior */}
      <div className="info-hero" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container text-center text-white">
          <h1 className="fw-bold">Servicios Complementarios Institucional</h1>
          <p className="lead">
            Atención integral para el bienestar, salud y desarrollo profesional de nuestros estudiantes.
          </p>
        </div>
      </div>

      {/*  Contenido principal */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="section-subtitle mb-3">Nuestros Servicios</h2>
          <p className="text-muted">
            Contamos con diversos servicios complementarios que brindan apoyo físico, emocional y académico a nuestra comunidad estudiantil.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-lg-6 col-md-12" >
              <div className="servicio-card d-flex flex-column flex-md-row align-items-center shadow-sm rounded-4 p-3 bg-white">
                <div className="servicio-img-container mb-3 mb-md-0 me-md-4">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="servicio-img rounded-3"
                  />
                </div>
                <div className="servicio-info text-start">
                  <h4 className="text-primary fw-bold mb-2">{servicio.titulo}</h4>

                  {servicio.horario1 && (
                    <p className="mb-1">
                      <strong>Horario:</strong> {servicio.horario1}
                    </p>
                  )}
                  {servicio.horario2 && (
                    <p className="mb-1">{servicio.horario2}</p>
                  )}

                  {servicio.personal1 && (
                    <p className="mb-1">
                      <strong>Personal a Cargo:</strong> {servicio.personal1}
                    </p>
                  )}
                  {servicio.personal2 && (
                    <p className="mb-1">{servicio.personal2}</p>
                  )}

                  <p className="mb-0">
                    <strong>Ubicación:</strong> {servicio.ubicacion}
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

export default ServiciosComplementarios;
