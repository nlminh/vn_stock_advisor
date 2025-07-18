import { Investment_Decision } from '@/types/stock';
import { getDecisionColor, getScoreColor, formatCurrency } from '@/lib/utils';

interface InvestmentDecisionProps {
  decision: Investment_Decision;
}

export function InvestmentDecision({ decision }: InvestmentDecisionProps) {
  return (
    <div className="card p-6 border-2">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-4">Khuyến nghị đầu tư</h3>
        <div className={`inline-flex items-center px-6 py-3 rounded-full border-2 text-2xl font-bold ${getDecisionColor(decision.decision)}`}>
          {decision.decision}
        </div>
      </div>

      {/* Scores Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Phân tích vĩ mô</label>
          <p className={`text-2xl font-bold ${getScoreColor(decision.scores.macroScore)}`}>
            {decision.scores.macroScore}/10
          </p>
        </div>
        <div className="text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Phân tích cơ bản</label>
          <p className={`text-2xl font-bold ${getScoreColor(decision.scores.fundamentalScore)}`}>
            {decision.scores.fundamentalScore}/10
          </p>
        </div>
        <div className="text-center">
          <label className="block text-sm font-medium text-gray-500 mb-1">Phân tích kỹ thuật</label>
          <p className={`text-2xl font-bold ${getScoreColor(decision.scores.technicalScore)}`}>
            {decision.scores.technicalScore}/10
          </p>
        </div>
        <div className="text-center border-l-2 border-gray-200">
          <label className="block text-sm font-medium text-gray-500 mb-1">Điểm tổng hợp</label>
          <p className={`text-3xl font-bold ${getScoreColor(decision.scores.averageScore)}`}>
            {decision.scores.averageScore}/10
          </p>
        </div>
      </div>

      {/* Price Targets for HOLD decision */}
      {decision.decision === 'GIỮ' && decision.buyPrice && decision.sellPrice && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Mức giá mục tiêu</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center">
              <label className="block text-sm font-medium text-yellow-700 mb-1">Mức giá mua</label>
              <p className="text-xl font-bold text-green-600">
                {formatCurrency(decision.buyPrice)}
              </p>
            </div>
            <div className="text-center">
              <label className="block text-sm font-medium text-yellow-700 mb-1">Mức giá bán</label>
              <p className="text-xl font-bold text-red-600">
                {formatCurrency(decision.sellPrice)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Decision Criteria */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-3">Tiêu chí đánh giá</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>MUA:</strong> Điểm trung bình ≥ 7.5/10</p>
          <p><strong>GIỮ:</strong> Điểm trung bình từ 4.0 - 7.4/10</p>
          <p><strong>BÁN:</strong> Điểm trung bình &lt; 4.0/10</p>
        </div>
      </div>
    </div>
  );
} 