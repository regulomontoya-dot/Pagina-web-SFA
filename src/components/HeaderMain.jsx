import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import "./HeaderMain.css";

const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    if (window.innerWidth >= 992) return; 
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    const menu = document.getElementById("mainNavbar");
    if (menu) menu.classList.remove("show");
    setOpenMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id) => {
    const isHome = window.location.pathname === "/";

    if (isHome) {
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = "/#" + id;
    }

    closeMobileMenu();
  };

  return (
    <header className={`header-main ${isScrolled ? "transparent" : ""}`}>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid px-4">

          {/* LOGO */}
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="main-logo me-2" />
          </Link>

          {/* BOTÓN MÓVIL */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENÚ */}
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav align-items-center">

              {/* INICIO */}
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMobileMenu}>Inicio</Link>
              </li>

              {/* ============ NOSOTROS ============ */}
              <li className={`nav-item dropdown ${openMenu === "nosotros" ? "show" : ""}`}>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => { e.preventDefault(); toggleMenu("nosotros"); }}
                >
                  Nosotros
                </a>
                <ul className={`dropdown-menu ${openMenu === "nosotros" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/nosotros/presentacion" onClick={closeMobileMenu}>Presentación</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/mision" onClick={closeMobileMenu}>Misión, Visión y Valores</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/organizacion" onClick={closeMobileMenu}>Organización Institucional</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/nosotros/autoridades" onClick={closeMobileMenu}>Autoridades</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/ planaDocente" onClick={closeMobileMenu}>Plana Docente</Link></li>
                  <li><Link className="dropdown-item" to="/nosotros/localInstitucional" onClick={closeMobileMenu}>Local</Link></li>                 
                </ul>
              </li>

              {/* ============ PROGRAMA DE ESTUDIOS ============ */}
              <li className={`nav-item dropdown ${openMenu === "programas" ? "show" : ""}`}>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  onClick={(e) => { e.preventDefault(); toggleMenu("programas"); }}
                >
                  Programas
                </a>
                <ul className={`dropdown-menu ${openMenu === "programas" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/programas/electricidad-industrial" onClick={closeMobileMenu}>Electricidad Industrial</Link></li>
                  <li><Link className="dropdown-item" to="/programas/contabilidad" onClick={closeMobileMenu}>Contabilidad</Link></li>
                  
                </ul>
              </li>

              {/* ============ ADMISION ============ */}
              <li className={`nav-item dropdown ${openMenu === "admision" ? "show" : ""}`}>
                <a href="#" className="nav-link dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleMenu("admision"); }}>Admisión y Matrícula</a>
                <ul className={`dropdown-menu ${openMenu === "admision" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/admision-matricula/admision" onClick={closeMobileMenu}>Admisión</Link></li>
                  <li><Link className="dropdown-item" to="/mision" onClick={closeMobileMenu}>Matrícula</Link></li>
                  <li><Link className="dropdown-item" to="/admision-matricula/becas" onClick={closeMobileMenu}>Becas y Crédito</Link></li>
                </ul>
              </li>

              {/* ============ TRANSPARENCIA ============ */}
              <li className={`nav-item dropdown ${openMenu === "transparencia" ? "show" : ""}`}>
                <a href="#" className="nav-link dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleMenu("transparencia"); }}>Transparencia</a>
                <ul className={`dropdown-menu ${openMenu === "transparencia" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/transparencia/doc_gestion" onClick={closeMobileMenu}>Documentos de Gestión</Link></li>
                  <li><Link className="dropdown-item" to="/transparencia/estadisticas" onClick={closeMobileMenu}>Estadísticas</Link></li>
                  <li><Link className="dropdown-item" to="/transparencia/inversiones" onClick={closeMobileMenu}>Inversiones</Link></li>
                   <li>
                    <a className="dropdown-item" href="https://docs.google.com/forms/d/1bMXimpN4DKrhuGxtTMyRbZ9tfjcGFiUqUa7d1M_W-lw/viewform?edit_requested=true "target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                      Libro de Reclamaciones
                    </a>
                  </li>
                  <li><Link className="dropdown-item" to="/transparencia/licenciamiento" onClick={closeMobileMenu}>Licenciamiento</Link></li>
                </ul>
              </li>

              {/* ============ TRÁMITES ============ */}
              <li className={`nav-item dropdown ${openMenu === "tramites" ? "show" : ""}`}>
                <a href="#" className="nav-link dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleMenu("tramites"); }}>Trámites</a>
                <ul className={`dropdown-menu ${openMenu === "tramites" ? "show" : ""}`}>                  
                  <li><Link className="dropdown-item" to="/tramites/TUPA" onClick={closeMobileMenu}>TUPA</Link></li>
                </ul>
              </li>

              {/* CONTACTO */}
              <li className="nav-item">
                <Link className="nav-link" to="/contactanos/contact" onClick={closeMobileMenu}>Contáctanos</Link>
              </li>

              {/* ============ SERVICIOS ============ */}
              <li className={`nav-item dropdown ${openMenu === "servicios" ? "show" : ""}`}>
                <a href="#" className="nav-link dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleMenu("servicios"); }}>Servicios</a>
                <ul className={`dropdown-menu ${openMenu === "servicios" ? "show" : ""}`}>
                  <li><a className="dropdown-item" href="#" onClick={closeMobileMenu}>Biblioteca</a></li>
                  <li><Link className="dropdown-item" to="/organigrama" onClick={closeMobileMenu}>Servicios Complementarios</Link></li>
                  <li><Link className="dropdown-item" to="#" onClick={closeMobileMenu}>Bolsa Laboral</Link></li>
                </ul>
              </li>

              {/* ============ OTRAS PÁGINAS ============ */}
              <li className={`nav-item dropdown ${openMenu === "otras" ? "show" : ""}`}>
                <a href="#" className="nav-link dropdown-toggle" onClick={(e) => { e.preventDefault(); toggleMenu("otras"); }}>Otras Páginas</a>
                <ul className={`dropdown-menu ${openMenu === "otras" ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/otrasPaginas/comunicados" onClick={closeMobileMenu}>Comunicados</Link></li>
                  <li><Link className="dropdown-item" to="/otrasPaginas/enlaces" onClick={closeMobileMenu}>Links Institucionales</Link></li>
                 
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMain;
