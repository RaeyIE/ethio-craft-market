import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Store, Package, ShoppingBag, BarChart3, Settings, 
  LogOut, Plus, ChevronRight, Globe, Star, 
  MessageSquare, Sparkles, TrendingUp, Layers, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, culturalTerms, artisans } from '../../lib/data';
import { motion, AnimatePresence } from 'framer-motion';

const VendorDashboard: React.FC = () => {
  const location = useLocation();
  const artisan = artisans[0]; // Simulation for now

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard/vendor', icon: Store },
    { name: 'My Products', path: '/dashboard/vendor/products', icon: Package },
    { name: 'Orders', path: '/dashboard/vendor/orders', icon: ShoppingBag },
    { name: 'Analytics', path: '/dashboard/vendor/analytics', icon: BarChart3 },
    { name: 'Artisan Profile', path: '/dashboard/vendor/profile', icon: Award },
    { name: 'Settings', path: '/dashboard/vendor/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar */}
      <aside className="w-80 bg-slate-900 flex flex-col p-10 fixed h-full z-30">
        <div className="flex items-center gap-3 mb-16 text-white">
           <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-xl shadow-amber-600/20">
              <Store className="h-5 w-5" />
           </div>
           <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-none mb-1">{culturalTerms.artisan} Panel</p>
              <h3 className="text-lg font-black">ጥበብ SQUARE</h3>
           </div>
        </div>

        <nav className="flex-1 space-y-3">
           {menuItems.map(item => {
             const Icon = item.icon;
             const isActive = location.pathname === item.path;
             return (
               <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-4 p-4 rounded-2xl font-black text-sm transition-all group ${
                  isActive ? 'bg-amber-600 text-white shadow-2xl shadow-amber-600/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
               >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-amber-500'}`} />
                  {item.name}
               </Link>
             );
           })}
        </nav>

        <div className="pt-8 border-t border-white/5">
           <Button variant="ghost" className="w-full h-14 rounded-2xl justify-start gap-4 text-slate-400 font-black hover:bg-rose-500/10 hover:text-rose-500 transition-all">
              <LogOut className="h-5 w-5" /> Exit Workspace
           </Button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 lg:ml-80 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
           <Routes>
              <Route path="/" element={<VendorOverview artisan={artisan} />} />
              <Route path="/products" element={<VendorProducts />} />
              <Route path="/orders" element={<VendorOrders />} />
              <Route path="/analytics" element={<VendorAnalytics />} />
              <Route path="/profile" element={<VendorProfileSettings artisan={artisan} />} />
              <Route path="/settings" element={<VendorSettings />} />
           </Routes>
        </div>
      </main>
    </div>
  );
};

const VendorOverview = ({ artisan }: { artisan: any }) => (
  <div className="space-y-12">
     <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <span className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="h-3 w-3" /> Master Artisan
           </span>
           <h2 className="text-4xl font-black font-serif text-slate-900">Greetings, {artisan.name}</h2>
           <p className="text-slate-400 font-medium">Your {culturalTerms.wisdom} is reaching the world today.</p>
        </div>
        <Button className="h-16 px-10 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black text-lg gap-3 shadow-2xl shadow-slate-900/10 transition-all">
           <Plus className="h-5 w-5" /> Add New Piece
        </Button>
     </header>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Gross Revenue</p>
           <p className="text-3xl font-black text-slate-900">$42,890</p>
           <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +12% this month
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Orders</p>
           <p className="text-3xl font-black text-slate-900">1,240</p>
           <div className="mt-4 flex items-center gap-2 text-amber-500 text-xs font-bold">
              <ShoppingBag className="h-3 w-3" /> 8 new today
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Artisan Rating</p>
           <p className="text-3xl font-black text-slate-900">4.9</p>
           <div className="mt-4 flex items-center gap-2 text-amber-500 text-xs font-bold">
              <Star className="h-3 w-3 fill-amber-500" /> Excellent
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Global Reach</p>
           <p className="text-3xl font-black text-slate-900">18</p>
           <div className="mt-4 flex items-center gap-2 text-indigo-500 text-xs font-bold">
              <Globe className="h-3 w-3" /> Countries
           </div>
        </div>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black font-serif text-slate-900">Recent Activity</h3>
              <Button variant="ghost" className="text-xs font-black text-amber-600 uppercase tracking-widest hover:bg-amber-50">Full Log</Button>
           </div>
           
           <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-8 flex items-center justify-between border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                         <ShoppingBag className="h-6 w-6" />
                      </div>
                      <div>
                         <p className="text-lg font-black text-slate-900">New Order Received</p>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">From Washington DC, USA • Just now</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <p className="text-lg font-black text-amber-600">+$450</p>
                      <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl bg-slate-50">
                         <ChevronRight className="h-4 w-4" />
                      </Button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <section>
           <h3 className="text-2xl font-black font-serif text-slate-900 mb-8">Export Status</h3>
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 blur-[80px] rounded-full" />
              <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-6">Shipment Pending</p>
              <p className="text-3xl font-black mb-8 leading-tight">4 Pieces ready for international export</p>
              <Button className="w-full h-16 rounded-2xl bg-white text-slate-900 hover:bg-amber-600 hover:text-white font-black transition-all shadow-xl">
                 Manage Global Orders
              </Button>
           </div>
        </section>
     </div>
  </div>
);

const VendorProducts = () => (
  <div className="space-y-12">
     <header className="flex justify-between items-end">
        <div>
           <h2 className="text-4xl font-black font-serif text-slate-900">Product Catalog</h2>
           <p className="text-slate-400 font-medium">Manage your handcrafted inventory.</p>
        </div>
        <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black">Add New Product</Button>
     </header>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
           <div key={p.id} className="group bg-white border border-slate-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                    {p.stock} in stock
                 </div>
                 {p.isExportReady && (
                   <div className="absolute top-4 right-4 bg-slate-900/90 text-white p-2 rounded-xl">
                      <Globe className="h-4 w-4 text-amber-500" />
                   </div>
                 )}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">{p.name}</h4>
              <div className="flex justify-between items-center">
                 <p className="text-2xl font-black text-amber-600">${p.price}</p>
                 <Button variant="outline" className="rounded-xl border-slate-100 font-black h-12 px-6">Edit</Button>
              </div>
           </div>
        ))}
     </div>
  </div>
);

const VendorOrders = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Active Orders</h2>
        <p className="text-slate-400 font-medium">Keep track of your sales and shipments.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden">
        <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
           <p className="text-xs font-black uppercase tracking-widest text-slate-400">Order Details</p>
           <p className="text-xs font-black uppercase tracking-widest text-slate-400">Status / Action</p>
        </div>
        {[1, 2, 3].map((_, i) => (
           <div key={i} className="p-8 flex items-center justify-between border-b border-slate-50 last:border-0">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100">
                    <img src={products[0].image} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div>
                    <h4 className="text-lg font-black text-slate-900">Habesha Kemis Set</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer: Elias G. • Addis Ababa</p>
                 </div>
              </div>
              <div className="flex items-center gap-8">
                 <span className="bg-amber-50 text-amber-600 text-[10px] font-black px-4 py-2 rounded-full uppercase">Preparing</span>
                 <Button className="h-12 px-6 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-black text-xs">Mark Shipped</Button>
              </div>
           </div>
        ))}
     </div>
  </div>
);

const VendorAnalytics = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Sales Analytics</h2>
        <p className="text-slate-400 font-medium">Deep dive into your performance data.</p>
     </header>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white border border-slate-100 rounded-[3rem] p-10 h-96 flex flex-col justify-end relative overflow-hidden">
           <div className="absolute top-10 left-10">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Monthly Revenue</p>
              <p className="text-4xl font-black text-slate-900">$8,450</p>
           </div>
           {/* Simulated Chart Bars */}
           <div className="flex items-end gap-4 h-48">
              {[40, 60, 30, 80, 50, 90, 70, 45, 85, 55, 65, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-amber-600/10 rounded-t-lg group relative cursor-pointer hover:bg-amber-600 transition-all" style={{ height: `${h}%` }}>
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">${h * 10}</div>
                </div>
              ))}
           </div>
        </div>
        <div className="space-y-6">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white h-full flex flex-col justify-center">
              <h4 className="text-xl font-black mb-6">Performance Insights</h4>
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center text-amber-500">
                       <TrendingUp className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">Your clothing category saw a <span className="text-amber-500 font-black">24% increase</span> in interest this week.</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                       <Globe className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium">New emerging markets in <span className="text-indigo-400 font-black">Germany and Canada</span> are viewing your pieces.</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </div>
);

const VendorProfileSettings = ({ artisan }: { artisan: any }) => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Artisan Profile</h2>
        <p className="text-slate-400 font-medium">Manage how you appear to buyers worldwide.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
           <div className="relative group">
              <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img src={artisan.image} className="w-full h-full object-cover" alt="" />
              </div>
              <Button size="icon" className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white shadow-xl">
                 <Plus className="h-5 w-5" />
              </Button>
           </div>
           <div className="flex-1 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Professional Name</label>
                    <Input defaultValue={artisan.name} className="h-14 rounded-2xl font-bold border-slate-100 bg-slate-50" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amharic Name</label>
                    <Input defaultValue={artisan.amharicName} className="h-14 rounded-2xl font-bold border-slate-100 bg-slate-50 text-amber-600" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Artistic Specialty</label>
                 <Input defaultValue={artisan.specialty} className="h-14 rounded-2xl font-bold border-slate-100 bg-slate-50" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Story</label>
                 <textarea defaultValue={artisan.story} className="w-full h-48 p-6 rounded-[2.5rem] font-medium border border-slate-100 bg-slate-50 focus:ring-amber-600 transition-all" />
              </div>
              <Button className="h-16 px-10 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black shadow-2xl transition-all">Save Profile Changes</Button>
           </div>
        </div>
     </div>
  </div>
);

const VendorSettings = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Panel Settings</h2>
        <p className="text-slate-400 font-medium">Configuration and account management.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-12 space-y-10">
        <section>
           <h3 className="text-xl font-black text-slate-900 mb-6">Payout Details</h3>
           <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-100 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black">TB</div>
                 <div>
                    <p className="text-lg font-black text-slate-900">Telebirr Business</p>
                    <p className="text-xs font-bold text-amber-600">Verified Artisan Wallet</p>
                 </div>
              </div>
              <Button variant="outline" className="rounded-xl border-amber-200 text-amber-600 font-black h-12">Manage Wallet</Button>
           </div>
        </section>
        
        <section className="pt-10 border-t border-slate-50">
           <h3 className="text-xl font-black text-slate-900 mb-6">International Export Setup</h3>
           <div className="flex items-center justify-between p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center"><Globe className="h-6 w-6" /></div>
                 <div>
                    <p className="text-lg font-black text-slate-900">Export Licensing</p>
                    <p className="text-xs font-bold text-indigo-600">Documents Verified: Active</p>
                 </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-indigo-600 text-[10px] font-black uppercase tracking-widest border border-indigo-100 shadow-sm">
                 <Sparkles className="h-3 w-3" /> Global Ready
              </div>
           </div>
        </section>
     </div>
  </div>
);

export default VendorDashboard;