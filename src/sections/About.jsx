import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
    min-h-screen w-full
    flex flex-col items-center justify-center
    px-6 gap-16
    bg-gradient-to-br from-accent/60 via-white/40 to-secondary/60
    dark:from-gray-900 dark:via-gray-800/60 dark:to-gray-900
    backdrop-blur-xl
  "
    >
      {/* HERO */}
      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left mt-10 ">
         {/* Photo */}
        <motion.img
          src={myPhoto}
          alt="Ishwari Walke"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut",}}
          className="h-auto max-w-xs md:max-w-sm  rounded-2xl object-contain  shadow-xl mt-12"

        />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: "easeOut", }}
        >
          <h1 className="text-5xl font-bold mb-4 text-center">
            {/* Hi, I’m{" "} */}
            <span className="text-primary">Ishwari Walke</span>
          </h1>

          <p className="text-lg max-w-xl">
            Computer Engineering student passionate about building
            <span className="text-primary font-medium">
              {" "}scalable web applications
            </span>{" "}
            and exploring
            <span className="text-primary font-medium">
              {" "}AI-driven solutions
            </span>.
          </p>
          </motion.div>
         
        
      </div>

      {/* ABOUT CARD */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
  duration: 0.8,
  ease: "easeOut",
}}
  className="max-w-4xl text-center md:text-left"
>
  <h2 className="section-title mb-6">About Me</h2>

  <p className="text-base leading-relaxed">
    I am a Computer Engineering undergraduate at
    <span className="font-medium text-primary">
      {" "}Pimpri Chinchwad College of Engineering, Pune
    </span>{" "}
    (CGPA 8.7). I enjoy solving real-world problems through
    technology and have hands-on experience in web development,
    data-driven projects, and beginner-level MERN stack
    development.
  </p>

  <p className="mt-4 text-base leading-relaxed">
    I am a recipient of the
    <span className="font-medium">
      {" "}Lila Poonawalla Foundation
    </span>{" "}
    and
    <span className="font-medium">
      {" "}Reliance Foundation
    </span>{" "}
    scholarships and actively participate in competitive
    programming, research, and hackathons.
  </p>
</motion.div>

    </section>
  );
}
