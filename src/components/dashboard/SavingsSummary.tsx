import { Lightbulb, TrendingUp, Share2 } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

interface SavingsSummaryProps {
  totalSavings: number;
  monthlyAverage: number;
  referralBonus: number;
}

export default function SavingsSummary({
  totalSavings,
  monthlyAverage,
  referralBonus,
}: SavingsSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Lightbulb className="h-8 w-8 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Total Savings</p>
            <p className="text-2xl font-bold">{formatCurrency(totalSavings)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Monthly Average</p>
            <p className="text-2xl font-bold">{formatCurrency(monthlyAverage)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <Share2 className="h-8 w-8 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Referral Bonus</p>
            <p className="text-2xl font-bold">{formatCurrency(referralBonus)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}