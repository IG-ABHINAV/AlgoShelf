import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-2xl border border-[#E8DDD1] bg-[#FCFBF8] p-6 shadow-sm"
    >
      <div className="flex items-start justify-between">

        <div className="flex-1">

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#A1764E]">
            {title}
          </p>

          <h3 className="mt-3 break-words text-3xl font-semibold text-[#1F1B18]">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-2 text-sm leading-6 text-[#6B645D]">
              {subtitle}
            </p>
          )}

        </div>

        {Icon && (
          <div className="ml-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFE5DA]">
            <Icon
              size={22}
              className="text-[#A1764E]"
            />
          </div>
        )}

      </div>
    </motion.div>
  );
}