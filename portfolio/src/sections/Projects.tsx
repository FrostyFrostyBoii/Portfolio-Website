import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
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
      id="projects"
      className="relative w-full overflow-hidden bg-[#14213d]"
    >
      {/* Geometric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Large structural block */}
        <div
          className={`absolute -left-32 top-0 h-full w-[24%] bg-[#0c1425] transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
          }`}
        />

        {/* Orange horizontal block */}
        <div
          className={`absolute right-[8%] top-20 h-16 w-48 bg-[#fca311] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-[-8deg] opacity-100"
              : "translate-x-16 rotate-0 opacity-0"
          }`}
        />

        {/* Large outlined square */}
        <div
          className={`absolute right-[18%] top-32 h-44 w-44 border-2 border-[#7e99d5]/30 transition-all duration-[1900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 rotate-12 opacity-100"
              : "translate-x-20 rotate-0 opacity-0"
          }`}
        />

        {/* Deep blue square */}
        <div
          className={`absolute bottom-20 right-[6%] h-36 w-36 bg-[#04070c] transition-all duration-[1700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-16 translate-y-10 opacity-0"
          }`}
        />

        {/* Small orange square */}
        <div
          className={`absolute bottom-28 right-[28%] h-8 w-8 bg-[#fca311] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            visible
              ? "translate-y-0 rotate-45 opacity-100"
              : "translate-y-8 rotate-0 opacity-0"
          }`}
        />

        {/* Structural line */}
        <div
          className={`absolute left-[18%] top-0 h-full w-px origin-top bg-[#3e67bf]/20 transition-transform duration-[2000ms] ease-out ${
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
      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        {/* Section heading */}
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

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5e5e5]">
              02 — Projects
            </p>
          </div>

          <h2 className="text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl">
            Things I've built<span className="text-[#fca311]">.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                index === 0
                  ? "duration-[1000ms] delay-200"
                  : index === 1
                    ? "duration-[1100ms] delay-300"
                    : index === 2
                      ? "duration-[1200ms] delay-[400ms]"
                      : "duration-[1300ms] delay-500"
              } ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Crisp animated bottom divider */}
      <div
        className={`absolute bottom-0 left-0 h-px bg-[#fca311] transition-all duration-[1200ms] ease-out ${
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




