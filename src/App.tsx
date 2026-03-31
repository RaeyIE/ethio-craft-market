import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Collections from './components/sections/Collections';
import VendorStory from './components/sections/VendorStory';
import ExploreMarketplace from './components/shop/ExploreMarketplace';
import ProductDetail from './components/shop/ProductDetail';
import CartPage from './pages/shop/CartPage';
import CheckoutFlow from './components/shop/CheckoutFlow';
import OrderConfirmation from './components/shop/OrderConfirmation';
import UserDashboard from './components/user/UserDashboard';
import VendorDashboard from './components/vendor/VendorDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import VendorOnboarding from './components/vendor/VendorOnboarding';
import MeetArtisan from './components/vendor/MeetArtisan';
import ShopByRegion from './components/shop/ShopByRegion';
import { Toaster } from 'sonner';
import { culturalTerms } from './lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Globe, Sparkles, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              <Hero />
              
              {/* Regional Spotlight Preview */}
              <section className="py-40 px-6 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-indigo-600/10 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2" />
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 relative z-10">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-amber-600/30">
                        <Globe className="h-4 w-4" /> Regional Exploration
                      </span>
                      <h2 className="text-6xl md:text-8xl font-black font-serif mb-10 leading-[0.85] tracking-tighter">
                        Discover the <span className="text-amber-500">Heartbeat</span> of our <span className="italic font-medium text-slate-400">Heritage</span>
                      </h2>
                      <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed mb-12 font-serif">
                        Each region of Ethiopia carries a unique heartbeat of craftsmanship. From the ancient looms of Gonder to the leather workshops of Addis Ababa.
                      </p>
                      <div className="flex flex-wrap gap-6">
                        <Button asChild className="h-20 px-12 rounded-[2.5rem] bg-amber-600 hover:bg-amber-700 text-white font-black text-xl transition-all duration-500 shadow-2xl shadow-amber-600/20 group">
                          <Link to="/regions" className="flex items-center gap-3">
                            Explore {culturalTerms.region}s <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="w-[320px] h-[450px] md:w-[500px] md:h-[650px] rounded-[5rem] overflow-hidden border-[12px] border-white/5 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-1000 group cursor-pointer">
                      <img 
                        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/lalibela-region-db3eb5a5-1774945161736.webp" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt="Ethiopian Region Showcase"
                      />
                    </div>
                    
                    <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] text-slate-900 animate-bounce-slow">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 mb-2">Featured Spot</p>
                       <p className="text-4xl font-black font-serif tracking-tighter">Gonder, Amhara</p>
                       <p className="text-sm font-medium text-slate-400 mt-2">The City of Kings</p>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-12 -right-12 bg-amber-600 p-8 rounded-full shadow-2xl text-white rotate-12 flex flex-col items-center justify-center h-32 w-32">
                        <span className="text-2xl font-black">100%</span>
                        <span className="text-[8px] font-black uppercase tracking-widest">Authentic</span>
                    </div>
                  </motion.div>
                </div>
              </section>

              <Collections />
              
              {/* Artisan Invitation */}
              <section className="py-32 bg-[#FDFCFB] overflow-hidden">
                 <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-slate-50 rounded-[5rem] p-12 md:p-24 relative overflow-hidden border border-slate-100 flex flex-col lg:flex-row items-center gap-20">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 blur-[80px] rounded-full" />
                       
                       <div className="lg:w-1/2 relative z-10">
                          <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-xs mb-8 block">Are you a {culturalTerms.artisan}?</span>
                          <h2 className="text-5xl md:text-7xl font-black font-serif text-slate-900 mb-10 leading-[0.9]">
                             Share your <span className="text-amber-600">{culturalTerms.wisdom}</span> with the World.
                          </h2>
                          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
                             Join our ecosystem of masters. We handle global logistics, international payments, and digital storytelling so you can focus on your craft.
                          </p>
                          <Button asChild className="h-20 px-12 rounded-[2.5rem] bg-slate-900 hover:bg-amber-600 text-white font-black text-xl transition-all shadow-2xl shadow-slate-900/10 group">
                             <Link to="/artisan/join" className="flex items-center gap-3">
                                Join {culturalTerms.community} <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                             </Link>
                          </Button>
                       </div>

                       <div className="lg:w-1/2 flex gap-6 items-end">
                          <div className="flex-1 h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl -rotate-2">
                             <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/artisan-portrait-9b91d44f-1774945170374.webp" className="w-full h-full object-cover" alt="" />
                          </div>
                          <div className="flex-1 h-[300px] rounded-[3.5rem] overflow-hidden shadow-2xl rotate-2">
                             <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/leather-craftsmanship-3b1a22fd-1774945164798.webp" className="w-full h-full object-cover" alt="" />
                          </div>
                       </div>
                    </div>
                 </div>
              </section>

              <VendorStory />
            </div>
          } />
          <Route path="/explore" element={<ExploreMarketplace />} />
          <Route path="/regions" element={<ShopByRegion />} />
          <Route path="/shop/region/:regionId" element={<ShopByRegion />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutFlow />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          
          <Route path="/artisan/:id" element={<MeetArtisan />} />
          <Route path="/artisan/join" element={<VendorOnboarding />} />
          
          <Route path="/dashboard/user/*" element={<UserDashboard />} />
          <Route path="/dashboard/vendor/*" element={<VendorDashboard />} />
          <Route path="/dashboard/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {!isDashboard && (
        <footer className="bg-slate-900 text-white pt-40 pb-20 px-6 mt-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
              <div className="space-y-10">
                <h3 className="text-4xl font-black font-serif flex items-center gap-4">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900">
                      <Sparkles className="h-7 w-7" />
                   </div>
                   \u1325\u1260\u1265 SQUARE
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed font-serif">
                   Empowering Ethiopian artisans and sharing our cultural heritage with the world through authentic, handcrafted excellence.
                </p>
                <div className="flex gap-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 transition-all duration-500 cursor-pointer group shadow-lg">
                        <Globe className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-amber-500 font-black uppercase tracking-[0.2em] text-[10px] mb-12">{culturalTerms.explore} Marketplace</h4>
                <ul className="space-y-6">
                  <li><Link to="/explore" className="text-slate-300 hover:text-white transition-all text-lg font-serif">{culturalTerms.shop} Collection</Link></li>
                  <li><Link to="/regions" className="text-slate-300 hover:text-white transition-all text-lg font-serif">{culturalTerms.region}al Guides</Link></li>
                  <li><Link to="/artisan/join" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Become a {culturalTerms.artisan}</Link></li>
                  <li><Link to="/shipping" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Export Solutions</Link></li>
                </ul>
              </div>

              <div className="pt-4">
                <h4 className="text-amber-500 font-black uppercase tracking-[0.2em] text-[10px] mb-12">Ecosystem Portal</h4>
                <ul className="space-y-6">
                  <li><Link to="/dashboard/user" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Buyer Space</Link></li>
                  <li><Link to="/dashboard/vendor" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Artisan Panel</Link></li>
                  <li><Link to="/dashboard/admin" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Admin Central</Link></li>
                  <li><Link to="/privacy" className="text-slate-300 hover:text-white transition-all text-lg font-serif">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-[60px] rounded-full" />
                <h4 className="text-white text-2xl font-black mb-6 font-serif">Join the {culturalTerms.community}</h4>
                <p className="text-slate-400 font-medium mb-10 leading-relaxed">Get updates on new collections and artisan stories from the heart of Ethiopia.</p>
                <div className="flex flex-col gap-4">
                   <Input placeholder="Your email address" className="bg-white/5 border-white/10 text-white rounded-2xl h-14 px-6 font-bold focus:ring-amber-600 transition-all" />
                   <Button className="bg-amber-600 hover:bg-amber-700 rounded-2xl font-black h-16 text-lg shadow-2xl shadow-amber-600/20">Subscribe</Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                 <ShieldCheck className="h-5 w-5 text-amber-600" />
                 <p className="text-slate-500 text-sm font-medium tracking-wide">
                    &copy; 2024 \u1325\u1260\u1265 SQUARE. Built with pride in Ethiopia. Supported by Ethiopia Digital Trade.
                 </p>
              </div>
              <div className="flex gap-10 text-slate-500 text-[10px] font-black uppercase tracking-[0.25em]">
                 <Link to="/privacy" className="hover:text-white transition-colors">Security</Link>
                 <Link to="/terms" className="hover:text-white transition-colors">Logistics</Link>
                 <Link to="/shipping" className="hover:text-white transition-colors">Global Export</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
      
      <Toaster position="top-center" richColors expand />
    </div>
  );
};

export default App;