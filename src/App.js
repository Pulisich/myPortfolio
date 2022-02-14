import './App.css';
import FooterDark from './components/footers/footerDark';
import HomeDark from './components/homes/headerDark';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProyectMainDark from './components/proyects/proyectMainDark';
import AboutDark from './components/about/aboutDark';
import ContactDark from './components/contact/contactDark';
import CityPhone from './components/proyects/projectDark';
import Funditron from './components/proyects/project';
import JorgeLandaJS from './components/proyects/projectII';
import JorgeLandaLanding from './components/proyects/projectIII';
import EcoCuchas from './components/proyects/projectIV';
import TKD from './components/proyects/projectV';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeDark/>} />
          <Route path="/proyects" element={<ProyectMainDark/>}/>
          <Route path="/about" element={<AboutDark/>}/>
          <Route path="/contact" element={<ContactDark/>}/>
          <Route path="/CityPhone" element={<CityPhone/>}/>
          <Route path="/Funditron" element={<Funditron/>}/>
          <Route path="/JorgeLandaJS" element={<JorgeLandaJS/>}/>
          <Route path="/JlLanding" element={<JorgeLandaLanding/>}/>
          <Route path="/EcoCuchas" element={<EcoCuchas/>}/>
          <Route path="/TKD" element={<TKD/>}/>
      </Routes>
      <FooterDark/>
      </BrowserRouter>
    </div>
  );
}

export default App;
