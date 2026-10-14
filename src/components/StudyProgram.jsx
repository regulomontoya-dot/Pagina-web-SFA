import React from "react";
import { Link } from "react-router-dom";
import "./StudyProgram.css";

//  Imágenes locales
import electricidadImg from "../assets/images/programas_estudio/electricidad-industrial.jpg";
import contabilidadImg from "../assets/images/programas_estudio/contabilidad.jpg";


const StudyProgram = () => {
  return (
    <section className="mini-programas container my-5">
      <h2 className="text-uppercase fw-bold text-institucional mb-4 text-center">
        Programas de Estudio
      </h2>

      <div className="mini-wrapper">
  
        <div className="mini-left">
          <div className="program-card mb-4">
            <div className="program-image">
              <img src={electricidadImg} alt="Electricidad Industrial" />
            </div>
            <div className="program-content">
              <h3>ELECTRICIDAD INDUSTRIAL</h3>
              <Link
                to="/programas/electricidad-industrial"
                className="program-btn"
              >
                Más información
              </Link>
            </div>
          </div>

          <div className="program-card">
            <div className="program-image">
              <img src={contabilidadImg} alt="Contabilidad" />
            </div>
            <div className="program-content">
              <h3>CONTABILIDAD</h3>
              <Link to="/programas/contabilidad" className="program-btn">
                Más información
              </Link>
            </div>
          </div>
        </div>

     
        <div className="mini-right">
          <h3 className="preguntas-title">Preguntas Frecuentes</h3>
          <div className="faq-list">
            <details>
              <summary>¿Cuáles son las carreras que ofrece el instituto?</summary>
              <p>
                Ofrecemos programas técnicos profesionales en diversas áreas del conocimiento, alineadas a las demandas del mercado laboral.
              </p>
            </details>

            <details>
              <summary>¿Cuál es la duración de las carreras?</summary>
              <p>
                Cada programa tiene una duración de tres años académicos, distribuidos en seis semestres.
              </p>
            </details>

            <details>
              <summary>¿Cuál es el perfil de egreso de cada carrera?</summary>
              <p>
                Los egresados desarrollan competencias técnicas, éticas y profesionales que los preparan para un entorno laboral moderno.
              </p>
            </details>

            <details>
              <summary>¿Cuál es el proceso de admisión?</summary>
              <p>
                El proceso incluye inscripción, evaluación y matrícula según el cronograma académico oficial.
              </p>
            </details>

            <details>
              <summary>¿En qué fecha inician las clases?</summary>
              <p>
                Las clases inician normalmente en marzo, según el calendario académico aprobado por la institución.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};



export default StudyProgram;
