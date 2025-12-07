import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState, useEffect } from 'react';

export function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-neutral-900 text-white rounded-full">
              Available for work
            </div>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl tracking-tight text-neutral-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              4+ years
            </span>
            <br />
             of building scalable systems <br />and products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful digital experiences using AI with a focus on clean design,
            thoughtful interactions, and pixel-perfect execution. Currently designing for
            <img 
              src="https://juspay.io/juspaylogo.svg" 
              alt="Company Logo" 
              className="inline-block h-8 ml-2 align-middle grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/ankit-khandelwal-164774166/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ak.ankitk99@gmail.com"
              className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to explore - positioned at bottom of viewport */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-300 z-20"
        style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}