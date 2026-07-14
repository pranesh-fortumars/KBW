import { Truck, Navigation, Settings, AlertTriangle } from 'lucide-react';

const mockFleet = [
  { id: 'R01', name: 'Atlas Copco Rig 1', type: 'Super Fast Rig', location: 'Tiruchengode', status: 'Active', nextService: '2026-08-15', operator: 'Murugan' },
  { id: 'R02', name: 'Ashok Leyland Rig 2', type: 'Deep Drilling', location: 'Amravati', status: 'In Transit', nextService: '2026-07-20', operator: 'Senthil' },
  { id: 'C01', name: 'ELGI Compressor High-Pressure', type: 'Compressor', location: 'Yard', status: 'Maintenance', nextService: '2026-07-12', operator: 'N/A' },
];

export default function Fleet() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Fleet & Machine Management</h2>
        <button className="flex items-center gap-2 btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          Add Machine
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Truck size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Total Fleet</p><p className="text-2xl font-bold">12</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-[#19d219]/10 text-[#15b515] rounded-lg"><Navigation size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Active (Drilling)</p><p className="text-2xl font-bold">4</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg"><Settings size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">In Yard</p><p className="text-2xl font-bold">6</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-lg"><AlertTriangle size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Maintenance</p><p className="text-2xl font-bold">2</p></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold text-gray-700">Machine Registry</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Machine Name</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Current Location</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Next Service</th>
                <th className="p-4 font-medium">Operator</th>
              </tr>
            </thead>
            <tbody>
              {mockFleet.map((machine) => (
                <tr key={machine.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-800">{machine.id}</td>
                  <td className="p-4 text-gray-800 font-medium">{machine.name}</td>
                  <td className="p-4 text-gray-600 text-sm">{machine.type}</td>
                  <td className="p-4 text-gray-600 text-sm">{machine.location}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      machine.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      machine.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {machine.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">{machine.nextService}</td>
                  <td className="p-4 text-gray-600 text-sm">{machine.operator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
