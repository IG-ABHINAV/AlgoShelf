export const selectionContent = {
  overview: {
    heading: "What is Selection Sort?",

    description:
      "Selection Sort repeatedly finds the smallest element from the unsorted portion of the array and places it at the beginning. With every pass, the sorted portion grows while the unsorted portion shrinks.",
  },

  pseudocode: [
    "for i = 0 to n - 2",
    "    minIndex = i",
    "    for j = i + 1 to n - 1",
    "        compare arr[j] and arr[minIndex]",
    "        if arr[j] < arr[minIndex]",
    "            minIndex = j",
    "    swap(arr[i], arr[minIndex])",
    "    mark arr[i] as sorted",
  ],

  complexity: {
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },

  applications: [
    "Small datasets",
    "Memory-constrained systems",
    "Educational visualizations",
  ],

  advantages: [
    "Simple to implement",
    "In-place sorting",
    "Performs at most one swap per pass",
  ],

  disadvantages: [
    "Always performs O(n²) comparisons",
    "Not a stable sorting algorithm",
    "Inefficient for large datasets",
  ],
};