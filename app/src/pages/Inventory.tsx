import { PackageSearch, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockInventory = [
  { sku: 'PVC-6.5-10FT', name: '6.5" PVC Casing Pipe (10ft)', category: 'Pipes', stock: 120, minLevel: 50, price: '₹ 2,500', status: 'In Stock' },
  { sku: 'MS-7-20FT', name: '7" MS Casing Pipe (20ft)', category: 'Pipes', stock: 15, minLevel: 20, price: '₹ 8,000', status: 'Low Stock' },
  { sku: 'MTR-5HP-3PH', name: '5HP 3-Phase Submersible Motor', category: 'Motors', stock: 8, minLevel: 5, price: '₹ 22,000', status: 'In Stock' },
  { sku: 'BIT-6.5-DTH', name: '6.5" DTH Hammer Bit', category: 'Accessories', stock: 2, minLevel: 4, price: '₹ 15,000', status: 'Critical' },
  { sku: 'DSL-BBL', name: 'Diesel (Barrels)', category: 'Consumables', stock: 4, minLevel: 10, price: '₹ 12,000', status: 'Low Stock' },
];

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Inventory & Stock</h2>
        <button className="btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          Add Stock
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Items</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">145</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><PackageSearch size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Low Stock Alerts</p>
            <p className="text-3xl font-bold text-orange-600 mt-1">3</p>
          </div>
          <div className="p-3 bg-orange-50 text-orange-600 rounded-lg"><AlertCircle size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-medium">Stock Value</p>
            <p className="text-3xl font-bold text-[#15b515] mt-1">₹ 8.5L</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="flex items-center text-xs text-[#15b515] bg-[#19d219]/10 px-2 py-1 rounded"><ArrowUpRight size={12}/> In</span>
            <span className="flex items-center text-xs text-red-600 bg-red-50 px-2 py-1 rounded"><ArrowDownRight size={12}/> Out</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-semibold text-gray-700">Warehouse Stock</h3>
          <div className="flex gap-2">
            <select className="border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-[#19d219] text-gray-600">
              <option>All Categories</option>
              <option>Pipes</option>
              <option>Motors</option>
              <option>Accessories</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b">
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">Item Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Current Stock</th>
                <th className="p-4 font-medium">Unit Price</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockInventory.map((item) => (
                <tr key={item.sku} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-bold text-gray-500 text-sm">{item.sku}</td>
                  <td className="p-4 font-medium text-gray-800">{item.name}</td>
                  <td className="p-4 text-gray-600 text-sm">{item.category}</td>
                  <td className="p-4">
                    <span className={`font-bold ${item.stock <= item.minLevel ? 'text-red-600' : 'text-gray-800'}`}>
                      {item.stock}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">/ Min: {item.minLevel}</span>
                  </td>
                  <td className="p-4 text-gray-600 text-sm font-medium">{item.price}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      item.status === 'In Stock' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700 animate-pulse'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
