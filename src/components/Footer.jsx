import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 bg-accent dark:bg-gray-900 text-center">
      
      {/* Name */}
      <h3 className="text-xl font-semibold text-primary">
        Ishwari Walke
      </h3>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-2xl">

        <a
          href="https://www.hackerrank.com/profile/ishwari_walke111"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition hover:scale-110"
        >
          <SiHackerrank />
        </a>

        <a
          href="https://www.geeksforgeeks.org/user/ishwariwalqe6/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition hover:scale-110"
        >
          <SiGeeksforgeeks />
        </a>

        <a
          href="https://github.com/IshwariWalke"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/4nNqpMwwC7/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition hover:scale-110"
        >
          <SiLeetcode />
        </a>

        <a
          href="mailto:ishwari.walke1112@gmail.com"
          className="hover:text-primary transition hover:scale-110"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/ishwari-walke-51b50b295/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Contact Line */}
      <p className="text-sm mt-6 text-gray-600 dark:text-gray-400">
        <a
          href="mailto:ishwari.walke1112@gmail.com"
          className="hover:text-primary hover:scale-110"
        >
          ishwari.walke1112@gmail.com
        </a>
        <span className="mx-3">|</span>
        +91&nbsp;87998&nbsp;29733
      </p>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-primary mx-auto mt-6"></div>

      {/* Copyright */}
      <p className="text-xs mt-4 text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} Ishwari Walke. All rights reserved.
      </p>
    </footer>
  );
}
