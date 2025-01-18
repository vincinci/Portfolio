'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          About Me
          <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 mt-4"></span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-6 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hello! I'm Davy, a passionate Full Stack Software Engineer with a keen eye for creating efficient and scalable solutions. 
              With expertise in both frontend and backend development, I specialize in building modern web applications that deliver 
              exceptional user experiences.
            </p>
            <p>
              My journey in software engineering has equipped me with a strong foundation in various technologies and best practices. 
              I believe in writing clean, maintainable code and staying current with emerging technologies to deliver cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
