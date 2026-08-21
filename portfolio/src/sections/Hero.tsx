import { useEffect, useState } from "react";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-[#14213d]">
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Large structural shape */}
        <div
          className={`absolute -right-24 top-16 transition-all duration-[1400ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-24 -translate-y-8 opacity-0"
          }`}
        >
          <div className="animate-[heroBigSquareFloat_14s_ease-in-out_1.4s_infinite]">
            <div className="h-[520px] w-[420px] rotate-12 bg-[#04070c]" />
          </div>
        </div>

        {/* Orange rectangle */}
        <div
          className={`absolute right-[14%] top-[18%] transition-all delay-100 duration-[1200ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 -translate-y-12 opacity-0"
          }`}
        >
          <div className="h-32 w-56 -rotate-12 bg-[#fca311] animate-[heroFloatSmall_10s_ease-in-out_1.5s_infinite]" />
        </div>

        {/* Deep blue diamond */}
        <div
          className={`absolute right-[30%] top-[42%] transition-all delay-200 duration-[1300ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0"
          }`}
        >
          <div className="h-28 w-28 rotate-45 bg-[#080d19] animate-[heroFloatSmall_12s_ease-in-out_2s_infinite]" />
        </div>

        {/* Grey structural block */}
        <div
          className={`absolute right-[24%] top-[67%] transition-all delay-300 duration-[1200ms] ease-out ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-16 translate-y-8 opacity-0"
          }`}
        >
          <div className="h-20 w-40 rotate-6 bg-[#8a8a8a] animate-[heroFloatSmall_11s_ease-in-out_2.5s_infinite]" />
        </div>

        {/* White outlined square */}
        <div
          className={`absolute right-[12%] top-[55%] transition-all delay-200 duration-[1300ms] ease-out ${
            visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <div className="h-24 w-24 rotate-45 border-[3px] border-white/80 animate-[heroFloatSmall_18s_ease-in-out_2s_infinite]" />
        </div>

        {/* Orange square */}
        <div
          className={`absolute right-[5%] top-[72%] transition-all delay-400 duration-[1200ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-12 opacity-0"
          }`}
        >
          <div className="h-16 w-16 rotate-12 bg-[#fca311] animate-[heroFloatSmall_9s_ease-in-out_2.5s_infinite]" />
        </div>

        {/* Grey outlined rectangle */}
        <div
          className={`absolute right-[38%] top-[15%] transition-all delay-200 duration-[1300ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <div className="h-40 w-24 -rotate-12 border border-[#b8b8b8]/60 animate-[heroFloatSmall_16s_ease-in-out_2s_infinite]" />
        </div>

        {/* Deep blue square */}
        <div
          className={`absolute right-[42%] top-[63%] transition-all delay-500 duration-[1100ms] ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="h-10 w-10 rotate-12 bg-[#0c1425] animate-[heroFloatSmall_8s_ease-in-out_3s_infinite]" />
        </div>

        {/* Triangle */}
        <div
          className={`absolute right-[18%] top-[35%] transition-all delay-200 duration-[1400ms] ease-out ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        >
          <div className="rotate-12 border-l-[45px] border-r-[45px] border-b-[80px] border-l-transparent border-r-transparent border-b-[#04070c] animate-[heroFloatSmall_13s_ease-in-out_2s_infinite]" />
        </div>

        {/* White line */}
        <div
          className={`absolute right-[3%] top-[28%] origin-left transition-all delay-400 duration-[1100ms] ease-out ${
            visible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        >
          <div className="h-1 w-48 rotate-[25deg] bg-white/80" />
        </div>

        {/* Orange line */}
        <div
          className={`absolute right-[35%] top-[72%] origin-top transition-all delay-500 duration-[1100ms] ease-out ${
            visible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <div className="h-32 w-1 rotate-[20deg] bg-[#fca311]" />
        </div>

        {/* Orange diamond */}
        <div
          className={`absolute right-[8%] top-[18%] transition-all delay-500 duration-[1100ms] ease-out ${
            visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="h-8 w-8 rotate-45 border-2 border-[#fca311] animate-[heroFloatSmall_7s_ease-in-out_2s_infinite]" />
        </div>

        {/* Subtle grid */}
        <div
          className={`absolute inset-0 transition-opacity duration-[1800ms] ${
            visible ? "opacity-[0.025]" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14213d] via-[#14213d]/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 py-24 lg:px-6">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className={`mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#fca311] transition-all duration-700 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className={`text-6xl font-bold tracking-[-0.05em] text-white transition-all delay-100 duration-900 ease-out sm:text-7xl md:text-8xl ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            Cyrus Jonker<span className="text-[#fca311]">.</span>
          </h1>

          {/* Role */}
          <h2
            className={`mt-6 text-2xl tracking-tight text-[#e5e5e5] transition-all delay-200 duration-900 ease-out sm:text-3xl ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Full Stack Developer
          </h2>

          {/* Description */}
          <div
            className={`mt-6 flex max-w-xl gap-4 transition-all delay-300 duration-900 ease-out ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <span className="w-0.5 shrink-0 bg-[#fca311]" />

            <p className="text-lg leading-8 text-[#ebebeb]">
              I build thoughtful, reliable, and user-focused applications across the full stack.
            </p>
          </div>

          {/* Actions */}
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all delay-400 duration-900 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="border border-[#fca311] bg-[#fca311] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#fdb541] hover:shadow-[0_0_24px_rgba(252,163,17,0.2)]"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="border border-[#b8b8b8] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white/5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Animation definitions */}
      <style>{`
        @keyframes heroBigSquareFloat {
          0%,
          100% {
            translate: 0 0;
          }

          50% {
            translate: -12px 8px;
          }
        }

        @keyframes heroFloatSmall {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-8px, -10px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}


