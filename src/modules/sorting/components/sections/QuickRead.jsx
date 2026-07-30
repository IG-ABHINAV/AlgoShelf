import FoundationsTabs from "./FoundationsTabs";

export default function QuickRead() {
    return (
        <section className="mt-8 mb-20">

            {/* Foundations Header */}

            <div className="mb-16 text-center">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-[#A07A56]">
                    Foundations
                </p>

                <h2 className="font-display mt-4 text-5xl text-[#202020]">
                    Learn the Language of Sorting
                </h2>

                <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#666]">
                    Master the basics behind sorting algorithms to simplify learning and comparison.
                    Make every visualization, comparison, and algorithm much easier to follow.
                </p>

            </div>

            <div className="space-y-6">
                <FoundationsTabs />
            </div>
        </section>
    );
}