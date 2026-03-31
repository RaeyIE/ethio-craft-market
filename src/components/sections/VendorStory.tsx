import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artisans, culturalTerms } from '../../lib/data';
import { ArrowUpRight, History, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VendorStory: React.FC = () => {
  return (
    <section className="py-32 bg-[#FDFCFB] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-200">
              <Sparkles className="h-3 w-3" /> Meet the {culturalTerms.artisan}s
           </span>
           <h2 className="text-5xl md:text-7xl font-black text-slate-900 font-serif leading-tight mb-8">
              Crafted by <span className="text-amber-600">Ancestral</span> Hands
           </h2>
           <p className="text-lg text-slate-500 font-medium leading-relaxed">
              At {culturalTerms.wisdom} SQUARE, we don't just sell products. We share the personal journeys and generational wisdom of master craftsmen across Ethiopia.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {artisans.slice(0, 2).map((artisan, idx) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl border border-slate-100 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-16">
                 <History className="h-40 w-40 text-slate-50 opacity-0 group-hover:opacity-100 transition-all transform rotate-12 scale-150" />
              </div>
              
              <div className="relative z-10">
                 <div className="flex items-center gap-8 mb-10">
                    <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-slate-50 transition-transform group-hover:scale-105">
                       <img src={artisan.image} className="w-full h-full object-cover" alt={artisan.name} />
                    </div>
                    <div>
                       <h3 className="text-3xl font-black text-slate-900 mb-2">{artisan.name}</h3>
                       <p className="text-amber-600 font-black uppercase tracking-widest text-xs">{artisan.role}</p>
                       <div className="flex items-center gap-2 text-slate-400 mt-2">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs font-bold">{artisan.location}</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="prose prose-slate mb-10">
                    <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
                       "{artisan.philosophy}"
                    </p>
                    <p className="text-slate-500 leading-relaxed mt-6">
                       {artisan.bio}
                    </p>
                 </div>

                 <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex gap-2">
                       {artisan.portfolio.slice(0, 3).map((img, i) => (
                          <div key={i} className="w-10 h-10 rounded-xl overflow-hidden shadow-sm ring-2 ring-white">
                             <img src={img} className="w-full h-full object-cover" alt="" />
                          </div>
                       ))}
                    </div>
                    <Button asChild className="rounded-2xl bg-slate-900 h-14 px-10 font-black text-white hover:bg-amber-600 transition-all shadow-xl flex items-center gap-3">
                       <Link to={`/artisan/${artisan.id}`}>Full Story <ArrowUpRight className="h-5 w-5" /></Link>
                    </Button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Button asChild variant="outline" className="rounded-[2rem] h-18 px-12 border-slate-200 text-slate-900 font-black text-xl hover:bg-slate-50 shadow-sm transition-all">
              <Link to="/regions">Discover Artisans by Region</Link>
           </Button>
        </div>
      </div>
    </section>
  );
};

export default VendorStory;