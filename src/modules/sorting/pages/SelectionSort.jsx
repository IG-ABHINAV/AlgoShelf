import AlgorithmLayout from "../layouts/AlgorithmLayout";

import AlgorithmHero from "../components/sections/AlgorithmHero";
import OverviewSection from "../components/sections/OverviewSection";
import ComplexitySection from "../components/sections/ComplexitySection";

import AlgorithmVisualizer from "../components/AlgorithmVisualizer";

import { selectionContent } from "../data/selection";
import { getAlgorithm } from "../utils/getAlgorithm";

export default function SelectionSort() {
  const algorithm = getAlgorithm("selection");

  return (
    <AlgorithmLayout
      hero={<AlgorithmHero algorithm={algorithm} />}
      visualizer={
        <AlgorithmVisualizer
          algorithm={algorithm}
          pseudocode={selectionContent.pseudocode}
        />
      }
      overview={
        <OverviewSection
          overview={selectionContent.overview}
        />
      }
      theory={null}
      pseudocode={null}
      complexity={
        <ComplexitySection
          algorithm={algorithm}
          complexity={selectionContent.complexity}
        />
      }
      code={null}
      practice={null}
      nextChapter={null}
    />
  );
}