'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    icon: '📧',
    text: 'davy.dushimiyimana@example.com',
    link: 'mailto:davy.dushimiyimana@example.com',
  },
  {
    icon: '🔗',
    text: 'LinkedIn',
    link: 'https://linkedin.com/in/davydushimiyimana',
  },
  {
    icon: '💻',
    text: 'GitHub',
    link: 'https://github.com/davydushimiyimana',
  },
  {
    icon: '🐦',
    text: 'Twitter',
    link: 'https://twitter.com/davydushimiyimana',
  },
];

const Contact = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Get In Touch
          <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 mt-4"></span>
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{info.icon}</span>
                <span className="text-gray-700 hover:text-primary transition-colors duration-300">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
