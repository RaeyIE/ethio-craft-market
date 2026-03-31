import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions, products, culturalTerms, artisans } from '../../lib/data';
import { ShoppingBag, Star, Heart, Filter, ChevronLeft, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const ShopByRegion: React.FC = () => {
  const { regionId } = useParams();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(regionId || null);
  const [searchQuery, setSearchQuery] = useState('');

  const activeRegion = regions.find(r => r.id === selectedRegion);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedRegion) {
      result = result.filter(p => p.region === selectedRegion);
    }
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.artisan.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return result;
  }, [selectedRegion, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Region Header / Selector */}
      <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
           <div className="flex flex-col md:flex-row justify-between items-end gap-12">
              <div className="max-w-3xl">
                 <div className="flex items-center gap-3 mb-8">
                    <Link to="/" className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all text-white">
                       <ChevronLeft className="h-5 w-5" />
                    </Link>
                    <span className="text-xs font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
                       {culturalTerms.region} Marketplace
                    </span>
                 </div>
                 <h1 className="text-6xl md:text-8xl font-black font-serif mb-6 leading-tight">
                    Shop by <span className="text-amber-500">Region</span>
                 </h1>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                    Journey through the diverse landscapes of Ethiopia. Each region offers a unique legacy of craftsmanship, materials, and stories.
                 </p>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 w-full md:w-auto">
                 {regions.map(region => (
                   <button
                     key={region.id}
                     onClick={() => setSelectedRegion(region.id)}
                     className={`flex flex-col items-center gap-3 group shrink-0 transition-all ${
                       selectedRegion === region.id ? 'scale-105' : 'opacity-50 hover:opacity-100'
                     }`}
                   >
                      <div className={`w-24 h-24 rounded-3xl overflow-hidden border-4 transition-all ${
                        selectedRegion === region.id ? 'border-amber-600 shadow-2xl shadow-amber-600/20' : 'border-white/10'
                      }`}>
                         <img src={region.image} className="w-full h-full object-cover" alt={region.name} />
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${
                        selectedRegion === region.id ? 'text-amber-600' : 'text-slate-400'
                      }`}>
                         {region.name}
                      </span>
                   </button>
                 ))}
                 <button
                   onClick={() => setSelectedRegion(null)}
                   className={`flex flex-col items-center gap-3 shrink-0 transition-all ${
                     selectedRegion === null ? 'scale-105' : 'opacity-50 hover:opacity-100'
                   }`}
                 >
                    <div className={`w-24 h-24 rounded-3xl overflow-hidden border-4 flex items-center justify-center bg-white/5 transition-all ${
                      selectedRegion === null ? 'border-amber-600 shadow-2xl' : 'border-white/10'
                    }`}>
                       <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                      selectedRegion === null ? 'text-amber-600' : 'text-slate-400'
                    }`}>
                       All Regions
                    </span>
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Active Region Details */}
      <AnimatePresence mode="wait">
        {activeRegion && (
          <motion.section
            key={activeRegion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16 px-6 bg-slate-50 border-b border-slate-100"
          >
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                   <h2 className="text-4xl font-black font-serif text-slate-900 mb-6 flex items-baseline gap-4">
                      {activeRegion.name} <span className="text-xl text-amber-600 font-bold">{activeRegion.amharicName}</span>
                   </h2>
                   <div className="flex items-center gap-2 mb-8 bg-amber-600/10 text-amber-600 w-fit px-4 py-2 rounded-2xl font-black text-xs uppercase tracking-widest">
                      <Star className="h-4 w-4 fill-amber-600" /> Specialty: {activeRegion.specialty}
                   </div>
                   <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {activeRegion.history}
                   </p>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-slate-400">
                         <MapPin className="h-5 w-5" />
                         <span className="font-bold uppercase tracking-widest text-[10px]">Ethiopia</span>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2 aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                   <img src={activeRegion.image} className="w-full h-full object-cover" alt="" />
                </div>
             </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Products Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
           <h2 className="text-4xl font-black font-serif text-slate-900">
              {activeRegion ? `${activeRegion.name} Collection` : 'All Cultural Treasures'}
              <span className="block text-sm text-slate-400 font-sans mt-2 font-bold uppercase tracking-widest">
                Showing {filteredProducts.length} unique pieces
              </span>
           </h2>
           
           <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                 <Input 
                   placeholder="Search pieces, artisans..." 
                   className="pl-12 h-14 rounded-2xl bg-white border-slate-100 shadow-sm font-bold" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
              </div>
              <Button variant="outline" className="h-14 w-14 rounded-2xl border-slate-100 bg-white">
                 <Filter className="h-5 w-5" />
              </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {filteredProducts.map(product => (
             <motion.div 
               layout
               key={product.id} 
               className="group flex flex-col h-full bg-white rounded-[3rem] border border-slate-50 p-6 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
             >
                <Link to={`/product/${product.id}`} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 block">
                   <img 
                    src={product.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={product.name}
                   />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm">
                      {product.category}
                   </div>
                   <button className="absolute bottom-4 right-4 bg-slate-900 text-white h-12 w-12 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <ShoppingBag className="h-5 w-5" />
                   </button>
                   <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md h-10 w-10 rounded-full flex items-center justify-center text-rose-500 shadow-sm opacity-0 group-hover:opacity-100 transition-all">
                      <Heart className="h-4 w-4" />
                   </button>
                </Link>

                <div className="flex-1 flex flex-col">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black text-slate-900 leading-tight flex-1">{product.name}</h3>
                      <p className="text-2xl font-black text-amber-600 ml-4">${product.price}</p>
                   </div>
                   
                   <p className="text-slate-400 font-medium mb-6 line-clamp-2">{product.description}</p>
                   
                   <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden">
                            <img src={artisans.find(a => a.name === product.artisan)?.image} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Master Artisan</p>
                            <Link to={`/artisan/${artisans.find(a => a.name === product.artisan)?.id}`} className="text-xs font-black text-slate-900 hover:text-amber-600 transition-colors">{product.artisan}</Link>
                         </div>
                      </div>
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-xs bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-100">
                         <Star className="h-3 w-3 fill-amber-600" />
                         {product.rating}
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ShopByRegion;