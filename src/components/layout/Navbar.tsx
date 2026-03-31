import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Globe, ChevronDown, Sparkles, ChevronRight, LayoutDashboard, Store, ShieldCheck, MapPin } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { culturalTerms } from '../../lib/data';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useStore();
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: culturalTerms.shop, path: '/explore' },
    { name: 'Regions', path: '/regions' },
    { name: 'Join Artisans', path: '/artisan/join' },
  ];

  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-all duration-500 ${isDashboard ? 'h-16' : 'h-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${isDashboard ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 bg-slate-900 rounded-[1.25rem] flex items-center justify-center group-hover:bg-amber-600 transition-all duration-500 shadow-xl shadow-slate-900/10 rotate-3 group-hover:rotate-0">
               <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tighter text-slate-900 font-serif leading-none">\u1325\u1260\u1265 <span className="text-amber-600">SQUARE</span></span>
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Heritage Marketplace</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-black uppercase tracking-[0.15em] transition-all relative group py-2 ${
                    location.pathname === link.path ? 'text-amber-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-1 bg-amber-600 rounded-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''}`} />
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {!isDashboard && (
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 group cursor-default transition-all hover:bg-white hover:shadow-sm">
                <Globe className="h-3 w-3 text-amber-600 group-hover:animate-pulse" />
                <span className="uppercase tracking-widest">EXPORT WORLDWIDE</span>
              </div>
            )}
            
            <Link to="/cart" className="relative group">
               <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-amber-50 transition-all duration-500 shadow-sm border border-slate-100">
                  <ShoppingCart className="h-5 w-5 text-slate-900 group-hover:text-amber-600" />
               </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-black h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-xl animate-in zoom-in duration-300">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="group relative">
              <button className={`flex items-center gap-3 p-1.5 pr-5 rounded-[1.5rem] transition-all shadow-xl shadow-slate-900/10 ${
                isDashboard ? 'bg-amber-600 text-white' : 'bg-slate-900 text-white hover:bg-amber-600'
              }`}>
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                   <User className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">My Space</span>
                <ChevronDown className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute right-0 top-full mt-6 w-80 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 p-5 flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0">
                <div className="px-5 py-3 border-b border-slate-50 mb-3">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Ecosystem Control</p>
                </div>
                
                <Link to="/dashboard/user" className="flex items-center gap-5 p-5 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-[1.75rem] transition-all group/item">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover/item:scale-110 transition-transform">
                      <LayoutDashboard className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900 font-black">Buyer Dashboard</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Orders & Preferences</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-200 group-hover/item:text-slate-900 transition-colors" />
                </Link>

                <Link to="/dashboard/vendor" className="flex items-center gap-5 p-5 text-sm font-bold text-slate-600 hover:bg-amber-50 rounded-[1.75rem] transition-all group/item">
                   <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 group-hover/item:scale-110 transition-transform">
                      <Store className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900 font-black">Artisan Panel</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Mastery & Sales</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-200 group-hover/item:text-slate-900 transition-colors" />
                </Link>

                <Link to="/dashboard/admin" className="flex items-center gap-5 p-5 text-sm font-bold text-slate-600 hover:bg-indigo-50 rounded-[1.75rem] transition-all group/item">
                   <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover/item:scale-110 transition-transform">
                      <ShieldCheck className="h-6 w-6" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900 font-black">Admin Central</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Platform Governance</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-200 group-hover/item:text-slate-900 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 bg-slate-50 rounded-xl">
              <ShoppingCart className="h-6 w-6 text-slate-900" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 active:scale-95 transition-all"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pt-6 pb-12 flex flex-col gap-6 animate-in slide-in-from-top duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black text-slate-900 border-b border-slate-50 pb-4 flex justify-between items-center group active:text-amber-600"
            >
              {link.name}
              <ChevronRight className="h-5 w-5 text-slate-200 group-active:text-amber-600" />
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4">
             <Link to="/dashboard/user" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] font-black text-slate-900">Buyer Dashboard <LayoutDashboard className="h-5 w-5" /></Link>
             <Link to="/dashboard/vendor" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-5 bg-amber-50 rounded-[1.5rem] font-black text-amber-600">Artisan Panel <Store className="h-5 w-5" /></Link>
             <Link to="/dashboard/admin" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-5 bg-indigo-50 rounded-[1.5rem] font-black text-indigo-600">Admin Central <ShieldCheck className="h-5 w-5" /></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;