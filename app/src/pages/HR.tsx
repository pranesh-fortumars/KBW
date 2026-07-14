import { Users, UserCheck, CalendarDays, Wallet } from 'lucide-react';

const mockEmployees = [
  { id: 'EMP-001', name: 'Murugan K.', role: 'Senior Rig Operator', phone: '+91 9988776655', status: 'On Duty', assigned: 'Rig R01 (Tiruchengode)', salary: '₹35,000' },
  { id: 'EMP-002', name: 'Senthil Vel', role: 'Rig Operator', phone: '+91 8877665544', status: 'Off Duty', assigned: 'Rig R02 (Transit)', salary: '₹30,000' },
  { id: 'EMP-003', name: 'Priya R.', role: 'Sales Executive', phone: '+91 7766554433', status: 'On Duty', assigned: 'Salem Office', salary: '₹25,000' },
  { id: 'EMP-004', name: 'Karthik S.', role: 'Accountant', phone: '+91 6655443322', status: 'Leave', assigned: 'HQ', salary: '₹28,000' },
];

export default function HR() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">HR & Employee Management</h2>
        <button className="btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          Add Employee
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Staff</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">42</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Users size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Present Today</p>
            <p className="text-3xl font-bold text-[#15b515] mt-1">38</p>
          </div>
          <div className="p-3 bg-[#19d219]/10 text-[#15b515] rounded-lg"><UserCheck size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">On Leave</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">4</p>
          </div>
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><CalendarDays size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Monthly Payroll</p>
            <p className="text-2xl font-bold text-indigo-600 mt-1">₹ 8.2L</p>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Wallet size={24} /></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold text-gray-700">Employee Directory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">EMP ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Assignment</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Salary / Payroll</th>
              </tr>
            </thead>
            <tbody>
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-500 text-sm">{emp.id}</td>
                  <td className="p-4 font-bold text-gray-800">
                    {emp.name}
                    <div className="text-xs text-gray-500 font-normal">{emp.phone}</div>
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{emp.role}</td>
                  <td className="p-4 text-gray-600 text-sm">{emp.assigned}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      emp.status === 'On Duty' ? 'bg-emerald-100 text-emerald-700' :
                      emp.status === 'Off Duty' ? 'bg-gray-100 text-gray-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-800 text-sm font-medium">{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
