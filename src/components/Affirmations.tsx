import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const affirmations = [
  {
    id: 1,
    text: "You are constantly growing and evolving into a better version of yourself.",
    image: "https://thumbs.dreamstime.com/b/single-line-art-botanical-elements-illustration-black-white-leaf-drawing-simple-vector-wall-sticker-leaves-element-vintage-284455283.jpg",
    colorClass: "bg-sky-50",
    textColorClass: "text-sky-900",
  },
  {
    id: 2,
    text: "Your potential is limitless, and you have the power to create the life you desire.",
    image: "https://img.freepik.com/premium-vector/violet-flowers-white-background-handdrawn-illustration-spring-violet-flower-line-art_511024-862.jpg?w=1380",
    colorClass: "bg-green-50",
    textColorClass: "text-green-900",
  },
  {
    id: 3,
    text: "Every challenge you face is an opportunity to learn, grow, and become stronger.",
    image: "https://img.freepik.com/premium-vector/aesthetic-decorative-line-art-illustration-leaf-floral-white-background_921039-16762.jpg",
    colorClass: "bg-purple-50",
    textColorClass: "text-purple-900",
  },
  {
    id: 4,
    text: "Peace begins with a smile and a deep breath. You are safe and supported.",
    image: "https://img.freepik.com/free-vector/illustration-plant_53876-3792.jpg?semt=ais_se_enriched&w=740&q=80",
    colorClass: "bg-lime-50",
    textColorClass: "text-lime-900",
  },
  {
    id: 5,
    text: "Your unique perspective is a gift to the world. Shine your light brightly.",
    image: "https://img.freepik.com/premium-vector/eustoma-flower-drawings-black-white-with-line-art-hand-drawn-botanical-illustration-17_1119689-4831.jpg?size=0.7",
    colorClass: "bg-yellow-50",
    textColorClass: "text-yellow-900",
  },
  {
    id: 6,
    text: "Embrace the journey of today with an open heart and a curious mind.",
    image: "https://img.freepik.com/premium-vector/flower-continuous-line-art-illustration-white-background_637993-4509.jpg",
    colorClass: "bg-rose-50",
    textColorClass: "text-rose-900",
  },
];

export function Affirmations() {
  const extendedAffirmations = [...affirmations, ...affirmations];

  return (
    <section id="affirmations" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-12">
        <div className="relative rounded-[2.5rem] border border-neutral-200 overflow-hidden bg-white/50">
          
          <div className="pt-20 pb-12 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl md:text-xl text-neutral-900">
                A small nudge for your day
              </h2>
              <p className="text-base text-neutral-500 font-light">
                Lead with kindness; it shapes everything.
              </p>
            </motion.div>
          </div>

          <div className="relative w-full pb-20">
            <div className="group flex overflow-hidden marquee-container">
              <div className="flex animate-marquee gap-8 py-4 pl-4 group-hover:[animation-play-state:paused]">
                {extendedAffirmations.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group/card w-[240px] h-[320px] [perspective:1000px] cursor-pointer flex-shrink-0"
                  >
                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover/card:[transform:rotateY(180deg)] rounded-3xl">
                      
                      {/* Front Side */}
                      <div className={`absolute inset-0 w-full h-full ${item.colorClass} rounded-3xl [backface-visibility:hidden] flex items-center justify-center p-8 overflow-hidden`}>
                        <div className="w-full h-full relative opacity-80 mix-blend-multiply filter contrast-125">
                          <ImageWithFallback
                            src={item.image}
                            alt="Botanical illustration"
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className={`absolute inset-0 w-full h-full ${item.colorClass} rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-8 text-center border-2 border-white/50`}>
                        <p className={`text-lg font-medium leading-relaxed italic ${item.textColorClass} font-serif`}>
                          "{item.text}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          animation: marquee 50s linear infinite;
          width: fit-content;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
