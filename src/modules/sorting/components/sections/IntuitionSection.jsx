export default function IntuitionSection({ intuition }) {
  return (
    <section className="bg-[#F2EDE7]">

      <div className="mx-auto max-w-6xl px-8 py-28">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.45em]
            text-[#A1764E]
          "
        >
          Intuition
        </p>

        <h2
          className="
            mt-6
            font-Cormorant
            text-5xl
            text-[#1F1B18]
          "
        >
          {intuition.heading}
        </h2>

        <p
          className="
            mt-10
            max-w-4xl
            text-xl
            leading-10
            text-[#5F5952]
          "
        >
          {intuition.description}
        </p>

      </div>

    </section>
  );
}