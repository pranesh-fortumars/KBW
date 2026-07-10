import { Shield, Key, Building2 } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">System Settings & Access</h2>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Business Profile */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div className="flex items-center gap-3 border-b pb-4">
            <Building2 className="text-blue-500" size={24} />
            <h3 className="text-lg font-bold text-gray-800">Business Profile</h3>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input type="text" defaultValue="Karpagam Borewells" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GSTIN Number</label>
            <input type="text" defaultValue="33ABCDE1234F1Z5" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Head Office Address</label>
            <textarea defaultValue="Salem Main Road, Tiruchengode, Namakkal District - 637211" rows={3} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>
        </div>

        {/* Role Based Access */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div className="flex items-center gap-3 border-b pb-4">
            <Shield className="text-emerald-500" size={24} />
            <h3 className="text-lg font-bold text-gray-800">Role-Based Access Control</h3>
          </div>
          <p className="text-sm text-gray-600">Assign system permissions to users. Currently mocked for Firestore integration.</p>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
              <div>
                <p className="font-bold text-gray-800">Admin_System</p>
                <p className="text-xs text-gray-500">Super Admin (Full Access)</p>
              </div>
              <Key size={18} className="text-emerald-500" />
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-bold text-gray-800">Manager_Salem</p>
                <p className="text-xs text-gray-500">Manager (Projects & CRM)</p>
              </div>
              <button className="text-sm text-blue-600 font-medium">Edit Role</button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-bold text-gray-800">Accountant_Main</p>
                <p className="text-xs text-gray-500">Accountant (Finance & Invoices only)</p>
              </div>
              <button className="text-sm text-blue-600 font-medium">Edit Role</button>
            </div>
          </div>
          <button className="w-full mt-2 py-2 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-800 hover:border-gray-400 font-medium transition-colors">
            + Add New Role Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
