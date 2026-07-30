import BackToShelf from "../components/ui/BackToShelf";
import EditorialHeader from "../components/sections/EditorialHeader";

import QuickRead from "../components/sections/QuickRead";
import AlgorithmGrid from "../components/sections/AlgorithmGrid";

function SortingHome() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      {/* Back Navigation */}
      <BackToShelf />

      {/* Editorial Header */}
      <EditorialHeader />

      {/* Foundations (will replace QuickRead later) */}
      <QuickRead />

      {/* Algorithm Collection */}
      <AlgorithmGrid />
    </main>
  );
}

export default SortingHome;