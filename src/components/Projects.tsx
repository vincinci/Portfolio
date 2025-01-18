'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.',
    image: '/project1.jpg',
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management application using Vue.js and Firebase. Includes real-time updates, team collaboration features, and analytics dashboard.',
    image: '/project2.jpg',
    demoLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Featured Projects
          <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 mt-4"></span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoLink}
                    className="px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
