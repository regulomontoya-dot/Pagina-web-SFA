import React, { useState } from "react";
import "./GalleryImages.css";

import img1 from "../assets/images/galeria_imagenes/image1.jpg";
import img2 from "../assets/images/galeria_imagenes/image2.jpg";
import img3 from "../assets/images/galeria_imagenes/image3.jpg";
import img4 from "../assets/images/galeria_imagenes/image4.jpg";
import img5 from "../assets/images/galeria_imagenes/image5.jpg";
import img6 from "../assets/images/galeria_imagenes/image6.jpg";
import img7 from "../assets/images/galeria_imagenes/image7.jpg";
import img8 from "../assets/images/galeria_imagenes/image8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GalleryImages = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <h2 className="gallery-main-title">Galería de Fotos</h2>

      <div className="gallery-autoscroll-wrapper">
        <div className="gallery-autoscroll-track">
          {images.concat(images).map((src, index) => (
            <div className="gallery-card" key={index} onClick={() => setModalImg(src)}>
              <img src={src} alt={`foto-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {modalImg && (
        <div className="gallery-modal" onClick={() => setModalImg(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <img src={modalImg} alt="Imagen ampliada" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImages;
