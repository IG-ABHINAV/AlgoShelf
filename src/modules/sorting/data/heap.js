export const heapContent = {
    overview: {
        heading: "What is Heap Sort?",

        description:
            "Heap Sort is a comparison-based sorting algorithm that first organizes the array into a Max Heap. It repeatedly removes the largest element from the heap, places it at the end of the array, and restores the heap property until the entire array is sorted.",
    },

    pseudocode: [
        "buildMaxHeap(arr)",                    // 0
        "for each non-leaf node",               // 1
        "    inspect current node",             // 2
        "    compare left child",               // 3
        "    compare right child",              // 4
        "    swap with largest child",          // 5
        "",                                     // 6 (spacing)
        "extract maximum element",              // 7
        "place maximum in sorted position",     // 8
        "heapify reduced heap",                 // 9
    ],

  complexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(1)",
    },

    applications: [
        "Priority queues",
        "Scheduling systems",
        "Finding the largest or smallest elements",
        "Memory-constrained applications",
        "Efficient in-place sorting",
    ],

    advantages: [
        "Guaranteed O(n log n) time complexity",
        "In-place sorting algorithm",
        "No worst-case performance degradation",
        "Suitable for large datasets",
    ],

    disadvantages: [
        "Not a stable sorting algorithm",
        "More complex than Bubble or Insertion Sort",
        "Typically slower than Quick Sort in practice because of poorer cache locality",
    ],
};