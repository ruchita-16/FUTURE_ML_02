import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/Dashboard';
import { ModelPerformancePage } from './pages/ModelPerformancePage';
import { TicketHistoryPage } from './pages/TicketHistoryPage';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { Outlet, useLocation } from 'react-router';

function Layout() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/model-performance':
        return 'Model Performance';
      case '/ticket-history':
        return 'Ticket History';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar title={getPageTitle()} />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'model-performance', Component: ModelPerformancePage },
      { path: 'ticket-history', Component: TicketHistoryPage },
    ],
  },
]);
