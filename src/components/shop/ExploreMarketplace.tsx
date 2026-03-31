import React, { useState, useMemo } from 'react';
import { products, categories, regions, culturalTerms, artisans } from '../../lib/data';
import { Search, Grid, List, Sparkles, Heart, ShoppingBag, Globe, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreMarketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesRegion = !selectedRegion || product.region === selectedRegion;
      
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchQuery, selectedCategory, selectedRegion]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Header Section */}
      <section className="bg-slate-900 pt-32 pb-48 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-600/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-500 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-600/30">
              <Sparkles className="h-3 w-3" /> {culturalTerms.marketplace}
            </span>
            <h1 className="text-6xl md:text-9xl font-black font-serif text-white mb-8 leading-[0.8]">
              Ethiopian <span className="text-amber-500">Mastery</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12 max-w-2xl">
              Explore a curated collection of authentic, handcrafted treasures. From the looms of {regions[0].name} to the leather workshops of {regions[1].name}.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <div className="relative flex-1 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                <Input 
                  placeholder="Search pieces, artisans, or regions..." 
                  className="h-20 pl-14 rounded-3xl bg-white/10 border-white/10 text-white text-lg font-bold backdrop-blur-md focus:ring-amber-600 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="h-20 px-10 rounded-3xl bg-amber-600 hover:bg-amber-700 text-white font-black text-lg transition-all shadow-2xl shadow-amber-600/20">
                {culturalTerms.explore}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar / Filters */}
          <aside className="lg:col-span-1 space-y-10">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-200/50">
               <div className="flex items-center gap-2 mb-8">
                  <Filter className="h-4 w-4 text-amber-600" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Fine Filtering</h3>
               </div>

               <div className="space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-6 font-serif">Categories</h4>
                    <div className="flex flex-col gap-3">
                       <button 
                         onClick={() => setSelectedCategory(null)}
                         className={`text-left px-5 py-3 rounded-2xl font-bold transition-all ${
                           selectedCategory === null ? 'bg-amber-600 text-white shadow-xl shadow-amber-600/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                         }`}
                       >
                          All Treasures
                       </button>
                       {categories.map(cat => (
                         <button 
                           key={cat.id}
                           onClick={() => setSelectedCategory(cat.id)}
                           className={`text-left px-5 py-3 rounded-2xl font-bold transition-all ${
                             selectedCategory === cat.id ? 'bg-amber-600 text-white shadow-xl shadow-amber-600/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                           }`}
                         >
                            {cat.name}
                         </button>
                       ))}
                    </div>
                  </div>

                  {/* Region Filter */}
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-6 font-serif">{culturalTerms.region}</h4>
                    <div className="flex flex-col gap-3">
                       <button 
                         onClick={() => setSelectedRegion(null)}
                         className={`text-left px-5 py-3 rounded-2xl font-bold transition-all ${
                           selectedRegion === null ? 'bg-slate-900 text-white shadow-xl' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                         }`}
                       >
                          All of Ethiopia
                       </button>
                       {regions.map(region => (
                         <button 
                           key={region.id}
                           onClick={() => setSelectedRegion(region.id)}
                           className={`text-left px-5 py-3 rounded-2xl font-bold transition-all ${
                             selectedRegion === region.id ? 'bg-slate-900 text-white shadow-xl' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                           }`}
                         >
                            {region.name} ({region.amharicName})
                         </button>
                       ))}
                    </div>
                  </div>

                  {/* Export Options */}
                  <div className="pt-8 border-t border-slate-50">
                     <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                        <div className="flex items-center gap-2 text-amber-600 font-black text-[10px] uppercase tracking-widest mb-2">
                           <Globe className="h-3 w-3" /> Worldwide Shipping
                        </div>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                           Look for the export-ready badge to order internationally.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
             <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-4">
                   <p className="text-sm font-black text-slate-900">
                      Showing <span className="text-amber-600">{filteredProducts.length}</span> Masterpieces
                   </p>
                </div>
                
                <div className="flex items-center gap-2 bg-white border border-slate-100 p-2 rounded-2xl shadow-sm">
                   <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl bg-slate-900 text-white shadow-xl">
                      <Grid className="h-4 w-4" />
                   </Button>
                   <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl text-slate-400 hover:text-slate-900 transition-colors">
                      <List className="h-4 w-4" />
                   </Button>
                </div>
             </div>

             <AnimatePresence mode="popLayout">
               <motion.div 
                 layout
                 className="grid grid-cols-1 md:grid-cols-2 gap-10"
               >
                  {filteredProducts.map(product => (
                    <motion.div 
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group bg-white rounded-[3rem] p-6 border border-slate-50 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                    >
                       <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                          <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={product.name} />
                          
                          {/* Export Ready Badge */}
                          {product.isExportReady && (
                            <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                               <Globe className="h-3 w-3 text-amber-500" /> Export Ready
                            </div>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                             <Button className="bg-white text-slate-900 hover:bg-amber-600 hover:text-white rounded-2xl font-black shadow-2xl flex-1 mr-4 h-14">
                                Quick Shop
                             </Button>
                             <button className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md text-white hover:bg-white flex items-center justify-center hover:text-rose-500 transition-all shadow-2xl border border-white/20">
                                <Heart className="h-5 w-5" />
                             </button>
                          </div>
                       </Link>

                       <div className="px-2">
                          <div className="flex justify-between items-start mb-4">
                             <div>
                                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-1 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{product.category} • {product.region}</p>
                             </div>
                             <p className="text-2xl font-black text-slate-900">${product.price}</p>
                          </div>
                          
                          <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden border border-slate-100">
                                   <img src={artisans.find(a => a.name === product.artisan)?.image} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div>
                                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">By Artisan</p>
                                   <Link to={`/artisan/${artisans.find(a => a.name === product.artisan)?.id}`} className="text-xs font-black text-slate-900 hover:text-amber-600">{product.artisan}</Link>
                                </div>
                             </div>
                             <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-xl border border-amber-100 font-bold text-xs">
                                <ShoppingBag className="h-3.5 w-3.5" /> {product.stock} left
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </motion.div>
             </AnimatePresence>

             {filteredProducts.length === 0 && (
               <div className="bg-white rounded-[3rem] p-24 border border-dashed border-slate-200 flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                     <Search className="h-10 w-10 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">No treasures found</h3>
                  <p className="text-slate-400 font-medium max-w-sm mx-auto">We couldn't find any masterpieces matching your current search or filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-8 h-14 px-8 rounded-2xl border-slate-100 font-black"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                      setSelectedRegion(null);
                    }}
                  >
                     Reset All Filters
                  </Button>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMarketplace;