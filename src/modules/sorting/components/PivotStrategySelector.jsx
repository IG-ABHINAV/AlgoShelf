export default function PivotStrategySelector({
  pivotStrategy,
  setPivotStrategy,
  disabled,
}) {
  const options = [
    ["last", "Last"],
    ["first", "First"],
    ["middle", "Middle"],
    ["random", "Random"],
    ["median3", "Median of 3"],
  ];

  return (
    <div className="mt-6 border-t border-[#EEE5DB] pt-5">
      <h3 className="text-base font-semibold text-[#1F1B18]">
        Pivot Strategy
      </h3>

      <p className="mt-1 text-sm text-[#8C837B]">
        Choose how Quick Sort selects its pivot.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {options.map(([value, label]) => (
          <button
            key={value}
            disabled={disabled}
            onClick={() => setPivotStrategy(value)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition
              ${
                pivotStrategy === value
                  ? "bg-[#A1764E] text-white border-[#A1764E]"
                  : "bg-white border-[#E8DDD1] text-[#5F5952] hover:border-[#A1764E]"
              }
              disabled:opacity-40`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}