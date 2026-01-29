import React from 'react';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-2nlnnfhm0v';
import onboardingImg from '../assets/images/Onboarding.png';
import paImg from '../assets/images/PA.png';
import morImg from '../assets/images/MoR.png';
import flightImg from '../assets/images/Flight.png';

const caseStudies = [
  {
    id: 1,
    title: 'Fixing a Broken Onboarding',
    description: 'I identified hidden friction killing activation and redesigned the onboarding flow to deliver clarity, trust, and faster value realization.',
    bgColor: '#ffebeb',
    image: onboardingImg,
    link: 'https://ankit12.notion.site/Scalable-Merchant-Onboarding-System-From-fixed-flows-to-configurable-rule-engine-2f14171b8adb8024ad0be90a40b170db',
  },
  {
    id: 2,
    title: 'Designing for Payment Aggregator from Ground Up',
    description: 'I created a full payment-aggregation system with no existing patterns—balancing compliance, business goals, and technical constraints into a scalable workflow.',
    bgColor: '#e8f4ff',
    image: paImg,
    link: 'https://medium.com/@ak.ankitk99/crafting-the-payment-aggregator-a-product-design-journey-efd671708f71',
  },
  {
    id: 3,
    title: 'Making a Complex Fintech Stack Understandable',
    description: 'I simplified a dense fintech architecture into a clear, approachable experience that reduced cognitive load and aligned teams.',
    bgColor: '#f0ffe8',
    image: morImg,
    link: 'https://medium.com/@ak.ankitk99/designing-clarity-in-chaos-building-a-merchant-of-record-dashboard-for-global-payments-f5ff234cafac',
  },
  {
    id: 4,
    title: 'Reimagining Flight Tracking(Vibe Coded)',
    description: 'I turned overwhelming aviation data into a calm, intuitive flight-tracking experience focused on what travelers actually need.',
    bgColor: '#fff4e8',
    image: flightImg,
    link: 'https://ankit12.notion.site/airway-20c4171b8adb80b085c5c71133238684',
  },
];

function ExternalLink() {
  return (
    <div className="relative shrink-0 size-[24px]">
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

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-semibold">
            Selected Work
          </div>
          {/* <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
            Selected Works
          </h2> */}
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Exploring design challenges and crafting solutions that make a difference.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-[60px] items-center">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-[24px] w-full max-w-[70%]"
            >
              {/* Card Container */}
              <div className="bg-white relative rounded-[24px] w-full">
                <div className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[24px]" />
                <div className="size-full">
                  <div className="box-border flex flex-col gap-[10px] items-start p-[16px] relative w-full">
                    <div className="flex flex-col gap-[23px] grow items-start min-h-px w-full">
                      {study.image ? (
                        <div className="h-[360px] w-full rounded-[24px] overflow-hidden">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div 
                          className="h-[360px] w-full rounded-[24px]" 
                          style={{ backgroundColor: study.bgColor }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex gap-[120px] items-start w-full">
                <div className="flex flex-col gap-[4px] grow items-start">
                  <p className="leading-[normal] text-[24px] text-black w-full">
                    {study.title}
                  </p>
                  <p className="leading-[1.2] text-[#8c8c8c] text-[16px] w-full">
                    {study.description}
                  </p>
                </div>

                {/* View Case Study Button */}
                <a 
                  href={study.link}
                  target="_blank"
                  className="bg-neutral-100 flex gap-[10px] items-center justify-center px-[24px] py-[12px] rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-pointer shrink-0"
                >
                  <p className="leading-[normal] text-[14px] text-nowrap whitespace-pre">
                    View Case Study
                  </p>
                  <ExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}