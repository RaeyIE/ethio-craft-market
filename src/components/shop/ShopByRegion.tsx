import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  ChevronRight, 
  Globe, 
  Sparkles, 
  Users,
  History
} from 'lucide-react';
import { regions, artisans, culturalTerms, Product } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const ShopByRegion: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = useMemo(() => {
    return regions.filter(region => 
      region.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      region.amharicName.includes(searchQuery)
    );
  }, [searchQuery]);

  const activeRegionData = useMemo(() => 
    regions.find(r => r.id === selectedRegion), 
  [selectedRegion]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/shop-by-region---north-7eadcdf1-1774944784136.webp" 
            className="w-full h-full object-cover opacity-60 scale-110 blur-[2px]"
            alt="Ethiopian Highlands"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-[#FDFCFB]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-500 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-amber-600/30 backdrop-blur-md">
              <MapPin className="h-3 w-3" /> {culturalTerms.region} Guide
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-serif leading-tight">
              Explore the Heart of <span className="text-amber-500">Ethiopian</span> Craft
            </h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
              Journey through our diverse regions and discover the unique traditions that define our "\u1325\u1260\u1265" (Tibeb).
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-4 mb-16">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input 
              placeholder="Search by region or cultural specialty..." 
              className="h-16 pl-16 pr-6 rounded-[1.5rem] border-none bg-slate-50 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <Button variant="outline" className="h-16 px-8 rounded-[1.5rem] border-slate-200 font-bold flex items-center gap-3">
                <Filter className="h-5 w-5" /> Filters
             </Button>
             <Button className="h-16 px-10 rounded-[1.5rem] bg-slate-900 font-black text-white hover:bg-amber-600 transition-all">
                Find Artisan
             </Button>
          </div>
        </div>

        {/* Region Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {filteredRegions.map((region) => (
            <motion.div
              key={region.id}
              whileHover={{ y: -10 }}
              className={`group cursor-pointer rounded-[3rem] overflow-hidden border-2 transition-all ${selectedRegion === region.id ? 'border-amber-600 ring-4 ring-amber-100 shadow-2xl' : 'border-white shadow-lg'}`}
              onClick={() => setSelectedRegion(region.id)}
            >
              <div className="h-64 relative overflow-hidden">
                <img src={region.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={region.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                   <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">{region.amharicName}</p>
                   <h3 className="text-2xl font-black">{region.name}</h3>
                </div>
              </div>
              <div className="p-8 bg-white">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Main Craft</p>
                 <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    {region.specialty}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Region Detail View */}
        {activeRegionData && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100"
          >
            <div className="lg:col-span-7 space-y-10">
               <div>
                  <div className="flex items-center gap-4 mb-6">
                     <span className="w-16 h-[2px] bg-amber-600" />
                     <span className="text-amber-600 font-black uppercase tracking-widest text-xs">Regional Spotlight</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-serif mb-8">
                     The Soul of <span className="text-amber-600">{activeRegionData.name}</span>
                  </h2>
                  <div className="space-y-6">
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                           <History className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-2">Our Legacy</h4>
                           <p className="text-slate-500 leading-relaxed">{activeRegionData.history}</p>
                        </div>
                     </div>
                     <div className="flex gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                           <Sparkles className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-2">The Craft</h4>
                           <p className="text-slate-500 leading-relaxed">{activeRegionData.description}</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="pt-10 border-t border-slate-50">
                  <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                     <Users className="h-6 w-6 text-slate-400" /> 
                     Meet local {culturalTerms.artisan}s
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {artisans.filter(a => a.regionId === activeRegionData.id).map(artisan => (
                        <Link to={`/artisan/${artisan.id}`} key={artisan.id} className="group flex items-center gap-4 p-4 bg-slate-50 rounded-[2rem] border border-transparent hover:border-amber-600/20 transition-all">
                           <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                              <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <p className="font-black text-slate-900">{artisan.name}</p>
                              <p className="text-xs text-slate-500">{artisan.role}</p>
                           </div>
                           <ChevronRight className="ml-auto h-5 w-5 text-slate-300 group-hover:text-amber-600 transition-colors" />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
               <div className="relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
                  <img src={activeRegionData.image} className="w-full h-full object-cover" alt="" />
                  <div className="absolute top-8 right-8">
                     <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl flex flex-col items-center">
                        <Globe className="h-6 w-6 text-amber-600 mb-2" />
                        <p className="text-[10px] font-black uppercase text-slate-400">Global Ready</p>
                        <p className="text-sm font-bold">Yes (Export)</p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
                  <h4 className="text-2xl font-bold mb-4">Support {activeRegionData.name}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                     Every purchase directly funds regional community development and traditional school restoration.
                  </p>
                  <Button className="w-full h-14 bg-amber-600 hover:bg-amber-700 rounded-2xl font-black text-white">
                     Shop {activeRegionData.name} {culturalTerms.shop}
                  </Button>
               </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopByRegion;