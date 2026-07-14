import "../styles/Skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" className="skills">

     

      <div className="circle one"></div>
      <div className="circle two"></div>

      <h2>💻 My Skills</h2>

      <div className="skills-grid">

        <SkillCard
          title="Frontend"
          icon="🌐"
          skills={[
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 80 },
            { name: "Bootstrap", level: 55 },
            { name: "JavaScript", level: 65 },
            { name: "React.js", level: 65 },
          ]}
        />

        <SkillCard
          title="Backend"
          icon="⚙"
          skills={[
            { name: "Java", level: 80 },
            { name: "Python", level: 80 },
            { name: "Flask", level: 65 },
            { name: "Node.js", level: 60 },
          ]}
        />

        <SkillCard
          title="Database"
          icon="🗄"
          skills={[
            { name: "MySQL", level: 85 },
            { name: "MongoDB", level: 65 },
          ]}
        />

        <SkillCard
          title="Tools"
          icon="🛠"
          skills={[
            { name: "Git", level: 65 },
            { name: "GitHub", level: 80 },
            { name: "VS Code", level: 95 },
            { name: "Postman", level: 70 },
          ]}
        />

        <div className="ai-card">
          <SkillCard
            title="AI / Machine Learning"
            icon="🤖"
            skills={[
              { name: "Hugging Face", level: 75 },
              { name: "Streamlit", level: 80 },
              { name: "Pandas", level: 80 },
              { name: "NumPy", level: 75 },
            ]}
          />
        </div>

      </div>

    </section>
  );
}

export default Skills;