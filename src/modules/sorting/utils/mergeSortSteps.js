export function mergeSortSteps(inputArray) {
    const array = [...inputArray];
    const steps = [];

    let comparisons = 0;
    let writes = 0;
    let visibleSegments = [];

    function recordStep({
        comparing = [],
        sorted = [],
        currentLine = 0,
        currentLevel = 0,
        activeLeft = -1,
        activeRight = -1,
        phase = "divide",
        title = "",
        description = "",
        insight = "",
    }) {
        steps.push({
            array: [...array],
            comparing,
            sorted,
            comparisons,
            swaps: writes,

            currentLine,
            currentPass: currentLevel,

            leftIndex: activeLeft,
            rightIndex: activeRight,

            visibleSegments: visibleSegments.map(([start, end]) => [
                start,
                end,
            ]),

            phase,

            message: {
                title,
                description,
                insight,
            },
        });
    }

    function mergeSort(left, right, level = 0) {
        if (left >= right) return;

        // Replace the current segment with its two children
        const segmentIndex = visibleSegments.findIndex(
            ([start, end]) => start === left && end === right
        );

        if (segmentIndex !== -1) {
            const mid = Math.floor((left + right) / 2);

            visibleSegments.splice(
                segmentIndex,
                1,
                [left, mid],
                [mid + 1, right]
            );
        }

        recordStep({
            currentLine: 3,
            currentLevel: level,
            activeLeft: left,
            activeRight: right,
            phase: "divide",
            title: "Divide",
            description: `Split indices ${left} to ${right}.`,
            insight:
                "Merge Sort repeatedly divides the problem into smaller halves.",
        });

        const mid = Math.floor((left + right) / 2);

        mergeSort(left, mid, level + 1);
        mergeSort(mid + 1, right, level + 1);

        merge(left, mid, right, level);
    }

    function merge(left, mid, right, level) {

        // Replace the two child segments with their merged parent
        const leftSegmentIndex = visibleSegments.findIndex(
            ([start, end]) => start === left && end === mid
        );

        const rightSegmentIndex = visibleSegments.findIndex(
            ([start, end]) => start === mid + 1 && end === right
        );

        if (leftSegmentIndex !== -1 && rightSegmentIndex !== -1) {
            const first = Math.max(leftSegmentIndex, rightSegmentIndex);
            const second = Math.min(leftSegmentIndex, rightSegmentIndex);

            visibleSegments.splice(first, 1);
            visibleSegments.splice(second, 1);

            visibleSegments.splice(second, 0, [left, right]);
        }

        const leftHalf = array.slice(left, mid + 1);
        const rightHalf = array.slice(mid + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftHalf.length && j < rightHalf.length) {
            comparisons++;

            recordStep({
                comparing: [left + i, mid + 1 + j],
                currentLine: 6,
                currentLevel: level,
                activeLeft: left,
                activeRight: right,
                phase: "merge",
                title: "Compare",
                description: `Compare ${leftHalf[i]} and ${rightHalf[j]}.`,
                insight:
                    "Choose the smaller element to keep the merged array sorted.",
            });

            if (leftHalf[i] <= rightHalf[j]) {
                array[k] = leftHalf[i];
                i++;
            } else {
                array[k] = rightHalf[j];
                j++;
            }

            writes++;

            recordStep({
                sorted: Array.from(
                    { length: k - left + 1 },
                    (_, idx) => left + idx
                ),
                currentLine: 6,
                currentLevel: level,
                activeLeft: left,
                activeRight: right,
                phase: "merge",
                title: "Merge",
                description: `Write ${array[k]} into position ${k}.`,
                insight:
                    "The merged portion grows in sorted order one element at a time.",
            });

            k++;
        }

        while (i < leftHalf.length) {
            array[k] = leftHalf[i];
            i++;
            writes++;

            recordStep({
                sorted: Array.from(
                    { length: k - left + 1 },
                    (_, idx) => left + idx
                ),
                currentLine: 6,
                currentLevel: level,
                activeLeft: left,
                activeRight: right,
                phase: "merge",
                title: "Merge",
                description: `Write ${array[k]} into position ${k}.`,
                insight:
                    "Remaining elements from the left half are copied.",
            });

            k++;
        }

        while (j < rightHalf.length) {
            array[k] = rightHalf[j];
            j++;
            writes++;

            recordStep({
                sorted: Array.from(
                    { length: k - left + 1 },
                    (_, idx) => left + idx
                ),
                currentLine: 6,
                currentLevel: level,
                activeLeft: left,
                activeRight: right,
                phase: "merge",
                title: "Merge",
                description: `Write ${array[k]} into position ${k}.`,
                insight:
                    "Remaining elements from the right half are copied.",
            });

            k++;
        }
    }

    // Initial visible segment
    visibleSegments = [[0, array.length - 1]];

    recordStep({
        currentLine: 0,
        currentLevel: 0,
        phase: "divide",
        title: "Start",
        description: "Begin Merge Sort.",
        insight:
            "The array will be recursively divided and merged back together.",
    });

    mergeSort(0, array.length - 1);

    recordStep({
        sorted: Array.from({ length: array.length }, (_, i) => i),
        currentLine: 7,
        currentLevel: 0,
        phase: "merge",
        title: "Sorting Complete",
        description: "The array has been completely sorted.",
        insight:
            "Merge Sort guarantees O(n log n) time complexity and is stable.",
    });

    return steps;
}