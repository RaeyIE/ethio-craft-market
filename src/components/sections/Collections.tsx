import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { categories, culturalTerms } from '../../lib/data';

const Collections: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="w-16 h-[2px] bg-amber-600" />
               <span className="text-amber-600 font-black uppercase tracking-widest text-xs">{culturalTerms.heritage} Series</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 font-serif leading-[0.9]">
              Curated <br /> 
              <span className="text-amber-600">Collections.</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <Link to="/explore" className="h-16 px-10 rounded-2xl bg-slate-900 text-white flex items-center gap-3 font-black text-lg hover:bg-amber-600 transition-all shadow-xl">
                Browse All {culturalTerms.shop} <ArrowUpRight className="h-5 w-5" />
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={`/explore?category=${category.id}`}>
                 <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] bg-slate-50 border border-slate-100 transition-all duration-700 group-hover:shadow-2xl group-hover:border-amber-100">
                    <div className="absolute inset-0 flex items-center justify-center p-20">
                       <div className="w-full h-full rounded-full bg-amber-600/5 blur-3xl group-hover:bg-amber-600/10 transition-colors" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10">
                       <div className="w-32 h-32 rounded-[2.5rem] bg-white shadow-xl flex items-center justify-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
                          {/* Placeholder for real icons - assuming they exist or using text if not */}
                          <span className="text-4xl font-black text-slate-900">{category.icon.charAt(0)}</span>
                       </div>
                       <div className="text-center">
                          <h3 className="text-3xl font-black text-slate-900 mb-2">{category.name}</h3>
                          <p className="text-xs font-black uppercase text-slate-400 tracking-[0.2em] group-hover:text-amber-600 transition-colors">{category.id} Artifacts</p>
                       </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                       <span className="bg-slate-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest">
                          Shop Category
                       </span>
                    </div>
                 </div>
              </Link>
            </motion.div>
          ))}

          {/* Custom Promo Card */}
          <motion.div 
            className="lg:col-span-1 rounded-[4rem] bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden group"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/10 blur-[100px]" />
             <div>
                <Globe className="h-12 w-12 text-amber-500 mb-8" />
                <h3 className="text-4xl font-black font-serif leading-tight mb-6">Global <br /> <span className="text-amber-500">Gateway.</span></h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                   We handle the logistics. You share the culture. International export options available for all verified artisans.
                </p>
             </div>
             <Link to="/shipping" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                Learn About Export <ArrowUpRight className="h-4 w-4 text-amber-500" />
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collections;