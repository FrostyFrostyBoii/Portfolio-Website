import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden border border-[#b8b8b8] bg-[#f5f5f5] p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#14213d]">
      {/* Geometric accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rotate-45 border border-[#14213d]/[0.06] bg-[#e5e5e5] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:translate-y-2"
      />

      {/* Orange corner accent */}
      <div className="absolute right-0 top-0 h-1 w-16 bg-[#fca311] transition-all duration-500 group-hover:w-24" />

      {/* Project metadata */}
      <div className="relative z-10 mb-8 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a8a8a]">
          Project
        </span>

        <span className="h-px w-10 bg-[#b8b8b8] transition-all duration-300 group-hover:w-16 group-hover:bg-[#fca311]" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold tracking-[-0.03em] text-[#14213d]">
        {project.title}
        <span className="text-[#fca311]">.</span>
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 max-w-xl text-[15px] leading-7 text-[#666666]">
        {project.description}
      </p>

      {/* Technologies */}
      <ul className="relative z-10 mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="border border-[#d6d6d6] bg-[#e5e5e5] px-2.5 py-1 text-xs font-medium text-[#14213d] transition-colors duration-300 group-hover:border-[#b8b8b8]"
          >
            {technology}
          </li>
        ))}
      </ul>

      {/* Links */}
      {(project.github || project.demo) && (
        <div className="relative z-10 mt-8 flex items-center gap-6 border-t border-[#d6d6d6] pt-5 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 font-semibold text-[#14213d] transition-colors duration-200 hover:text-[#fca311]"
            >
              GitHub
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group/link flex items-center gap-2 font-semibold text-[#14213d] transition-colors duration-200 hover:text-[#fca311]"
            >
              Live Demo
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#fca311] transition-all duration-500 ease-out group-hover:w-full" />
    </article>
  );
}


