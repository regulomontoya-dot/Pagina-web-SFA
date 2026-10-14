import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PublicidadModal.css";

const PublicidadModal = () => {
  const [publicidadUrl, setPublicidadUrl] = useState(null);
  const [visible, setVisible] = useState(true);

  //const API_URL = "http://localhost:8080/backend/api/";
  const API_URL = "https://iestpsfa.edu.pe/backend/api/";

  useEffect(() => {
    axios
      .get(`${API_URL}get_publicidad.php`, {
        headers: { "Cache-Control": "no-cache" },
      })
      .then((res) => {
        setPublicidadUrl(res.data.publicidadUrl);
      })
      .catch((err) => {
        console.error("Error obteniendo publicidad:", err);
        setVisible(false); // Si falla, ocultar modal
      });
  }, []);

  if (
    !visible ||
    !publicidadUrl ||
    publicidadUrl === "" ||
    publicidadUrl === "null" ||
    publicidadUrl === "undefined"
  ) {
    return null;
  }

  return (
    <div className="publi-modal-overlay" onClick={() => setVisible(false)}>
      <div className="publi-modal-box" onClick={(e) => e.stopPropagation()}>
        <img
          src={publicidadUrl}
          alt="Publicidad"
          className="publi-modal-img"
          onError={() => setVisible(false)} // Oculta si la imagen falla
        />

        <button className="publi-close-btn" onClick={() => setVisible(false)}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default PublicidadModal;
