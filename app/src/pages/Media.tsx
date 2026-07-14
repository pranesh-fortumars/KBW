import { Image as ImageIcon, Video, FileBadge, UploadCloud } from 'lucide-react';

const mockMedia = [
  { id: 'M-001', type: 'image', title: 'Salem Site - Water Strike', url: 'https://images.unsplash.com/photo-1541888087545-0d04b90da026?auto=format&fit=crop&q=80&w=400', date: '2026-07-09' },
  { id: 'M-002', type: 'image', title: 'Rig R01 at Tiruchengode', url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400', date: '2026-07-10' },
  { id: 'M-003', type: 'video', title: 'Drone Survey - Amravati', url: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=400', date: '2026-07-08' },
  { id: 'M-004', type: 'certificate', title: 'ISO 9001:2015 Certification', url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400', date: '2025-01-15' },
];

export default function Media() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Media & Document Management</h2>
        <button className="flex items-center gap-2 btn-gradient px-4 py-2 rounded-lg font-medium transition-colors">
          <UploadCloud size={18} /> Upload Files
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-colors">
          <div>
            <p className="text-sm text-gray-500 font-medium">Site Photos</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">124</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><ImageIcon size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-colors">
          <div>
            <p className="text-sm text-gray-500 font-medium">Drone & Video</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">18</p>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg"><Video size={24} /></div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-between cursor-pointer hover:border-emerald-300 transition-colors">
          <div>
            <p className="text-sm text-gray-500 font-medium">Certificates</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg"><FileBadge size={24} /></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-gray-700">Recent Uploads</h3>
          <div className="flex gap-2">
            <select className="border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-[#19d219] text-gray-600">
              <option>All Types</option>
              <option>Images</option>
              <option>Videos</option>
              <option>Certificates</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockMedia.map(media => (
            <div key={media.id} className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
                <img src={media.url} alt={media.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Video size={20} className="text-indigo-600 ml-1" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm font-bold text-gray-800 truncate" title={media.title}>{media.title}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-gray-500">{media.date}</p>
                  <span className="text-[10px] uppercase font-bold text-[#15b515] bg-[#19d219]/10 px-2 py-0.5 rounded">{media.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
