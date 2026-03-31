import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Product } from '../../lib/data';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-white/90 backdrop-blur-md text-amber-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                {product.region}
              </span>
              {product.isExportReady && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                  <Globe className="h-3 w-3" /> Export
                </span>
              )}
            </div>

            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm">
              <Heart className="h-5 w-5" />
            </button>

            {/* Quick Add Overlay */}
            <div className="absolute inset-x-6 bottom-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
               <Button 
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }}
                className="w-full h-14 bg-slate-900 hover:bg-amber-600 rounded-2xl font-bold shadow-xl"
               >
                 <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
               </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{product.category}</p>
              <div className="flex items-center gap-1 text-amber-500">
                 <Star className="h-3 w-3 fill-amber-500" />
                 <span className="text-xs font-black">{product.rating}</span>
              </div>
            </div>

            <Link to={`/product/${product.id}`} className="block group/title">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover/title:text-amber-600 transition-colors line-clamp-1">{product.name}</h3>
            </Link>
            <p className="text-sm text-slate-500 mb-6">By {product.artisan}</p>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-black text-slate-900">${product.price}</span>
              <Link to={`/product/${product.id}`}>
                 <div className="text-amber-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Details <ArrowRight className="h-4 w-4" />
                 </div>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;