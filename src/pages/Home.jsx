import React, { useEffect } from "react";
import BannerSlider from "../components/BannerSlider";
import ProgramCard from "../components/ProgramCard";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import StudyProgram from "../components/StudyProgram";
import Stats from "../components/Stast";
import PublicidadModal from "../components/PublicidadModal";



import PlatformsSection from "../components/PlatformsSection";

import GalleryImages from "../components/GalleryImages"; 


function Home() {

    useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100, 
            behavior: "smooth",
          });
        }
      }, 400);
    }
  }, []);
  
  return (
    <>
      <PublicidadModal />
      <BannerSlider/>
      <AboutSection />
    
      
      <StudyProgram />
      <Stats />
      <StatsSection />

       <GalleryImages /> 
     
      <PlatformsSection/>
    </>
  );
}

export default Home;
