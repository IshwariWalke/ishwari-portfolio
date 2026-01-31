import Navbar from "./components/Navbar";
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Courses from './sections/Courses';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-accent dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Courses />
        <Education />
        <Achievements />
        <Contact />
    </div>
  )
}



