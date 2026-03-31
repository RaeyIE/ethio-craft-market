import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search, Globe, ChevronDown, Sparkles, ChevronRight, LayoutDashboard, Store, ShieldCheck } from 'lucide-react';
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
  ];

  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm ${isDashboard ? 'h-16' : 'h-20'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isDashboard ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors shadow-lg">
               <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 font-serif">
              \\u1325\\u1260\\u1265 <span className="text-amber-600">SQUARE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-black uppercase tracking-widest transition-all hover:text-amber-600 ${
                    location.pathname === link.path ? 'text-amber-600' : 'text-slate-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {!isDashboard && (
              <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                <Globe className="h-3 w-3 text-amber-600" />
                <span>EXPORT WORLDWIDE</span>
              </div>
            )}
            
            <Link to="/cart" className="relative group">
               <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-amber-50 transition-colors shadow-sm">
                  <ShoppingCart className="h-5 w-5 text-slate-900 group-hover:text-amber-600" />
               </div>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="group relative">
              <Link to="/dashboard/user" className={`flex items-center gap-3 p-1 pr-4 rounded-2xl transition-all shadow-md ${
                isDashboard ? 'bg-amber-600 text-white' : 'bg-slate-900 text-white hover:bg-amber-600'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                   <User className="h-5 w-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">My Space</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Link>
              
              <div className="absolute right-0 top-full mt-4 w-72 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-4 flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0">
                <div className="px-4 py-2 border-b border-slate-50 mb-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ecosystem Control</p>
                </div>
                
                <Link to="/dashboard/user" className="flex items-center gap-4 p-4 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-2xl transition-all">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <LayoutDashboard className="h-5 w-5" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900">Buyer Dashboard</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase">Manage Orders & Style</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-300" />
                </Link>

                <Link to="/dashboard/vendor" className="flex items-center gap-4 p-4 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-2xl transition-all">
                   <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                      <Store className="h-5 w-5" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900">Artisan Panel</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase">Sales & Inventory</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-300" />
                </Link>

                <Link to="/dashboard/admin" className="flex items-center gap-4 p-4 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-2xl transition-all">
                   <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                   </div>
                   <div className="flex-1">
                      <p className="text-slate-900">Admin Central</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase">Platform Governance</p>
                   </div>
                   <ChevronRight className="h-4 w-4 text-slate-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-slate-900" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-50 text-slate-900 shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 pt-4 pb-12 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xl font-black text-slate-900 border-b border-slate-50 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4">
             <Link to="/dashboard/user" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl font-bold">Buyer Dashboard <ChevronRight className="h-4 w-4" /></Link>
             <Link to="/dashboard/vendor" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl font-bold text-amber-600">Artisan Panel <ChevronRight className="h-4 w-4" /></Link>
             <Link to="/dashboard/admin" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl font-bold text-indigo-600">Admin Central <ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;