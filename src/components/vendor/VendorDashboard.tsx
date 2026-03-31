import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  BarChart3, 
  MessageSquare, 
  Globe, 
  Settings, 
  Plus, 
  TrendingUp, 
  Eye, 
  Star, 
  Truck, 
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Image as ImageIcon,
  History,
  DollarSign
} from 'lucide-react';
import { products, artisans, culturalTerms } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const VendorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const artisan = artisans[0]; // Abebech Desta
  const myProducts = products.filter(p => p.artisan === artisan.name);

  const stats = [
    { label: 'Total Revenue', value: '$12,450', change: '+12.5%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Active Orders', value: '18', change: '+4', icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Artisan Store Views', value: '4.2k', change: '+22%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Export Success', value: '98%', change: '+2%', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const recentSales = [
    { id: '#ORD-9921', customer: 'Sarah Johnson', item: 'Royal Habesha Kemis', amount: 450, status: 'Processing', date: '2h ago', flag: 'US' },
    { id: '#ORD-9918', customer: 'Global Boutique LLC', item: 'Bulk Weaving Order', amount: 1200, status: 'Shipped', date: '5h ago', flag: 'DE' },
    { id: '#ORD-9915', customer: 'Daniel M.', item: 'Woven Scarf Set', amount: 180, status: 'Delivered', date: '1d ago', flag: 'ET' },
  ];

  const menuItems = [
    { id: 'Overview', icon: LayoutDashboard, label: 'Ecosystem Control' },
    { id: 'Products', icon: Package, label: 'Manage Creations' },
    { id: 'Orders', icon: ShoppingBag, label: 'Sales & Logistics' },
    { id: 'Analytics', icon: BarChart3, label: 'Growth Analytics' },
    { id: 'Messages', icon: MessageSquare, label: 'Buyer Inquiry' },
    { id: 'Export', icon: Globe, label: 'Export Certs' },
    { id: 'Settings', icon: Settings, label: 'Storefront Setup' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Vendor Top Navigation */}
      <div className="bg-slate-900 text-white pt-16 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 to-transparent" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-8">
                  <div className="relative group">
                     <div className="w-32 h-32 rounded-[3rem] border-4 border-amber-600 overflow-hidden shadow-2xl transition-all group-hover:scale-105 duration-500">
                        <img src={artisan.image} alt={artisan.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="absolute -bottom-2 -right-2 bg-amber-600 p-2 rounded-2xl border-4 border-slate-900 shadow-xl">
                        <Star className="h-4 w-4 fill-white text-white" />
                     </div>
                  </div>
                  <div>
                     <div className="flex items-center gap-4 mb-3">
                        <h1 className="text-4xl md:text-5xl font-black font-serif">{artisan.name}</h1>
                        <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
                           Global Verified
                        </span>
                     </div>
                     <p className="text-slate-400 font-medium flex items-center gap-2 mb-6">
                        <Sparkles className="h-4 w-4 text-amber-500" /> Master {artisan.specialty} \\u2022 {artisan.location}
                     </p>
                     <div className="flex gap-4">
                        <Button variant="outline" asChild className="rounded-xl border-white/20 text-white hover:bg-white/10 h-10 text-xs px-6 font-bold shadow-sm">
                           <Link to={`/artisan/${artisan.id}`}>Public Storefront</Link>
                        </Button>
                        <Button className="rounded-xl bg-amber-600 hover:bg-amber-700 h-10 text-xs px-6 font-bold text-white shadow-lg">
                           Edit Cultural Story
                        </Button>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-2">Seasonal Target</div>
                  <div className="w-72 bg-white/10 h-3 rounded-full overflow-hidden border border-white/5">
                     <div className="bg-amber-600 h-full w-[82%] shadow-[0_0_20px_rgba(217,119,6,0.5)]" />
                  </div>
                  <div className="flex justify-between w-72 text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">
                     <span>82% Complete</span>
                     <span>$15,000 Cap</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-4">
             <div className="bg-white rounded-[3rem] p-4 border border-slate-100 shadow-2xl">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                      activeTab === item.id 
                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 translate-x-2' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${activeTab === item.id ? 'text-amber-500' : 'text-slate-400'}`} />
                    {item.label}
                    {activeTab === item.id && <ChevronRight className="ml-auto h-4 w-4" />}
                  </button>
                ))}
             </div>
             
             <div className="bg-amber-600 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 transform group-hover:translate-x-4 transition-transform">
                   <Truck className="h-24 w-24 text-white/10" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Export Ready</h3>
                <p className="text-sm text-amber-50 leading-relaxed mb-8">
                   Your workshop is certified for international shipping to 18 nations.
                </p>
                <Button className="w-full rounded-xl bg-white text-amber-600 hover:bg-amber-50 h-12 text-xs font-black shadow-xl">
                   Manage Export Labels
                </Button>
             </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9">
             <AnimatePresence mode="wait">
                {activeTab === 'Overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-10"
                  >
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                       {stats.map((stat, i) => (
                          <Card key={i} className="rounded-[2.5rem] border-none shadow-sm hover:shadow-xl transition-all">
                             <CardHeader className="pb-2">
                                <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                                   <stat.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</CardTitle>
                             </CardHeader>
                             <CardContent>
                                <p className="text-4xl font-black text-slate-900">{stat.value}</p>
                                <div className="flex items-center gap-1 mt-2 text-[10px] font-black uppercase tracking-widest">
                                   <TrendingUp className="h-3 w-3 text-emerald-500" /> 
                                   <span className="text-emerald-500">{stat.change}</span>
                                   <span className="text-slate-400 font-bold ml-1">YoY</span>
                                </div>
                             </CardContent>
                          </Card>
                       ))}
                    </div>

                    {/* Active Sales Section */}
                    <section className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
                       <div className="flex justify-between items-center mb-10">
                          <h2 className="text-3xl font-black text-slate-900 font-serif">Active Global Sales</h2>
                          <Button variant="outline" className="rounded-xl px-6 h-12 border-slate-200 font-black text-slate-600 flex items-center gap-3">
                             Archive <ArrowUpRight className="h-4 w-4" />
                          </Button>
                       </div>
                       <div className="space-y-4">
                          {recentSales.map(sale => (
                             <div key={sale.id} className="group flex flex-wrap items-center justify-between p-6 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-amber-600/20 hover:bg-white transition-all">
                                <div className="flex items-center gap-6">
                                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-slate-400 border border-slate-100 shadow-sm">
                                      {sale.flag === 'ET' ? '🇪🇹' : sale.flag === 'US' ? '🇺🇸' : '🇩🇪'}
                                   </div>
                                   <div>
                                      <div className="flex items-center gap-3 mb-1">
                                         <p className="font-black text-slate-900">{sale.customer}</p>
                                         <span className="text-[10px] font-black text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">{sale.id}</span>
                                      </div>
                                      <p className="text-xs text-slate-500 font-medium">{sale.item} \\u2022 {sale.date}</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-10">
                                   <div className="text-right">
                                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Market Total</p>
                                      <p className="text-2xl font-black text-slate-900">${sale.amount}</p>
                                   </div>
                                   <div className="text-center">
                                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dispatch</p>
                                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                                         sale.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 
                                         sale.status === 'Shipped' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                      }`}>{sale.status}</span>
                                   </div>
                                   <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl hover:bg-amber-50 hover:text-amber-600 transition-colors">
                                      <ChevronRight className="h-6 w-6" />
                                   </Button>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>

                    {/* Inventory Snapshot */}
                    <section>
                       <div className="flex justify-between items-center mb-8">
                          <h2 className="text-3xl font-black text-slate-900 font-serif">Creations Inventory</h2>
                          <Button className="bg-slate-900 rounded-[2rem] px-10 h-16 font-black text-white flex items-center gap-3 shadow-2xl hover:shadow-slate-200 transition-all">
                             <Plus className="h-5 w-5" /> Add New Craft
                          </Button>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {myProducts.slice(0, 2).map(product => (
                             <div key={product.id} className="bg-white p-6 rounded-[3rem] border border-slate-100 flex gap-8 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg">
                                   <img src={product.image} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="flex flex-col justify-between py-2">
                                   <div>
                                      <h3 className="text-2xl font-black text-slate-900 mb-2 leading-tight">{product.name}</h3>
                                      <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase">
                                         <span>Stock: <span className="text-slate-900">{product.stock} Units</span></span>
                                         <span className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                         <span>{product.category}</span>
                                      </div>
                                   </div>
                                   <div className="flex items-center justify-between gap-6">
                                      <span className="text-3xl font-black text-amber-600 font-serif">${product.price}</span>
                                      <Button variant="outline" className="rounded-xl h-12 px-6 font-black border-slate-200">
                                         Update
                                      </Button>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>

                    {/* Creative Assets Preview */}
                    <Card className="rounded-[3rem] border-none shadow-sm bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-12 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-12">
                           <ImageIcon className="h-32 w-32 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-12 scale-125" />
                        </div>
                        <div className="relative z-10">
                           <h3 className="text-3xl font-black mb-4 font-serif">Workshop Media</h3>
                           <p className="text-indigo-200 max-w-md leading-relaxed mb-10">
                              Upload high-resolution photos and videos of your weaving process to build buyer trust and heritage value.
                           </p>
                           <div className="flex gap-4">
                              <Button className="bg-white text-indigo-900 rounded-xl px-10 h-14 font-black shadow-xl">
                                 Launch Media Manager
                              </Button>
                              <Button variant="outline" className="border-white/20 text-white rounded-xl px-10 h-14 font-black hover:bg-white/10">
                                 Asset Library
                              </Button>
                           </div>
                        </div>
                    </Card>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;