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
      <aside className="w-64 bg-brand-purple text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-black text-white tracking-widest uppercase">KBW ERP</h1>
          <p className="text-white/70 text-sm">Enterprise Dashboard</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg text-white font-bold shadow-sm">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/crm" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <Users size={20} /> CRM & Leads
          </Link>
          <Link to="/admin/projects" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <ClipboardList size={20} /> Projects
          </Link>
          <Link to="/admin/fleet" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <Truck size={20} /> Fleet Mgmt
          </Link>
          <Link to="/admin/inventory" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <PackageSearch size={20} /> Inventory
          </Link>
          <Link to="/admin/finance" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <IndianRupee size={20} /> Finance
          </Link>
          <Link to="/admin/media" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            Media
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-2 hover:bg-white/5 rounded-lg text-white/60 hover:text-white transition-colors">
            <Settings size={20} /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-gray-800 tracking-wide uppercase">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-600">Welcome, Super Admin</span>
            <div className="w-10 h-10 btn-gradient rounded-full flex items-center justify-center text-white font-bold shadow-md">
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
