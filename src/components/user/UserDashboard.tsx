import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Heart, Settings, User, LogOut, 
  LayoutDashboard, CreditCard, MapPin, Package,
  ChevronRight, Sparkles, MessageSquare, Star, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products, culturalTerms } from '../../lib/data';
import { motion } from 'framer-motion';

const UserDashboard: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Overview', path: '/dashboard/user', icon: LayoutDashboard },
    { name: 'My Orders', path: '/dashboard/user/orders', icon: Package },
    { name: 'Wishlist', path: '/dashboard/user/wishlist', icon: Heart },
    { name: 'Messages', path: '/dashboard/user/messages', icon: MessageSquare },
    { name: 'Settings', path: '/dashboard/user/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-100 hidden lg:flex flex-col p-10 fixed h-full">
        <div className="flex items-center gap-3 mb-16">
           <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
              <User className="h-5 w-5" />
           </div>
           <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Buyer Space</p>
              <h3 className="text-lg font-black text-slate-900">Welcome Back</h3>
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
                  isActive ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20' : 'text-slate-500 hover:bg-slate-50'
                }`}
               >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-amber-500' : 'text-slate-400 group-hover:text-slate-900'}`} />
                  {item.name}
               </Link>
             );
           })}
        </nav>

        <div className="pt-8 border-t border-slate-50">
           <Button variant="ghost" className="w-full h-14 rounded-2xl justify-start gap-4 text-slate-500 font-black hover:bg-rose-50 hover:text-rose-600 transition-all">
              <LogOut className="h-5 w-5" /> Sign Out
           </Button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 lg:ml-80 p-6 md:p-12">
        <div className="max-w-5xl mx-auto">
           <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<SettingsPage />} />
           </Routes>
        </div>
      </main>
    </div>
  );
};

const Overview = () => (
  <div className="space-y-12">
     <header>
        <span className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
           <Sparkles className="h-3 w-3" /> Buyer Dashboard
        </span>
        <h2 className="text-4xl font-black font-serif text-slate-900">Your Artistic Journey</h2>
        <p className="text-slate-400 font-medium">Manage your orders, wishlist, and personal preferences.</p>
     </header>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Orders Completed</p>
           <p className="text-4xl font-black text-slate-900">12</p>
           <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <ChevronRight className="h-3 w-3 -rotate-90" /> +2 this month
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Wishlist Items</p>
           <p className="text-4xl font-black text-slate-900">48</p>
           <div className="mt-4 flex items-center gap-2 text-amber-500 text-xs font-bold">
              <Heart className="h-3 w-3 fill-amber-500" /> View all
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Support Tickets</p>
           <p className="text-4xl font-black text-slate-900">0</p>
           <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs font-bold">
              <MessageSquare className="h-3 w-3" /> All clear
           </div>
        </div>
     </div>

     <section>
        <div className="flex justify-between items-center mb-8">
           <h3 className="text-2xl font-black font-serif text-slate-900">Recent Orders</h3>
           <Link to="/dashboard/user/orders" className="text-xs font-black text-amber-600 uppercase tracking-widest hover:underline">View History</Link>
        </div>
        
        <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
           {[1, 2].map((_, i) => (
             <div key={i} className="p-8 flex items-center justify-between border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                      <img src={products[i].image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div>
                      <p className="text-lg font-black text-slate-900">{products[i].name}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order #TS-9238{i} • May 1{i}, 2024</p>
                   </div>
                </div>
                <div className="flex items-center gap-8">
                   <div className="text-right">
                      <p className="text-lg font-black text-slate-900">${products[i].price}</p>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                         Delivered
                      </span>
                   </div>
                   <Button variant="ghost" className="h-12 w-12 rounded-xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                      <ChevronRight className="h-5 w-5" />
                   </Button>
                </div>
             </div>
           ))}
        </div>
     </section>
  </div>
);

const Orders = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Order History</h2>
        <p className="text-slate-400 font-medium">Track your cultural acquisitions from across Ethiopia.</p>
     </header>
     
     <div className="space-y-6">
        {products.map((p, i) => (
           <div key={i} className="bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all">
              <div className="flex items-center gap-8 w-full md:w-auto">
                 <div className="w-24 h-24 rounded-[2rem] overflow-hidden shadow-xl">
                    <img src={p.image} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{p.name}</h3>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Artisan: {p.artisan}</p>
                    <div className="flex gap-3">
                       <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Order #4920{i}</span>
                       <span className="bg-amber-50 text-amber-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">Processing</span>
                    </div>
                 </div>
              </div>
              <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                 <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Paid</p>
                    <p className="text-2xl font-black text-slate-900">${p.price}</p>
                 </div>
                 <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black">Track Shipment</Button>
              </div>
           </div>
        ))}
     </div>
  </div>
);

const Wishlist = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Wishlist</h2>
        <p className="text-slate-400 font-medium">Treasures you've saved for later.</p>
     </header>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.slice(0, 3).map(p => (
           <div key={p.id} className="group bg-white border border-slate-100 rounded-[3rem] p-6 shadow-sm hover:shadow-2xl transition-all">
              <Link to={`/product/${p.id}`} className="block relative aspect-square rounded-[2.5rem] overflow-hidden mb-6">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                 <div className="absolute top-6 right-6 h-12 w-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 shadow-xl">
                    <Heart className="h-6 w-6 fill-rose-500" />
                 </div>
              </Link>
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="text-xl font-black text-slate-900">{p.name}</h4>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">${p.price}</p>
                 </div>
                 <Button size="sm" className="rounded-xl bg-slate-900 text-white font-black h-12 px-6">Add to Cart</Button>
              </div>
           </div>
        ))}
     </div>
  </div>
);

const Messages = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Artisan Messages</h2>
        <p className="text-slate-400 font-medium">Connect directly with the creators of your pieces.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-24 text-center">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
           <MessageSquare className="h-10 w-10 text-slate-300" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4">No active conversations</h3>
        <p className="text-slate-400 max-w-sm mx-auto font-medium">Message an artisan directly from their product page or profile to start a conversation about a piece.</p>
     </div>
  </div>
);

const SettingsPage = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Account Settings</h2>
        <p className="text-slate-400 font-medium">Manage your profile, shipping addresses, and preferences.</p>
     </header>
     
     <div className="space-y-10">
        <section className="bg-white border border-slate-100 rounded-[3rem] p-12">
           <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-amber-600" /> Payment Methods
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[2rem] border-2 border-slate-900 bg-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 blur-3xl rounded-full" />
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Primary</p>
                 <p className="text-2xl font-black text-slate-900 mb-2 font-serif">Telebirr Wallet</p>
                 <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">0911 **** 892</p>
              </div>
              <Button variant="outline" className="h-full min-h-[160px] rounded-[2rem] border-2 border-dashed border-slate-200 text-slate-400 font-black flex flex-col gap-4 hover:border-amber-600 hover:text-amber-600 transition-all">
                 <Sparkles className="h-8 w-8" /> Add Payment Method
              </Button>
           </div>
        </section>

        <section className="bg-white border border-slate-100 rounded-[3rem] p-12">
           <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Globe className="h-5 w-5 text-amber-600" /> International Shipping
           </h3>
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                 <p className="text-slate-600 font-medium leading-relaxed">
                    Enable international export options for your orders. We ship worldwide via Ethiopian Airlines Cargo and DHL Express.
                 </p>
                 <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl w-fit font-black text-[10px] uppercase tracking-widest">
                    <Sparkles className="h-3 w-3" /> Global Export Enabled
                 </div>
              </div>
              <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-amber-600 text-white font-black">Update Export Profile</Button>
           </div>
        </section>
     </div>
  </div>
);

export default UserDashboard;