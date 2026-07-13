import { Outlet, Link } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';

export default function PortalLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Portal Header */}
      <header className="text-white shadow-md" style={{ background: 'linear-gradient(90deg, var(--brand-pink), var(--accent))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black tracking-widest uppercase">Karpagam Borewells</h1>
            <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold border border-white/30">
              Customer Portal
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/portal" className="text-sm font-bold hover:text-white/80 transition-colors">My Project</Link>
            <div className="flex items-center gap-3 pl-6 border-l border-white/30">
              <div className="flex flex-col text-right">
                <span className="text-sm font-bold">Rajesh Kumar</span>
                <span className="text-xs text-white/80">ID: CUST-8821</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50 shadow-sm">
                <User size={20} />
              </div>
              <button className="ml-2 text-white/80 hover:text-white transition-colors" title="Log Out">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Portal Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      
      {/* Portal Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; 2026 Karpagam Borewells. Need help? Call Support at +91 9876543210
        </div>
      </footer>
    </div>
  );
}
