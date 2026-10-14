import React from "react";
import { Link } from "react-router-dom";
import "./ProgramCard.css";

const ProgramCard = ({ title, description, img }) => {
    const slug = title
    .normalize("NFD")                // separa los acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes y diéresis
    .toLowerCase()
    .replace(/\s+/g, "-");
  return (
    <div className="col-md-4 col-sm-5 mb-4">
      <div className="program-card">
        <div className="program-image">
          <img src={img} alt={title} />
        </div>
        <div className="program-content">
          <h3>{title}</h3>
          <p>{description}</p>
          
          <Link to={`/programas/${slug}`} className="program-btn">
            Mas informacion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
