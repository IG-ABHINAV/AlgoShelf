export default function WordMark({
  className = "",
}) {
  return (
    <span
      className={`
        brand-font
        font-bold
        tracking-[-0.03em]
        leading-none
        select-none
        ${className}
      `}
    >
      <span className="text-[#1F1B18]">
        Algo
      </span>

      <span className="text-[#A1764E]">
        Shelf
      </span>
    </span>
  );
}