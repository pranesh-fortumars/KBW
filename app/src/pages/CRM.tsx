import { useState } from 'react';
import { Search, Plus, PhoneCall, CheckCircle2, Clock } from 'lucide-react';

const mockLeads = [
  { id: '1', name: 'Rajesh Kumar', location: 'Tiruchengode', phone: '+91 9876543210', status: 'New', date: '2026-07-10', requirements: '6½" Borewell, Agricultural' },
  { id: '2', name: 'Meera Devi', location: 'Amravati', phone: '+91 8765432109', status: 'Follow-up', date: '2026-07-09', requirements: '8" Borewell, Industrial' },
  { id: '3', name: 'Suresh Babu', location: 'Salem', phone: '+91 7654321098', status: 'Converted', date: '2026-07-08', requirements: '7" PVC, Residential' },
];

export default function CRM() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = mockLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">CRM & Lead Management</h2>
        <button className="flex items-center gap-2 btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus size={18} /> New Lead
        </button>
      </div>

      {/* Analytics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Clock size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">New Leads</p><p className="text-2xl font-bold">14</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg"><PhoneCall size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Follow-ups Today</p><p className="text-2xl font-bold">8</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
          <div className="p-3 bg-[#19d219]/10 text-[#15b515] rounded-lg"><CheckCircle2 size={24} /></div>
          <div><p className="text-sm text-gray-500 font-medium">Converted (This Month)</p><p className="text-2xl font-bold">42</p></div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold text-gray-700">Lead Pipeline</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-[#19d219] focus:ring-1 focus:ring-[var(--brand-pink)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Requirements</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-800">{lead.name}</td>
                  <td className="p-4 text-gray-600">{lead.location}</td>
                  <td className="p-4 text-gray-600">{lead.phone}</td>
                  <td className="p-4 text-gray-600 text-sm">{lead.requirements}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                      lead.status === 'Follow-up' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500 text-sm">{lead.date}</td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-gray-500">No leads found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
