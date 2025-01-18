'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            DD
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="nav-link">
              Home
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
