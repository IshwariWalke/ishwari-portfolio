import ssc from "../assets/SSC_page-0001.jpg"
import hsc from "../assets/HSC_page-0001.jpg"
import ty from "../assets/ty.png"
import { motion } from "framer-motion";
import ImageModel from "../components/ImageModel";
import {useState} from "react";

export default function Education() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section id="education" className="min-h-screen px-6 py-20">
      <h2 className="section-title">Education</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="font-semibold text-center mb-4">
            SSC – New English School, Ahilyanagar
          </h3>
        
          <motion.img src={ssc} className="h-60 w-60 object-contain border-4 border-primary shadow-lg mx-auto" onClick ={()=>setSelectedImg(ssc)} whileHover = {{scale:1.05}}/>
          <p className=" mt-4 text-center">Percentage: 96.60%</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-center mb-4">
            HSC – Shri Chhatrapati Shivaji Junior College
          </h3>
          
          <motion.img src={hsc} className="h-60 w-60 object-contain border-4 border-primary shadow-lg mx-auto" onClick ={()=>setSelectedImg(hsc)} whileHover = {{scale:1.05}}/>
          <p className="mt-4 text-center">Percentage: 91.83%</p>
          <p className="text-center">MHT-CET: 98.70 Percentile</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-center mb-4">B.Tech Computer Engineering – PCCOE</h3>
          
          <motion.img src={ty} className="h-60 w-60 object-contain border-4 border-primary shadow-lg mx-auto" onClick ={()=>setSelectedImg(ty)} whileHover = {{scale:1.05}}/>
          <p className="mt-4 text-center mb-4">CGPA: 8.7 (Expected Graduation: 2027)</p>
        </div>
      </div>
      <ImageModel selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>
    </section>
  );
}
