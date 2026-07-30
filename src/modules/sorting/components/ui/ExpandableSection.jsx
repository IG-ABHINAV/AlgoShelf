import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  Clock3,
} from "lucide-react";

export default function ExpandableSection({
  chapter,
  title,
  readingTime = "2 min read",
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-[28px] border border-[#E7DED2] bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <div className="flex items-center justify-between p-8">
          {/* Left */}

          <div className="flex gap-5">
            {/* Icon */}

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F3EC]">
              <BookOpen
                size={26}
                className="text-[#9D7653]"
              />
            </div>

            {/* Text */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#A1774C]">
                {chapter}
              </p>

              <h3 className="mt-2 text-3xl font-bold text-neutral-900">
                {title}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                <Clock3 size={15} />

                {readingTime}
              </div>
            </div>
          </div>

          {/* Arrow */}

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
          >
            <ChevronDown
              size={30}
              className="text-neutral-500"
            />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#EFE7DC] bg-[#FFFEFC] px-8 py-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}