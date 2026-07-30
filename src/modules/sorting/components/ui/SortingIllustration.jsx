import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOKS = [
    {
        id: 1,
        value: 8,
        height: 195,
        color: "#8C5F38",
        title: "Sorting",
    },
    {
        id: 2,
        value: 3,
        height: 165,
        color: "#496A58",
        title: "Searching",
    },
    {
        id: 3,
        value: 10,
        height: 215,
        color: "#3E557D",
        title: "Graphs",
    },
    {
        id: 4,
        value: 1,
        height: 150,
        color: "#884848",
        title: "Arrays",
    },
    {
        id: 5,
        value: 6,
        height: 180,
        color: "#C08A5C",
        title: "Trees",
    },
];

function Book({ book }) {
    return (
        <motion.div
            layout
            whileHover={{
                y: -8,
                rotate: -2,
            }}
            animate={{
                y: [0, -18, 0],
                rotate: [0, -1.5, 0],
            }}
            transition={{
                layout: {
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                },
                y: {
                    duration: 0.55,
                },
                rotate: {
                    duration: 0.55,
                },
            }}
            className="flex flex-col items-center"
        >
            <div
                className="relative w-[82px] overflow-hidden rounded-[14px]"
                style={{
                    height: book.height,
                    background: `linear-gradient(135deg, ${book.color}, ${book.color}CC)`,
                    boxShadow:
                        "0 18px 40px rgba(0,0,0,.18), inset 0 2px 0 rgba(255,255,255,.18)",
                }}
            >
                {/* Spine */}
                <div className="absolute left-0 top-0 h-full w-[12px] bg-black/18" />

                <div className="absolute left-[3px] top-0 h-full w-[2px] bg-white/20" />

                {/* Pages */}
                <div className="absolute right-0 top-[6px] h-[calc(100%-12px)] w-[9px] bg-[#F6F1E8]" />

                <div className="absolute left-[12px] right-[9px] top-0 h-[6px] bg-[#FAF6EF]" />

                {/* Bookmark */}
                {book.id % 2 === 0 && (
                    <div className="absolute right-[11px] top-0 h-8 w-[5px] rounded-b bg-[#C53F3F]" />
                )}

                {/* Gold line */}
                <div className="absolute left-5 right-5 top-6 h-[2px] rounded-full bg-[#E7C86E]" />

                <div className="absolute left-5 right-5 bottom-6 h-[2px] rounded-full bg-[#E7C86E]" />

                {/* Title */}
                <div className="absolute left-0 right-0 top-10 text-center">
                    <p className="text-[10px] uppercase tracking-[3px] text-[#F5EED9]/80">
                        Chapter
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                        {book.value}
                    </h3>
                </div>

                {/* Book name */}
                <div className="absolute bottom-12 w-full text-center">
                    <p className="px-3 text-[11px] uppercase tracking-[1px] text-white/90">
                        {book.title}
                    </p>
                </div>

                {/* Gloss */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/18 via-transparent to-transparent" />
            </div>

            <div className="h-[8px] w-[82px] rounded-b bg-[#F3EEE5]" />
        </motion.div>
    );
}
export default function SortingIllustration() {
    const [books, setBooks] = useState(BOOKS);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const frames = [
            [8, 3, 10, 1, 6],
            [3, 8, 10, 1, 6],
            [3, 8, 1, 10, 6],
            [3, 1, 8, 10, 6],
            [1, 3, 8, 10, 6],
            [1, 3, 8, 6, 10],
            [1, 3, 6, 8, 10],
        ];

        let index = 0;

        const animate = () => {
            if (index >= frames.length) {
                setFinished(true);

                setTimeout(() => {
                    setBooks(BOOKS);
                    setFinished(false);
                    index = 0;

                    setTimeout(animate, 1200);
                }, 2200);

                return;
            }

            const order = frames[index];

            setBooks(
                order.map((value) =>
                    BOOKS.find((book) => book.value === value)
                )
            );

            index++;

            setTimeout(animate, 650);
        };

        animate();
    }, []);

    return (
        <section className="relative mt-16 flex flex-col items-center overflow-hidden">

            {/* Background Glow */}

            <div className="absolute h-[420px] w-[620px] rounded-full bg-[#E8D8C6]/60 blur-[120px]" />

            {/* Books */}

            <motion.div
                layout
                className="relative z-10 flex items-end gap-5"
            >
                {books.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </motion.div>

            {/* Sorted Badge */}

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                    finished
                        ? {
                            opacity: 1,
                            y: 0,
                        }
                        : {
                            opacity: 0,
                            y: 10,
                        }
                }
                transition={{
                    duration: 0.45,
                }}
                className="mt-8 rounded-full border border-[#D6C2A8] bg-white/80 px-6 py-2 text-sm font-semibold tracking-wide text-[#8C5F38] shadow-md backdrop-blur"
            >
                ✓ Sorted
            </motion.div>

            {/* Shelf */}

            <div className="relative mt-8">

                {/* Shelf Shadow */}

                <div className="absolute left-8 right-8 top-5 h-7 rounded-full bg-black/20 blur-xl" />

                {/* Wood */}

                <div
                    className="
            relative
            h-7
            w-[560px]
            rounded-md
            bg-gradient-to-b
            from-[#C89663]
            via-[#9B6945]
            to-[#6B4325]
            shadow-[0_8px_18px_rgba(0,0,0,.18)]
          "
                />

                {/* Highlight */}

                <div className="absolute left-3 right-3 top-[2px] h-[2px] rounded-full bg-white/25" />

                {/* Grain */}

                <div className="absolute left-8 right-8 top-3 h-[1px] bg-black/10" />

                <div className="absolute left-12 right-16 top-5 h-[1px] bg-white/10" />
            </div>

        </section>
    );
}