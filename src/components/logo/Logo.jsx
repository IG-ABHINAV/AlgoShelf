import LogoMark from "./LogoMark";
import WordMark from "./WordMark";

export default function Logo({
  size = "md",
}) {
  const sizes = {
    sm: {
      icon: "w-8 h-8",
      text: "text-2xl",
      gap: "gap-2",
    },
    md: {
      icon: "w-10 h-10",
      text: "text-3xl",
      gap: "gap-3",
    },
    lg: {
      icon: "w-14 h-14",
      text: "text-5xl",
      gap: "gap-4",
    },
    hero: {
      icon: "w-20 h-20",
      text: "text-6xl",
      gap: "gap-5",
    },
  };

  const current = sizes[size];

  return (
    <div
      className={`flex items-center ${current.gap}`}
    >
      <LogoMark className={current.icon} />

      <WordMark className={current.text} />
    </div>
  );
}