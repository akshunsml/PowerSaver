import { useState } from 'react';
import SavingsSummary from '../components/dashboard/SavingsSummary';
import SavingsChart from '../components/dashboard/SavingsChart';
import { Settings, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Dashboard() {
  const [mockData] = useState({
    totalSavings: 1234.56,
    monthlyAverage: 123.45,
    referralBonus: 50.00,
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      savings: [50, 75, 100, 125, 150, 175],
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">PowerSaver</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <SavingsSummary
            totalSavings={mockData.totalSavings}
            monthlyAverage={mockData.monthlyAverage}
            referralBonus={mockData.referralBonus}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SavingsChart data={mockData.chartData} />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <Button className="w-full">Compare Tariffs</Button>
                <Button variant="secondary" className="w-full">Invite Friends</Button>
                <Button variant="outline" className="w-full">Submit Market Challenge</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}