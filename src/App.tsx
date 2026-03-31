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
import { Globe, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Collections />
              <VendorStory />
              {/* Regional Spotlight Preview */}
              <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/5 blur-[120px] rounded-full" />
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-500 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-600/30">
                      <Globe className="h-3 w-3" /> Regional Exploration
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black font-serif mb-8 leading-[0.9]">
                      Discover the Spirit of <span className="text-amber-500">Ethiopia</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                      Each region of Ethiopia carries a unique heartbeat of craftsmanship. From the ancient looms of Gonder to the leather workshops of Addis Ababa.
                    </p>
                    <Button asChild className="h-16 px-10 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-lg">
                      <Link to="/regions">Explore All Regions</Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="w-[300px] h-[400px] md:w-[450px] md:h-[600px] rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-700">
                      <img 
                        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/a37d7a42-f5ad-45eb-891b-547c1a8fd2c1/shop-by-region---north-7eadcdf1-1774944784136.webp" 
                        className="w-full h-full object-cover"
                        alt="Ethiopian Region"
                      />
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-2xl text-slate-900">
                       <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2">Featured Spot</p>
                       <p className="text-2xl font-black font-serif">Gonder, Amhara</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
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
        <footer className="bg-slate-900 text-white py-24 px-6 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="space-y-8">
                <h3 className="text-3xl font-black font-serif flex items-center gap-3">
                   <Sparkles className="h-8 w-8 text-amber-500 fill-amber-500" />
                   \\u1325\\u1260\\u1265 SQUARE
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Empowering Ethiopian artisans and sharing our cultural heritage with the world through authentic, handcrafted excellence.
                </p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                      <Globe className="h-5 w-5" />
                   </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">{culturalTerms.explore}</h4>
                <ul className="space-y-4">
                  <li><Link to="/explore" className="text-slate-300 hover:text-white transition-colors">Marketplace ({culturalTerms.shop})</Link></li>
                  <li><Link to="/regions" className="text-slate-300 hover:text-white transition-colors">{culturalTerms.region} Guide</Link></li>
                  <li><Link to="/artisan/join" className="text-slate-300 hover:text-white transition-colors">Become a {culturalTerms.artisan}</Link></li>
                  <li><Link to="/shipping" className="text-slate-300 hover:text-white transition-colors">Export Policy</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">My Space</h4>
                <ul className="space-y-4">
                  <li><Link to="/dashboard/user" className="text-slate-300 hover:text-white transition-colors">Buyer Dashboard</Link></li>
                  <li><Link to="/dashboard/vendor" className="text-slate-300 hover:text-white transition-colors">Artisan Panel</Link></li>
                  <li><Link to="/dashboard/admin" className="text-slate-300 hover:text-white transition-colors">Admin Central</Link></li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <h4 className="text-white font-bold mb-4">Join the {culturalTerms.community}</h4>
                <p className="text-slate-400 text-sm mb-6">Get updates on new collections and artisan stories.</p>
                <div className="flex gap-2">
                   <Input placeholder="Your email" className="bg-white/10 border-white/10 text-white rounded-xl h-12" />
                   <Button className="bg-amber-600 hover:bg-amber-700 rounded-xl font-bold h-12">Join</Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-slate-500 text-sm">
                \\u00a9 2024 \\u1325\\u1260\\u1265 SQUARE. Built with pride in Ethiopia.
              </p>
              <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
                 <Link to="/privacy" className="hover:text-white">Privacy</Link>
                 <Link to="/terms" className="hover:text-white">Terms</Link>
                 <Link to="/shipping" className="hover:text-white">International Export</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
      
      <Toaster position="top-center" richColors />
    </div>
  );
};

export default App;