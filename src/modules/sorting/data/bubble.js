export const bubbleContent = {
  overview: {
    heading: "What is Bubble Sort?",

    description:
      "Bubble Sort repeatedly compares adjacent elements and swaps them whenever they are in the wrong order. Although it is one of the simplest sorting algorithms, it introduces the core idea of gradually building order through repeated local improvements.",
  },
  pseudocode: [
    "for i = 0 to n - 1",
    "    swapped = false",
    "    for j = 0 to n - i - 1",
    "        compare arr[j] and arr[j + 1]",
    "        if arr[j] > arr[j + 1]",
    "            swap(arr[j], arr[j + 1])",
    "            swapped = true",
    "    mark arr[n - i - 1] as sorted",
    "    if swapped == false",
    "        break",
  ],

  complexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
  },

  applications: [
    "Teaching sorting fundamentals",
    "Nearly sorted datasets",
    "Educational visualizations",
  ],

  advantages: [
    "Simple to understand",
    "Stable sorting algorithm",
    "In-place sorting",
  ],

  disadvantages: [
    "Very slow on large datasets",
    "Performs many unnecessary swaps",
  ],
};