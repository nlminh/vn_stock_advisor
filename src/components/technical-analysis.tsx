import { TechnicalData } from '@/types/stock';
import { formatNumber, formatCurrency, getTrendColor, getScoreColor } from '@/lib/utils';

interface TechnicalAnalysisProps {
  data: TechnicalData;
  reasoning: string;
  score: number;
}

export function TechnicalAnalysis({ data, reasoning, score }: TechnicalAnalysisProps) {
  const indicators = [
    { label: 'Giá hiện tại', value: data.currentPrice, format: 'currency' },
    { label: 'SMA 20', value: data.sma20, format: 'currency' },
    { label: 'SMA 50', value: data.sma50, format: 'currency' },
    { label: 'SMA 200', value: data.sma200, format: 'currency' },
    { label: 'EMA 12', value: data.ema12, format: 'currency' },
    { label: 'EMA 26', value: data.ema26, format: 'currency' },
    { label: 'RSI', value: data.rsi, format: 'number' },
    { label: 'MACD', value: data.macd, format: 'number' },
  ];

  const supportResistance = [
    { label: 'Vùng hỗ trợ', value: data.supportLevel, format: 'currency', color: 'text-green-600' },
    { label: 'Vùng kháng cự', value: data.resistanceLevel, format: 'currency', color: 'text-red-600' },
  ];

  const bollinger = [
    { label: 'Bollinger Upper', value: data.bollingerUpper, format: 'currency' },
    { label: 'Bollinger Middle', value: data.bollingerMiddle, format: 'currency' },
    { label: 'Bollinger Lower', value: data.bollingerLower, format: 'currency' },
  ];

  const getRSIColor = (rsi: number) => {
    if (rsi > 70) return 'text-red-600'; // Overbought
    if (rsi < 30) return 'text-green-600'; // Oversold
    return 'text-gray-900'; // Normal
  };

  const getMACDColor = (macd: number) => {
    return macd > 0 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Phân tích kỹ thuật</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Điểm:</span>
          <span className={`text-xl font-bold ${getScoreColor(score)}`}>
            {score}/10
          </span>
        </div>
      </div>

      {/* Current Price and Trend */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Giá hiện tại</label>
          <p className="text-2xl font-bold text-blue-600">
            {formatCurrency(data.currentPrice)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Xu hướng</label>
          <p className={`text-2xl font-bold capitalize ${getTrendColor(data.trend)}`}>
            {data.trend}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Khối lượng</label>
          <p className="text-2xl font-bold text-gray-900">
            {formatNumber(data.volume)}
          </p>
        </div>
      </div>

      {/* Technical Indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {indicators.map((indicator) => (
          <div key={indicator.label} className="bg-gray-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">{indicator.label}</label>
            <p className={`text-lg font-semibold ${
              indicator.label === 'RSI' ? getRSIColor(indicator.value) :
              indicator.label === 'MACD' ? getMACDColor(indicator.value) :
              'text-gray-900'
            }`}>
              {indicator.format === 'currency' ? formatCurrency(indicator.value) : formatNumber(indicator.value)}
            </p>
          </div>
        ))}
      </div>

      {/* Support and Resistance */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {supportResistance.map((level) => (
          <div key={level.label} className="bg-gray-50 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-500 mb-1">{level.label}</label>
            <p className={`text-xl font-bold ${level.color}`}>
              {formatCurrency(level.value)}
            </p>
          </div>
        ))}
      </div>

      {/* Bollinger Bands */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-4">Bollinger Bands</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {bollinger.map((band) => (
            <div key={band.label} className="bg-gray-50 rounded-lg p-4 text-center">
              <label className="block text-sm font-medium text-gray-500 mb-1">{band.label}</label>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(band.value)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Technical Data */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">MACD Signal</label>
          <p className={`text-lg font-semibold ${getMACDColor(data.macdSignal)}`}>
            {formatNumber(data.macdSignal)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">MACD Histogram</label>
          <p className={`text-lg font-semibold ${getMACDColor(data.macdHistogram)}`}>
            {formatNumber(data.macdHistogram)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">OBV</label>
          <p className={`text-lg font-semibold ${data.obv > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatNumber(data.obv)}
          </p>
        </div>
      </div>

      {/* Analysis Reasoning */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-green-800 mb-2">Nhận định phân tích kỹ thuật</h4>
        <p className="text-green-700 leading-relaxed">{reasoning}</p>
      </div>
    </div>
  );
} 