import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MentalModelSketch from "../ui/MentalModelSketch";

export default function AlgorithmHero({ algorithm }) {

  const whyLearn = {
    bubble:
      "Bubble Sort is rarely the fastest sorting algorithm, but it teaches one of the most important ideas in computer science: sorting through repeated comparisons and swaps.",

    selection:
      "Selection Sort teaches an important strategy used throughout computer science: repeatedly finding the smallest remaining element and placing it into its correct position.",

    insertion:
      "Insertion Sort demonstrates how a sorted sequence can be built one element at a time. It is highly efficient for small or nearly sorted datasets and is even used inside more advanced sorting algorithms.",

    merge:
      "Merge Sort introduces divide-and-conquer, a powerful problem-solving technique used throughout computer science. Its guaranteed O(n log n) performance makes it a practical choice for sorting large datasets efficiently.",

    quick: (
      <>
        Quick Sort teaches how partitioning around a pivot and recursively solving
        smaller subproblems leads to one of the fastest and most widely used
        sorting algorithms.
      </>
    ),

    heap: (
      <>
        Heap Sort uses a binary heap to efficiently organize elements, achieving guaranteed O(n log n) sorting while requiring only O(1) extra space.

      </>
    ),
  };

  return (
    <section className="border-b border-[#ECE3D8] bg-[#F7F5F2]">
      <div className="mx-auto max-w-7xl px-8 py-16">

        {/* Back */}

        <Link
          to="/sorting"
          className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-[#6B645D] transition hover:text-[#A1764E]"
        >
          <ArrowLeft size={18} />

          <span className="font-medium">
            Back to Sorting Algorithms
          </span>
        </Link>

        {/* Hero */}

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[1.55fr_1fr]">

          {/* LEFT */}

          <div>

            {/* Chapter */}

            <div className="flex items-center gap-5">

              <div className="h-px w-14 bg-[#D8C5B0]" />

              <p className="uppercase tracking-[0.3em] text-[13px] text-[#A1764E]">
                BOOK II • LESSON {algorithm.chapter} OF O6
              </p>

            </div>

            {/* Title */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mt-8 font-Cormorant text-[92px] leading-[0.9] text-[#1F1B18]">
                {algorithm.title}
              </h1>
            </motion.div>

            {/* Subtitle */}

            <p className="mt-5 text-[20px] text-[#7A7068]">
              {algorithm.subtitle}
            </p>

            {/* Accent */}

            <div className="mt-6 h-[2px] w-20 rounded-full bg-[#A1764E]" />

            {/* Why Learn */}

            <div className="mt-12 max-w-xl border-l-2 border-[#DDD2C5] pl-6">

              <p className="text-xs uppercase tracking-[0.3em] text-[#A1764E]">
                Why Learn This?
              </p>

              {whyLearn[algorithm.id]}

            </div>

            {/* CTA */}

            <button
              onClick={() =>
                document
                  .getElementById("visualizer")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#A1764E] px-7 py-3 font-medium text-[#A1764E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A1764E] hover:text-white"
            >
              Lets Visualize

              <ArrowRight size={18} />
            </button>

          </div>

          {/* RIGHT */}

          <div className="pt-3">

            <p className="text-xs uppercase tracking-[0.22em] text-[#A1764E]">
              THINK LIKE A PROGRAMMER
            </p>

            {/* Sketch */}

            <div className="mt-7 rounded-3xl border border-[#E8DDD1] bg-[#FCFBF8] p-6">

              <MentalModelSketch algorithm={algorithm} />

            </div>
            {/* Key Takeaways */}

            <div className="mt-8">

              <p className="text-xs uppercase tracking-[0.28em] text-[#A1764E]">
                Key Takeaways
              </p>

              <ul className="mt-4 space-y-3">
                {algorithm.takeaways.map((takeaway, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#A1764E]" />

                    <p className="text-[15px] leading-7 text-[#5F5952]">
                      {takeaway}
                    </p>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}