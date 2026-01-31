import {motion} from "framer-motion"
import technest from "../assets/completion_certificate.png"
import nptel from "../assets/nptel.jpg"
import copyright from "../assets/copyright.png"
import python from "../assets/python_certification.jpg"
import java from "../assets/java.png"
import {useState} from "react";
import ImageModel from "../components/ImageModel"

export default function Courses() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section id="courses" className="min-h-screen px-6 py-20">
      <h2 className="section-title">Courses & Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6">
      <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            Coding Ninjas - Basics of Python: Guided Path
          </h3>
          <motion.img
            src={python}
            className="h-60 w-70 object-fit border-4 border-primary shadow-lg mx-auto mt-5"
            onClick ={()=>setSelectedImg(python)} whileHover = {{scale:1.05}}
          />
          
        </div>
        <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            NPTEL IIT Madras - Data Science For Engineers
          </h3>
          <motion.img
            src={nptel}
            className="h-60 w-70 object-fit border-4 border-primary shadow-lg mx-auto mt-5"
            onClick ={()=>setSelectedImg(nptel)} whileHover = {{scale:1.05}}
          />
          
        </div>
        <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            Udemy - Java Materclass
          </h3>
          <motion.img
            src={java}
            className="h-60 w-70 object-fit border-4 border-primary shadow-lg mx-auto mt-5"
            onClick ={()=>setSelectedImg(java)} whileHover = {{scale:1.05}}
          />
          
        </div>
      <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            TechNest - Web Development Intern
          </h3>
          <motion.img
            src={technest}
            className="h-60 w-70 object-fit border-4 border-primary shadow-lg mx-auto mt-5"
            onClick ={()=>setSelectedImg(technest)} whileHover = {{scale:1.05}}
          />
          
        </div>
        <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            Copyright Registration by Government of India - Community Job Portal: Bridging Gaps Between Employers and Workers
          </h3>
          <motion.img
            src={copyright}
            className="h-60 w-70 object-fit border-4 border-primary shadow-lg mx-auto mt-5"
            onClick ={()=>setSelectedImg(copyright)} whileHover = {{scale:1.05}}
          />
          
        </div>
        <div className="card hover:shadow-2xl">
          <h3 className="font-semibold text-center">
            Infosys Springboard – Artificial Intelligence
          </h3>
          {/* <motion.img
            src={}
            className="h-80 w-70 object-fit border-4 border-primary shadow-lg"
          /> */}
          
        </div>

      </div>
      <ImageModel selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
    </section>
  );
}
