import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <div className="container py-5">
        <h2 className="text-center fw-bold text-primary mb-4">
          Sobre Nosotros
        </h2>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="/images/instituto.jpg"
              alt="Instituto Gilda Ballivián"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <p className="lead text-secondary mt-3">
              El <strong>Instituto de Educación Superior Tecnológico Público Gilda Ballivián Rosado</strong>
              es una institución de excelencia educativa comprometida con la
              formación de profesionales técnicos competentes, capaces de
              contribuir al desarrollo tecnológico, industrial y humano del país.
            </p>
            <p>
              Contamos con programas de estudio modernos, infraestructura
              equipada, docentes especializados y una comunidad académica que
              fomenta la innovación, la responsabilidad y el liderazgo.
            </p>
            <button className="btn btn-primary mt-3 shadow-sm">
              Conoce nuestra historia
            </button>
          </div>
        </div>
      </div>

      <div className="about-mision py-5 mt-5 text-center text-light">
        <div className="container">
          <h3 className="fw-bold mb-3">Misión y Visión</h3>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Nuestra misión es formar profesionales técnicos líderes, con sólidos valores
            éticos, capaces de responder a los desafíos del entorno laboral con
            innovación y compromiso.  
            <br />
            Nuestra visión es ser reconocidos como un instituto de excelencia
            tecnológica a nivel nacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
