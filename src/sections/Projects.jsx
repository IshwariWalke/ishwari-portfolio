import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <h2 className="section-title">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {/* Project 1 */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-1">
            Community Job Portal (Data + Web)
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Jan 2025 – Mar 2025
          </p>

          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              Developed a prototype web platform to understand worker–employer
              interaction workflows.
            </li>
            <li>
              Built frontend using HTML, CSS, and JavaScript with registration,
              job listings, and application forms.
            </li>
            <li>
              Designed database structure concepts for worker, employer, and job
              posting data.
            </li>
            <li>
              Focused on full-stack architecture and frontend-backend interaction.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-accent text-black">HTML</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">CSS</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">JavaScript</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">Database Design</span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-1">
            Progressive Web Application (PWA) – E-Commerce
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Jun 2025 – Jul 2025
          </p>

          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              Developed a responsive PWA with offline support using Service Workers.
            </li>
            <li>
              Implemented product search, category-based filtering, and price sorting.
            </li>
            <li>
              Designed complete cart functionality with checkout flow and persistence.
            </li>
            <li>
              Built dynamic product pages with reviews and image carousel.
            </li>
            <li>
              Optimized performance using Tailwind CSS and caching strategies.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-accent text-black">JavaScript</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">PWA</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">Service Workers</span>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-1">
            Optimizing Electric Vehicle Performance
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Jan 2024 – Mar 2024
          </p>

          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              Analyzed real-time EV data to improve driving range and motor efficiency.
            </li>
            <li>
              Built neural network models for performance and range prediction.
            </li>
            <li>
              Enhanced accuracy through feature engineering and model tuning.
            </li>
            <li>
              Contributed to data preprocessing, training, and evaluation in a team.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="px-3 py-1 rounded-full bg-accent text-black">Machine Learning</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">Neural Networks</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">EV Data</span>
            <span className="px-3 py-1 rounded-full bg-accent text-black">Feature Engineering</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
