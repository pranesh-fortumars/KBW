import { 
  Users, 
  TrendingUp, 
  Truck, 
  AlertCircle 
} from 'lucide-react';

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Leads" value="142" icon={<Users className="text-blue-500" />} trend="+12%" />
        <KpiCard title="Active Projects" value="8" icon={<TrendingUp className="text-emerald-500" />} trend="+2" />
        <KpiCard title="Active Rigs" value="3/4" icon={<Truck className="text-purple-500" />} trend="75% Utilized" />
        <KpiCard title="Pending Maintenance" value="2" icon={<AlertCircle className="text-orange-500" />} trend="Due this week" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Leads</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold text-gray-800">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Tiruchengode • 6½" Borewell</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">New</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold text-gray-800">Meera Devi</p>
                <p className="text-sm text-gray-500">Amravati • 8" Borewell</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Follow-up</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Live Project Status</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Site A - Salem Textile Park</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <span className="text-sm text-emerald-600 font-bold">Drilling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        <p className="text-sm font-medium text-emerald-600 mt-2">{trend}</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        {icon}
      </div>
    </div>
  );
}
