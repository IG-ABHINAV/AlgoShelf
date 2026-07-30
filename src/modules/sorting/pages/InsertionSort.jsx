import AlgorithmLayout from "../layouts/AlgorithmLayout";

import AlgorithmHero from "../components/sections/AlgorithmHero";
import OverviewSection from "../components/sections/OverviewSection";
import ComplexitySection from "../components/sections/ComplexitySection";

import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

import { insertionContent } from "../data/insertion";
import { getAlgorithm } from "../utils/getAlgorithm";

export default function InsertionSort() {
  const algorithm = getAlgorithm("insertion");

  return (
    <AlgorithmLayout
      hero={<AlgorithmHero algorithm={algorithm} />}

      visualizer={
        <AlgorithmVisualizer
          algorithm={algorithm}
          pseudocode={insertionContent.pseudocode}
        />
      }

      overview={
        <OverviewSection
          overview={insertionContent.overview}
        />
      }

      theory={null}

      pseudocode={null}

      complexity={
        <ComplexitySection
          algorithm={algorithm}
          complexity={insertionContent.complexity}
        />
      }

      code={null}

      practice={null}

      nextChapter={null}
    />
  );
}