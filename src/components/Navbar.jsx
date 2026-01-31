import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
  "about",
  "skills",
  "projects",
  "experience",
  "courses",
  "education",
  "achievements",
  "contact",
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-accent/80 dark:bg-gray-900/80 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Ishwari</div>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="capitalize hover:text-primary transition"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} className="text-xl">
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}
