export function bubbleSortSteps(inputArray) {
  const array = [...inputArray];

  const steps = [];

  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    // Start of Pass
    steps.push({
      array: [...array],
      comparing: [],
      sorted: [],
      comparisons,
      swaps,
      currentLine: 0,

      pass: i + 1,
      leftIndex: -1,
      rightIndex: -1,

      message: {
        title: `Pass ${i + 1}`,
        description: `Starting pass ${i + 1}. Bubble Sort will compare each adjacent pair of elements.`,
        insight:
          "Each pass pushes the largest unsorted element toward the end of the array.",
      },
    });

    for (let j = 0; j < array.length - i - 1; j++) {
      comparisons++;

      // Comparing
      steps.push({
        array: [...array],
        comparing: [j, j + 1],
        sorted: [],
        comparisons,
        swaps,
        currentLine: 3,

        pass: i + 1,
        leftIndex: j,
        rightIndex: j + 1,

        message: {
          title: "Comparing Adjacent Elements",
          description: `${array[j]} is compared with ${array[j + 1]}.`,
          insight:
            "Bubble Sort only compares neighboring elements. If the left value is larger, they will be swapped.",
        },
      });

      if (array[j] > array[j + 1]) {
        const left = array[j];
        const right = array[j + 1];

        [array[j], array[j + 1]] = [right, left];

        swaps++;
        swapped = true;

        // Swapping
        steps.push({
          array: [...array],
          comparing: [j, j + 1],
          sorted: [],
          comparisons,
          swaps,
          currentLine: 5,

          pass: i + 1,
          leftIndex: j,
          rightIndex: j + 1,

          message: {
            title: "Swap Required",
            description: `${left} is greater than ${right}, so the two elements exchange places.`,
            insight:
              "Larger elements gradually 'bubble' toward the end of the array.",
          },
        });
      } else {
        // No Swap
        steps.push({
          array: [...array],
          comparing: [j, j + 1],
          sorted: [],
          comparisons,
          swaps,
          currentLine: 5,

          pass: i + 1,
          leftIndex: j,
          rightIndex: j + 1,

          message: {
            title: "Already in Order",
            description: `${array[j]} is smaller than ${array[j + 1]}, so no swap is needed.`,
            insight:
              "Correctly ordered pairs are left untouched, reducing unnecessary work.",
          },
        });
      }
    }

    // End of Pass
    steps.push({
      array: [...array],
      comparing: [],
      sorted: Array.from(
        { length: i + 1 },
        (_, index) => array.length - 1 - index
      ),
      comparisons,
      swaps,
      currentLine: 7,

      pass: i + 1,
      leftIndex: -1,
      rightIndex: -1,

      message: {
        title: "Pass Complete",
        description: `${array[array.length - 1 - i]} is now in its final sorted position.`,
        insight:
          "After every pass, one more element is guaranteed to be permanently sorted.",
      },
    });

    if (!swapped) {
      steps.push({
        array: [...array],
        comparing: [],
        sorted: Array.from(
          { length: array.length },
          (_, index) => index
        ),
        comparisons,
        swaps,
        currentLine: 8,

        pass: i + 1,
        leftIndex: -1,
        rightIndex: -1,

        message: {
          title: "Sorting Complete",
          description:
            "No swaps occurred during this pass, so the array is already sorted.",
          insight:
            "Bubble Sort can stop early when a complete pass finishes without any swaps, improving performance on nearly sorted arrays.",
        },
      });

      break;
    }
  }

  return steps;
}