import { motion } from "framer-motion";

function SkillCard({ title, icon, skills }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>
        <span>{icon}</span> {title}
      </h3>

      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <div className="skill-name">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>

          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2
              }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default SkillCard;