export const algorithms = [
  {
    id: "bubble",

    chapter: "01",

    title: "Bubble Sort",

    subtitle: "Small swaps. Big order.",

    takeaways: [
      "Adjacent elements are repeatedly compared and swapped until the array is sorted.",
      "Each complete pass places the largest unsorted element in its final position.",
      "If a pass finishes without any swaps, the array is already sorted.",
    ],

    difficulty: "Easy",

    readingTime: "6 min",

    stable: true,

    inPlace: true,

    recursive: false,

    best: "O(n)",

    average: "O(n²)",

    worst: "O(n²)",

    space: "O(1)",

    next: "selection",

    previous: null,

    color: "#A1764E",
  },

  {
    id: "selection",

    chapter: "02",

    title: "Selection Sort",

    subtitle: "Find the minimum. Place it forever.",

    takeaways: [
      "Each pass selects the smallest element from the unsorted portion.",
      "The selected minimum is placed in its final sorted position with one swap.",
      "Selection Sort always performs O(n²) comparisons, regardless of the input order.",
    ],

    difficulty: "Easy",

    readingTime: "7 min",

    stable: false,

    inPlace: true,

    recursive: false,

    best: "O(n²)",

    average: "O(n²)",

    worst: "O(n²)",

    space: "O(1)",

    previous: "bubble",

    next: "insertion",

    color: "#9C6B53",
  },

  {
    id: "insertion",

    chapter: "03",

    title: "Insertion Sort",

    subtitle: "Build a sorted hand, one card at a time.",

    takeaways: [
      "The sorted portion grows one element at a time from left to right.",
      "Each new element is inserted into its correct position by shifting larger elements.",
      "Insertion Sort is efficient for small or nearly sorted datasets.",
    ],

    difficulty: "Easy",

    readingTime: "8 min",

    stable: true,

    inPlace: true,

    recursive: false,

    best: "O(n)",

    average: "O(n²)",

    worst: "O(n²)",

    space: "O(1)",

    previous: "selection",

    next: "merge",

    color: "#A1764E",
  },

  {
    id: "merge",

    chapter: "04",

    title: "Merge Sort",

    subtitle: "Divide, conquer, and merge efficiently.",

    takeaways: [
      "The array is repeatedly divided into smaller halves until each subarray contains a single element.",
      "Sorted subarrays are merged together to build larger sorted sections.",
      "Its divide-and-conquer strategy guarantees consistent O(n log n) performance.",
    ],

    difficulty: "Medium",

    readingTime: "10 min",

    stable: true,

    inPlace: false,

    recursive: true,

    best: "O(n log n)",

    average: "O(n log n)",

    worst: "O(n log n)",

    space: "O(n)",

    previous: "insertion",

    next: "quick",

    color: "#6366F1",
  },

  {
    id: "quick",

    chapter: "05",

    title: "Quick Sort",

    subtitle: "Choose a pivot. Split the chaos.",

    takeaways: [
      "Each partition places one pivot in its final sorted position.",
      "The algorithm recursively sorts the left and right partitions.",
      "Good pivot selection leads to excellent average-case performance.",
    ],

    difficulty: "Medium",

    readingTime: "11 min",

    stable: false,

    inPlace: true,

    recursive: true,

    best: "O(n log n)",

    average: "O(n log n)",

    worst: "O(n²)",

    space: "O(log n)",

    previous: "merge",

    next: "heap",

    color: "#7B5D99",
  },

  {
    id: "heap",

    chapter: "06",

    title: "Heap Sort",

    subtitle: "Order through a binary heap.",

    takeaways: [
      "A binary heap efficiently identifies the largest (or smallest) element.",
      "The heap is rebuilt after each extraction to maintain its properties.",
      "Heap Sort guarantees O(n log n) performance while sorting in place.",
    ],

    difficulty: "Hard",

    readingTime: "12 min",

    stable: false,

    inPlace: true,

    recursive: false,

    best: "O(n log n)",

    average: "O(n log n)",

    worst: "O(n log n)",

    space: "O(1)",

    previous: "quick",

    next: null,

    color: "#C18D5C",
  },
];