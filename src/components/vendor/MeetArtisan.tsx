import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Heart, 
  MessageSquare, 
  Globe, 
  Award, 
  ArrowRight, 
  ChevronLeft,
  History,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { artisans, products, culturalTerms } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MeetArtisan: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artisan = artisans.find(a => a.id === id);
  const artisanProducts = products.filter(p => p.artisan === artisan?.name);

  if (!artisan) return <div>Artisan not found</div>;

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link to="/regions" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 font-bold transition-colors">
          <ChevronLeft className="h-4 w-4" /> Back to Regions
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src={artisan.image} className="w-full h-full object-cover" alt={artisan.name} />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-amber-600 p-8 rounded-[3rem] shadow-2xl text-white border-8 border-[#FDFCFB]">
                 <div className="flex flex-col items-center">
                    <Star className="h-10 w-10 fill-white mb-2" />
                    <p className="text-2xl font-black">{artisan.rating}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Artisan Rating</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                   {artisan.specialty}
                 </span>
                 <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                    Joined {artisan.joined}
                 </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 font-serif leading-[0.9] mb-8">
                {artisan.name}
                <span className="block text-3xl text-amber-600 mt-4">{artisan.amharicName}</span>
              </h1>
              <p className="text-2xl text-slate-600 leading-relaxed font-medium italic">
                "{artisan.philosophy}"
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
               <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                     <Award className="h-7 w-7" />
                  </div>
                  <div>
                     <p className="font-black text-slate-900">{artisan.sales}+</p>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Creations Shared</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                     <Globe className="h-7 w-7" />
                  </div>
                  <div>
                     <p className="font-black text-slate-900">Global</p>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Shipping Available</p>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
               <Button className="h-16 px-10 rounded-2xl bg-slate-900 text-white font-black text-lg shadow-xl hover:shadow-amber-100 transition-all">
                  Order Custom Piece
               </Button>
               <Button variant="outline" className="h-16 w-16 rounded-2xl border-slate-200">
                  <MessageSquare className="h-6 w-6 text-slate-600" />
               </Button>
               <Button variant="outline" className="h-16 w-16 rounded-2xl border-slate-200">
                  <Heart className="h-6 w-6 text-slate-600" />
               </Button>
            </div>
          </div>
        </div>

        {/* The Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 bg-white rounded-[4rem] p-12 md:p-24 shadow-sm border border-slate-100">
           <div className="space-y-8">
              <h2 className="text-4xl font-black font-serif flex items-center gap-4">
                 <History className="h-8 w-8 text-amber-600" /> Our Journey
              </h2>
              <div className="prose prose-slate prose-lg">
                 <p className="text-slate-600 leading-relaxed text-lg">
                    {artisan.story}
                 </p>
                 <p className="text-slate-600 leading-relaxed text-lg mt-6">
                    {artisan.bio}
                 </p>
              </div>
              
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 mt-12">
                 <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-amber-600" /> Cultural Commitment
                 </h4>
                 <p className="text-sm text-slate-500 leading-relaxed">
                    Every material used is locally sourced from {artisan.location} using ethical and sustainable traditional methods.
                 </p>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-6">
              {artisan.portfolio.map((img, i) => (
                 <div key={i} className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square bg-slate-100">
                    <img src={img} className="w-full h-full object-cover" alt="" />
                 </div>
              ))}
              <div className="rounded-[2.5rem] bg-amber-600 p-8 flex flex-col justify-end text-white">
                 <h4 className="text-2xl font-black mb-2">The Workshop</h4>
                 <p className="text-sm opacity-80 mb-6">See where the magic happens in {artisan.location}.</p>
                 <Button variant="link" className="text-white p-0 h-auto font-black flex items-center gap-2 w-fit">
                    Watch Video <ArrowRight className="h-4 w-4" />
                 </Button>
              </div>
           </div>
        </div>

        {/* Marketplace Section */}
        <section className="pb-32">
           <div className="flex justify-between items-end mb-12">
              <div>
                 <h2 className="text-4xl font-black font-serif mb-4">Artisan's {culturalTerms.shop}</h2>
                 <p className="text-slate-500">Exclusive handcrafted creations by {artisan.name}.</p>
              </div>
              <Button className="rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 h-12 px-8">
                 View Entire Collection
              </Button>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {artisanProducts.map(product => (
                 <Link to={`/product/${product.id}`} key={product.id} className="group">
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-lg transition-all group-hover:shadow-2xl mb-6">
                       <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                       <div className="absolute top-6 left-6">
                          <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                             ${product.price}
                          </span>
                       </div>
                       {product.isExportReady && (
                          <div className="absolute bottom-6 right-6">
                             <div className="bg-emerald-500/90 backdrop-blur-md p-3 rounded-2xl shadow-xl">
                                <Globe className="h-4 w-4 text-white" />
                             </div>
                          </div>
                       )}
                    </div>
                    <div className="px-4">
                       <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                       <div className="flex items-center justify-between">
                          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{product.category}</p>
                          <div className="flex items-center gap-1">
                             <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                             <span className="text-xs font-black">{product.rating}</span>
                          </div>
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default MeetArtisan;