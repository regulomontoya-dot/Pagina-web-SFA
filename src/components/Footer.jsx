import React from "react";
import {
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          
      
          <div className="footer-col">
            <h5>| Teléfonos</h5>
            <ul>
              <li>
                <FaPhoneAlt /> Central Telefónica: <strong>01 500 6177</strong>
              </li>
             
            </ul>
          </div>

     
          <div className="footer-col">
            <h5>| Redes Sociales</h5>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaBook /> Libro de Reclamaciones
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>| Programas de Estudio</h5>
            <ul>
              <li><Link to="/programas/electricidad-industrial">Electricidad Industrial</Link></li>
              <li><Link to="/programas/contabilidad">Contabilidad</Link></li>
            </ul>
          </div>

         
          <div className="footer-col">
            <h5>| Correos</h5>
            <ul>
              <li>
                <FaEnvelope /> sec.academicaiestpsfa@gmail.com
              </li>
             
            </ul>
          </div>

   
          <div className="footer-col">
            <h5>| Dirección</h5>
            <ul>
              <li>Instituto de Educación Superior Tecnológico Público</li>
              <li>
                <FaMapMarkerAlt /> Av. Prolongacion Pachacútec Cdra. 50 <br />
                 Paradero 12 Zona Nueva – Villa María del Triunfo<br />
                Lima – Perú
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} IESTP “San Francisco de Asis” — Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
