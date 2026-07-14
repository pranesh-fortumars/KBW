import { ClipboardList, MapPin, HardHat, Calendar } from 'lucide-react';

const mockProjects = [
  { id: 'PRJ-001', customer: 'Rajesh Kumar', location: 'Tiruchengode', rig: 'R01', status: 'Drilling Started', depth: '250 ft', date: '2026-07-11', progress: 65 },
  { id: 'PRJ-002', customer: 'Meera Devi', location: 'Amravati', rig: 'R02', status: 'Site Inspection', depth: 'Pending', date: '2026-07-12', progress: 10 },
  { id: 'PRJ-003', customer: 'Salem Textile Park', location: 'Salem', rig: 'R03', status: 'Water Found', depth: '800 ft', date: '2026-07-09', progress: 90 },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Live Project Tracking</h2>
        <button className="btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
              <div className="h-full bg-[#19d219]" style={{ width: `${project.progress}%` }}></div>
            </div>
            
            <div className="flex justify-between items-start mt-2">
              <div>
                <span className="text-xs font-bold text-[#15b515] bg-[#19d219]/10 px-2 py-1 rounded">{project.id}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-2">{project.customer}</h3>
              </div>
              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-bold">{project.status}</span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" /> {project.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HardHat size={16} className="text-gray-400" /> Rig Assigned: {project.rig}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ClipboardList size={16} className="text-gray-400" /> Current Depth: {project.depth}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} className="text-gray-400" /> Started: {project.date}
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200">
                View Logs
              </button>
              <button className="flex-1 bg-[#19d219]/10 hover:bg-emerald-100 text-emerald-700 py-2 rounded-lg text-sm font-medium transition-colors border border-emerald-200">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
