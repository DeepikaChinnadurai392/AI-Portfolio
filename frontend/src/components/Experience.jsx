import { motion } from "framer-motion";
import "../styles/Experience.css";

function Experience() {

  const experiences = [
    {
      year: "2025",
      title: "🤖 Machine Learning & AI Intern",
      company: "Vcodez Pvt. Ltd • Chennai",
      duration: "March 2025 - June 2025",
      points: [
        "Built AI-powered web applications",
        "Worked with Flask and Python",
        "Integrated Hugging Face models",
        "Created React interfaces",
        "Worked with ML datasets"
      ],
      skills: [
        "Python",
        "Flask",
        "React",
        "Pandas",
        "NumPy"
      ]
    },

    {
      year: "2026",
      title: "🚀 Full Stack Developer",
      company: "Software Development Journey",
      duration: "Present",
      points: [
        "Building responsive full-stack applications",
        "Developing frontend and backend systems",
        "Working with databases and APIs",
        "Creating modern user experiences"
      ],
      skills: [
        "React",
        "Java",
        "Spring Boot",
        "MySQL"
      ]
    }
  ];


  return (

    <section id="experience" className="experience">


      <h2>💼 Experience Journey</h2>


      <div className="timeline">


        {
          experiences.map((item,index)=>(

            <div className="timeline-row" key={index}>


              <div className="year">
                {item.year}
              </div>


              <div className="timeline-dot"></div>


              <motion.div
                className="experience-card"
                initial={{
                  opacity:0,
                  x:80
                }}
                whileInView={{
                  opacity:1,
                  x:0
                }}
                transition={{
                  duration:.6
                }}
              >


                <h3>
                  {item.title}
                </h3>


                <h4>
                  {item.company}
                </h4>


                <p className="duration">
                  {item.duration}
                </p>


                <ul>

                  {
                    item.points.map((point,i)=>(

                      <li key={i}>
                        {point}
                      </li>

                    ))
                  }

                </ul>


                <div className="skill-tags">

                  {
                    item.skills.map((skill,i)=>(

                      <span key={i}>
                        {skill}
                      </span>

                    ))
                  }

                </div>


              </motion.div>


            </div>

          ))
        }


      </div>


    </section>

  );
}

export default Experience;