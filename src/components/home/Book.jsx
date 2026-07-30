import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Book({
    title,
    description,
    icon: Icon,
    link,
    spine,
    iconBg,
    iconColor,
}) {
    return (
        <motion.div
            whileHover={{
                y: -12,
                rotate: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
            }}
            className="relative"
        >
            <Link
                to={link}
                className="
          group
          relative
          flex
          h-[405px]
          w-[285px]
          overflow-hidden
          rounded-[22px]
          border
          border-[#E8DED2]
          bg-[#FFFDF8]
          shadow-[0_12px_30px_rgba(0,0,0,0.08)]
          transition-all
          duration-300
          hover:shadow-[0_22px_50px_rgba(0,0,0,0.16)]
        "
            >
                {/* Hardcover Spine */}

                <div
                    className="absolute inset-y-0 left-0 w-5"
                    style={{
                        background: `
              linear-gradient(
                to right,
                ${spine},
                ${spine}DD,
                ${spine}
              )
            `,
                    }}
                />

                {/* Spine Highlight */}

                <div className="absolute left-[3px] top-0 h-full w-[2px] bg-white/35" />

                {/* Spine Shadow */}

                <div className="absolute left-5 top-0 h-full w-[2px] bg-black/10" />

                {/* Page Edge */}

                <div className="absolute right-0 top-0 h-full w-[8px] bg-gradient-to-l from-[#EAE5DE] via-[#F9F8F5] to-transparent" />

                {/* Content */}

                <div className="ml-7 flex flex-1 flex-col p-8">
                    {/* Icon */}

                    <div
                        className="flex h-16 w-16 items-center justify-center rounded-full"
                        style={{
                            backgroundColor: iconBg,
                        }}
                    >
                        <Icon
                            size={30}
                            style={{
                                color: iconColor,
                            }}
                        />
                    </div>

                    {/* Title */}

                    <h3 className="mt-10 text-[34px] font-bold leading-[1.05] tracking-tight text-neutral-900 whitespace-pre-line">
                        {title}
                    </h3>

                    {/* Description */}

                    <p className="mt-7 text-[17px] leading-8 text-neutral-600">
                        {description}
                    </p>

                    {/* Bottom */}

                    <div className="mt-auto flex items-center justify-between">
                        <span
                            className="text-[15px] font-semibold"
                            style={{
                                color: iconColor,
                            }}
                        >
                            Open Collection
                        </span>

                        <ArrowRight
                            size={18}
                            className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
                        />
                    </div>
                </div>

                {/* Top Highlight */}

                <div className="absolute inset-x-0 top-0 h-[1px] bg-white/70" />

                {/* Bottom Shadow */}

                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/5" />
            </Link>
        </motion.div>
    );
}