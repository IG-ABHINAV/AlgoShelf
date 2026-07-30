export const mergeContent = {
    overview: {
        heading: "What is Merge Sort?",

        description:
            "Merge Sort is a divide-and-conquer algorithm that repeatedly splits an array into smaller halves, sorts each half recursively, and then merges the sorted halves back together. It guarantees efficient performance even for very large datasets.",
    },

    pseudocode: [
        "mergeSort(array)",
        "if array.length ≤ 1",
        "    return array",
        "mid = array.length / 2",
        "left = mergeSort(left half)",
        "right = mergeSort(right half)",
        "return merge(left, right)",
    ],

    complexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
        space: "O(n)",
    },

    applications: [
        "Large datasets",
        "External sorting",
        "Linked lists",
    ],

    advantages: [
        "Guaranteed O(n log n) performance",
        "Stable sorting algorithm",
        "Excellent for large datasets",
    ],

    disadvantages: [
        "Requires additional memory",
        "Recursive implementation",
        "Slower than simpler algorithms on tiny arrays",
    ],
};