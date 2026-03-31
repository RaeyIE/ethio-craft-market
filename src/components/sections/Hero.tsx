import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { culturalTerms } from '../../lib/data';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFCFB]">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-slate-900 rounded-l-[10rem] transition-all duration-1000" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 h-1/2 bg-amber-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-200">
              <Sparkles className="h-3 w-3" /> {culturalTerms.wisdom} Marketplace
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.85] font-serif tracking-tighter mb-8">
              {culturalTerms.tradition} <br />
              <span className="text-amber-600">Refined.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-xl">
              Empowering Ethiopian <span className="text-slate-900 font-bold">{culturalTerms.artisan}s</span> to share our timeless heritage with the modern world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6"
          >
            <Button asChild className="h-18 px-12 rounded-3xl bg-slate-900 text-white hover:bg-amber-600 font-black text-xl shadow-2xl transition-all">
              <Link to="/explore">{culturalTerms.explore} Gebeya</Link>
            </Button>
            <Button variant="outline" asChild className="h-18 px-10 rounded-3xl border-slate-200 text-slate-900 font-black text-lg hover:bg-slate-50 transition-all">
              <Link to="/artisan/join">Join as {culturalTerms.artisan}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100"
          >
            {[ 
              { label: 'Active Artisans', value: '140+', icon: Sparkles, color: 'text-amber-500' },
              { label: 'Export Partners', value: '12+', icon: Globe, color: 'text-blue-500' },
              { label: 'Cultural Regions', value: '05', icon: MapPin, color: 'text-emerald-500' }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                 <div className="flex items-center gap-2">
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                 </div>
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-[550px] h-[750px] rounded-[5rem] overflow-hidden border-8 border-white shadow-[-40px_40px_80px_rgba(0,0,0,0.3)] rotate-2">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-at-work-f1851513-1774944795670.webp" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                alt="Ethiopian Artisan at Work"
              />
            </div>
            
            <div className="absolute -bottom-12 -left-20 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 max-w-sm">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                     <ShieldCheck className="h-7 w-7" />
                  </div>
                  <div>
                     <p className="font-black text-slate-900">Verified {culturalTerms.handcrafted}</p>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Authentic Heritage</p>
                  </div>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed font-medium">
                 Every piece in our marketplace is directly sourced from master artisans using traditional techniques passing through 100% verification.
               </p>
            </div>

            <div className="absolute top-20 -right-12">
               <div className="bg-amber-600 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center rotate-6 transition-transform hover:rotate-0">
                  <Zap className="h-10 w-10 mb-2" />
                  <p className="text-2xl font-black">Export</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Ready</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;