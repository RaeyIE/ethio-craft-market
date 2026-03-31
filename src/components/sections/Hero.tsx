import React from 'react';
import { Link } from 'react-router-dom';
import { culturalTerms } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 px-6 overflow-hidden bg-[#FDFCFB]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-600/5 blur-[100px] rounded-full -translate-x-1/3" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-8 bg-white/80 backdrop-blur-md border border-slate-100 px-5 py-2.5 rounded-full w-fit shadow-xl shadow-slate-900/5 transition-transform hover:scale-105 duration-500">
            <Globe className="h-4 w-4 text-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">{culturalTerms.welcome}</span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-black font-serif text-slate-900 leading-[0.85] tracking-tighter mb-10">
            The <span className="text-amber-600">Spirit</span> of <span className="relative inline-block">
               Ethiopia
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ delay: 1, duration: 1 }}
                 className="absolute -bottom-2 left-0 h-4 bg-amber-600/10 rounded-full -z-10"
               />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl font-serif">
            {culturalTerms.wisdom} SQUARE brings the finest <span className="text-slate-900 font-bold">{culturalTerms.handcrafted}</span> treasures from our artisans directly to your home, wherever you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild className="h-20 px-12 rounded-[2.5rem] bg-slate-900 hover:bg-amber-600 text-white font-black text-xl transition-all duration-500 shadow-2xl shadow-slate-900/20 group">
              <Link to="/explore" className="flex items-center gap-3">
                {culturalTerms.shop} Now <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 px-10 rounded-[2.5rem] border-2 border-slate-100 bg-white hover:bg-slate-50 text-slate-900 font-black text-xl transition-all shadow-xl shadow-slate-900/5">
               <Link to="/regions" className="flex items-center gap-3">
                 {culturalTerms.explore} {culturalTerms.region}
               </Link>
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-10">
             <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">2k+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{culturalTerms.artisan}s</span>
             </div>
             <div className="w-px h-12 bg-slate-100" />
             <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">15k+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Treasures Sold</span>
             </div>
             <div className="w-px h-12 bg-slate-100" />
             <div className="flex items-center gap-3 bg-amber-50 px-5 py-3 rounded-2xl">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <span className="text-sm font-black text-amber-600">4.9 Global Rating</span>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
           {/* Floating Elements */}
           <div className="absolute -top-12 -left-12 bg-white p-8 rounded-[3rem] shadow-2xl z-20 animate-bounce-slow">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{culturalTerms.quality}</p>
                    <p className="text-lg font-black text-slate-900">Verified Artisan</p>
                 </div>
              </div>
           </div>

           <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 rounded-[3rem] shadow-2xl z-20 text-white max-w-[200px]">
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Masterpiece</p>
              <p className="text-lg font-black font-serif leading-tight">Hand-woven Habesha Kemis</p>
           </div>

           <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-weaving-d6812e75-1774945167724.webp" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Ethiopian Artisan Mastery"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
           </div>

           {/* Background Shapes */}
           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full" />
           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-slate-50 rounded-full" />
        </motion.div>
      </div>

      {/* Bottom Cultural Scroll */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
         <div className="inline-block animate-marquee">
            {[1, 2, 3, 4, 5].map(i => (
               <span key={i} className="text-4xl font-black font-serif mx-12 uppercase tracking-[0.5em] text-slate-400">
                  {culturalTerms.wisdom} \\\\u2022 {culturalTerms.heritage} \\\\u2022 {culturalTerms.tradition} \\\\u2022 {culturalTerms.artistry}
               </span>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Hero;