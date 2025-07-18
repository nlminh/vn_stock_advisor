'use client';

import { useState } from 'react';
import { AnalysisRequest } from '@/types/stock';
import { validateStockSymbol } from '@/lib/utils';

interface SearchFormProps {
  onSubmit: (request: AnalysisRequest) => void;
  loading: boolean;
}

export function SearchForm({ onSubmit, loading }: SearchFormProps) {
  const [symbol, setSymbol] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedSymbol = symbol.trim().toUpperCase();

    if (!trimmedSymbol) {
      setError('Vui lòng nhập mã cổ phiếu');
      return;
    }

    if (!validateStockSymbol(trimmedSymbol)) {
      setError('Mã cổ phiếu không hợp lệ. Vui lòng nhập 3-4 ký tự chữ cái.');
      return;
    }

    onSubmit({
      symbol: trimmedSymbol,
      currentDate: new Date().toISOString().split('T')[0]
    });
  };

  const popularStocks = ['FPT', 'HPG', 'VIC', 'VCB', 'TCB', 'MSN', 'VHM', 'BID'];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 mb-2">
              Mã cổ phiếu
            </label>
            <input
              type="text"
              id="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              placeholder="Nhập mã cổ phiếu (VD: FPT, HPG, VIC...)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              disabled={loading}
              maxLength={4}
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          
          <div className="sm:pt-7">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang phân tích...
                </div>
              ) : (
                'Phân tích'
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Popular Stocks */}
      <div>
        <p className="text-sm text-gray-600 mb-3">Cổ phiếu phổ biến:</p>
        <div className="flex flex-wrap gap-2">
          {popularStocks.map((stock) => (
            <button
              key={stock}
              onClick={() => setSymbol(stock)}
              disabled={loading}
              className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {stock}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 