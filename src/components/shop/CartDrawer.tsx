import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useStore } from "../../store/useStore";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cart, removeFromCart, updateQuantity, formatPrice } = useStore();
  const navigate = useNavigate();
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const navigateToProduct = (id: string) => {
    onClose();
    navigate(`/product/${id}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-xl font-black tracking-tight">Your Collection</h2>
                <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {itemCount}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-20">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Your cart is empty</h3>
                    <p className="text-slate-500 mt-2 text-sm">Discover unique Ethiopian crafts to fill it up.</p>
                  </div>
                  <Button
                    onClick={() => {
                      onClose();
                      navigate("/");
                    }}
                    className="bg-black text-white px-8 rounded-full font-bold"
                  >
                    Start Exploring
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div 
                      className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 border cursor-pointer hover:border-black transition-all shadow-sm"
                      onClick={() => navigateToProduct(item.id)}
                    >
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <h4 
                          className="font-bold text-slate-900 leading-tight group-hover:text-black transition-colors cursor-pointer"
                          onClick={() => navigateToProduct(item.id)}
                        >
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:text-red-500 text-slate-300 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{item.category}</p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border rounded-lg overflow-hidden h-8 bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 hover:bg-slate-200 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-bold min-w-[30px] text-center border-x bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 hover:bg-slate-200 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-black text-slate-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-slate-50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-900">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-black text-slate-900 pt-2 border-t">
                    <span>Total</span>
                    <span className="text-gradient-ethiopia">{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white h-14 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 tilet-border pb-3"
                >
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Secure Global Marketplace
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};