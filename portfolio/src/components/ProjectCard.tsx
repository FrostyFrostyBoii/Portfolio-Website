import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-violet-500/50">
      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="mt-4 leading-7 text-zinc-500">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex gap-5 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-violet-400 hover:text-violet-300"
          >
            GitHub →
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-violet-400 hover:text-violet-300"
          >
            Live Demo →
          </a>
        )}
      </div>
    </article>
  );
}

