import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const concepts = [
  {
    title: "Stability",
    description:
      "A stable sorting algorithm preserves the relative order of equal elements.",
    example: "Bubble Sort and Merge Sort are stable. Quick Sort is not.",
  },
  {
    title: "Time Complexity",
    description:
      "Time complexity describes how the running time grows as the input size increases.",
    example: "Bubble Sort → O(n²) • Merge Sort → O(n log n)",
  },
  {
    title: "Space Complexity",
    description:
      "Space complexity measures how much additional memory an algorithm requires.",
    example: "Merge Sort uses extra memory while Heap Sort is in-place.",
  },
  {
    title: "In-place",
    description:
      "In-place algorithms sort the data without requiring significant extra memory.",
    example: "Bubble, Selection and Insertion Sort are in-place.",
  },
  {
    title: "Adaptive",
    description:
      "Adaptive algorithms become faster when the input is already partially sorted.",
    example: "Insertion Sort performs exceptionally well on nearly sorted arrays.",
  },
];

export default function FoundationsTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-[30px] border border-[#E8DED2] bg-[#FCFAF7] p-8 shadow-sm">

      {/* Tabs */}

      <div className="flex flex-wrap justify-center gap-3">

        {concepts.map((concept, index) => (
          <button
            key={concept.title}
            onClick={() => setActive(index)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              active === index
                ? "bg-[#9D7653] text-white shadow-md"
                : "bg-white text-[#6B5B4D] border border-[#E8DED2] hover:bg-[#F7F3EE]"
            }`}
          >
            {concept.title}
          </button>
        ))}

      </div>

      {/* Content */}

      <AnimatePresence mode="wait">

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="mt-10 rounded-2xl bg-white p-8"
        >
          <h3 className="font-display text-3xl text-[#202020]">
            {concepts[active].title}
          </h3>

          <p className="mt-5 text-lg leading-8 text-[#666]">
            {concepts[active].description}
          </p>

          <div className="mt-8 rounded-xl bg-[#F7F5F2] p-5 border border-[#ECE3D8]">
            <p className="font-semibold text-[#9D7653]">
              Example
            </p>

            <p className="mt-2 text-[#555] leading-7">
              {concepts[active].example}
            </p>
          </div>

        </motion.div>

      </AnimatePresence>

    </div>
  );
}