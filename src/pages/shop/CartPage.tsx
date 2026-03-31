import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-black mb-6 font-serif">Your Cart is Empty</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any handcrafted treasures to your cart yet.</p>
        <Link to="/explore">
          <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-amber-600 transition-colors">
            Start Exploring
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-12 font-serif">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
              <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-1">{item.artisan}</p>
                <p className="text-amber-600 font-black">${item.price}</p>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-1 rounded-xl">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center font-bold hover:text-amber-600"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-black">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center font-bold hover:text-amber-600"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col items-end gap-2">
                 <p className="font-black text-lg">${item.price * item.quantity}</p>
                 <button 
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.info('Item removed from cart');
                  }}
                  className="text-red-400 hover:text-red-600 p-2"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          <Button variant="ghost" className="rounded-xl mt-4" onClick={() => navigate('/explore')}>
             <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
          </Button>
        </div>

        {/* Summary */}
        <aside className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">${subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-bold text-slate-900 text-xs">Calculated at checkout</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between">
                <span className="font-black text-lg">Total</span>
                <span className="font-black text-2xl text-amber-600">${subtotal}</span>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full h-16 bg-slate-900 hover:bg-amber-600 rounded-2xl text-lg font-bold shadow-xl transition-all">
                Proceed to Checkout
              </Button>
            </Link>

            <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest justify-center">
               <ShieldCheck className="h-4 w-4 text-emerald-500" />
               Secure SSL Transaction
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;