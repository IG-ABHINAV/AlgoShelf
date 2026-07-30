import AlgorithmLayout from "../layouts/AlgorithmLayout";

import AlgorithmHero from "../components/sections/AlgorithmHero";
import OverviewSection from "../components/sections/OverviewSection";
import ComplexitySection from "../components/sections/ComplexitySection";

import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

import { mergeContent } from "../data/merge";
import { getAlgorithm } from "../utils/getAlgorithm";

export default function MergeSort() {
  const algorithm = getAlgorithm("merge");

  return (
    <AlgorithmLayout
      hero={
        <AlgorithmHero
          algorithm={algorithm}
        />
      }

      visualizer={
        <AlgorithmVisualizer
          algorithm={algorithm}
          pseudocode={mergeContent.pseudocode}
        />
      }

      overview={
        <OverviewSection
          overview={mergeContent.overview}
        />
      }

      theory={null}

      pseudocode={null}

      complexity={
        <ComplexitySection
          algorithm={algorithm}
          complexity={mergeContent.complexity}
        />
      }

      code={null}

      practice={null}

      nextChapter={null}
    />
  );
}