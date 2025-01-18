'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Davy Dushimiyimana
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Software Engineer
        </motion.h2>
        
        <motion.p
          className="text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafting elegant solutions to complex problems
        </motion.p>
        
        <motion.a
          href="#contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
