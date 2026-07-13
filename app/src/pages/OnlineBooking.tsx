import { MapPin, Phone, Droplet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OnlineBooking() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center space-y-4">
          <div className="w-20 h-20 bg-[#19d219]/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={40} className="text-[#19d219]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
          <p className="text-gray-600">Your borewell drilling request has been successfully submitted to our CRM pipeline. Our team will contact you shortly.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 w-full btn-gradient py-3 rounded-xl font-bold shadow-md transition-all"
          >
            Submit Another Request
          </button>
          <Link to="/" className="block mt-4 text-[#6C38FF] font-bold hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left Info Panel */}
      <div className="bg-brand-purple text-white p-8 md:p-12 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Droplet size={32} className="text-[#FF4F8B]" />
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-tight">Book Your Borewell Online</h1>
          <p className="text-white/80 text-lg">Fast, reliable, and transparent drilling services across Tamil Nadu. Request a site survey today.</p>
          
          <div className="space-y-4 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Phone className="text-[#00C9A7]" size={20} />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#00C9A7]" size={20} />
              <span>Salem Main Road, Tiruchengode</span>
            </div>
          </div>
        </div>
        
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#FF4F8B] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
        <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Request Form</h2>
          
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input required type="text" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50" placeholder="Rajesh" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input required type="text" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50" placeholder="Kumar" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input required type="tel" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50" placeholder="+91 98765 43210" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Land Location (City/Town)</label>
              <input required type="text" className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50" placeholder="E.g. Erode, Salem, Tiruchengode" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Borewell Requirement</label>
              <select className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50 text-gray-700">
                <option>Agricultural Drilling (6½" / 8")</option>
                <option>Residential / Domestic Drilling</option>
                <option>Industrial Deep Drilling</option>
                <option>Borewell Cleaning / Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea rows={3} className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#FF4F8B] outline-none bg-gray-50" placeholder="Any specific requirements..."></textarea>
            </div>

            <button type="submit" className="w-full btn-gradient py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 group">
              Submit Request <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">By submitting, you agree to our terms of service.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
