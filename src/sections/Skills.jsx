import cpp from "../assets/logos/cpp.jpg"
import cns from "../assets/logos/cns.jpg"
import css from "../assets/logos/css.png"
import dsa from "../assets/logos/dsa.png"
import git from "../assets/logos/git.png"
import github from "../assets/logos/github.png"
import html from "../assets/logos/html.png"
import js from "../assets/logos/js.png"
import mongo from "../assets/logos/mongo.png"
import sql from "../assets/logos/sql.png"
import nodejs from "../assets/logos/nodejs.png"
import oop from "../assets/logos/oop.png"
import react from "../assets/logos/react.jpg"
import tailwind from "../assets/logos/tailwind.png"
import vscode from "../assets/logos/vscode.jpg"

export default function Skills() {
 const skills = [
  { name: "C++", logo: cpp },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "Node.js", logo: nodejs },
  { name: "MongoDB", logo: mongo },
  { name: "MySQL", logo: sql },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "DSA", logo: dsa },
  { name: "OOP", logo: oop },
  { name: "Computer Networks", logo: cns },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "VS Code", logo: vscode },
];

  return (
    <section id="skills" className="min-h-screen px-6 py-20">
  <h2 className="section-title">Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="card flex flex-col items-center justify-center gap-3 hover:scale-105 hover:shadow-xl transition"
      >
        <img
          src={skill.logo}
          alt={skill.name}
          className="h-12 w-12 object-contain"
        />
        <span className="font-medium text-sm text-center">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
</section>

  );
}
