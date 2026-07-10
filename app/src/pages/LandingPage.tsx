import { Link } from 'react-router-dom';
import { LayoutDashboard } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Floating button to access the new ERP Dashboard */}
      <div className="absolute top-4 left-4 z-50">
        <Link 
          to="/admin" 
          className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-emerald-400 px-4 py-2 rounded-full font-bold shadow-lg hover:bg-slate-900 transition-colors border border-emerald-500/30"
        >
          <LayoutDashboard size={20} />
          ERP Access
        </Link>
      </div>
      
      {/* 
        To guarantee 100% preservation of existing animations, scripts, and 3D transforms, 
        we serve the original static site in a full-screen iframe. 
      */}
      <iframe 
        src="/legacy.html" 
        className="w-full h-full border-none"
        title="Karpagam Borewells Home"
      />
    </div>
  );
}
