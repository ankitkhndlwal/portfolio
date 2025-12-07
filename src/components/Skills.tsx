import { motion } from 'motion/react';
import {
  Code2,
  Palette,
  Smartphone,
  Layers,
  Zap,
  Globe,
  Database,
  Terminal,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Motion'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Design Systems',
    icon: Layers,
    skills: ['Component Libraries', 'Style Guides', 'Accessibility', 'Branding'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Performance',
    icon: Zap,
    skills: ['Optimization', 'Web Vitals', 'SEO', 'Lighthouse', 'Analytics'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'GraphQL'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Tools & Workflow',
    icon: Terminal,
    skills: ['Git', 'VS Code', 'Docker', 'CI/CD', 'Agile'],
    color: 'from-gray-600 to-gray-800',
  },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-neutral-100 rounded-full text-neutral-600">
            Expertise
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A diverse skill set spanning design, development, and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-neutral-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-neutral-200">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl text-neutral-900 mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-neutral-600 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl mb-4">Always Learning</h3>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
            Technology evolves rapidly, and so do I. I'm constantly exploring new tools,
            frameworks, and design trends to stay at the forefront of the industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Web3', '3D Graphics', 'AR/VR', 'Cloud Computing'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
