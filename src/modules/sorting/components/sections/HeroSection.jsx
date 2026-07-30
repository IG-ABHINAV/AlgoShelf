import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToAlgorithms = () => {
    document.getElementById("algorithms")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-[#E9E2D8] bg-[#FCFAF7] px-10 py-20 shadow-sm">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F3E5D3] blur-[120px] opacity-80" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#F7EEE2] blur-[90px]" />

        <div className="absolute -left-24 top-32 h-56 w-56 rounded-full bg-[#EFE8DC] blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Chapter */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold uppercase tracking-[0.45em] text-[#A1774C]"
        >
          Chapter I
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-7xl font-black leading-[0.95] tracking-tight text-neutral-900"
        >
          Sorting
          <br />
          Algorithms
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600"
        >
          Master the art of arranging data through beautiful visualizations,
          interactive lessons, and intuitive explanations designed for every
          learner.
        </motion.p>

        {/* Badges */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white px-5 py-3 shadow-sm">
            <BookOpen size={18} className="text-[#9D7653]" />
            <span className="font-medium">7 Algorithms</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white px-5 py-3 shadow-sm">
            <GraduationCap size={18} className="text-[#9D7653]" />
            <span className="font-medium">Beginner Friendly</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white px-5 py-3 shadow-sm">
            <Sparkles size={18} className="text-[#9D7653]" />
            <span className="font-medium">Interactive Learning</span>
          </div>
        </motion.div>

        {/* Button */}

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            y: -3,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={scrollToAlgorithms}
          className="group mt-12 inline-flex items-center gap-3 rounded-2xl bg-neutral-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-black"
        >
          Explore Collection

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </section>
  );
}