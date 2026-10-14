import React from "react";
import "./HeaderBanner.css";
import logo from "../assets/images/logo.png";

const HeaderBanner = () => {
  return (
    <section className="header-banner">
      <div className="banner-overlay">
        <div className="container banner-content d-flex flex-wrap align-items-center justify-content-center">
        
          <div className="banner-logo text-center me-lg-4 mb-3 mb-lg-0">
            <img src={logo} alt="Logo IESTP Gilda Ballivián" />
          </div>

      
          <div className="banner-text text-center text-lg-start">
            <h1 className="banner-title">
              Instituto de Educación Superior Tecnológico Público
              <br />
              <span className="highlight">“Gilda Liliana Ballivián Rosado”</span>
            </h1>
            <p className="banner-subtitle mt-3">
              Comprometidos con la formación técnica, la innovación y la excelencia.
            </p>
            <a href="#" className="btn btn-banner mt-3">Conócenos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;
