import { NewsArticle } from '@/types/stock';
import { getScoreColor, formatDate } from '@/lib/utils';

interface NewsAnalysisProps {
  articles: NewsArticle[];
  reasoning: string;
  score: number;
}

export function NewsAnalysis({ articles, reasoning, score }: NewsAnalysisProps) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Phân tích vĩ mô và tin tức</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Điểm:</span>
          <span className={`text-xl font-bold ${getScoreColor(score)}`}>
            {score}/10
          </span>
        </div>
      </div>

      {/* News Articles */}
      <div className="space-y-4 mb-6">
        <h4 className="text-lg font-semibold">Tin tức ảnh hưởng thị trường</h4>
        {articles.map((article, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h5 className="font-semibold text-gray-900 flex-1">{article.title}</h5>
              <span className="text-sm text-gray-500 ml-4">{formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-blue-600">{article.source}</span>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Xem chi tiết →
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed">{article.summary}</p>
          </div>
        ))}
      </div>

      {/* Market Impact Summary */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-800 mb-2">Nhận định phân tích vĩ mô</h4>
        <p className="text-purple-700 leading-relaxed">{reasoning}</p>
      </div>
    </div>
  );
} 