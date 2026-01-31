import infosysLogo from "../assets/springboard logo.png";
import technestLogo from "../assets/technest logo.jpg";

import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";
import code4 from "../assets/code4.png";
import web1 from "../assets/img1.png";
import web2 from "../assets/img2.png";
import web3 from "../assets/img3.png";
import web4 from "../assets/img4.png";
import web5 from "../assets/img5.png";
import web6 from "../assets/img6.png";
import web7 from "../assets/img7.png";
import web8 from "../assets/img8.png";
import web9 from "../assets/img9.png";

import ImageSlider from "../components/ImageSlider";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20"
    >
      <h2 className="section-title">Experience</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10">


         {/* TechNest */}
        <div className="card">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={technestLogo}
              alt="TechNest"
              className="h-10 w-10 object-contain"
            />
            <h3 className="text-xl font-semibold">
              Web Development Internship – TechNest Intern
            </h3>
          </div>

          <p className="text-sm text-gray-500">
            June 2025 – July 2025
          </p>

          <ul className="list-disc ml-6 mt-3 text-sm space-y-2">
            <li>Completed a 4-week virtual internship.</li>
            <li>
              Worked on frontend development using HTML, CSS and JavaScript.
            </li>
            <li>
              Developed a Progressive Web E-Commerce Application.
            </li>
          </ul>

          {/* Slider */}
          <ImageSlider images={[web1, web2, web3, web4, web5, web6, web7, web8, web9]} />
        </div>
        
        {/* Infosys */}
        <div className="card">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={infosysLogo}
              alt="Infosys"
              className="h-10 w-10 object-contain"
            />
            <h3 className="text-xl font-semibold">
              Infosys Springboard Internship – AI
            </h3>
          </div>

          <p className="text-sm text-gray-500">
            Nov 2025 – Dec 2025
          </p>

          <ul className="list-disc ml-6 mt-3 text-sm space-y-2">
            <li>
              Worked on AI fundamentals through guided learning modules.
            </li>
            <li>
              Built a CodeGenAI Interactive ChatBot using LLAMA3 and
              OLLAMA with OCR integration.
            </li>
          </ul>

          {/* Slider */}
          <ImageSlider images={[code1, code2, code3, code4]} />
        </div>

       

      </div>
    </section>
  );
}
