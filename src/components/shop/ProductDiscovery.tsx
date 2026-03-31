import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Grid, 
  List, 
  ChevronDown, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  SlidersHorizontal,
  ShoppingBag,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, regions, categories, culturalTerms } from '../../lib/data';
import ProductGrid from './ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';

const ProductDiscovery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('Featured');
  const [showExportOnly, setShowExportOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesRegion = !selectedRegion || product.region === selectedRegion;
      const matchesExport = !showExportOnly || product.isExportReady;
      return matchesSearch && matchesCategory && matchesRegion && matchesExport;
    });

    if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [searchTerm, selectedCategory, selectedRegion, showExportOnly, sortBy]);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white pt-32 pb-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/10 -z-0" />
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
               <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-600/30 mb-8">
                  <Sparkles className="h-3 w-3" /> Discover Authentic {culturalTerms.wisdom}
               </div>
               <h1 className="text-6xl md:text-8xl font-black mb-8 font-serif leading-tight">
                  Explore the <span className="text-amber-500">{culturalTerms.shop}</span>
               </h1>
               <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                  Our marketplace connects you directly with master artisans from every {culturalTerms.region} of Ethiopia. Support local craftsmanship and own a piece of heritage.
               </p>
            </div>
         </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">
         <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 space-y-8">
               <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl">
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Filters</h3>
                  
                  {/* Export Toggle */}
                  <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-slate-900">Global Export Only</span>
                        <input 
                          type="checkbox" 
                          checked={showExportOnly}
                          onChange={() => setShowExportOnly(!showExportOnly)}
                          className="w-5 h-5 rounded-lg border-slate-300 text-amber-600 focus:ring-amber-600 cursor-pointer"
                        />
                     </div>
                     <p className="text-[10px] text-slate-400 uppercase font-black">Certified Shipping Ready</p>
                  </div>

                  {/* Categories */}
                  <div className="mb-10">
                     <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Categories</h4>
                     <div className="space-y-2">
                        <button
                           onClick={() => setSelectedCategory(null)}
                           className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                              !selectedCategory ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                           }`}
                        >
                           All Collections
                        </button>
                        {categories.map(cat => (
                           <button
                              key={cat.id}
                              onClick={() => setSelectedCategory(cat.id)}
                              className={`w-full flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                 selectedCategory === cat.id ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                              }`}
                           >
                              {cat.name.split(' (')[0]}
                              {selectedCategory === cat.id && <CheckCircle2 className="h-4 w-4 text-amber-600" />}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Regions */}
                  <div className="mb-10">
                     <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Regions</h4>
                     <div className="grid grid-cols-1 gap-2">
                        {regions.map(region => (
                           <button
                              key={region.id}
                              onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                              className={`group relative overflow-hidden h-14 rounded-2xl border transition-all ${
                                 selectedRegion === region.id ? 'border-amber-600 bg-amber-50 shadow-md' : 'border-slate-100 hover:border-amber-200'
                              }`}
                           >
                              <img src={region.image} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="" />
                              <span className={`relative z-10 font-bold text-sm ${
                                 selectedRegion === region.id ? 'text-amber-700' : 'text-slate-600'
                              }`}>
                                 {region.name.split(' (')[0]}
                              </span>
                           </button>
                        ))}
                     </div>
                  </div>

                  <Button 
                     variant="ghost" 
                     className="w-full text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-red-500"
                     onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory(null);
                        setSelectedRegion(null);
                        setShowExportOnly(false);
                     }}
                  >
                     Reset Filters
                  </Button>
               </div>

               {/* Featured Artisan Card */}
               <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
                  <Globe className="h-12 w-12 text-amber-500/20 absolute -top-4 -right-4" />
                  <h3 className="text-xl font-bold mb-4 font-serif">Meet Our Master Artisans</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                     Learn about the people behind the products and their ancestral techniques.
                  </p>
                  <Link to="/regions">
                     <Button className="w-full rounded-xl bg-amber-600 hover:bg-amber-700 text-xs font-bold">
                        Visit Artisan Stories
                     </Button>
                  </Link>
               </div>
            </aside>

            {/* Main Listing Area */}
            <main className="flex-1 space-y-8">
               {/* Search & Toolbar */}
               <div className="bg-white p-4 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                     <Input 
                        placeholder="Search for garments, jewelry, or artisans..." 
                        className="h-16 pl-14 pr-6 rounded-[2rem] border-none bg-slate-50 text-lg"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button variant="outline" className="h-16 px-8 rounded-[2rem] border-slate-100 bg-slate-50 font-bold flex items-center gap-2">
                              {sortBy} <ChevronDown className="h-4 w-4" />
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="rounded-2xl p-2">
                           <DropdownMenuItem className="rounded-xl py-3 font-bold" onClick={() => setSortBy('Featured')}>Featured</DropdownMenuItem>
                           <DropdownMenuItem className="rounded-xl py-3 font-bold" onClick={() => setSortBy('Price: Low to High')}>Price: Low to High</DropdownMenuItem>
                           <DropdownMenuItem className="rounded-xl py-3 font-bold" onClick={() => setSortBy('Price: High to Low')}>Price: High to Low</DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                     <Button variant="outline" className="h-16 w-16 rounded-[2rem] border-slate-100 bg-slate-50">
                        <SlidersHorizontal className="h-6 w-6 text-slate-600" />
                     </Button>
                  </div>
               </div>

               {/* Active Filter Badges */}
               {(selectedCategory || selectedRegion || searchTerm || showExportOnly) && (
                  <div className="flex flex-wrap gap-2 items-center">
                     <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Active:</span>
                     {searchTerm && <span className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase">"{searchTerm}"</span>}
                     {selectedCategory && <span className="px-4 py-1.5 bg-amber-600 text-white rounded-full text-[10px] font-black uppercase">{selectedCategory}</span>}
                     {selectedRegion && <span className="px-4 py-1.5 bg-slate-600 text-white rounded-full text-[10px] font-black uppercase">{selectedRegion}</span>}
                     {showExportOnly && <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase">Global Ready</span>}
                     <button 
                        onClick={() => {
                           setSearchTerm('');
                           setSelectedCategory(null);
                           setSelectedRegion(null);
                           setShowExportOnly(false);
                        }}
                        className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline ml-4"
                     >
                        Clear All
                     </button>
                  </div>
               )}

               {/* Product Grid */}
               <AnimatePresence mode="wait">
                  {filteredProducts.length > 0 ? (
                     <motion.div
                        key="results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                     >
                        <ProductGrid products={filteredProducts} />
                     </motion.div>
                  ) : (
                     <motion.div
                        key="no-results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200"
                     >
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
                           <ShoppingBag className="h-10 w-10 text-slate-300" />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 mb-2 font-serif">No treasures found</h3>
                        <p className="text-slate-500 mb-8 max-w-sm mx-auto">Try adjusting your filters or search terms to explore our vibrant marketplace.</p>
                        <Button className="rounded-2xl bg-slate-900 h-14 px-8 font-bold" onClick={() => { setSearchTerm(''); setSelectedCategory(null); setSelectedRegion(null); setShowExportOnly(false); }}>
                           Clear All Filters
                        </Button>
                     </motion.div>
                  )}
               </AnimatePresence>
            </main>
         </div>
      </div>
    </div>
  );
};

export default ProductDiscovery;