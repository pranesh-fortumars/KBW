import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import DashboardLayout from './layouts/DashboardLayout.tsx';
import DashboardHome from './pages/DashboardHome.tsx';
import CRM from './pages/CRM.tsx';
import Fleet from './pages/Fleet.tsx';
import Projects from './pages/Projects.tsx';
import Finance from './pages/Finance.tsx';
import Inventory from './pages/Inventory.tsx';
import HR from './pages/HR.tsx';
import Settings from './pages/Settings.tsx';

import PortalLayout from './layouts/PortalLayout.tsx';
import PortalDashboard from './pages/PortalDashboard.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Customer Portal Routes (Completely separate from Admin) */}
        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<PortalDashboard />} />
        </Route>
        
        {/* ERP Admin Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="crm" element={<CRM />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="projects" element={<Projects />} />
          <Route path="finance" element={<Finance />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="hr" element={<HR />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
