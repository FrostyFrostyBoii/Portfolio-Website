export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short description of what the project does and why you built it.",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/username/project-one",
    demo: "https://example.com",
  },
  {
    title: "Project Two",
    description:
      "Another project demonstrating a different set of skills.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/username/project-two",
  },
];
