import { motion } from "framer-motion";

export default function ArrayBars({
  array,
  comparing = [],
  sorted = [],
  pivotIndex = -1,
  leftIndex = -1,
  rightIndex = -1,
}) {
  return (
    <div className="flex items-end justify-center gap-4 h-full w-full">
      {array.map((value, index) => {
        const isPivot = index === pivotIndex;

        const isInsidePartition =
          leftIndex === -1 ||
          rightIndex === -1 ||
          (index >= leftIndex && index <= rightIndex);

        let barStyle =
          "bg-gradient-to-t from-[#946B45] to-[#AF8358]";

        if (comparing.includes(index))
          barStyle =
            "bg-gradient-to-t from-[#6F4728] to-[#8A5A33]";

        if (sorted.includes(index))
          barStyle =
            "bg-gradient-to-t from-[#5A7354] to-[#7E9A75]";

        if (isPivot)
          barStyle =
            "bg-gradient-to-t from-[#B56A1E] to-[#F3C56D]";

        return (
          <div
            key={index}
            className={`
              flex flex-col items-center
              transition-opacity duration-300
              ${isInsidePartition ? "opacity-100" : "opacity-40"}
            `}
          >
            {/* Value */}
            <motion.div
              animate={{
                scale: comparing.includes(index) ? 1.08 : 1,
                y: comparing.includes(index) ? -2 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                mb-4
                min-w-[52px]
                rounded-xl
                border
                border-[#E8DDD1]
                bg-white
                px-3
                py-1.5
                text-center
                text-base
                font-semibold
                text-[#1F1B18]
                shadow-sm
              "
            >
              <>
                {isPivot && (
                  <div
                    className="
                      mb-1
                      rounded-full
                      bg-[#A1764E]
                      px-2
                      py-0.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    Pivot
                  </div>
                )}

                {value}
              </>
            </motion.div>

            {/* Bar */}
            <motion.div
              layout
              animate={{
                height: value * 5,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className={`
                w-[66px]
                rounded-t-[26px]
                border-x
                border-t
                ${isPivot ? "border-[#8A5A33]" : "border-white/30"}
                ${barStyle}
              `}
            />
          </div>
        );
      })}
    </div>
  );
}