import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    comment: 'Amazing work! Delivered fast and exactly as I wanted. The website design exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    comment: 'Professional service with great attention to detail. My app design looks stunning!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Content Creator',
    comment: 'Best designer I\'ve worked with. Social media graphics are always on point and delivered on time.',
    rating: 5,
  },
];

export function Testimonials() {
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
          <h2 className="text-white mb-4">Client Testimonials</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-12 h-12 text-purple-400" />
                </div>
                
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-6">{testimonial.comment}</p>
                  
                  <div>
                    <div className="text-white mb-1">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
