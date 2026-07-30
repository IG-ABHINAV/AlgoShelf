export const quickContent = {
  overview: {
    heading: "What is Quick Sort?",

    description:
      "Quick Sort is a divide-and-conquer sorting algorithm that chooses a pivot, partitions the array around it, and recursively sorts the remaining subarrays. Its excellent average-case performance makes it one of the fastest and most widely used sorting algorithms.",
  },

  pseudocode: [
    "quickSort(low, high)",
    "if low >= high",
    "    return",
    "pivot = partition()",
    "quickSort(left)",
    "quickSort(right)",
    "partition()",
    "choose last element as pivot",
    "for each element",
    "    if element < pivot",
    "        swap",
    "place pivot",
    "return pivot index",
  ],

  complexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
  },

  applications: [
    "General-purpose sorting",
    "Large datasets",
    "Standard library sorting implementations",
    "Competitive programming",
  ],

  advantages: [
    "Very fast on average",
    "In-place sorting algorithm",
    "Excellent cache performance",
    "Widely used in real-world applications",
  ],

  disadvantages: [
    "Worst-case time complexity is O(n²)",
    "Not a stable sorting algorithm",
    "Performance depends on pivot selection",
  ],
};