import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-content">
        <div className="left-content">
          <span className="inst-name">IESTP SAN FRANCISCO DE ASIS</span>
          <FaPhoneAlt  />
          <span className="text">01 500 6177</span>
          <FaEnvelope  />
          <span className="text">sec.academicaiestpsfa@gmail.come</span>
          <FaMapMarkerAlt  />
          <span className="text">Av. Prolongacion Pachacútec Cdra. 50 – V.M.T</span>
        </div>

        <div className="right-content">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
