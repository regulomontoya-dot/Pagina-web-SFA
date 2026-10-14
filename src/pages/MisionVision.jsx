  import React, { useEffect } from "react";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import "./MisionVision.css";
  import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
  import visionImg from "../assets/nosotros/mision_vision/mision.jpg";
  import misionImg from "../assets/nosotros/mision_vision/vision.jpg";
  import valoresImg from "../assets/nosotros/mision_vision/valores.jpg"; // 🔹 Puedes cambiar la imagen

  const MisionVision = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const [openIndex, setOpenIndex] = React.useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    return (
      <section className="mision-vision-page">
        {/* Banner superior */}
        <div className="mv-hero" data-aos="fade-down">
          <div className="overlay"></div>
          <div className="container text-center text-white">
            <h1 className="fw-bold">Formamos Lideres Tecnicos y Humanistas para impulsar el progreso social</h1>
            <p className="lead">
              Comprometidos con la excelencia tecnológica, los valores y el desarrollo humano.
            </p>
          </div>
        </div>

        {/*  Contenido principal */}
        <div className="container py-5">
          {/*  VISIÓN */}
          <div className="row align-items-center mb-5" data-aos="fade-right">
            <div className="col-md-6 text-center">
              <img src={visionImg} alt="Visión" className="mv-image" />
            </div>
            <div className="col-md-6">
              <div className="mv-card">
                <FaEye className="mv-icon" />
                <h2 className="section-title">Nuestra Visión</h2>
                <p>
                  Aspiramos ser una Institución Educativa de nivel superior, líder en Lima Sur, 
                  con capacidad para ser el eje del progreso social y fuente de profesionales 
                  altamente calificados técnica y humanísticamente en el mediano plazo que responden 
                  a las necesidades del ámbito local, regional y nacional.
                </p>
              </div>
            </div>
          </div>

          {/*  MISIÓN */}
          <div className="row align-items-center flex-md-row-reverse mb-5" data-aos="fade-left">
            <div className="col-md-6 text-center">
              <img src={misionImg} alt="Misión" className="mv-image" />
            </div>
            <div className="col-md-6">
              <div className="mv-card">
                <FaBullseye className="mv-icon" />
                <h2 className="section-title">Nuestra Misión</h2>
                <p>
                  Somos una Institución dedicada a la formación de profesionales técnicos, 
                  con una educación humanística, científica, tecnológica y artística; valoramos 
                  la investigación y la búsqueda permanente del conocimiento; el desarrollo de 
                  valores; la consolidación de la identidad nacional y el compromiso para 
                  lograr una sociedad justa, soldaría y sostenible.
                </p>
              </div>
            </div>
          </div>

        {/*  VALORES */}
  <div className="row align-items-center mb-5" data-aos="fade-right">
    <div className="col-md-6 text-center">
      <img src={valoresImg} alt="Valores" className="mv-image" />
    </div>

    <div className="col-md-6">
      <div className="mv-card">
        <FaHandsHelping className="mv-icon" />
        <h2 className="section-title">Nuestros Valores</h2>
        <p>
          El Instituto de Educación Superior Tecnológico Público 
          “San Francisco de Asís” se preocupa en difundir y practicar
          los siguientes valores y principios institucionales:
        </p>

        <div className="valores-acordeon mt-4">
          <details >
            <summary>Personales</summary>
            <ul>
              <li>Orden</li>
              <li>Limpieza</li>
              <li>Puntualidad</li>
              <li>Responsabilidad</li>
              <li>Deseo de superación</li>
              <li>Honradez</li>
              <li>Respeto al derecho de los demás</li>
              <li>Respeto a la Ley y los reglamentos</li>
              <li>Amor al trabajo</li>
              <li>Afán por el ahorro y la inversión</li>
            </ul>
          </details>

          <details>
            <summary>Sociales</summary>
            <ul>
              <li>Solidaridad</li>
              <li>Responsabilidad Social</li>
              <li>Justicia Social</li>
              <li>Libertad Social</li>
              <li>Empatía</li>
            </ul>
          </details>

          <details>
            <summary>Principios</summary>
            <p>
              Principio de igualdad, desarrollo continuo, solidaridad, 
              adaptabilidad, sostenibilidad y libertad; como base para la 
              mejora constante y compromiso con la comunidad educativa.
            </p>
          </details>

          <details>
            <summary>Objetivos Generales</summary>
            <ul>
              <li>Formar técnicos que contribuyan a una sociedad libre, justa y solidaria.</li>
              <li>Promover una educación integral con valores éticos y cívicos.</li>
              <li>Revalorar las carreras técnicas mediante capacitación docente.</li>
              <li>Realizar investigación tecnológica aplicada al desarrollo nacional.</li>
              <li>Desarrollar actividades de extensión educativa y promoción social.</li>
            </ul>
          </details>

          <details>
            <summary>Objetivos Específicos</summary>
            <ul>
              <li>Diversificar el plan de estudios según las demandas socioculturales.</li>
              <li>Fomentar proyectos innovadores de investigación científica.</li>
              <li>Impulsar la valoración de la persona y las organizaciones juveniles.</li>
              <li>Capacitar docentes y alumnos con programas complementarios.</li>
              <li>Mejorar e implementar la infraestructura institucional.</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>

        </div>
      </section>
    );
  };

  export default MisionVision;

