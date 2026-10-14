import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Stats.css"; 

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="stats-section">
      <div className="stats-content">
        <h2>Excelencia en Números:</h2>

        <div className="stats-grid">
          <div className="stat">
            <h3>{inView && <CountUp end={485} duration={2} />}+</h3>
            <p>Egresados</p>
          </div>

          <div className="stat">
            <h3>{inView && <CountUp end={674} duration={2.5} />}+</h3>
            <p>Estudiantes Titulados</p>
          </div>

          <div className="stat">
            <h3>{inView && <CountUp end={55} duration={2} />}+</h3>
            <p>Cantidad de Docentes</p>
          </div>

          <div className="stat">
            <h3>{inView && <CountUp end={1224} duration={2} />}+</h3>
            <p>Cantidad de Titulados</p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Stats;
