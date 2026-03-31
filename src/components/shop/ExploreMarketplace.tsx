import React, { useState, useMemo } from 'react';
import { 
  Search, 
  LayoutGrid, 
  List, 
  Sparkles, 
  ArrowUpRight, 
  Globe, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { products, categories, culturalTerms, artisans } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreMarketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.artisan.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-amber-500" />
                 </span>
                 <span className="text-amber-600 font-black uppercase tracking-widest text-xs">The Global {culturalTerms.shop}</span>
              </div>
              <h1 className="text-6xl font-black text-slate-900 font-serif mb-4">Explore {culturalTerms.shop}</h1>
              <p className="text-xl text-slate-500 max-w-2xl font-medium">
                 Discover authentic Ethiopian craftsmanship, from the highlands of Amhara to the heart of Oromia.
              </p>
            </div>
            <div className="flex items-center gap-4">
               <div className="hidden md:flex flex-col items-end">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Active Creations</p>
                  <p className="text-2xl font-black">{products.length}+ Handcrafted</p>
               </div>
               <Button className="h-16 px-10 rounded-[2rem] bg-slate-900 text-white font-black hover:bg-amber-600 transition-all shadow-xl">
                  New Arrivals
               </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-6">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
               <div className="relative flex-1 w-full">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input 
                    placeholder="Search creations, artisans, or regions..."
                    className="h-14 pl-16 rounded-2xl border-slate-100 bg-slate-50 focus-visible:ring-amber-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
               <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                  <Button 
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    className={`rounded-xl h-12 font-bold ${selectedCategory === 'all' ? 'bg-slate-900' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    All {culturalTerms.shop}
                  </Button>
                  {categories.map(cat => (
                    <Button 
                      key={cat.id}
                      variant={selectedCategory === cat.id ? 'default' : 'outline'}
                      className={`rounded-xl h-12 font-bold whitespace-nowrap ${selectedCategory === cat.id ? 'bg-slate-900' : ''}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name}
                    </Button>
                  ))}
               </div>
               <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-lg ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`rounded-lg ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Export Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-[3rem] p-10 mb-16 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                 <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-500/30">
                    <Globe className="h-3 w-3" /> Global Logistics
                 </div>
                 <h2 className="text-3xl font-black mb-4">Verified Export for Global Buyers</h2>
                 <p className="text-slate-400 font-medium leading-relaxed">
                    Our specialized export team handles international shipping, customs, and artisan certification to ensure your piece arrives with heritage intact.
                 </p>
              </div>
              <Button className="h-14 px-10 rounded-2xl bg-white text-slate-900 font-black hover:bg-amber-50">
                 Export Policy
              </Button>
           </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
           <motion.div 
             key={selectedCategory + searchQuery}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10' : 'space-y-6'}
           >
              {filteredProducts.map(product => (
                 <Link to={`/product/${product.id}`} key={product.id} className="group">
                    {viewMode === 'grid' ? (
                       <div className="space-y-4">
                          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-md group-hover:shadow-2xl transition-all">
                             <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={product.name} />
                             <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                <Button size="icon" className="w-12 h-12 rounded-full bg-white text-slate-900 hover:bg-amber-600 hover:text-white border-none shadow-xl">
                                   <Sparkles className="h-5 w-5" />
                                </Button>
                             </div>
                             {product.isExportReady && (
                                <div className="absolute bottom-6 left-6">
                                   <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2">
                                      <ShieldCheck className="h-3 w-3" /> Export Ready
                                   </div>
                                </div>
                             )}
                          </div>
                          <div className="px-2">
                             <div className="flex justify-between items-start mb-2">
                                <div>
                                   <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">{product.name}</h3>
                                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">By {product.artisan}</p>
                                </div>
                                <span className="text-xl font-black text-slate-900">${product.price}</span>
                             </div>
                             <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                   <TrendingUp className="h-3 w-3 text-emerald-500" />
                                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Popular</span>
                                </div>
                                <div className="flex items-center gap-1">
                                   <Globe className="h-3 w-3 text-blue-500" />
                                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{product.region}</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    ) : (
                       <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex gap-8 items-center hover:shadow-lg transition-all">
                          <div className="w-40 h-40 rounded-3xl overflow-hidden shrink-0 shadow-sm">
                             <img src={product.image} className="w-full h-full object-cover" alt="" />
                          </div>
                          <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center gap-6">
                             <div>
                                <h3 className="text-2xl font-black text-slate-900 mb-2">{product.name}</h3>
                                <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">{product.region} \\u2022 {product.artisan}</p>
                                <div className="flex flex-wrap gap-2">
                                   {product.materials.slice(0, 3).map(m => (
                                      <span key={m} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold">{m}</span>
                                   ))}
                                </div>
                             </div>
                             <div className="flex items-center gap-10">
                                <div className="text-right">
                                   <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Price</p>
                                   <p className="text-3xl font-black text-slate-900">${product.price}</p>
                                </div>
                                <Button className="rounded-2xl h-14 px-8 bg-slate-900 font-black text-white">
                                   Quick View
                                </Button>
                             </div>
                          </div>
                       </div>
                    )}
                 </Link>
              ))}
           </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
           <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <Search className="h-16 w-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-slate-900">No creations found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or category filters.</p>
              <Button 
                variant="link" 
                className="mt-4 text-amber-600 font-bold"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              >
                Clear all filters
              </Button>
           </div>
        )}

        {/* Recommended For You */}
        <section className="mt-32">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black font-serif">Recommended Artisans</h2>
              <Link to="/regions" className="text-amber-600 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                 View Region Map <ChevronRight className="h-4 w-4" />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artisans.map(artisan => (
                 <Link to={`/artisan/${artisan.id}`} key={artisan.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden mb-6 shadow-md border-4 border-amber-50">
                       <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-1">{artisan.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Master {artisan.specialty}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                       <span className="text-[10px] font-black uppercase text-amber-600 tracking-tighter">{artisan.location}</span>
                       <ArrowUpRight className="h-4 w-4 text-slate-300" />
                    </div>
                 </Link>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreMarketplace;