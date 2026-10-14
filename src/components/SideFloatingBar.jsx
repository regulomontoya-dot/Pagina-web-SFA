import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SideFloatingBar.css";

const SideFloatingBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(null);
  

  // URL de backend
  const API_URL = "https://iestpsfa.edu.pe/backend/api/";
  //const API_URL = "http://localhost:8080/backend/api/";



  useEffect(() => {
    axios
      .get(`${API_URL}get_banner.php`, { headers: { "Cache-Control": "no-cache" } })
      .then((res) => setBannerUrl(res.data.bannerUrl))
      .catch((err) => console.error("Error obteniendo banner:", err));
  }, []);

  return (
    <div
      className={`floating-bar ${isOpen ? "open" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="floating-handle">
        <span className="blink-text">IMPORTANTE!</span>
      </div>
      <div className="floating-content">
        {bannerUrl ? (
          <img src={bannerUrl} alt="Banner" className="floating-image" />
        ) : (
          <p className="floating-placeholder">Sin imagen</p>
        )}
      </div>
    </div>
  );
};

export default SideFloatingBar;
