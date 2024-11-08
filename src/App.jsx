import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeroSection from './components/HeroSection';
import NavSection from './components/NavSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';


function App() {

  return (
    <>
    
      <NavSection/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  )
}

export default App
