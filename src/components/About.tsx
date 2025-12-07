import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered About Me Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold">
            About Me
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100">
                <ImageWithFallback
                  src="src/assets/images/Mine.png"
                  alt="Portrait of Ankit"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
              Built by Engineering. Powered by Curiosity. Refined by Design.
            </h2>
            <div className="space-y-4 text-neutral-600 mb-8">
              <p>
                I shifted from engineering into design because understanding people 
                proved more interesting. My work blends 
                analytical thinking with behavioral insight—and a constant drive to 
                figure out why things resonate.
              </p>
              <p>
                Off the clock, you’ll find me biking, exploring new places, photographing stories, 
                or experimenting with meditation and manifestation as a science of attention, energy, 
                and intention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
