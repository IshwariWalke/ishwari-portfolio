import Navbar from "./components/Navbar";
import Home from './sections/About';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Courses from './sections/Courses';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-accent dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Courses />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
    </div>

  )
}



