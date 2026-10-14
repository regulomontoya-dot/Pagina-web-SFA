import React from "react";
import "./PlatformsSection.css";

//  imágenes locales
import registra from "../assets/logos/Registra.png";
import conecta from "../assets/logos/Conecta.png";
import titula from "../assets/logos/Titula.png";
import avanza from "../assets/logos/Avanza.png";

const platforms = [
  { name: "Registra", img: registra, link: "https://registra.iestpgildaballivian.edu.pe/" },
  { name: "Conecta", img: conecta, link: "https://conecta.iestpgildaballivian.edu.pe/" },
  { name: "Titula", img: titula, link: "https://titula.iestpgildaballivian.edu.pe/" },
  { name: "Avanza", img: avanza, link: "https://avanza.iestpgildaballivian.edu.pe/" },
];

const PlatformsSection = () => {
  return (
    <section className="platforms-section">
      <div className="container">
        <h2 className="section-title"> Plataformas Institucionales</h2>
        <div className="platforms-grid">
          {platforms.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
            >
              <img src={p.img} alt={p.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;
