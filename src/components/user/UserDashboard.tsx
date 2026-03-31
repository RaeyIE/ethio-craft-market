import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut, 
  ChevronRight,
  Package,
  Clock,
  Star,
  Globe,
  ShieldCheck,
  History,
  TrendingUp,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { products, culturalTerms } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const menuItems = [
    { id: 'Overview', icon: LayoutDashboard, label: 'Ecosystem Overview' },
    { id: 'Orders', icon: ShoppingBag, label: 'My Creations (Orders)' },
    { id: 'Wishlist', icon: Heart, label: 'Saved Treasures' },
    { id: 'Addresses', icon: MapPin, label: 'Global Shipping' },
    { id: 'Payments', icon: CreditCard, label: 'Wallet & Currency' },
    { id: 'Notifications', icon: Bell, label: 'Cultural Alerts' },
    { id: 'Settings', icon: Settings, label: 'Security & Profile' },
  ];

  const recentOrders = [
    { id: '#ORD-7721', date: 'Oct 12, 2023', status: 'Delivered', total: 450, items: 1, img: products[0].image, region: 'Amhara' },
    { id: '#ORD-8810', date: 'Sep 24, 2023', status: 'In Transit', total: 120, items: 2, img: products[1].image, region: 'Oromia' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Dashboard Top Navigation (Internal) */}
      <div className="bg-slate-900 text-white py-12 md:py-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex items-center gap-8">
                  <div className="relative">
                     <div className="w-32 h-32 rounded-[2.5rem] border-4 border-amber-600 overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                        <img src="https://i.pravatar.cc/300?u=ethio-user" alt="User" className="w-full h-full object-cover" />
                     </div>
                     <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-2xl border-4 border-slate-900 flex items-center justify-center">
                        <ShieldCheck className="h-4 w-4 text-white" />
                     </div>
                  </div>
                  <div>
                     <h1 className="text-4xl md:text-5xl font-black font-serif mb-2">Selam, Dawit!</h1>
                     <p className="text-slate-400 font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-amber-500" /> Addis Ababa, ET \\u2022 <span className="text-amber-500 font-black">Member since 2022</span>
                     </p>
                     <div className="flex gap-3 mt-4">
                        <div className="px-3 py-1 bg-amber-600/20 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-600/30">
                           Premium Global Buyer
                        </div>
                        <div className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-600/30">
                           12 Artisans Supported
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Total Cultural Impact</p>
                  <p className="text-5xl font-black text-amber-500 font-serif">$2,450.00</p>
                  <Button className="bg-white text-slate-900 rounded-xl px-6 h-10 text-xs font-black shadow-xl">
                     Generate Impact Report
                  </Button>
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
                <div className="my-4 border-t border-slate-50" />
                <button 
                   onClick={() => toast.success('Safely logged out!')}
                   className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
                >
                   <LogOut className="h-5 w-5" /> End Session
                </button>
             </div>
             
             <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
                <Globe className="h-12 w-12 text-amber-500 mb-6 opacity-50" />
                <h3 className="text-xl font-bold mb-2">Export Points</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">You're 250 points away from Free International Shipping on your next "Tibeb" collection.</p>
                <div className="w-full bg-white/10 h-2 rounded-full mb-6 overflow-hidden">
                   <div className="bg-amber-500 h-full w-[75%]" />
                </div>
                <Button variant="outline" className="w-full rounded-xl border-white/20 text-white hover:bg-white/10 text-xs font-bold">
                   View Global Rewards
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
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-10"
                  >
                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                       {[ 
                         { label: 'Active Shipments', value: '2', color: 'bg-emerald-50 text-emerald-600', icon: Package, sub: 'Global Tracking' },
                         { label: 'Saved Designs', value: '18', color: 'bg-rose-50 text-rose-600', icon: Heart, sub: 'In Wishlist' },
                         { label: 'Artisan Support', value: '1,240', color: 'bg-amber-50 text-amber-600', icon: Star, sub: 'Tibeb Points' },
                       ].map((stat, i) => (
                          <Card key={i} className="rounded-[2.5rem] border-none shadow-sm hover:shadow-xl transition-all">
                             <CardHeader className="pb-2">
                                <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                                   <stat.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</CardTitle>
                             </CardHeader>
                             <CardContent>
                                <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                             </CardContent>
                          </Card>
                       ))}
                    </div>

                    {/* Active Deliveries */}
                    <section className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
                       <div className="flex justify-between items-end mb-10">
                          <h2 className="text-2xl font-black text-slate-900 font-serif flex items-center gap-3">
                             <Clock className="h-6 w-6 text-amber-600" /> In-Transit Creations
                          </h2>
                          <Button variant="link" className="text-amber-600 font-bold p-0 h-auto">Track All Shipments</Button>
                       </div>
                       <div className="space-y-6">
                          {recentOrders.map(order => (
                             <div key={order.id} className="group flex flex-wrap items-center justify-between p-6 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-amber-600/20 hover:bg-white transition-all">
                                <div className="flex items-center gap-6">
                                   <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-xl ring-4 ring-white">
                                      <img src={order.img} className="w-full h-full object-cover" alt="" />
                                   </div>
                                   <div>
                                      <div className="flex items-center gap-3 mb-2">
                                         <span className="font-black text-slate-900 text-lg">{order.id}</span>
                                         <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                            order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                         }`}>{order.status}</span>
                                      </div>
                                      <p className="text-sm text-slate-500 font-medium">
                                         Origin: <span className="text-slate-900 font-bold">{order.region}, Ethiopia</span> \\u2022 {order.date}
                                      </p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-8">
                                   <div className="text-right">
                                      <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-widest">Market Value</p>
                                      <p className="text-2xl font-black text-slate-900">${order.total}</p>
                                   </div>
                                   <Button className="rounded-2xl px-8 h-12 bg-slate-900 font-black text-white hover:bg-amber-600 shadow-lg">
                                      Full History
                                   </Button>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>

                    {/* Global Logistics Feature Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <Card className="rounded-[3rem] border-none shadow-sm bg-gradient-to-br from-amber-600 to-orange-700 text-white overflow-hidden group">
                          <CardContent className="p-12 relative">
                             <div className="absolute top-0 right-0 p-8 transform group-hover:rotate-12 transition-transform">
                                <Globe className="h-32 w-32 text-white/10" />
                             </div>
                             <h3 className="text-3xl font-bold mb-4 font-serif">Verified Export</h3>
                             <p className="text-amber-50 mb-8 leading-relaxed">
                                Your orders are handled by our dedicated logistics team for international cultural preservation standards.
                             </p>
                             <Button className="bg-white text-amber-700 rounded-xl px-8 h-12 font-black shadow-xl">
                                Policy Details
                             </Button>
                          </CardContent>
                       </Card>

                       <Card className="rounded-[3rem] border-none shadow-sm bg-white p-12 flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                             <History className="h-8 w-8 text-blue-600" />
                          </div>
                          <h3 className="text-2xl font-black mb-2">Artisan Network</h3>
                          <p className="text-slate-500 mb-8">
                             You've supported 12 master artisans across 4 regions. Continue the journey.
                          </p>
                          <Button variant="outline" className="rounded-xl border-slate-200 h-12 px-8 font-black">
                             Meet New Artisans
                          </Button>
                       </Card>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'Orders' && (
                   <motion.div
                     key="orders"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="bg-white rounded-[3rem] p-16 text-center border border-slate-100 shadow-sm"
                   >
                      <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8">
                         <ShoppingBag className="h-12 w-12 text-slate-300" />
                      </div>
                      <h3 className="text-3xl font-black mb-4 font-serif">Your Collection</h3>
                      <p className="text-slate-500 max-w-md mx-auto leading-relaxed mb-10">
                         Explore every piece you've added to your cultural heritage collection. Orders are archived for your records.
                      </p>
                      <Button className="bg-slate-900 rounded-2xl px-12 h-14 font-black text-white shadow-xl">
                         Start Shopping {culturalTerms.shop}
                      </Button>
                   </motion.div>
                )}
             </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;