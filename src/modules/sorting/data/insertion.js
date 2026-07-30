export const insertionContent = {
  overview: {
    heading: "What is Insertion Sort?",

    description:
      "Insertion Sort builds a sorted portion of the array one element at a time. Starting from the second element, it picks the current value, shifts larger elements in the sorted portion to the right, and inserts the value into its correct position.",
  },

  pseudocode: [
    "for i = 1 to n - 1",
    "    key = arr[i]",
    "    j = i - 1",
    "    while j >= 0 and arr[j] > key",
    "        arr[j + 1] = arr[j]",
    "        j--",
    "    arr[j + 1] = key",
  ],

  complexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },

  applications: [
    "Nearly sorted datasets",
    "Small datasets",
    "Online sorting as new elements arrive",
  ],

  advantages: [
    "Simple to implement",
    "Stable sorting algorithm",
    "Efficient for small or nearly sorted arrays",
  ],

  disadvantages: [
    "Quadratic time complexity in the average and worst cases",
    "Inefficient for large datasets",
    "Requires shifting elements during insertion",
  ],
};