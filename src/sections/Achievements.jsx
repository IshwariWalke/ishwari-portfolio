import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import hackerrank from "../assets/hackerrank.png";
import leetcode from "../assets/leetcode.png";
import lpf from "../assets/lpf.jpg";
import reliance from "../assets/reliance.png"

export default function Achievements() {
    const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section id="achievements" className="min-h-screen px-6 py-20">
      <h2 className="section-title">Achievements</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-10 mb-10">
        <div className="card">
          <h3 className="font-semibold text-center">Scholarship</h3>
          <center>Lila Poonawalla Foundation Scholarship</center>
          <motion.img
            src={lpf}
            onClick = {()=>setSelectedImg(lpf)}
            whileHover = {{scale:1.02}}
            className="h-60 w-70 object-cover border-4 border-primary shadow-lg mx-auto m-3"
          />
        </div>

        <div className="card">
          <h3 className="font-semibold text-center">Scholarship</h3>
          <center>Reliance
          Foundation Scholarship</center>
           <motion.img
            src={reliance}
            onClick = {()=>setSelectedImg(reliance)}
            whileHover = {{scale:1.02}}
            className="h-60 w-70 object-cover border-4 border-primary shadow-lg mx-auto m-3"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-5 mx-auto">
          <h3 className="font-semibold text-center">LeetCode</h3>
          <p className="p-2 text-center">Solved 250+ LeetCode problems</p>
          <motion.img
            src={leetcode}
            onClick={()=>setSelectedImg(leetcode)}
            whileHover={{scale:1.02}}
            className="h-60 w-70 object-contain border-4 border-primary shadow-lg mb-5"
          />
        </div>
        <div className="card p-5">
          <h3 className="font-semibold text-center">GeeksforGeeks</h3>
        </div>

        <div className="card p-5 mx-auto">
          <h3 className="font-semibold text-center">HackerRank</h3>
          <div className="p-2 text-center"> 5⭐ Problem Solving</div>
          <motion.img
            src={hackerrank}
            onClick={()=>setSelectedImg(hackerrank)}
            whileHover = {{scale:1.02}}
            className="h-60 w-70 object-contain border-4 border-primary shadow-lg mb-5"
          />
        </div>
      </div>


    <AnimatePresence>
       {
        selectedImg && (
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="fixed inset-0 backdrop-blur-sm z-50 bg-black/70 flex items-center justify-center"
            onClick={()=> setSelectedImg(null)}
            >
              
                <motion.img  
                     src={selectedImg}
                     initial={{scale: 0.8}}
                    animate={{scale:1}}
                    exit={{scale:0.8}}
                    className="max-w-[80vh] max-h-[80vh] rounded-2xl shadow-2xl"
                    onClick={(e)=> e.stopPropagation()}
                />
            </motion.div>
        )
       }

    </AnimatePresence>



    </section>
  );
}
