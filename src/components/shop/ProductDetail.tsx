import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  ChevronLeft, 
  ShieldCheck, 
  Globe, 
  Truck, 
  Heart, 
  Share2, 
  Sparkles, 
  History,
  Package,
  ArrowUpRight
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { products, artisans, culturalTerms, Product } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'shipping'>('description');

  const product = products.find(p => p.id === id);
  const artisan = artisans.find(a => a.name === product?.artisan);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
       <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Creation not found</h2>
          <Button asChild className="rounded-xl"><Link to="/explore">Back to Gebeya</Link></Button>
       </div>
    </div>
  );

  const handleAddToCart = () => {
    // Note: useStore.addToCart currently only takes product. 
    // If quantity support is needed, it would usually be handled in a loop or updating store.
    // For now, adhering to the store's single-argument signature.
    addToCart(product);
    toast.success(`Added ${product.name} to your bag`);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-amber-600 font-bold transition-all">
               <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <div className="flex items-center gap-6">
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-50 hover:text-rose-500"><Heart className="h-5 w-5" /></Button>
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-50"><Share2 className="h-5 w-5" /></Button>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Product Image Gallery */}
          <div className="lg:col-span-7 space-y-6">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="relative group rounded-[4rem] overflow-hidden aspect-[4/5] bg-slate-50 shadow-2xl border-8 border-white"
             >
                <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.name} />
                {product.isExportReady && (
                   <div className="absolute top-10 right-10">
                      <div className="bg-emerald-500/90 backdrop-blur-md px-6 py-3 rounded-[2rem] text-white shadow-2xl flex items-center gap-3">
                         <Globe className="h-5 w-5 shadow-sm" />
                         <span className="text-xs font-black uppercase tracking-widest">Export Certified</span>
                      </div>
                   </div>
                )}
                <div className="absolute bottom-10 left-10">
                   <div className="bg-white/90 backdrop-blur-md p-8 rounded-[3rem] shadow-2xl border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                         <Sparkles className="h-4 w-4 text-amber-600" />
                         <p className="text-[10px] font-black uppercase text-amber-600 tracking-widest">{culturalTerms.wisdom} Artifact</p>
                      </div>
                      <p className="text-sm text-slate-600 font-medium max-w-[200px] leading-relaxed">
                         Verified by Tibeb Square Cultural Council.
                      </p>
                   </div>
                </div>
             </motion.div>

             <div className="grid grid-cols-3 gap-6">
                {[1,2,3].map(i => (
                   <div key={i} className="rounded-[2rem] overflow-hidden aspect-square shadow-md border-4 border-white cursor-pointer hover:border-amber-600/30 transition-all">
                      <img src={product.image} className="w-full h-full object-cover" alt="" />
                   </div>
                ))}
             </div>
          </div>

          {/* Product Information */}
          <div className="lg:col-span-5 space-y-12">
             <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <span className="bg-slate-100 text-slate-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {product.category}
                   </span>
                   <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
                      ID: #TIBEB-{product.id}
                   </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 font-serif leading-tight">
                   {product.name}
                </h1>
                <div className="flex items-center gap-10">
                   <div className="flex flex-col">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Market Price</p>
                      <p className="text-5xl font-black text-amber-600 font-serif">${product.price}</p>
                   </div>
                   <div className="flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                      <div className="flex items-center gap-0.5">
                         {[1,2,3,4,5].map(star => (
                            <Star key={star} className={`h-4 w-4 ${star <= product.rating ? 'fill-amber-500 text-amber-500' : 'text-slate-200'}`} />
                         ))}
                      </div>
                      <span className="text-sm font-black">{product.rating}</span>
                      <span className="text-xs text-slate-400">({product.reviews})</span>
                   </div>
                </div>
             </div>

             <div className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">The Master {culturalTerms.artisan}</p>
                <Link to={`/artisan/${artisan?.id}`} className="flex items-center justify-between group">
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md ring-2 ring-amber-100">
                         <img src={artisan?.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                         <p className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">{product.artisan}</p>
                         <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{artisan?.role}</p>
                      </div>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight className="h-6 w-6" />
                   </div>
                </Link>
                <p className="mt-6 text-sm text-slate-500 font-medium leading-relaxed italic">
                   "{artisan?.philosophy}"
                </p>
             </div>

             <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="flex items-center bg-slate-50 rounded-2xl p-2 border border-slate-100">
                      <Button 
                         variant="ghost" 
                         size="icon" 
                         className="rounded-xl hover:bg-white"
                         onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >-</Button>
                      <span className="w-12 text-center font-black">{quantity}</span>
                      <Button 
                         variant="ghost" 
                         size="icon" 
                         className="rounded-xl hover:bg-white"
                         onClick={() => setQuantity(quantity + 1)}
                      >+</Button>
                   </div>
                   <Button 
                      onClick={handleAddToCart}
                      className="flex-1 h-18 rounded-[2rem] bg-slate-900 text-white font-black text-xl hover:bg-amber-600 transition-all shadow-2xl flex items-center gap-4"
                   >
                      <ShoppingCart className="h-6 w-6" /> Add to Collection
                   </Button>
                </div>
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                   <ShieldCheck className="h-3 w-3 inline mr-1 text-emerald-500" /> Guaranteed Heritage Authentication
                </p>
             </div>

             {/* Tabs Section */}
             <div className="pt-8">
                <div className="flex gap-10 border-b border-slate-100 mb-8 overflow-x-auto scrollbar-hide">
                   {['description', 'details', 'shipping'].map(tab => (
                      <button
                         key={tab}
                         onClick={() => setActiveTab(tab as any)}
                         className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${
                            activeTab === tab ? 'text-slate-900' : 'text-slate-400'
                         }`}
                      >
                         {tab}
                         {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-amber-600 rounded-full" />}
                      </button>
                   ))}
                </div>
                <AnimatePresence mode="wait">
                   <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="min-h-[150px]"
                   >
                      {activeTab === 'description' && (
                         <div className="space-y-6">
                            <p className="text-slate-600 leading-relaxed text-lg">{product.description}</p>
                            <div className="flex gap-4 items-center">
                               <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                  <History className="h-6 w-6" />
                               </div>
                               <p className="text-sm text-slate-500 font-medium">
                                  Handcrafted in <span className="text-slate-900 font-bold uppercase">{product.region}, Ethiopia</span>
                               </p>
                            </div>
                         </div>
                      )}
                      {activeTab === 'details' && (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.materials.map(mat => (
                               <div key={mat} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm">
                                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                  <span className="text-sm font-bold text-slate-700">{mat}</span>
                               </div>
                            ))}
                            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm">
                               <div className="w-2 h-2 bg-blue-500 rounded-full" />
                               <span className="text-sm font-bold text-slate-700">Eco-Friendly Sourcing</span>
                            </div>
                         </div>
                      )}
                      {activeTab === 'shipping' && (
                         <div className="space-y-6">
                            <div className="flex gap-6">
                               <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white shrink-0">
                                  <Truck className="h-6 w-6" />
                               </div>
                               <div>
                                  <h4 className="font-black text-slate-900">Local Delivery</h4>
                                  <p className="text-sm text-slate-500 leading-relaxed">3-5 business days across Ethiopia. Free for orders over $150.</p>
                               </div>
                            </div>
                            <div className="flex gap-6">
                               <div className="w-14 h-14 rounded-2xl bg-amber-600 flex items-center justify-center text-white shrink-0">
                                  <Globe className="h-6 w-6" />
                               </div>
                               <div>
                                  <h4 className="font-black text-slate-900">Global Export</h4>
                                  <p className="text-sm text-slate-500 leading-relaxed">7-12 business days worldwide. Custom handling for delicate cultural artifacts.</p>
                               </div>
                            </div>
                         </div>
                      )}
                   </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>

        {/* Related Creations Section */}
        <section className="mt-32">
           <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl font-black font-serif">More from {product.artisan}</h2>
              <Button variant="link" asChild className="text-amber-600 font-black uppercase tracking-widest p-0 h-auto">
                 <Link to={`/artisan/${artisan?.id}`}>Full Storefront <ArrowUpRight className="h-4 w-4 ml-2" /></Link>
              </Button>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.filter(p => p.artisan === product.artisan && p.id !== product.id).slice(0, 4).map(p => (
                 <Link to={`/product/${p.id}`} key={p.id} className="group">
                    <div className="rounded-[2.5rem] overflow-hidden aspect-square mb-6 shadow-sm group-hover:shadow-xl transition-all">
                       <img src={p.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="" />
                    </div>
                    <h4 className="font-black text-slate-900">{p.name}</h4>
                    <p className="text-sm text-amber-600 font-black font-serif">${p.price}</p>
                 </Link>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;