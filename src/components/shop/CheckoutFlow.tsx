import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Globe, 
  MapPin,
  Clock,
  Zap,
  Phone,
  Lock,
  Sparkles
} from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const CheckoutFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const { cart, clearCart } = useStore();
  const navigate = useNavigate();
  const [isExport, setIsExport] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = isExport ? 45 : 10;
  const total = subtotal + shipping;

  const handleComplete = () => {
    toast.success('Order placed successfully!');
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Progress Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                 <ShieldCheck className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black font-serif text-slate-900">Secure Checkout</h1>
           </div>
           
           <div className="flex items-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all ${step >= s ? 'bg-amber-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}>
                    {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  {s < 3 && <div className={`w-8 h-1 rounded-full ${step > s ? 'bg-amber-600' : 'bg-slate-100'}`} />}
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-10"
                >
                  <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                       <MapPin className="h-6 w-6 text-amber-600" /> Shipping Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                       <Input placeholder="First Name" className="h-14 rounded-xl border-slate-200" />
                       <Input placeholder="Last Name" className="h-14 rounded-xl border-slate-200" />
                       <Input placeholder="Email Address" className="h-14 rounded-xl border-slate-200 md:col-span-2" />
                       <Input placeholder="Phone Number" className="h-14 rounded-xl border-slate-200 md:col-span-2" />
                       <Input placeholder="Full Address" className="h-14 rounded-xl border-slate-200 md:col-span-2" />
                       <Input placeholder="City" className="h-14 rounded-xl border-slate-200" />
                       <Input placeholder="Postal Code" className="h-14 rounded-xl border-slate-200" />
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                       <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                                <Globe className="h-6 w-6" />
                             </div>
                             <div>
                                <p className="font-black text-slate-900">International Export</p>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Worldwide Door-to-Door</p>
                             </div>
                          </div>
                          <Button 
                             variant={isExport ? 'default' : 'outline'} 
                             className={`rounded-xl h-12 px-8 font-black ${isExport ? 'bg-slate-900 text-white' : ''}`}
                             onClick={() => setIsExport(!isExport)}
                          >
                             {isExport ? 'Enabled' : 'Enable Export'}
                          </Button>
                       </div>
                       <p className="text-sm text-slate-500 leading-relaxed">
                          Enabling export handles international customs, specialized artifact packaging, and global tracking (+$35.00).
                       </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button 
                       onClick={() => setStep(2)} 
                       className="h-16 px-12 rounded-[2rem] bg-slate-900 text-white font-black text-lg hover:bg-amber-600 transition-all shadow-xl"
                    >
                       Continue to Shipping <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-10"
                >
                   <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
                      <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <Truck className="h-6 w-6 text-amber-600" /> Delivery Method
                      </h2>
                      
                      <div className="grid gap-4">
                         {[ 
                            { id: 'standard', name: 'Standard Delivery', time: '3-5 Business Days', price: 10, icon: Clock },
                            { id: 'express', name: 'Express Culture', time: '1-2 Business Days', price: 25, icon: Zap },
                            { id: 'global', name: 'Global Export', time: '7-12 Business Days', price: 45, icon: Globe, highlight: true },
                         ].filter(m => isExport ? m.id === 'global' : m.id !== 'global').map(method => (
                            <label key={method.id} className="group cursor-pointer">
                               <input type="radio" name="shipping" className="hidden" defaultChecked={method.id === 'standard' || method.id === 'global'} />
                               <div className="p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent hover:border-amber-600/30 transition-all flex items-center justify-between group-has-[:checked]:border-amber-600 group-has-[:checked]:bg-white group-has-[:checked]:shadow-xl">
                                  <div className="flex items-center gap-6">
                                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${method.highlight ? 'bg-amber-600 text-white' : 'bg-white text-slate-400'}`}>
                                        <method.icon className="h-6 w-6" />
                                     </div>
                                     <div>
                                        <p className="font-black text-slate-900 text-lg">{method.name}</p>
                                        <p className="text-sm text-slate-500">Estimated arrival: {method.time}</p>
                                     </div>
                                  </div>
                                  <span className="text-2xl font-black text-slate-900">${method.price}</span>
                               </div>
                            </label>
                         ))}
                      </div>
                   </div>
                   
                   <div className="flex justify-between">
                     <Button variant="ghost" onClick={() => setStep(1)} className="h-16 px-8 rounded-2xl font-bold text-slate-400">
                        <ChevronLeft className="mr-2 h-5 w-5" /> Back to Info
                     </Button>
                     <Button 
                        onClick={() => setStep(3)} 
                        className="h-16 px-12 rounded-[2rem] bg-slate-900 text-white font-black text-lg hover:bg-amber-600 transition-all shadow-xl"
                     >
                        Continue to Payment <ChevronRight className="ml-2 h-5 w-5" />
                     </Button>
                   </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                   key="step3"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="space-y-10"
                >
                   <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100">
                      <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-amber-600" /> Payment Gateway
                      </h2>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                         {[ 
                            { id: 'telebirr', name: 'Telebirr', color: 'bg-blue-600' },
                            { id: 'chapa', name: 'Chapa', color: 'bg-emerald-600' },
                            { id: 'santim', name: 'SantimPay', color: 'bg-indigo-600' },
                            { id: 'cbe', name: 'CBE Birr', color: 'bg-purple-600' },
                         ].map(gw => (
                            <button key={gw.id} className="p-6 rounded-[2rem] border-2 border-slate-50 hover:border-amber-600/30 bg-slate-50 transition-all text-center group">
                               <div className={`w-12 h-12 ${gw.color} rounded-xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`} />
                               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900">{gw.name}</p>
                            </button>
                         ))}
                      </div>

                      <div className="space-y-6 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                         <div className="relative">
                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <Input placeholder="Card Number" className="h-14 pl-12 rounded-xl bg-white border-none" />
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="MM / YY" className="h-14 rounded-xl bg-white border-none" />
                            <div className="relative">
                               <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                               <Input placeholder="CVC" className="h-14 pl-12 rounded-xl bg-white border-none" />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="flex justify-between">
                     <Button variant="ghost" onClick={() => setStep(2)} className="h-16 px-8 rounded-2xl font-bold text-slate-400">
                        <ChevronLeft className="mr-2 h-5 w-5" /> Back to Shipping
                     </Button>
                     <Button 
                        onClick={handleComplete}
                        className="h-16 px-12 rounded-[2rem] bg-amber-600 text-white font-black text-xl hover:bg-slate-900 transition-all shadow-2xl flex items-center gap-3"
                     >
                        Confirm Order <Sparkles className="h-6 w-6" />
                     </Button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4">
             <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 sticky top-24">
                <h3 className="text-2xl font-black mb-8 font-serif">Order Summary</h3>
                
                <div className="space-y-6 mb-10">
                   {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4">
                         <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm shrink-0 border border-slate-50">
                            <img src={item.image} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="flex-1">
                            <p className="font-black text-slate-900 text-sm leading-tight">{item.name}</p>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{item.quantity} x ${item.price}</p>
                         </div>
                         <p className="font-black text-slate-900">${item.price * item.quantity}</p>
                      </div>
                   ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-slate-50">
                   <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-bold">Subtotal</span>
                      <span className="text-slate-900 font-black">${subtotal}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-slate-400 font-bold">Cultural Logistics</span>
                      <span className="text-slate-900 font-black">${shipping}</span>
                   </div>
                   {isExport && (
                      <div className="flex justify-between text-xs text-amber-600 font-black uppercase tracking-widest">
                        <span>Export Certification</span>
                        <span>Included</span>
                      </div>
                   )}
                   <div className="flex justify-between text-xl pt-6 border-t border-slate-50">
                      <span className="font-black font-serif">Total</span>
                      <span className="font-black text-amber-600 font-serif">${total}</span>
                   </div>
                </div>
                
                <div className="mt-10 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-4">
                   <Phone className="h-5 w-5 text-slate-400" />
                   <p className="text-xs text-slate-500 font-medium">Need help? <span className="text-slate-900 font-black">+251-91-XXX-XXXX</span></p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;