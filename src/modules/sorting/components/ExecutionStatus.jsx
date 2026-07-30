import {
  GitBranch,
  MoveHorizontal,
  Hash,
  Activity,
} from "lucide-react";

export default function ExecutionStatus({
  currentPass,
  totalPasses,
  leftIndex,
  rightIndex,
  message,
}) {
  return (
    <div className="rounded-3xl border border-[#E8DDD1] bg-white p-8">
      <h3 className="font-Cormorant text-3xl text-[#1F1B18]">
        Execution Status
      </h3>

      <p className="mt-2 text-[#6B645D]">
        Live information about the current step of Bubble Sort.
      </p>

      <div className="mt-8 grid gap-4">

        {/* Pass */}

        <div className="flex items-center justify-between rounded-2xl border border-[#EEE5DB] p-4">
          <div className="flex items-center gap-3">
            <GitBranch size={18} className="text-[#A1764E]" />
            <span className="text-[#5F5952]">Current Pass</span>
          </div>

          <span className="font-semibold text-[#1F1B18]">
            {currentPass} / {totalPasses}
          </span>
        </div>

        {/* Indices */}

        <div className="flex items-center justify-between rounded-2xl border border-[#EEE5DB] p-4">
          <div className="flex items-center gap-3">
            <Hash size={18} className="text-[#A1764E]" />
            <span className="text-[#5F5952]">Indices</span>
          </div>

          <span className="font-semibold text-[#1F1B18]">
            {leftIndex >= 0
              ? `${leftIndex} & ${rightIndex}`
              : "--"}
          </span>
        </div>

        {/* Values */}

        <div className="flex items-center justify-between rounded-2xl border border-[#EEE5DB] p-4">
          <div className="flex items-center gap-3">
            <MoveHorizontal size={18} className="text-[#A1764E]" />
            <span className="text-[#5F5952]">Operation</span>
          </div>

          <span className="font-semibold text-[#1F1B18]">
            {message.title}
          </span>
        </div>

        {/* Status */}

        <div className="flex items-center justify-between rounded-2xl border border-[#EEE5DB] p-4">
          <div className="flex items-center gap-3">
            <Activity size={18} className="text-[#A1764E]" />
            <span className="text-[#5F5952]">State</span>
          </div>

          <span className="font-semibold text-[#1F1B18]">
            {leftIndex >= 0 ? "Running" : "Waiting"}
          </span>
        </div>

      </div>
    </div>
  );
}