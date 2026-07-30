import AlgorithmCard from "../../../../components/AlgorithmCard";

function AlgorithmGrid() {
  const algorithms = [
    {
      chapter: "Chapter II",
      title: "Bubble Sort",
      description: "Learn the simplest sorting algorithm through adjacent swaps.",
      complexity: "O(n²)",
      difficulty: "Beginner",
      path: "/sorting/bubble",
    },
    {
      chapter: "Chapter III",
      title: "Selection Sort",
      description: "Find the minimum element and place it in its correct position.",
      complexity: "O(n²)",
      difficulty: "Beginner",
      path: "/sorting/selection",
    },
    {
      chapter: "Chapter IV",
      title: "Insertion Sort",
      description: "Build a sorted array one element at a time.",
      complexity: "O(n²)",
      difficulty: "Beginner",
      path: "/sorting/insertion",
    },
    {
      chapter: "Chapter V",
      title: "Merge Sort",
      description: "Master divide and conquer with one of the most important algorithms.",
      complexity: "O(n log n)",
      difficulty: "Intermediate",
      path: "/sorting/merge",
    },
    {
      chapter: "Chapter VI",
      title: "Quick Sort",
      description: "A fast partition-based algorithm used in many real systems.",
      complexity: "O(n log n)",
      difficulty: "Intermediate",
      path: "/sorting/quick",
    },
    {
      chapter: "Chapter VII",
      title: "Heap Sort",
      description: "Sort efficiently using the Heap data structure.",
      complexity: "O(n log n)",
      difficulty: "Intermediate",
      path: "/sorting/heap",
    },
  ];

  return (
    <section id="algorithms" className="mt-32">

      <div className="mx-auto mb-16 max-w-3xl text-center">

        <p className="font-body text-sm font-semibold uppercase tracking-[0.35em] text-[#A07A56]">
          Chapters
        </p>

        <h2 className="font-display mt-4 text-5xl text-[#202020]">
          Algorithm Chapters
        </h2>

        <p className="font-body mt-6 text-lg leading-8 text-[#666]">
          Build intuition with interactive algorithm chapters.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {algorithms.map((algorithm) => (
          <AlgorithmCard
            key={algorithm.title}
            {...algorithm}
          />
        ))}
      </div>

    </section>
  );
}

export default AlgorithmGrid;