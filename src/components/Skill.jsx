
import "./css/skill.css";

const skillGroups = [
  {
    title: "frontend",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "database",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "tools",
    skills: ["Git", "GitHub", "Postman", "Linux", "VS Code"],
  },
];

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-header">
        <p className="skills-filename"># skills.json</p>

        <h2 className="skills-title">
          Technical Skills<span className="skills-dot">.</span>
        </h2>

        <p className="skills-subtitle">
          Technologies I use to build and understand software.
        </p>
      </div>

      <div className="skills-code">
        <p className="skills-bracket">&#123;</p>

        {skillGroups.map((group, index) => (
          <div className="skills-group" key={group.title}>
            <p className="skills-group-title">
              <span className="skills-key">"{group.title}"</span>
              <span className="skills-punctuation">: [</span>
            </p>

            <div className="skills-list">
              {group.skills.map((skill, skillIndex) => (
                <p className="skills-item" key={skill}>
                  <span className="skills-string">"{skill}"</span>
                  {skillIndex < group.skills.length - 1 && (
                    <span className="skills-punctuation">,</span>
                  )}
                </p>
              ))}
            </div>

            <p className="skills-closing">
              <span className="skills-punctuation">]</span>
              {index < skillGroups.length - 1 && (
                <span className="skills-punctuation">,</span>
              )}
            </p>
          </div>
        ))}

        <p className="skills-bracket">&#125;</p>
      </div>

      <p className="skills-footer">
        <span className="skills-comment-symbol">//</span>{" "}
        Always learning. Always building.
      </p>
    </div>
  );
}
