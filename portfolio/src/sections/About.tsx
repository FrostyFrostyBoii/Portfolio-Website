import { useEffect, useRef, useState } from "react";

export function About() {
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
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-b border-[#b8b8b8] bg-[#e5e5e5]"
    >
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large structural panel */}
        <div
          className={`absolute -right-32 top-0 h-full w-[28%] bg-[#d6d6d6] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
        />

        {/* Orange accent block */}
        <div
          className={`absolute right-[18%] top-20 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-45 opacity-100"
              : "translate-x-16 rotate-[55deg] opacity-0"
          }`}
        >
          <div className="h-24 w-24 bg-[#fca311]/90" />
        </div>

        {/* Dark blue square */}
        <div
          className={`absolute bottom-20 right-[8%] transition-all duration-[1900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-16 translate-y-8 opacity-0"
          }`}
        >
          <div className="h-32 w-32 bg-[#14213d]" />
        </div>

        {/* Fine structural line */}
        <div
          className={`absolute right-[12%] top-0 h-full w-px origin-top bg-[#b8b8b8]/60 transition-transform duration-[2000ms] ease-out ${
            visible ? "scale-y-100" : "scale-y-0"
          }`}
        />

        {/* Small grey square */}
        <div
          className={`absolute bottom-16 right-[32%] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-y-0 rotate-12 opacity-100"
              : "translate-y-8 rotate-0 opacity-0"
          }`}
        >
          <div className="h-8 w-8 border-2 border-[#8a8a8a]" />
        </div>

        {/* Subtle grid */}
        <div
          className={`absolute inset-0 transition-opacity duration-[2200ms] ${
            visible ? "opacity-[0.025]" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              "linear-gradient(#14213d 1px, transparent 1px), linear-gradient(90deg, #14213d 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 lg:px-6 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Section heading */}
          <div>
            <div
              className={`mb-6 flex items-center gap-3 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <span className="h-[2px] w-12 bg-[#fca311]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14213d]">
                01 — About
              </p>
            </div>

            <h2
              className={`max-w-md text-5xl font-bold tracking-[-0.04em] text-[#14213d] transition-all delay-100 duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-6xl ${
                visible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              About me<span className="text-[#fca311]">.</span>
            </h2>
          </div>

          {/* Content */}
          <div
            className={`relative max-w-2xl transition-all delay-200 duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            {/* Vertical accent */}
            <div
              className={`absolute -left-5 top-1 bottom-1 w-[2px] origin-top bg-[#fca311] transition-transform delay-300 duration-[1200ms] ease-out ${
                visible ? "scale-y-100" : "scale-y-0"
              }`}
            />

            <div className="space-y-7 text-lg leading-8 text-[#333333]">
              <p>
                I'm a full-stack developer focused on building useful, reliable
                applications from the user interface to the underlying systems that
                power them.
              </p>

              <p>
                I enjoy working across the stack, designing clean architectures,
                developing intuitive experiences, and solving complex problems with
                maintainable code.
              </p>
            </div>

            {/* Metadata */}
            <div
              className={`mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#b8b8b8] pt-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#666666] transition-all delay-400 duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span>Frontend</span>
              <span>Backend</span>
              <span>Software Architecture</span>
            </div>
          </div>
        </div>
      </div>

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





