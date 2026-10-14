import HeaderTop from "./components/HeaderTop.jsx";
import HeaderMain from "./components/HeaderMain.jsx";
import SideFloatingBar from "./components/SideFloatingBar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./pages/Home.jsx";
import Presentacion from "./pages/Presentacion.jsx";
import MisionVision from "./pages/MisionVision.jsx";
import Organizacion from "./pages/OrganizacionInstitucional.jsx";
import Autoridades from "./pages/Autoridades.jsx";
import PlanaDoc from "./pages/PlanaDocente.jsx";
import LocalInstitucional from "./pages/LocalInstitucional.jsx";

import Contacto from "./pages/Contact.jsx";
import ArquitecturaPlataformas from "./pages/ArquitecturaPlataformas.jsx";
import Contabilidad from "./pages/Contabilidad.jsx";
import Enfermeria from "./pages/Enfermeria.jsx";
import MecatronicaAutomotriz from "./pages/MecatronicaAutomotriz.jsx";
import FarmaciaTecnica from "./pages/FarmaciaTecnica.jsx";
import ElectricidadIndustrial from "./pages/EletricidadIndustrial.jsx";



import Admision from "./pages/Admision.jsx";
import Matricula from "./pages/Matricula.jsx";
import Becas from "./pages/BecasCredito.jsx";

import DocumentosGestion from "./pages/DocumentosGestion.jsx";
import Estadistica from "./pages/Estadistica.jsx";
import Inversiones from "./pages/Inversiones.jsx";
import LibroReclamos from "./pages/LibroReclamos.jsx";
import Licenciamiento from "./pages/Licenciamiento.jsx";

import Tupa from "./pages/TUPA.jsx";

import Biblioteca from "./pages/Biblioteca.jsx";
import ServiciosComplementarios from "./pages/ServiciosComplementarios.jsx";
import BolsaLaboral from "./pages/BolsaLaboral.jsx";

import Comunicados from "./pages/Comunicados.jsx";

import EnlacesInstitucionales from "./pages/EnlacesInstitucionales.jsx";

import AdminWrapper from "./components/AdminWrapper.jsx";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <HeaderTop/>
      <HeaderMain/>
      <SideFloatingBar/>
     
      <Routes>
        <Route path="/admin" element={<AdminWrapper />} />
        <Route path="/" element={<Home />} />
        <Route path="/nosotros/mision" element={<MisionVision />} />
        <Route path="/nosotros/presentacion" element={<Presentacion />} />
        <Route path="/nosotros/organizacion" element={<Organizacion />} />
        <Route path="/nosotros/autoridades" element={<Autoridades/>}/>
        <Route path="/nosotros/planaDocente" element={<PlanaDoc/>} />
        <Route path="/nosotros/localInstitucional" element={<LocalInstitucional/>}/>
       
        <Route path="/contactanos/contact" element={<Contacto />} />     

        <Route path="/programas/arquitectura-de-plataformas-y-sti" element={<ArquitecturaPlataformas />} />
        <Route path="/programas/contabilidad" element={<Contabilidad />} />
        <Route path="/programas/enfermeria-tecnica" element={<Enfermeria />} />
        <Route path="/programas/mecatronica-automotriz" element={<MecatronicaAutomotriz />} />
        <Route path="/programas/farmacia-tecnica" element={<FarmaciaTecnica />} />
         <Route path="/programas/electricidad-industrial" element={<ElectricidadIndustrial/>} />


        <Route path="/admision-matricula/admision" element={<Admision />} />
        <Route path="/admision/matricula" element={<Matricula />} />
        <Route path="/admision/becas" element={<Becas />} />

        <Route path="/servicios/biblioteca" element={<Biblioteca />} />
        <Route path="/servicios/complementarios" element={<ServiciosComplementarios />} />
        <Route path="/servicios/bolsa" element={<BolsaLaboral />} />

        <Route path="/otrasPaginas/enlaces" element={<EnlacesInstitucionales />} />
        <Route path="/otrasPaginas/comunicados" element={<Comunicados />} />




        <Route path="/transparencia/doc_gestion" element={<DocumentosGestion />} />
        <Route path="/transparencia/estadisticas" element={<Estadistica />} />
        <Route path="/transparencia/inversiones" element={<Inversiones />} />
        <Route path="/transparencia/reclamos" element={<LibroReclamos />} />
        <Route path="/transparencia/licenciamiento" element={<Licenciamiento/>} />

        <Route path="/tramites/TUPA" element={<Tupa/>} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
