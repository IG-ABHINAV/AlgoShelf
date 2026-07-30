export default function ComplexityCard({
  title,
  value,
  color = "text-[#1F1B18]",
}) {
  return (
    <div className="rounded-2xl border border-[#E7E0D7] bg-white p-6">
      <p className="text-sm uppercase tracking-[0.2em] text-[#8B8378]">
        {title}
      </p>

      <h3 className={`mt-3 text-3xl font-semibold ${color}`}>
        {value}
      </h3>
    </div>
  );
}