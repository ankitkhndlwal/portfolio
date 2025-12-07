import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import svgPaths from '../imports/svg-2nlnnfhm0v';

function ExternalLink() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path 
            d={svgPaths.pa12dc00} 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.25" 
          />
        </g>
      </svg>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-white border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-8"
        >
          {/* Headlines */}
          <div>
            <h3 className="text-xl text-neutral-600 font-medium">
              Great products don’t happen by accident!
            </h3>
            <h2 className="text-2xl lg:text-5xl text-neutral-900 leading-tight">
              Let’s build yours with intent, clarity, and craft.
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-2">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/ankit-khandelwal-164774166/" // Replace with actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
            </a>

            {/* Email Button */}
            <a
              href="mailto:ak.ankitk99@gmail.com"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
            </a>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/drive/folders/1jryu1WjmOVYJJHQUkRwMCdsID7qgVkIM"
              target="_blank" // Replace with actual resume link
              className="bg-neutral-100 flex gap-[10px] items-center justify-center px-[24px] py-[12px] h-12 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer shrink-0"
            >
              <p className="leading-[normal] text-[16px] font-medium text-nowrap">
                Resume
              </p>
              <ExternalLink />
            </a>
          </div>

          {/* Footer Text */}
          <div className="pt-16">
            <p className="text-neutral-400 text-sm">
              © 2025. No AI was harmed in the making of this… probably.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
