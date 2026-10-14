import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./VideosSection.css";

// Lista de videos (usa IDs de YouTube)
const videos = [
  {
    id: "Yp-Z-OIC5nA",
    title: "Desfile del IDEX Gilda Ballivián",
    description:
      "Participación en el Desfile Militar por Fiestas Patrias, demostrando orgullo y compromiso institucional.",
  },
  {
    id: "HJR_qlnODkM",
    title: "Video Institucional",
    description:
      "Conoce nuestra infraestructura, laboratorios y compromiso con la formación tecnológica de calidad.",
  },
  {
    id: "DuhQzc8cLQw",
    title: "Día del Maestro",
    description:
      "Celebramos el esfuerzo y dedicación de nuestros docentes en una jornada de confraternidad y homenaje.",
  },
   {
    id: "HJR_qlnODkM",
    title: "Video Institucional",
    description:
      "Conoce nuestra infraestructura, laboratorios y compromiso con la formación tecnológica de calidad.",
  },

];

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const isCarousel = videos.length > 3;

  return (
    <section className="videos-section">
  <div className="videos-container">
    <h2 className="section-title">| Videos Institucionales</h2>

    {isCarousel ? (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="videos-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div
              className="video-card"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="video-thumbnail">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
                <div className="overlay">
                  <button className="play-btn">▶</button>
                </div>
              </div>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div
            className="video-card"
            key={index}
            onClick={() => setActiveVideo(video.id)}
          >
            <div className="video-thumbnail">
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
              />
              <div className="overlay">
                <button className="play-btn">▶</button>
              </div>
            </div>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    )}

    {activeVideo && (
      <div className="video-modal" onClick={() => setActiveVideo(null)}>
        <div
          className="video-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={() => setActiveVideo(null)}>
            ✕
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )}
  </div>
</section>

  );
};

export default VideosSection;