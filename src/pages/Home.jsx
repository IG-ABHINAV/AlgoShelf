import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Bookshelf from "../components/home/Bookshelf";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToBookshelf");

    if (shouldScroll) {
      requestAnimationFrame(() => {
        document.getElementById("bookshelf")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        sessionStorage.removeItem("scrollToBookshelf");
      });
    }
  }, []);
  return (
    <div className="min-h-screen bg-[#F7F5F2] overflow-x-hidden">
      {/* Background Decorations */}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Warm Glow */}

        <div
          className="
            absolute
            top-[-240px]
            left-1/2
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-[#F2E7D7]
            opacity-60
            blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            top-[35%]
            left-[-180px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#EFE5D6]
            opacity-40
            blur-[120px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-[10%]
            right-[-160px]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#F4EBDF]
            opacity-40
            blur-[120px]
          "
        />

        {/* Soft Grain Overlay */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
            [background-size:18px_18px]
          "
        />
      </div>

      {/* Navbar */}

      <Navbar />

      {/* Hero */}

      <main>
        <Hero />

        {/* Library */}

        <Bookshelf />
      </main>

    </div>
  );
}