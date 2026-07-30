import AlgorithmLayout from "../layouts/AlgorithmLayout";

import AlgorithmHero from "../components/sections/AlgorithmHero";
import OverviewSection from "../components/sections/OverviewSection";
import ComplexitySection from "../components/sections/ComplexitySection";

import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

import { quickContent } from "../data/quick";
import { getAlgorithm } from "../utils/getAlgorithm";

export default function QuickSort() {
  const algorithm = getAlgorithm("quick");

  return (
    <AlgorithmLayout
      hero={<AlgorithmHero algorithm={algorithm} />}

      visualizer={
        <AlgorithmVisualizer
          algorithm={algorithm}
          pseudocode={quickContent.pseudocode}
        />
      }

      overview={
        <OverviewSection
          overview={quickContent.overview}
        />
      }

      theory={null}

      pseudocode={null}

      complexity={
        <ComplexitySection
          algorithm={algorithm}
          complexity={quickContent.complexity}
        />
      }

      code={null}
      practice={null}
      nextChapter={null}
    />
  );
}