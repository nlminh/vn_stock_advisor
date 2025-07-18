'use client';

import { useState } from 'react';
import { SearchForm } from '@/components/search-form';
import { AnalysisResult } from '@/components/analysis-result';
import { LoadingSpinner } from '@/components/loading-spinner';
import { Header } from '@/components/header';
import { StockAnalysis, AnalysisRequest } from '@/types/stock';
import { StockAnalysisService } from '@/lib/stock-service';

export default function Home() {
  const [analysis, setAnalysis] = useState<StockAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (request: AnalysisRequest) => {
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const service = StockAnalysisService.getInstance();
      const result = await service.analyzeStock(request);
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi khi phân tích cổ phiếu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Công cụ hỗ trợ
              <span className="block text-blue-600"> phân tích cổ phiếu</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nhận được phân tích toàn diện về cổ phiếu từ góc độ vĩ mô, cơ bản và kỹ thuật 
              để đưa ra quyết định đầu tư thông minh
            </p>
          </div>

          {/* Search Form */}
          <div className="mb-8">
            <SearchForm onSubmit={handleAnalyze} loading={loading} />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="mb-8">
              <LoadingSpinner />
            </div>
          )}

          {/* Analysis Results */}
          {analysis && !loading && (
            <div className="animate-fade-in">
              <AnalysisResult analysis={analysis} />
            </div>
          )}

          {/* Features Section */}
          {!analysis && !loading && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Tính năng nổi bật
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phân tích cơ bản</h3>
                  <p className="text-gray-600">
                    Đánh giá sức khỏe tài chính, định giá và so sánh với trung bình ngành
                  </p>
                </div>
                
                <div className="card p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phân tích kỹ thuật</h3>
                  <p className="text-gray-600">
                    Phân tích xu hướng, động lượng và tín hiệu giao dịch từ biểu đồ giá
                  </p>
                </div>
                
                <div className="card p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phân tích vĩ mô</h3>
                  <p className="text-gray-600">
                    Đánh giá tác động của môi trường kinh tế và tin tức thị trường
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 