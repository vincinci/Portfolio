'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    title: 'Frontend Development',
    description: 'React.js, Vue.js, JavaScript (ES6+), TypeScript, HTML5, CSS3/SASS, Responsive Design',
    icon: '💻',
  },
  {
    title: 'Backend Development',
    description: 'Node.js, Python, Java, RESTful APIs, GraphQL, Microservices Architecture',
    icon: '🔧',
  },
  {
    title: 'Database & Cloud',
    description: 'MongoDB, PostgreSQL, AWS, Docker, Kubernetes, CI/CD',
    icon: '☁️',
  },
  {
    title: 'Tools & Practices',
    description: 'Git, Agile Methodology, Test-Driven Development, System Design',
    icon: '🛠️',
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Technical Skills
          <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 mt-4"></span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
