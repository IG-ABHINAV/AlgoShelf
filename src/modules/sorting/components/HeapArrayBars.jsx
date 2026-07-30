import { motion } from "framer-motion";
import HeapTree from "./HeapTree";

export default function HeapArrayBars({
  array,
  comparing = [],
  sorted = [],
  heapSize,
  currentNode,
  leftChild,
  rightChild,
}) {
  return (
    <div className="flex h-full flex-col">
      {/* Heap Tree */}
      <div className="mb-10 flex justify-center">
        <HeapTree
          array={array}
          heapSize={heapSize}
          currentNode={currentNode}
          leftChild={leftChild}
          rightChild={rightChild}
          sorted={sorted}
        />
      </div>

      {/* Array Representation */}
      <div className="flex flex-1 items-end justify-center gap-4">
        {array.map((value, index) => {
          const active = index < heapSize;

          let barStyle =
            "bg-gradient-to-t from-[#946B45] to-[#AF8358]";

          if (!active)
            barStyle =
              "bg-gradient-to-t from-[#5A7354] to-[#7E9A75]";

          if (comparing.includes(index))
            barStyle =
              "bg-gradient-to-t from-[#6F4728] to-[#8A5A33]";

          if (index === currentNode)
            barStyle =
              "bg-gradient-to-t from-[#A1764E] to-[#D6A778]";

          if (index === leftChild || index === rightChild)
            barStyle =
              "bg-gradient-to-t from-[#B56A1E] to-[#F3C56D]";

          return (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* Value */}
              <motion.div
                animate={{
                  scale:
                    index === currentNode ||
                    index === leftChild ||
                    index === rightChild
                      ? 1.08
                      : 1,
                }}
                transition={{ duration: 0.25 }}
                className="mb-4 min-w-[52px] rounded-xl border border-[#E8DDD1] bg-white px-3 py-1.5 text-center text-base font-semibold text-[#1F1B18] shadow-sm"
              >
                {value}
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
                  border-white/30
                  ${barStyle}
                  ${!active ? "opacity-60" : ""}
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}