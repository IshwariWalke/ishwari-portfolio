import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative mt-6 overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="h-60 w-full object-fit rounded-xl"
        />
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
