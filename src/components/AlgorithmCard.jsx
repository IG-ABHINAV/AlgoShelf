import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AlgorithmCard({
  chapter,
  title,
  description,
  complexity,
  difficulty,
  path,
}) {
  const difficultyColor =
    difficulty === "Beginner"
      ? "bg-green-100 text-green-700"
      : "bg-amber-100 text-amber-700";

  return (
    <motion.div
      whileHover={{
        y: -10,
        rotate: -1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
    >
      <Link
        to={path}
        className="group relative flex h-full overflow-hidden rounded-[22px] border border-[#E8DED2] bg-[#FFFDF8] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)]"
      >
        {/* Hardcover Spine */}

        <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-b from-[#B88457] via-[#9A6A45] to-[#7A5236]" />

        <div className="absolute left-[3px] top-0 h-full w-[2px] bg-white/35" />

        {/* Content */}

        <div className="ml-6 flex flex-1 flex-col p-7">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A07A56]">
            {chapter}
          </p>

          <h3 className="mt-5 font-display text-3xl leading-tight text-[#202020]">
            {title}
          </h3>

          <p className="mt-4 flex-1 leading-7 text-[#666]">
            {description}
          </p>

          {/* Badges */}

          <div className="mt-6 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-[#F7F5F2] px-3 py-2 text-sm">
              <Clock3 size={15} />
              {complexity}
            </div>

            <div
              className={`rounded-full px-3 py-2 text-sm font-medium ${difficultyColor}`}
            >
              {difficulty}
            </div>

          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-[#EFE6DA] pt-5">

            <span className="flex items-center gap-2 font-medium text-[#9D7653]">
              <Sparkles size={16} />
              Open Chapter
            </span>

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </div>

        </div>

        {/* Page Edge */}

        <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-l from-[#ECE8E2] via-[#F9F8F5] to-transparent" />

        {/* Top Highlight */}

        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/80" />
      </Link>
    </motion.div>
  );
}

export default AlgorithmCard;