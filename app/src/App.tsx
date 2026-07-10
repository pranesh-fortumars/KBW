import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import DashboardLayout from './layouts/DashboardLayout.tsx';
import DashboardHome from './pages/DashboardHome.tsx';
import CRM from './pages/CRM.tsx';
import Fleet from './pages/Fleet.tsx';
import Projects from './pages/Projects.tsx';
import Finance from './pages/Finance.tsx';
import Inventory from './pages/Inventory.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* ERP Admin Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="crm" element={<CRM />} />
          <Route path="fleet" element={<Fleet />} />
          <Route path="projects" element={<Projects />} />
          <Route path="finance" element={<Finance />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
