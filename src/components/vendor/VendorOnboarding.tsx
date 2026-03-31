import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  MapPin, 
  Briefcase, 
  Upload, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { regions, categories } from '../../lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const VendorOnboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
      toast.success('Application submitted successfully!');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Progress */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${
                step >= i ? 'bg-amber-600 text-white shadow-lg shadow-amber-200' : 'bg-slate-100 text-slate-400'
              }`}>
                {step > i ? <CheckCircle2 className="h-6 w-6" /> : i}
              </div>
              {i < 3 && <div className={`w-12 h-1 bg-slate-100 rounded-full overflow-hidden`}>
                <div className={`h-full bg-amber-600 transition-all duration-500 ${step > i ? 'w-full' : 'w-0'}`} />
              </div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-black text-slate-900 mb-2 font-serif">Tell us about you</h1>
              <p className="text-slate-500 text-lg">Every great masterpiece starts with an artist.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Full Name (In Amharic or English)</Label>
                <Input placeholder="e.g. Abebech Desta" className="h-14 rounded-2xl" />
              </div>
              <div className="space-y-2">
                <Label>Main Region (Kilil)</Label>
                <select className="w-full h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 focus:ring-2 focus:ring-amber-600 outline-none">
                  {regions.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Your Story & Bio</Label>
              <Textarea placeholder="How did you learn your craft? What inspires you?" className="min-h-[150px] rounded-2xl p-4" />
            </div>

            <Button onClick={() => setStep(2)} className="w-full h-16 bg-slate-900 hover:bg-amber-600 rounded-2xl text-lg font-bold transition-all shadow-xl">
              Next Step <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
             <div className="text-center">
              <h1 className="text-4xl font-black text-slate-900 mb-2 font-serif">Your Craft</h1>
              <p className="text-slate-500 text-lg">Show the world what you can create.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <Label>Specialty Category</Label>
                  <select className="w-full h-14 rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none">
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
               </div>
               <div className="space-y-2">
                  <Label>Experience (Years)</Label>
                  <Input type="number" placeholder="5" className="h-14 rounded-2xl" />
               </div>
            </div>

            <div className="space-y-4">
               <Label>Upload Photo of Your Best Work</Label>
               <div className="border-4 border-dashed border-slate-100 rounded-3xl p-12 text-center hover:border-amber-600 transition-colors cursor-pointer group">
                  <Upload className="h-12 w-12 text-slate-300 group-hover:text-amber-600 mx-auto mb-4" />
                  <p className="text-slate-500 font-medium">Drag and drop or click to upload</p>
                  <p className="text-xs text-slate-400 mt-2">Support JPG, PNG (Max 5MB)</p>
               </div>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => setStep(1)} className="flex-1 h-16 rounded-2xl font-bold">Back</Button>
              <Button onClick={() => setStep(3)} className="flex-1 h-16 bg-slate-900 hover:bg-amber-600 rounded-2xl text-lg font-bold transition-all shadow-xl">
                Continue
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="text-center">
                <h1 className="text-4xl font-black text-slate-900 mb-2 font-serif">Global Reach</h1>
                <p className="text-slate-500 text-lg">Set up your export preferences.</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 space-y-4">
                 <div className="flex items-center gap-4">
                    <Globe className="h-6 w-6 text-amber-600" />
                    <div>
                       <p className="font-bold">Are you ready for international export?</p>
                       <p className="text-sm text-slate-500">We handle the logistics, you just craft.</p>
                    </div>
                    <div className="ml-auto">
                       <input type="checkbox" defaultChecked className="w-6 h-6 rounded border-amber-300 text-amber-600 focus:ring-amber-600" />
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="flex items-start gap-3 text-sm text-slate-600">
                    <ShieldCheck className="h-5 w-5 text-green-600 shrink-0" />
                    <p>I agree to the Tibeb Square terms of service and artisan code of ethics.</p>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-slate-600">
                    <ShieldCheck className="h-5 w-5 text-green-600 shrink-0" />
                    <p>I confirm all products are handmade and authentically Ethiopian.</p>
                 </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="ghost" onClick={() => setStep(2)} className="flex-1 h-16 rounded-2xl font-bold">Back</Button>
                <Button onClick={handleComplete} disabled={loading} className="flex-1 h-16 bg-amber-600 hover:bg-amber-700 rounded-2xl text-lg font-bold transition-all shadow-xl">
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </div>
           </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-8">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 font-serif">Welcome Aboard!</h1>
            <p className="text-xl text-slate-500 max-w-md mx-auto">
              Your application is under review by our community curators. We will contact you within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
               <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-amber-600" onClick={() => window.location.href='/dashboard/vendor'}>
                 Go to Artisan Portal
               </Button>
               <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-100" onClick={() => window.location.href='/'}>
                 Return Home
               </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VendorOnboarding;