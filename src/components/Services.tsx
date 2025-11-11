import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Share2, FileText, FileEdit, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Web Design',
    description: 'Modern, responsive websites using Figma / Canva / HTML/CSS prototypes',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'App UI/UX Design',
    description: 'Mobile & tablet app interface designs that delight users',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Share2,
    title: 'Social Media Graphics',
    description: 'Instagram/Facebook posts & YouTube thumbnails that engage',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: FileText,
    title: 'PDF / Word Conversion',
    description: 'Fast, editable & professional templates for all your needs',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: FileEdit,
    title: 'Resume / CV Design',
    description: 'Professional templates that make you stand out',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Briefcase,
    title: 'Virtual Assistant',
    description: 'Admin tasks & professional support when you need it',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function Services() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">What I Do</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Full-service design and development solutions to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
