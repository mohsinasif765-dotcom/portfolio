import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mohsinasif765@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923377491297', '_blank');
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-xl opacity-30" />
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl"
            />
            
            <div className="relative">
              <h2 className="text-white mb-4">Let's Build Something Amazing</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Ready to bring your vision to life? Whether it's a web project, app design, or creative graphics — let's make it happen together!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleEmailClick}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-slate-400">
                  📧 mohsinasif765@gmail.com  •  📱 +92 337 7491297
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-slate-400"
        >
          <p>© 2024 Mohsin Asif. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
