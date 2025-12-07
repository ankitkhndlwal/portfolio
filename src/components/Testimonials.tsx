import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Pulkit Goyal',
    role: 'COO',
    company: 'Superhealth',
    content: 'I have been taking help of Ankit on designing various things. In a year, he has become my go to person for any design related advice or work. He has pretty solid knowledge of various tools and the ability to learn new ones. I approached him to work on our website based on webflow, even though he did not know webflow initially, he did a great job. The best part is that he is very easy to work with.',
    avatar: 'src/assets/images/Pulkit.jpeg',
    gradient: 'from-rose-50 to-white',
    borderColor: 'hover:border-rose-200',
  },
  {
    id: 2,
    name: 'Akshat Chaturvedi',
    role: 'CEO',
    company: 'BrainBox',
    content: 'We hired Ankit for a complex UI/UX project. The work done by him is highly recommendable. He is patient throughout the course of the project and worked on the feedback in the best way possible. Super UI/UX skills. ',
    avatar: 'src/assets/images/Akshat.jpeg',
    gradient: 'from-emerald-50 to-white',
    borderColor: 'hover:border-emerald-200',
  },
  {
    id: 3,
    name: 'Nikhil Sharma',
    role: 'Creative Director',
    company: 'Marketing Agency',
    content: 'Ankit is very passionate and dedicated to his goals, moreover, he is a man of ethics. As a leader, Ankit earns my highest recommendation.',
    avatar: 'src/assets/images/Nikhil.jpeg',
    gradient: 'from-violet-50 to-white',
    borderColor: 'hover:border-violet-200',
  },
  {
    id: 4,
    name: 'Balram S Chauhan',
    role: 'Product Designer',
    company: 'YesMadam',
    content: 'Ankit Sir is mentoring me in UI-UX Designing for the last 6 months. He is really good at product designing and his design process is really crisp and clear. Learning from him is really wonderful as he knows how real stuff work and that plays a very important role in today\'s competitive and creative field.',
    avatar: 'src/assets/images/Balram.jpeg',
    gradient: 'from-sky-50 to-white',
    borderColor: 'hover:border-sky-200',
  },
  {
    id: 5,
    name: 'Sajin P Asokan',
    role: '2D Game/UI Artist',
    company: 'Self',
    content: 'I highly recommend Ankit Khandelwal. He is a talented professional with exceptional technical skills, a great personality and a strong commitment to delivering results. Ankit\'s dedication and creativity make him a valuable asset to any team.',
    avatar: 'src/assets/images/Sajin.jpeg',
    gradient: 'from-amber-50 to-white',
    borderColor: 'hover:border-amber-200',
  },
];

export function Testimonials() {
  // Duplicate the array to ensure seamless infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-lime-100 rounded-full text-lime-600 font-semibold">
            Testimonials
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
            What people say...
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full pb-20">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        <div className="group flex overflow-hidden marquee-container">
          <div className="flex animate-marquee gap-8 py-10 pl-4 group-hover:[animation-play-state:paused]">
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`
                  group/card
                  relative overflow-hidden
                  flex-shrink-0 w-[400px] 
                  bg-white rounded-2xl p-8 
                  border border-neutral-100
                  transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-xl
                  ${testimonial.borderColor}
                  cursor-default
                  flex flex-col text-left items-start
                `}
              >
                {/* Gradient Background Layer */}
                <div 
                  className={`
                    absolute inset-0 
                    bg-gradient-to-br ${testimonial.gradient}
                    opacity-0 transition-opacity duration-500 
                    group-hover/card:opacity-100
                  `} 
                />

                {/* Content Wrapper - ensures text sits above the background */}
                <div className="relative z-10 w-full">
                  {/* Header: Avatar + Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 leading-tight">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-500 font-medium">
                        {testimonial.role} <span className="text-neutral-300">@</span> {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-neutral-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
