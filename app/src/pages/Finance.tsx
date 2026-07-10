import { useState } from 'react';
import { Calculator, FileText, IndianRupee, Download } from 'lucide-react';

const mockInvoices = [
  { id: 'INV-26001', customer: 'Rajesh Kumar', amount: '₹ 85,000', status: 'Paid', date: '2026-07-05' },
  { id: 'INV-26002', customer: 'Meera Devi', amount: '₹ 1,20,000', status: 'Pending', date: '2026-07-09' },
  { id: 'INV-26003', customer: 'Salem Textile Park', amount: '₹ 3,50,000', status: 'Partially Paid', date: '2026-07-10' },
];

export default function Finance() {
  const [depth, setDepth] = useState(300);
  const [casing, setCasing] = useState(40);
  
  // Dummy rates as requested
  const drillingRate = 80; // per ft
  const casingRate = 250; // per ft
  const transport = 5000;
  
  const estimatedCost = (depth * drillingRate) + (casing * casingRate) + transport;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Finance & Quotations</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quotation Engine */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="text-emerald-500" size={24} />
            <h3 className="text-lg font-bold text-gray-800">Quotation Engine</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Depth (ft)</label>
              <input 
                type="number" 
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Rate: ₹{drillingRate}/ft</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Casing Pipe (ft)</label>
              <input 
                type="number" 
                value={casing}
                onChange={(e) => setCasing(Number(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Rate: ₹{casingRate}/ft (6.5" PVC)</p>
            </div>

            <div className="border-t pt-4 mt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Drilling Charges:</span>
                <span>₹ {(depth * drillingRate).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Casing Charges:</span>
                <span>₹ {(casing * casingRate).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Transport & Machinery:</span>
                <span>₹ {transport.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2 mt-2">
                <span>Total Estimate:</span>
                <span className="text-emerald-600">₹ {estimatedCost.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-medium transition-colors flex justify-center items-center gap-2">
              <FileText size={18} /> Generate PDF Quotation
            </button>
          </div>
        </div>

        {/* Invoice List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <IndianRupee className="text-blue-500" size={24} />
              <h3 className="text-lg font-bold text-gray-800">Recent Invoices</h3>
            </div>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
          </div>

          <div className="space-y-4">
            {mockInvoices.map((inv) => (
              <div key={inv.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{inv.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                      inv.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{inv.customer} • {inv.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-gray-800">{inv.amount}</span>
                  <button className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
