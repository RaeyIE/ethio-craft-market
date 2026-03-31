import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBF0]/30 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-10 shadow-xl text-center border border-[#8B4513]/10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Package className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Ameseginalehu!</h1>
          <p className="text-xl text-gray-600 mb-8">Your order has been successfully placed.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('/products')} className="flex-1 py-4 bg-[#8B4513] text-white rounded-xl font-bold flex items-center justify-center hover:bg-[#6F3710] transition shadow-lg group">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Continue Shopping
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};