
import "./css/about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <p className="about-filename"># profile.txt</p>

        <h2 className="about-name">
          Shuvam Gautam<span className="about-dot">.</span>
        </h2>

        <p className="about-role">
          Self-taught Developer
          <span className="about-separator"> · </span>
          Nepal
        </p>
      </div>

      <div className="about-description">
        <p>
          <span className="about-white">Hey!</span> I'm{" "}
          <span className="about-green">Shuvam</span>, a developer
          who enjoys turning ideas into working applications and
          understanding how things work behind the scenes.
        </p>

        <p>
          I believe in{" "}
          <span className="about-blue">learning by building</span>,
          solving real problems, and improving through
          experimentation. I'm particularly interested in{" "}
          <span className="about-yellow">backend engineering</span>{" "}
          and how software systems are designed.
        </p>

        <p>
          Currently focused on strengthening my development skills,
          building practical projects, and{" "}
          <span className="about-green">growing as an engineer</span>.
        </p>
      </div>

      <div className="about-details">
        <p className="about-comment">
          <span className="about-comment-symbol">//</span> A little about me
        </p>

        <p>
          <span className="about-key">location</span>
          <span className="about-equals"> = </span>
          <span className="about-string">"Nepal"</span>
        </p>

        <p>
          <span className="about-key">mindset</span>
          <span className="about-equals"> = </span>
          <span className="about-string">"Always learning"</span>
        </p>

        <p>
          <span className="about-key">interests</span>
          <span className="about-equals"> = </span>
          <span className="about-string">"Building & exploring"</span>
        </p>
      </div>

      <p className="about-footer">
        <span className="about-comment-symbol">//</span>{" "}
        More than code — a continuous learning journey.
      </p>
    </div>
  );
}
