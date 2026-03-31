import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artisans, products, culturalTerms } from '../../lib/data';
import { MapPin, Star, Award, Heart, MessageSquare, ChevronLeft, ArrowRight, Share2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MeetArtisan: React.FC = () => {
  const { id } = useParams();
  const artisan = artisans.find(a => a.id === id);
  const artisanProducts = products.filter(p => p.artisan === artisan?.name);

  if (!artisan) return <div>Artisan not found</div>;

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={artisan.image} 
          className="w-full h-full object-cover"
          alt={artisan.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl"
           >
              <div className="flex items-center gap-3 mb-6">
                <Link to="/" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all">
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <span className="bg-amber-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Master {culturalTerms.artisan}
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white font-serif mb-4 leading-none">
                {artisan.name}
              </h1>
              <p className="text-2xl md:text-3xl text-amber-500 font-bold mb-8 font-serif">
                {artisan.amharicName}
              </p>
              <div className="flex flex-wrap gap-8 items-center text-white/80">
                 <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-500" />
                    <span className="font-bold uppercase tracking-wider text-xs">{artisan.location}</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-xs">{artisan.rating} Rating</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    <span className="font-bold text-xs">{artisan.sales}+ Sales</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
        {/* Left: Biography & Story */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-3xl font-black font-serif mb-8 flex items-center gap-3">
               <span className="text-amber-600">01.</span> The Journey
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-slate-900">
              {artisan.story}
            </p>
            <blockquote className="mt-12 p-8 bg-amber-50 rounded-[2.5rem] border-l-8 border-amber-600 italic">
               <p className="text-2xl font-serif text-slate-800 leading-relaxed mb-4">
                 "{artisan.philosophy}"
               </p>
               <cite className="text-amber-600 font-black uppercase tracking-widest text-xs">— {artisan.name}</cite>
            </blockquote>
          </section>

          <section>
            <h2 className="text-3xl font-black font-serif mb-8 flex items-center gap-3">
               <span className="text-amber-600">02.</span> Portfolio & Process
            </h2>
            <div className="grid grid-cols-2 gap-4">
               {artisan.portfolio.map((img, idx) => (
                 <div key={idx} className="aspect-square rounded-[2rem] overflow-hidden bg-slate-100 group">
                    <img 
                      src={img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt="Artisan process"
                    />
                 </div>
               ))}
               <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-center text-white">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-4">Handcrafted</p>
                  <p className="text-2xl font-black mb-6">Experience the essence of {culturalTerms.wisdom}.</p>
                  <Button className="bg-white text-slate-900 hover:bg-amber-600 hover:text-white rounded-xl font-black">View All Works</Button>
               </div>
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl font-black font-serif flex items-center gap-3">
                  <span className="text-amber-600">03.</span> Handcrafted Collection
               </h2>
               <Link to="/explore" className="text-sm font-black text-amber-600 uppercase tracking-widest flex items-center gap-2 group">
                  Full Store <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {artisanProducts.map(product => (
                 <Link to={`/product/${product.id}`} key={product.id} className="group">
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative mb-4">
                       <img 
                        src={product.image} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        alt={product.name}
                       />
                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md h-12 w-12 rounded-full flex items-center justify-center text-slate-900 shadow-xl">
                          <Heart className="h-5 w-5" />
                       </div>
                    </div>
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{product.category}</p>
                          <h3 className="text-xl font-black text-slate-900">{product.name}</h3>
                       </div>
                       <p className="text-xl font-black text-amber-600">${product.price}</p>
                    </div>
                 </Link>
               ))}
            </div>
          </section>
        </div>

        {/* Right: Interaction Card */}
        <div className="lg:col-start-3">
           <div className="sticky top-24 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                    <img src={artisan.image} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div>
                    <p className="text-xl font-black text-slate-900">{artisan.name}</p>
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{artisan.specialty}</p>
                 </div>
              </div>

              <div className="space-y-6">
                 <Button className="w-full h-16 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black text-lg gap-3">
                    <MessageSquare className="h-5 w-5" /> Contact Artisan
                 </Button>
                 
                 <Button variant="outline" className="w-full h-16 rounded-2xl border-2 border-slate-100 font-black text-lg gap-3">
                    <Heart className="h-5 w-5" /> Follow Artisan
                 </Button>

                 <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-slate-400">
                    <div className="flex items-center gap-2">
                       <Globe className="h-4 w-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Global Shipping Ready</span>
                    </div>
                    <Share2 className="h-4 w-4 cursor-pointer hover:text-amber-600 transition-colors" />
                 </div>
              </div>

              <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                 <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Quick Stats</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                       <p className="text-2xl font-black text-slate-900">{artisan.sales}</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Sales</p>
                    </div>
                    <div>
                       <p className="text-2xl font-black text-slate-900">{artisan.joined}</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Member Since</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MeetArtisan;