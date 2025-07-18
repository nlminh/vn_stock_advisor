import { StockAnalysis } from '@/types/stock';
import { CompanyOverview } from './company-overview';
import { FundamentalAnalysis } from './fundamental-analysis';
import { TechnicalAnalysis } from './technical-analysis';
import { NewsAnalysis } from './news-analysis';
import { InvestmentDecision } from './investment-decision';
import { formatDate } from '@/lib/utils';

interface AnalysisResultProps {
  analysis: StockAnalysis;
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center pb-6 border-b">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Báo cáo phân tích {analysis.company.symbol}
        </h2>
        <p className="text-gray-600">
          Ngày phân tích: {formatDate(analysis.company.analysisDate)}
        </p>
      </div>

      {/* Company Overview */}
      <CompanyOverview company={analysis.company} />

      {/* Investment Decision - Show prominently at top */}
      <InvestmentDecision decision={analysis.investmentDecision} />

      {/* Analysis Sections */}
      <div className="grid gap-6">
        <FundamentalAnalysis 
          data={analysis.fundamentalData}
          industryAverage={analysis.industryAverage}
          reasoning={analysis.investmentDecision.reasoning.fundamental}
          score={analysis.investmentDecision.scores.fundamentalScore}
        />
        
        <TechnicalAnalysis 
          data={analysis.technicalData}
          reasoning={analysis.investmentDecision.reasoning.technical}
          score={analysis.investmentDecision.scores.technicalScore}
        />
        
        <NewsAnalysis 
          articles={analysis.newsAnalysis}
          reasoning={analysis.investmentDecision.reasoning.macro}
          score={analysis.investmentDecision.scores.macroScore}
        />
      </div>

      {/* Footer */}
      <div className="text-center pt-6 border-t text-sm text-gray-500">
        <p>
          Báo cáo được tạo bởi VN Stock Advisor AI • {formatDate(analysis.generatedAt)}
        </p>
        <p className="mt-2">
          <strong>Lưu ý:</strong> Đây chỉ là thông tin tham khảo, không phải lời khuyên đầu tư. 
          Vui lòng tự nghiên cứu và cân nhắc kỹ trước khi đưa ra quyết định đầu tư.
        </p>
      </div>
    </div>
  );
} 