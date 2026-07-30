import AlgorithmLayout from "../layouts/AlgorithmLayout";

import AlgorithmHero from "../components/sections/AlgorithmHero";
import OverviewSection from "../components/sections/OverviewSection";
import ComplexitySection from "../components/sections/ComplexitySection";

import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

import { heapContent } from "../data/heap";
import { getAlgorithm } from "../utils/getAlgorithm";

export default function HeapSort() {
  const algorithm = getAlgorithm("heap");

  return (
    <AlgorithmLayout
      hero={<AlgorithmHero algorithm={algorithm} />}

      visualizer={
        <AlgorithmVisualizer
          algorithm={algorithm}
          pseudocode={heapContent.pseudocode}
        />
      }

      overview={
        <OverviewSection
          overview={heapContent.overview}
        />
      }

      theory={null}

      pseudocode={null}

      complexity={
        <ComplexitySection
          algorithm={algorithm}
          complexity={heapContent.complexity}
        />
      }

      code={null}
      practice={null}
      nextChapter={null}
    />
  );
}