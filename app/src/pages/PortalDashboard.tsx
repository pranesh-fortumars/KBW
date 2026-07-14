import { FileText, CreditCard, UploadCloud, FileSignature, MapPin } from 'lucide-react';

export default function PortalDashboard() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Welcome back, Rajesh!</h2>
          <p className="text-gray-500 mt-2">Here is the latest status of your borewell project at Tiruchengode.</p>
        </div>
        <div className="bg-[#19d219]/10 text-emerald-700 px-6 py-4 rounded-xl text-center border border-emerald-100">
          <p className="text-sm font-bold uppercase tracking-wider">Project Status</p>
          <p className="text-2xl font-black mt-1">Drilling Started</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Project Tracker */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <MapPin className="text-[#19d219]" /> Project Timeline
          </h3>
          <div className="relative border-l-2 border-[#19d219] ml-3 space-y-8 pb-4">
            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-[#19d219] rounded-full -left-[9px] top-1"></div>
              <p className="font-bold text-gray-800">Site Inspection Completed</p>
              <p className="text-sm text-gray-500">Geologist verified water point on July 10, 2026.</p>
            </div>
            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-[#19d219] rounded-full -left-[9px] top-1"></div>
              <p className="font-bold text-gray-800">Quotation Approved</p>
              <p className="text-sm text-gray-500">Estimate accepted. Advance payment received.</p>
            </div>
            <div className="relative pl-6">
              <div className="absolute w-4 h-4 bg-[#19d219] rounded-full -left-[9px] top-1 animate-pulse shadow-[0_0_0_4px_rgba(16,185,129,0.2)]"></div>
              <p className="font-bold text-gray-800">Machine Assigned & Drilling</p>
              <p className="text-sm text-gray-500">Rig R01 has arrived at the site. Current depth: 250ft.</p>
            </div>
            <div className="relative pl-6 opacity-40">
              <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-1"></div>
              <p className="font-bold text-gray-800">Casing Installation</p>
              <p className="text-sm text-gray-500">Pending</p>
            </div>
            <div className="relative pl-6 opacity-40">
              <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-1"></div>
              <p className="font-bold text-gray-800">Project Handover</p>
              <p className="text-sm text-gray-500">Pending</p>
            </div>
          </div>
        </div>

        {/* Actions & Docs */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Latest Documents</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-emerald-300 hover:bg-[#19d219]/10 transition-colors group">
                <FileText className="text-gray-400 group-hover:text-[#15b515]" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">Estimate Quotation</p>
                  <p className="text-xs text-gray-500">EST-1092.pdf</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-emerald-300 hover:bg-[#19d219]/10 transition-colors group">
                <FileSignature className="text-gray-400 group-hover:text-[#15b515]" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">Site Survey Report</p>
                  <p className="text-xs text-gray-500">GEO-SURVEY.pdf</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg text-white">
            <h3 className="text-lg font-bold mb-2">Pending Dues</h3>
            <p className="text-3xl font-black text-[#19d219]">₹ 85,000</p>
            <p className="text-xs text-slate-400 mt-1 mb-6">Invoice INV-26001 (Advance)</p>
            <button className="w-full bg-[#19d219] hover:bg-emerald-400 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2 transition-colors">
              <CreditCard size={18} /> Pay Now Online
            </button>
          </div>

          <button className="w-full bg-white hover:bg-gray-50 text-emerald-700 font-bold py-4 rounded-2xl border-2 border-dashed border-emerald-200 flex justify-center items-center gap-2 transition-colors">
            <UploadCloud size={20} /> Upload Land Approvals
          </button>
        </div>
      </div>
    </div>
  );
}
