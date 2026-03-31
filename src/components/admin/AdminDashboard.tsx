import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Store, 
  ShoppingBag, 
  BarChart3, 
  Globe, 
  Bell, 
  AlertCircle, 
  FileText, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  ArrowUpRight, 
  Activity, 
  Search,
  ChevronRight,
  Zap,
  PieChart,
  LayoutDashboard,
  Languages,
  Gavel,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { culturalTerms } from '../../lib/data';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const stats = [
    { label: 'Total Platform Gross', value: '$84,200', change: '+18.5%', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Verified Artisans', value: '142', change: '+12', icon: Store, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Platform Citizens', value: '2.8k', change: '+450', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Global Export Vol.', value: '312', change: '+22%', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const pendingApprovals = [
    { id: 'APP-102', name: 'Kassa Tekle', specialty: 'Fine Pottery', region: 'Southern Nations', date: '2h ago' },
    { id: 'APP-103', name: 'Selam Habte', specialty: 'Gold Embroidery', region: 'Tigray', date: '5h ago' },
  ];

  const platformEvents = [
    { type: 'order', msg: 'New Bulk Order from Berlin, DE (#ORD-8822)', time: '10 mins ago', status: 'success' },
    { type: 'vendor', msg: 'Verification completed for Mulugeta T.', time: '2h ago', status: 'info' },
    { type: 'alert', msg: 'Regional spotlight: Amhara Cotton needs update', time: '5h ago', status: 'warning' },
    { type: 'system', msg: 'Chapa Payment Gateway maintenance scheduled', time: '1d ago', status: 'system' },
  ];

  const adminMenu = [
    { id: 'Overview', icon: LayoutDashboard, label: 'Platform Ecosystem' },
    { id: 'Artisans', icon: Store, label: 'Balemuya Registry' },
    { id: 'Buyers', icon: Users, label: 'Citizens Registry' },
    { id: 'Marketplace', icon: ShoppingBag, label: 'Gebeya Governance' },
    { id: 'Export', icon: Globe, label: 'Export Logistics' },
    { id: 'Content', icon: Languages, label: 'Cultural Terms' },
    { id: 'Analytics', icon: PieChart, label: 'Economic Data' },
    { id: 'Settings', icon: Settings, label: 'System Policy' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-24">
      {/* Admin Top Navigation */}
      <div className="bg-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="max-w-[1600px] mx-auto px-10 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
               <div>
                  <div className="flex items-center gap-5 mb-4">
                     <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center text-slate-900 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                        <ShieldCheck className="h-10 w-10" />
                     </div>
                     <div>
                        <h1 className="text-5xl font-black font-serif tracking-tight">Admin Central</h1>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">
                           Ecosystem Governance Panel \\u2022 <span className="text-amber-500">\\u1325\\u1260\\u1265 SQUARE</span>
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                  <div className="relative w-full md:w-80">
                     <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                     <Input placeholder="Universal Entity Search..." className="h-16 pl-16 pr-6 rounded-[2rem] border-none bg-white/10 text-white placeholder:text-slate-500 text-lg shadow-inner" />
                  </div>
                  <div className="flex gap-4 w-full md:w-auto">
                     <Button className="h-16 px-12 rounded-[2rem] bg-amber-600 hover:bg-amber-700 text-white font-black text-lg shadow-2xl transition-all active:scale-95">
                        Generate Economic Report
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-10 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Sidebar Navigation */}
           <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[3rem] p-4 shadow-2xl border border-slate-100">
                 {adminMenu.map(item => (
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
                    </button>
                 ))}
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 transform group-hover:rotate-12 transition-transform">
                    <Database className="h-24 w-24 text-white/10" />
                 </div>
                 <Zap className="h-12 w-12 text-white/40 mb-6" />
                 <h3 className="text-2xl font-bold mb-3 font-serif">System Node</h3>
                 <p className="text-xs text-emerald-50 mb-8 leading-relaxed">All payment gateways (Telebirr, Chapa, SantimPay) are operational at 99.9% uptime.</p>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest">Fully Live</span>
                 </div>
              </div>
           </div>

           {/* Main Content Area */}
           <div className="lg:col-span-10">
              <AnimatePresence mode="wait">
                 {activeTab === 'Overview' && (
                    <motion.div
                       key="admin-overview"
                       initial={{ opacity: 0, x: 20 }}
                       animate={{ opacity: 1, x: 0 }}
                       className="space-y-12"
                    >
                       {/* Stats Horizontal Scroll/Grid */}
                       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                          {stats.map((stat, i) => (
                             <Card key={i} className="rounded-[3rem] border-none shadow-sm group hover:translate-y-[-8px] transition-all duration-500 bg-white p-8">
                                <CardHeader className="p-0 mb-6">
                                   <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm`}>
                                      <stat.icon className="h-8 w-8" />
                                   </div>
                                </CardHeader>
                                <CardContent className="p-0">
                                   <CardTitle className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</CardTitle>
                                   <p className="text-4xl font-black text-slate-900 mb-2">{stat.value}</p>
                                   <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                      <span className="text-emerald-500">{stat.change}</span>
                                      <span className="text-slate-400 font-bold opacity-50">Platform-Wide</span>
                                   </div>
                                </CardContent>
                             </Card>
                          ))}
                       </div>

                       <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                          {/* Pending Approvals Section */}
                          <section className="xl:col-span-7 bg-white rounded-[4rem] p-12 shadow-sm border border-slate-100">
                             <div className="flex justify-between items-center mb-12">
                                <div>
                                   <h2 className="text-3xl font-black text-slate-900 font-serif flex items-center gap-4">
                                      <Gavel className="h-8 w-8 text-amber-500" />
                                      Artisan Verification Queue
                                   </h2>
                                   <p className="text-slate-400 mt-2 font-medium">2 applications awaiting your final certification.</p>
                                </div>
                                <Button className="h-12 px-8 rounded-2xl bg-slate-900 text-white font-black hover:bg-amber-600 transition-all">
                                   Queue Manager
                                </Button>
                             </div>
                             <div className="space-y-6">
                                {pendingApprovals.map(app => (
                                   <div key={app.id} className="flex items-center justify-between p-8 bg-slate-50 rounded-[3rem] border border-transparent hover:border-slate-200 hover:bg-white transition-all group">
                                      <div className="flex items-center gap-8">
                                         <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center font-black text-slate-300 border border-slate-100 shadow-sm text-3xl group-hover:text-amber-600 transition-colors">
                                            {app.name.charAt(0)}
                                         </div>
                                         <div>
                                            <div className="flex items-center gap-3 mb-2">
                                               <p className="text-xl font-black text-slate-900">{app.name}</p>
                                               <span className="text-[10px] font-black text-slate-400 bg-white px-4 py-1.5 rounded-full border border-slate-100">ID: {app.id}</span>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium">
                                               Craft: <span className="text-slate-900 font-bold">{app.specialty}</span> \\u2022 {app.region}
                                            </p>
                                         </div>
                                      </div>
                                      <div className="flex items-center gap-4">
                                         <Button size="icon" className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg">
                                            <CheckCircle2 className="h-6 w-6 text-white" />
                                         </Button>
                                         <Button size="icon" variant="ghost" className="w-14 h-14 rounded-full text-red-500 hover:bg-red-50">
                                            <XCircle className="h-6 w-6" />
                                         </Button>
                                      </div>
                                   </div>
                                ))}
                             </div>
                          </section>

                          {/* Platform Telemetry Section */}
                          <section className="xl:col-span-5 space-y-12">
                             <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12">
                                   <Activity className="h-40 w-40 text-white/5 transform translate-x-12 translate-y-[-12px]" />
                                </div>
                                <h3 className="text-2xl font-black font-serif flex items-center gap-4 mb-10">
                                   <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                                   Global Ecosystem Pulse
                                </h3>
                                <div className="space-y-10">
                                   {platformEvents.map((ev, i) => (
                                      <div key={i} className="relative pl-10 border-l-2 border-slate-800">
                                         <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)] ${
                                            ev.status === 'success' ? 'bg-emerald-500' : 
                                            ev.status === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                                         }`} />
                                         <p className="text-base text-slate-200 font-medium leading-relaxed">{ev.msg}</p>
                                         <div className="flex items-center gap-4 mt-3">
                                            <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{ev.time}</span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                            <span className="text-[10px] font-black uppercase text-amber-600 tracking-widest">Actionable</span>
                                         </div>
                                      </div>
                                   ))}
                                </div>
                                <Button className="w-full mt-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl h-16 font-black text-white transition-all">
                                   Access Platform Logs
                                </Button>
                             </div>

                             <Card className="rounded-[4rem] border-none shadow-sm bg-white p-12 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-amber-50 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm">
                                   <FileText className="h-10 w-10 text-amber-600" />
                                </div>
                                <h3 className="text-3xl font-black mb-4 font-serif">Cultural Data Hub</h3>
                                <p className="text-slate-500 leading-relaxed mb-10">
                                   Manage {culturalTerms.shop} metadata, Amharic translations, and regional spotlight content across the platform.
                                </p>
                                <Button variant="outline" className="w-full rounded-[2rem] h-16 border-slate-200 font-black text-slate-600 hover:bg-slate-50 shadow-md">
                                   Edit Gebeya Metadata
                                </Button>
                             </Card>
                          </section>
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;