import React from 'react';
import { Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const OrderConfirmation: React.FC = () => {
  const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-xl mx-auto space-y-8">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-black font-serif">Mesi-mesignin!</h1>
          <p className="text-xl text-slate-500">Thank you for supporting Ethiopian artisans.</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-8 space-y-4 shadow-sm">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-slate-500">Order Number</span>
            <span className="font-bold text-slate-900">#TS-{orderNumber}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-slate-500">Estimated Delivery</span>
            <span className="font-bold text-slate-900">7-14 Business Days</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-slate-500">Shipping Status</span>
            <span className="flex items-center gap-2 text-blue-600 font-bold text-sm">
              <Package className="w-4 h-4" /> Processing
            </span>
          </div>
        </div>

        <p className="text-slate-500 text-sm">
          A confirmation email has been sent to your address. You'll receive another update once your craft has been handed to our global logistics partner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/">
            <Button size="lg" className="rounded-2xl px-10 bg-slate-900 hover:bg-amber-600 font-bold transition-all shadow-xl">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/dashboard/user">
            <Button size="lg" variant="outline" className="rounded-2xl px-10 font-bold border-2 border-slate-100">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;