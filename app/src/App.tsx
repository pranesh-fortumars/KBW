import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import DashboardLayout from './layouts/DashboardLayout.tsx';
import DashboardHome from './pages/DashboardHome.tsx';
import CRM from './pages/CRM.tsx';
import Fleet from './pages/Fleet.tsx';

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
          {/* We will add Projects, Finance, Inventory here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
