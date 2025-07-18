import { FundamentalData, IndustryAverage } from '@/types/stock';
import { formatNumber, formatPercent, formatCurrency, getScoreColor } from '@/lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FundamentalAnalysisProps {
  data: FundamentalData;
  industryAverage: IndustryAverage;
  reasoning: string;
  score: number;
}

export function FundamentalAnalysis({ data, industryAverage, reasoning, score }: FundamentalAnalysisProps) {
  const chartData = data.quarterlyTrends.map(trend => ({
    quarter: trend.quarter,
    'Doanh thu': trend.revenue / 1000000, // Convert to millions
    'Lợi nhuận gộp': trend.grossProfit / 1000000,
    'Lợi nhuận sau thuế': trend.postTaxProfit / 1000000,
  }));

  const ratios = [
    { label: 'P/E', value: data.peRatio, industryAvg: industryAverage.PE, format: 'number' },
    { label: 'P/B', value: data.pbRatio, industryAvg: industryAverage.PB, format: 'number' },
    { label: 'ROE', value: data.roe, format: 'percent' },
    { label: 'ROA', value: data.roa, format: 'percent' },
    { label: 'D/E', value: data.deRatio, format: 'number' },
    { label: 'Biên LN', value: data.profitMargin, format: 'percent' },
    { label: 'EV/EBITDA', value: data.evEbitda, format: 'number' },
    { label: 'EPS', value: data.eps, format: 'currency' },
  ];

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Phân tích cơ bản</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Điểm:</span>
          <span className={`text-xl font-bold ${getScoreColor(score)}`}>
            {score}/10
          </span>
        </div>
      </div>

      {/* Financial Ratios Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {ratios.map((ratio) => (
          <div key={ratio.label} className="bg-gray-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">{ratio.label}</label>
            <p className="text-lg font-semibold text-gray-900">
              {ratio.format === 'percent' && formatPercent(ratio.value)}
              {ratio.format === 'number' && formatNumber(ratio.value)}
              {ratio.format === 'currency' && formatCurrency(ratio.value)}
            </p>
            {ratio.industryAvg && (
              <p className="text-xs text-gray-500 mt-1">
                Ngành: {formatNumber(ratio.industryAvg)}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Quarterly Trends Chart */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-4">Xu hướng 4 quý gần nhất (tỷ VND)</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  `${value.toFixed(0)} tỷ VND`, 
                  name
                ]}
              />
              <Bar dataKey="Doanh thu" fill="#3B82F6" />
              <Bar dataKey="Lợi nhuận gộp" fill="#10B981" />
              <Bar dataKey="Lợi nhuận sau thuế" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Analysis Reasoning */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Nhận định phân tích cơ bản</h4>
        <p className="text-blue-700 leading-relaxed">{reasoning}</p>
      </div>
    </div>
  );
} 