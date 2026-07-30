import { motion } from "framer-motion";
import WordMark from "../logo/WordMark";

export default function Hero() {
  const scrollToBookshelf = () => {
    document.getElementById("bookshelf")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F5F2] min-h-screen">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-[14%]
            -translate-x-1/2
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#A1764E]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[18%]
            -translate-x-1/2
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#D7B58C]/20
            blur-[80px]
          "
        />

      </div>

      <div
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          pt-40
          px-6
          text-center
        "
      >

        {/* Brand */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <WordMark
            className="
              text-[92px]
              md:text-[200px]
              leading-[0.88]
              tracking-[-0.06em]
            "
          />
        </motion.div>

        {/* Tagline */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
  mt-9
  text-[30px]
  md:text-[45px]
  leading-[1.08]
  font-cormorant
  italic
  font-light
  text-[#1F1B18]
"
        >
          Learn to
          <br />

          <span className="font-editorial text-[#A1764E]">
            think like
          </span>

          <span className="text-[#1F1B18]">
            {" "}a programmer.
          </span>

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            mt-10
            max-w-2xl
            text-lg
            md:text-[22px]
            leading-9
            text-[#6A625C]
          "
        >
          Master Algorithms. One Chapter at a Time.
        </motion.p>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={scrollToBookshelf}
          className="
  mt-14
  flex
  items-center
  gap-3
  rounded-full

  border
  border-[#A1764E]/20

  bg-[#1F1B18]

  px-9
  py-5

  text-lg
  font-medium
  tracking-wide

  text-white

  shadow-[0_18px_40px_rgba(0,0,0,0.12)]

  transition-all
  duration-300

  hover:border-[#A1764E]/40
  hover:bg-[#2B2521]
"
        >
          Open Library

          <span className="text-[#C89A63]">
            →
          </span>

        </motion.button>

      </div>
    </section>
  );
}