import { useEffect, useRef, useState } from "react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full overflow-hidden border-t border-[#04070c] bg-[#14213d]"
    >
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large dark structural block */}
        <div
          className={`absolute -right-24 top-0 h-full w-[32%] bg-[#0c1425] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        />

        {/* Large outlined square */}
        <div
          className={`absolute right-[20%] top-20 h-64 w-64 border-2 border-[#3e67bf]/30 transition-all duration-[1900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-12 opacity-100"
              : "translate-x-16 rotate-0 opacity-0"
          }`}
        />

        {/* Orange block */}
        <div
          className={`absolute right-[8%] top-28 h-20 w-48 bg-[#fca311] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-[-6deg] opacity-100"
              : "translate-x-20 rotate-0 opacity-0"
          }`}
        />

        {/* Small orange square */}
        <div
          className={`absolute bottom-24 right-[28%] h-10 w-10 bg-[#fca311] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-y-0 rotate-45 opacity-100"
              : "translate-y-10 rotate-0 opacity-0"
          }`}
        />

        {/* Grey structural block */}
        <div
          className={`absolute bottom-16 right-[8%] h-24 w-32 bg-[#29447e] transition-all duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-12 translate-y-10 opacity-0"
          }`}
        />

        {/* Vertical line */}
        <div
          className={`absolute right-[32%] top-0 h-full w-px origin-top bg-[#3e67bf]/30 transition-transform duration-[2000ms] ease-out ${
            visible ? "scale-y-100" : "scale-y-0"
          }`}
        />

        {/* Subtle grid */}
        <div
          className={`absolute inset-0 transition-opacity duration-[2200ms] ${
            visible ? "opacity-[0.035]" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className={`mb-6 flex items-center gap-3 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <span
              className={`h-[2px] bg-[#fca311] transition-all duration-[900ms] ease-out ${
                visible ? "w-12" : "w-0"
              }`}
            />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5e5e5]">
              04 — Contact
            </p>
          </div>

          {/* Heading */}
          <h2
            className={`max-w-3xl text-5xl font-bold tracking-[-0.05em] text-white transition-all duration-[1100ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-6xl md:text-7xl ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Let's work
            <br />
            together<span className="text-[#fca311]">.</span>
          </h2>

          {/* Description */}
          <p
            className={`mt-8 max-w-xl text-lg leading-8 text-[#e5e5e5] transition-all duration-[1100ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Have a project, opportunity, or just want to say hello? I'd love
            to hear from you.
          </p>

          {/* Email CTA */}
          <div
            className={`mt-10 transition-all duration-[1100ms] delay-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="mailto:you@example.com"
              className="group inline-flex items-center gap-4 border border-[#fca311] bg-[#fca311] px-6 py-4 text-sm font-semibold text-[#14213d] transition-colors duration-300 hover:bg-[#fdb541]"
            >
              <span>you@example.com</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Secondary contact line */}
          <div
            className={`mt-16 flex items-center gap-4 transition-all duration-[1200ms] delay-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <span
              className={`h-px bg-[#3e67bf] transition-all duration-[900ms] ease-out ${
                visible ? "w-16" : "w-0"
              }`}
            />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#beccea]">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className={`relative z-10 h-px bg-[#fca311] transition-all duration-[1200ms] ease-out ${
          visible ? "w-full" : "w-0"
        }`}
      />

      {/* Reduced motion */}
      <style>{`
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
