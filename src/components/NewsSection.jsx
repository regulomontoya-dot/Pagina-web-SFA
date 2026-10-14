import React from "react";
import "./NewsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//  Imágenes locales (
import noticia1 from "../assets/news/noticia1.jpg";
import noticia2 from "../assets/news/noticia2.jpg";
import noticia3 from "../assets/news/noticia3.jpg";

const news = [
  {
    title: "Convenio con la universidad San Juan Bautista",
    date: "Octubre 2025",
    image: noticia1,
    description:
      "Nuestra institución firmó una Alianza Estratégica con la Universidad San Juan Bautista que, favorecerá a cientos de estudiantes y personal docente.",
    link: "#",
  },
  {
    title: "Implementaciones del punto geodésico",
    date: "Septiembre 2025",
    image: noticia2,
    description:
      "Continuamos con las implementaciones del punto geodésico. Trabajando para dar un servicio de calidad a la juventud estudiosa.",
    link: "#",
  },
  {
    title: "Pronta inaguracion de Laboratorio de Fabricación Digital",
    date: "Agosto 2025",
    image: noticia3,
    description:
      "Pronto inaguraremos nuestro Laboratorio de Fabricación Digital que beneficiará a más del mil estudiantes de los diferentes programas de estudio.",
    link: "#",
  },
  {
    title: "Pronta inaguracion de Laboratorio de Fabricación Digital",
    date: "Agosto 2025",
    image: noticia3,
    description:
      "Pronto inaguraremos nuestro Laboratorio de Fabricación Digital que beneficiará a más del mil estudiantes de los diferentes programas de estudio.",
    link: "#",
  },
];

export default function NewsSection() {
  const isSlider = news.length > 3;

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">| Noticias y Eventos</h2>

        {isSlider ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="news-swiper"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="news-card">
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <h3>{item.title}</h3>
                    <p className="news-date">{item.date}</p>
                    <p className="news-desc">{item.description}</p>
                    <a href={item.link} className="news-link">
                      Leer más →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="row justify-content-center">
            {news.map((item, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <div className="news-card">
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <h3>{item.title}</h3>
                    <p className="news-date">{item.date}</p>
                    <p className="news-desc">{item.description}</p>
                    <a href={item.link} className="news-link">
                      Leer más →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}