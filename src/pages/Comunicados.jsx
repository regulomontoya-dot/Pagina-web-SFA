import React, { useEffect, useState } from "react";
import { FaFilePdf, FaDownload, FaTimes } from "react-icons/fa";
import axios from "axios";
import "./Comunicados.css";

const Comunicados = () => {
  const [comunicados, setComunicados] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const API_URL = "https://iestpsfa.edu.pe/backend/api/get_comunicados.php";
//  const API_URL = "http://localhost:8080/backend/api/get_comunicados.php";
 
 useEffect(() => {
  axios
    .get(API_URL)
    .then((res) => {
      const data = res.data;
      
      if (Array.isArray(data)) {
        setComunicados(data);
      } else if (typeof data === "object" && data !== null) {
    
        setComunicados([]);
      } else if (typeof data === "string") {
        try {
          const parsed = JSON.parse(data);
          setComunicados(Array.isArray(parsed) ? parsed : []);
        } catch {
          setComunicados([]);
        }
      } else {
        setComunicados([]);
      }
    })
    .catch((err) => {
      console.error("Error al cargar comunicados:", err);
      setComunicados([]);
    });
}, []);

  return (
    
    <section className="comunicados-section py-5">
        
  <h2 className="section-subtitle mb-3 text-center">COMUNICADOS OFICIALES</h2>

  <div className="row g-4 justify-content-center mt-4 px-4">
    {comunicados.map((item, i) => (
      <div className="col-lg-3 col-md-4 col-sm-6 col-10 comunicado-col" key={i}>
        <div className="com-card shadow-sm">

            <h5 className="com-title">{item.titulo}</h5>
          <div className="com-icon">
            <FaFilePdf size={65} />
          </div>

          

          <p className="com-desc">{item.descripcion}</p>

          <div className="com-buttons">
            <button className="btn-view" onClick={() => setSelectedPdf(item.pdf)}>
              <FaFilePdf /> Ver PDF
            </button>
            <a className="btn-download" href={item.pdf} download>
              <FaDownload /> Descargar
            </a>
          </div>

        </div>
      </div>
    ))}
  </div>

{selectedPdf && (
  <div className="pdf-modal" onClick={() => setSelectedPdf(null)}>
    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setSelectedPdf(null)}>
        <FaTimes size={20} />
      </button>
      <embed src={selectedPdf} type="application/pdf" className="pdf-view" />
    </div>
  </div>
)}

    </section>
  );
};

export default Comunicados;
