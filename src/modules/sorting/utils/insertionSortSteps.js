export function insertionSortSteps(inputArray) {
  const array = [...inputArray];
  const steps = [];

  let comparisons = 0;
  let shifts = 0;

  steps.push({
    array: [...array],
    comparing: [],
    sorted: [0],
    comparisons,
    swaps: shifts,
    currentLine: 0,

    pass: 1,
    leftIndex: -1,
    rightIndex: -1,

    message: {
      title: "Start",
      description: "The first element is already considered sorted.",
      insight:
        "Insertion Sort grows a sorted portion from left to right.",
    },
  });

  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;

    steps.push({
      array: [...array],
      comparing: [i],
      sorted: Array.from({ length: i }, (_, index) => index),
      comparisons,
      swaps: shifts,
      currentLine: 1,

      pass: i,
      leftIndex: i,
      rightIndex: j,

      message: {
        title: `Pass ${i}`,
        description: `Pick ${key} as the key element.`,
        insight:
          "The key will be inserted into the correct position inside the sorted portion.",
      },
    });

    while (j >= 0) {
      comparisons++;

      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        sorted: Array.from({ length: i }, (_, index) => index),
        comparisons,
        swaps: shifts,
        currentLine: 3,

        pass: i,
        leftIndex: j,
        rightIndex: j + 1,

        message: {
          title: "Compare",
          description: `Compare ${array[j]} with ${key}.`,
          insight:
            "If the previous element is larger, it must move one position to the right.",
        },
      });

      if (array[j] <= key) break;

      array[j + 1] = array[j];
      shifts++;

      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        sorted: Array.from({ length: i }, (_, index) => index),
        comparisons,
        swaps: shifts,
        currentLine: 4,

        pass: i,
        leftIndex: j,
        rightIndex: j + 1,

        message: {
          title: "Shift Right",
          description: `${array[j]} shifts one position to the right.`,
          insight:
            "Insertion Sort shifts larger elements instead of swapping them.",
        },
      });

      j--;
    }

    array[j + 1] = key;

    steps.push({
      array: [...array],
      comparing: [j + 1],
      sorted: Array.from({ length: i + 1 }, (_, index) => index),
      comparisons,
      swaps: shifts,
      currentLine: 6,

      pass: i,
      leftIndex: j + 1,
      rightIndex: i,

      message: {
        title: "Insert Key",
        description: `${key} is inserted into its correct position.`,
        insight:
          "The sorted portion grows by one element after every pass.",
      },
    });
  }

  steps.push({
    array: [...array],
    comparing: [],
    sorted: Array.from({ length: array.length }, (_, index) => index),
    comparisons,
    swaps: shifts,
    currentLine: 7,

    pass: array.length - 1,
    leftIndex: -1,
    rightIndex: -1,

    message: {
      title: "Sorting Complete",
      description:
        "The array has been completely sorted using Insertion Sort.",
      insight:
        "Insertion Sort is stable and performs exceptionally well on nearly sorted data.",
    },
  });

  return steps;
}