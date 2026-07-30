export function selectionSortSteps(inputArray) {
  const array = [...inputArray];
  const steps = [];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    // Start of Pass
    steps.push({
      array: [...array],
      comparing: [],
      sorted: Array.from({ length: i }, (_, index) => index),
      comparisons,
      swaps,
      currentLine: 0,

      pass: i + 1,
      leftIndex: i,
      rightIndex: minIndex,

      message: {
        title: `Pass ${i + 1}`,
        description: `Searching for the smallest element from index ${i} onward.`,
        insight:
          "Selection Sort repeatedly finds the minimum element in the unsorted region.",
      },
    });

    for (let j = i + 1; j < array.length; j++) {
      comparisons++;

      // Compare current minimum with current element
      steps.push({
        array: [...array],
        comparing: [minIndex, j],
        sorted: Array.from({ length: i }, (_, index) => index),
        comparisons,
        swaps,
        currentLine: 3,

        pass: i + 1,
        leftIndex: minIndex,
        rightIndex: j,

        message: {
          title: "Comparing Elements",
          description: `Compare current minimum ${array[minIndex]} with ${array[j]}.`,
          insight:
            "The algorithm keeps track of the smallest value seen so far.",
        },
      });

      if (array[j] < array[minIndex]) {
        minIndex = j;

        steps.push({
          array: [...array],
          comparing: [minIndex],
          sorted: Array.from({ length: i }, (_, index) => index),
          comparisons,
          swaps,
          currentLine: 4,

          pass: i + 1,
          leftIndex: i,
          rightIndex: minIndex,

          message: {
            title: "New Minimum Found",
            description: `${array[minIndex]} becomes the new minimum.`,
            insight:
              "Selection Sort remembers the position of the smallest element instead of swapping immediately.",
          },
        });
      }
    }

    if (minIndex !== i) {
      const left = array[i];
      const right = array[minIndex];

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      swaps++;

      steps.push({
        array: [...array],
        comparing: [i, minIndex],
        sorted: Array.from({ length: i }, (_, index) => index),
        comparisons,
        swaps,
        currentLine: 6,

        pass: i + 1,
        leftIndex: i,
        rightIndex: minIndex,

        message: {
          title: "Swap Minimum",
          description: `${right} is swapped with ${left}.`,
          insight:
            "Unlike Bubble Sort, Selection Sort performs at most one swap per pass.",
        },
      });
    }

    // End of Pass
    steps.push({
      array: [...array],
      comparing: [],
      sorted: Array.from({ length: i + 1 }, (_, index) => index),
      comparisons,
      swaps,
      currentLine: 7,

      pass: i + 1,
      leftIndex: -1,
      rightIndex: -1,

      message: {
        title: "Pass Complete",
        description: `${array[i]} is now in its final sorted position.`,
        insight:
          "After every pass, one more element is permanently placed in its correct position.",
      },
    });
  }

  // Final Step
  steps.push({
    array: [...array],
    comparing: [],
    sorted: Array.from({ length: array.length }, (_, index) => index),
    comparisons,
    swaps,
    currentLine: 8,

    pass: array.length - 1,
    leftIndex: -1,
    rightIndex: -1,

    message: {
      title: "Sorting Complete",
      description:
        "The array has been completely sorted using Selection Sort.",
      insight:
        "Selection Sort always performs the same number of comparisons regardless of the initial order.",
    },
  });

  return steps;
}