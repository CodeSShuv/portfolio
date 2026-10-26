
import "./css/project.css";

const projects = [
  {
    name: "Issue Management API",
    directory: "issue-management-api",
    description:
      "A backend API for managing tickets, users, departments, and replies.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    status: "In Development",
    github: "https://github.com/CodeSShuv/issue-tracking-api",
    demo: null,
  },
  {
    name: "Developer Portfolio",
    directory: "developer-portfolio",
    description:
      "A terminal-inspired portfolio to showcase my skills and projects.",
    tech: ["React", "JavaScript", "CSS"],
    status: "In Development",
    github: null,
    demo: null,
  },
];

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-index">0{index + 1}</span>
        <h3 className="project-name">{project.name}</h3>
        <span className="project-status">{project.status}</span>
      </div>

      <p className="project-directory">
        <span className="project-muted">directory: </span>
        <span className="project-blue">{project.directory}</span>
      </p>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((technology) => (
          <span className="project-tech-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span aria-hidden="true">↗</span> GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span aria-hidden="true">↗</span> Live Demo
          </a>
        )}

        {!project.github && !project.demo && (
          <span className="project-muted">Links coming soon</span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="projects">
      <header className="projects-header">
        <p className="projects-filename"># projects.json</p>

        <h2 className="projects-title">
          My Projects<span className="projects-dot">.</span>
        </h2>

        <p className="projects-subtitle">
          Things I've built while learning, experimenting, and solving problems.
        </p>
      </header>

      <div className="projects-summary">
        <span className="projects-comment">// project directory</span>
        <p>
          <span className="project-blue">total_projects</span>
          <span className="project-muted"> = </span>
          <span className="project-yellow">{projects.length}</span>
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.directory}
            project={project}
            index={index}
          />
        ))}
      </div>

      <p className="projects-footer">
        <span className="projects-comment-symbol">//</span>{" "}
        Every project is another step forward.
      </p>
    </div>
  );
}
