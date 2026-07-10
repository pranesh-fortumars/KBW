import { Outlet, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Truck, 
  ClipboardList, 
  PackageSearch,
  IndianRupee,
  Settings
} from 'lucide-react';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-emerald-400">KBW ERP</h1>
          <p className="text-slate-400 text-sm">Enterprise Dashboard</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg text-emerald-400">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/crm" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors">
            <Users size={20} /> CRM & Leads
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors">
            <ClipboardList size={20} /> Projects
          </Link>
          <Link to="/admin/fleet" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors">
            <Truck size={20} /> Fleet Mgmt
          </Link>
          <Link to="/admin/inventory" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors">
            <PackageSearch size={20} /> Inventory
          </Link>
          <Link to="/admin/finance" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors">
            <IndianRupee size={20} /> Finance
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Super Admin</span>
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              SA
            </div>
          </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
