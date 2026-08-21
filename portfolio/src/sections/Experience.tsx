import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Company Name",
    period: "2024 — Present",
    description:
      "Briefly describe what you worked on, what you were responsible for, and the impact you had.",
  },
  {
    role: "Previous Role",
    company: "Previous Company",
    period: "2022 — 2024",
    description:
      "Briefly describe your responsibilities, projects, and the value you brought to the team.",
  },
];

export function Experience() {
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
      id="experience"
      className="relative w-full overflow-hidden border-b border-[#b8b8b8] bg-[#e5e5e5]"
    >
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Structural panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[18%] bg-[#d6d6d6] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-16 opacity-0"
          }`}
        />

        {/* Dark blue block */}
        <div
          className={`absolute right-[10%] top-24 h-28 w-28 bg-[#14213d] transition-all duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-12 -translate-y-8 opacity-0"
          }`}
        />

        {/* Orange accent */}
        <div
          className={`absolute right-[24%] top-16 h-12 w-32 bg-[#fca311] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-[-6deg] opacity-100"
              : "translate-x-16 rotate-0 opacity-0"
          }`}
        />

        {/* Small outlined square */}
        <div
          className={`absolute bottom-24 right-[20%] h-12 w-12 border-2 border-[#8a8a8a] transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-y-0 rotate-45 opacity-100"
              : "translate-y-10 rotate-0 opacity-0"
          }`}
        />

        {/* Structural vertical line */}
        <div
          className={`absolute right-[18%] top-0 h-full w-px origin-top bg-[#b8b8b8] transition-transform duration-[2000ms] ease-out ${
            visible ? "scale-y-100" : "scale-y-0"
          }`}
        />

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
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        {/* Heading */}
        <div
          className={`mb-16 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              className={`h-[2px] bg-[#fca311] transition-all duration-[900ms] ease-out ${
                visible ? "w-12" : "w-0"
              }`}
            />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14213d]">
              03 — Experience
            </p>
          </div>

          <h2 className="text-5xl font-bold tracking-[-0.04em] text-[#14213d] sm:text-6xl">
            Experience<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        {/* Experience list */}
        <div className="max-w-5xl">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className={`relative grid gap-10 border-t border-[#b8b8b8] py-10 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid-cols-[1fr_180px_1.5fr] lg:gap-16 ${
                index === 0
                  ? "duration-[1100ms] delay-200"
                  : "duration-[1200ms] delay-300"
              } ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Role */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#14213d]">
                  {experience.role}
                </h3>

                <p className="mt-2 text-base font-medium text-[#666666]">
                  {experience.company}
                </p>
              </div>

              {/* Date */}
              <div className="lg:text-right">
                <span className="inline-block border border-[#b8b8b8] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#666666]">
                  {experience.period}
                </span>
              </div>

              {/* Description */}
              <div className="relative">
                <div
                  className={`absolute -left-6 top-1 bottom-1 hidden w-[2px] origin-top bg-[#fca311] transition-transform duration-[900ms] ease-out lg:block ${
                    visible ? "scale-y-100" : "scale-y-0"
                  }`}
                />

                <p className="text-lg leading-8 text-[#333333]">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
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

