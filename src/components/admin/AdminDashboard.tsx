import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, Users, Store, Package, BarChart3, 
  Settings, LogOut, Search, Filter, ChevronRight, 
  Globe, Sparkles, TrendingUp, Bell, CheckCircle2, 
  AlertCircle, LayoutDashboard, Database, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, artisans, culturalTerms } from '../../lib/data';

const AdminDashboard: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Platform Overview', path: '/dashboard/admin', icon: LayoutDashboard },
    { name: 'Artisan Requests', path: '/dashboard/admin/artisans', icon: Store },
    { name: 'User Management', path: '/dashboard/admin/users', icon: Users },
    { name: 'Cultural Content', path: '/dashboard/admin/content', icon: Database },
    { name: 'Export Oversight', path: '/dashboard/admin/export', icon: Globe },
    { name: 'Analytics', path: '/dashboard/admin/analytics', icon: BarChart3 },
    { name: 'System Settings', path: '/dashboard/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar */}
      <aside className="w-80 bg-indigo-950 flex flex-col p-10 fixed h-full z-30">
        <div className="flex items-center gap-3 mb-16 text-white">
           <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-xl shadow-indigo-600/20">
              <ShieldCheck className="h-5 w-5" />
           </div>
           <div>
              <p className="text-xs font-black uppercase tracking-widest text-indigo-400 leading-none mb-1">Admin Central</p>
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
                  isActive ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/20' : 'text-indigo-300 hover:text-white hover:bg-white/5'
                }`}
               >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-indigo-500 group-hover:text-indigo-400'}`} />
                  {item.name}
               </Link>
             );
           })}
        </nav>

        <div className="pt-8 border-t border-white/5">
           <Button variant="ghost" className="w-full h-14 rounded-2xl justify-start gap-4 text-indigo-300 font-black hover:bg-rose-500/10 hover:text-rose-500 transition-all">
              <LogOut className="h-5 w-5" /> Logout Admin
           </Button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 lg:ml-80 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
           <Routes>
              <Route path="/" element={<AdminOverview />} />
              <Route path="/artisans" element={<AdminArtisans />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/content" element={<AdminContent />} />
              <Route path="/export" element={<AdminExport />} />
              <Route path="/analytics" element={<AdminAnalytics />} />
              <Route path="/settings" element={<AdminSettings />} />
           </Routes>
        </div>
      </main>
    </div>
  );
};

const AdminOverview = () => (
  <div className="space-y-12">
     <header className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <span className="inline-flex items-center gap-2 bg-indigo-600/10 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="h-3 w-3" /> Governance
           </span>
           <h2 className="text-4xl font-black font-serif text-slate-900">Platform Health</h2>
           <p className="text-slate-400 font-medium">Overseeing the growth of the Ethiopian artisan ecosystem.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-100 font-black flex gap-2">
              <Bell className="h-5 w-5" /> 12 Alerts
           </Button>
           <Button className="h-14 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black shadow-xl shadow-indigo-600/20 transition-all">
              Generate Reports
           </Button>
        </div>
     </header>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Active Artisans</p>
           <p className="text-3xl font-black text-slate-900">842</p>
           <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +12 this week
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total GMV</p>
           <p className="text-3xl font-black text-slate-900">$1.2M</p>
           <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +4.2% Growth
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Export Volume</p>
           <p className="text-3xl font-black text-slate-900">3,102</p>
           <div className="mt-4 flex items-center gap-2 text-indigo-500 text-xs font-bold">
              <Globe className="h-3 w-3" /> Global Pieces
           </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Dispute Rate</p>
           <p className="text-3xl font-black text-slate-900">0.4%</p>
           <div className="mt-4 flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <CheckCircle2 className="h-3 w-3" /> Very Low
           </div>
        </div>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2">
           <h3 className="text-2xl font-black font-serif text-slate-900 mb-8">Recent Artisan Approvals</h3>
           <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-8 flex items-center justify-between border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-[1.5rem] overflow-hidden bg-slate-100">
                         <img src={artisans[i]?.image || artisans[0].image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                         <p className="text-lg font-black text-slate-900">{artisans[i]?.name || 'Pending Artisan'}</p>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Joined May 1{i}, 2024 • {artisans[i]?.location || 'Addis Ababa'}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                         Verified
                      </span>
                      <Button variant="ghost" className="h-12 w-12 rounded-xl border border-slate-100">
                         <ChevronRight className="h-5 w-5" />
                      </Button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <section>
           <h3 className="text-2xl font-black font-serif text-slate-900 mb-8">Export Watch</h3>
           <div className="bg-indigo-950 rounded-[3rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[80px] rounded-full" />
              <p className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-6">Shipment Monitor</p>
              <div className="space-y-6 mb-8">
                 <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Total Active Exports</span>
                    <span className="font-black">248</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Customs Pending</span>
                    <span className="font-black text-amber-500">14</span>
                 </div>
                 <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Average Transit</span>
                    <span className="font-black">4.2 Days</span>
                 </div>
              </div>
              <Button className="w-full h-16 rounded-2xl bg-white text-indigo-950 hover:bg-indigo-600 hover:text-white font-black transition-all shadow-xl">
                 Oversight Console
              </Button>
           </div>
        </section>
     </div>
  </div>
);

const AdminArtisans = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Artisan Governance</h2>
        <p className="text-slate-400 font-medium">Manage applications, verifications, and performance.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden">
        <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex items-center gap-6">
           <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search artisans by name, specialty, or region..." className="pl-12 h-14 rounded-2xl bg-white border-slate-100 font-bold" />
           </div>
           <Button variant="outline" className="h-14 w-14 rounded-2xl border-slate-100 bg-white"><Filter className="h-5 w-5" /></Button>
        </div>
        <div className="divide-y divide-slate-50">
           {artisans.map(a => (
             <div key={a.id} className="p-8 flex items-center justify-between hover:bg-slate-50/50 transition-all">
                <div className="flex items-center gap-8">
                   <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-lg">
                      <img src={a.image} className="w-full h-full object-cover" alt="" />
                   </div>
                   <div>
                      <h4 className="text-xl font-black text-slate-900 mb-1">{a.name}</h4>
                      <p className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4">{a.specialty} • {a.location}</p>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> {a.rating} Rating
                         </div>
                         <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <Package className="h-3 w-3" /> {a.sales} Sales
                         </div>
                      </div>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-100 font-black">View Records</Button>
                   <Button className="h-12 px-6 rounded-xl bg-indigo-600 text-white font-black">Edit Status</Button>
                </div>
             </div>
           ))}
        </div>
     </div>
  </div>
);

const AdminUsers = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">User Management</h2>
        <p className="text-slate-400 font-medium">Oversee platform users and their activity.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-24 text-center">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
           <Users className="h-10 w-10 text-slate-300" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4">User Records</h3>
        <p className="text-slate-400 max-w-sm mx-auto font-medium">Manage your buyer base, handle support tickets, and oversee community guidelines.</p>
     </div>
  </div>
);

const AdminContent = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Cultural Content</h2>
        <p className="text-slate-400 font-medium">Manage {culturalTerms.wisdom}, regions, and cultural terms.</p>
     </header>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 hover:shadow-2xl transition-all cursor-pointer">
           <div className="w-16 h-16 rounded-[1.5rem] bg-amber-50 flex items-center justify-center text-amber-600 mb-8">
              <Database className="h-8 w-8" />
           </div>
           <h3 className="text-2xl font-black text-slate-900 mb-4">Cultural Dictionary</h3>
           <p className="text-slate-400 font-medium mb-8 leading-relaxed">Manage the Amharic translations and cultural terms used across the platform.</p>
           <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-100 font-black">Manage Terms</Button>
        </div>
        <div className="bg-white border border-slate-100 rounded-[3rem] p-12 hover:shadow-2xl transition-all cursor-pointer">
           <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8">
              <Globe className="h-8 w-8" />
           </div>
           <h3 className="text-2xl font-black text-slate-900 mb-4">Regional Spotlights</h3>
           <p className="text-slate-400 font-medium mb-8 leading-relaxed">Update regional stories, history, and featured artisan photography.</p>
           <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-100 font-black">Edit Regions</Button>
        </div>
     </div>
  </div>
);

const AdminExport = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Export Oversight</h2>
        <p className="text-slate-400 font-medium">Manage international logistics and customs compliance.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-12">
        <div className="space-y-12">
           <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-1">
                 <h3 className="text-3xl font-black mb-4">Global Logistics Hub</h3>
                 <p className="text-slate-400 font-medium leading-relaxed">All international shipments are tracked here. We coordinate with Ethiopian Airlines Cargo and DHL Express.</p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="text-center">
                    <p className="text-3xl font-black text-amber-500">48</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">En Route</p>
                 </div>
                 <div className="text-center">
                    <p className="text-3xl font-black text-emerald-500">1,042</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivered</p>
                 </div>
              </div>
           </div>
           
           <div className="space-y-6">
              <h4 className="text-xl font-black text-slate-900">Customs Pending Approval</h4>
              <div className="divide-y divide-slate-50">
                 {[1, 2].map((_, i) => (
                   <div key={i} className="py-8 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600"><AlertCircle className="h-6 w-6" /></div>
                         <div>
                            <p className="text-lg font-black text-slate-900">Package #TS-EXP-829{i}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Destination: Tokyo, Japan • Content: {culturalTerms.artistry}</p>
                         </div>
                      </div>
                      <Button className="h-12 px-6 rounded-xl bg-slate-900 text-white font-black text-xs">Review Documents</Button>
                   </div>
                 ))}
              </div>
           </div>
        </div>
     </div>
  </div>
);

const AdminAnalytics = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">Platform Analytics</h2>
        <p className="text-slate-400 font-medium">Comprehensive data insights across all business units.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-12 h-[500px] flex items-center justify-center text-center">
        <div>
           <BarChart3 className="h-16 w-16 text-indigo-200 mx-auto mb-6" />
           <p className="text-slate-400 font-medium">Full platform analytics dashboard is loading...</p>
        </div>
     </div>
  </div>
);

const AdminSettings = () => (
  <div className="space-y-12">
     <header>
        <h2 className="text-4xl font-black font-serif text-slate-900">System Settings</h2>
        <p className="text-slate-400 font-medium">Platform configuration and security.</p>
     </header>
     <div className="bg-white border border-slate-100 rounded-[3rem] p-12">
        <h3 className="text-xl font-black text-slate-900 mb-8">Global Variables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Fee (%)</label>
              <Input defaultValue="8" className="h-14 rounded-2xl font-bold bg-slate-50 border-slate-100" />
           </div>
           <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Currency Exchange Rate (USD/ETB)</label>
              <Input defaultValue="57.42" className="h-14 rounded-2xl font-bold bg-slate-50 border-slate-100" />
           </div>
        </div>
        <Button className="mt-12 h-16 px-10 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black shadow-2xl transition-all">Update System Configuration</Button>
     </div>
  </div>
);

export default AdminDashboard;