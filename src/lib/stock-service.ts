import { StockAnalysis, AnalysisRequest } from '@/types/stock';
import { mockStockAnalysisFPT, mockStockAnalysisHPG } from '@/data/mock-data';
import { getIndustryAverage } from '@/data/industry-averages';

// Mock delay to simulate API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class StockAnalysisService {
  private static instance: StockAnalysisService;

  static getInstance(): StockAnalysisService {
    if (!StockAnalysisService.instance) {
      StockAnalysisService.instance = new StockAnalysisService();
    }
    return StockAnalysisService.instance;
  }

  async analyzeStock(request: AnalysisRequest): Promise<StockAnalysis> {
    // Simulate API delay
    await delay(2000 + Math.random() * 3000);

    const symbol = request.symbol.toUpperCase();

    // Return mock data based on symbol
    switch (symbol) {
      case 'FPT':
        return { ...mockStockAnalysisFPT, generatedAt: new Date().toISOString() };
      case 'HPG':
        return { ...mockStockAnalysisHPG, generatedAt: new Date().toISOString() };
      default:
        return this.generateMockAnalysis(symbol, request.currentDate);
    }
  }

  private generateMockAnalysis(symbol: string, currentDate: string): StockAnalysis {
    // Generate random but realistic data for unknown symbols
    const industries = [
      "Tài chính ngân hàng",
      "Bất động sản", 
      "Kim loại và khai khoáng",
      "Thực phẩm và thuốc lá",
      "Dịch vụ viễn thông"
    ];
    
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const industryAvg = getIndustryAverage(industry) || { PE: 15, PB: 2.5 };
    
    // Generate random but realistic financial ratios
    const peRatio = industryAvg.PE * (0.7 + Math.random() * 0.6); // ±30% from industry average
    const pbRatio = industryAvg.PB * (0.8 + Math.random() * 0.4); // ±20% from industry average
    const roe = 10 + Math.random() * 20; // 10-30%
    const roa = roe * (0.5 + Math.random() * 0.3); // ROA typically lower than ROE
    
    const currentPrice = 20000 + Math.random() * 80000; // 20K-100K VND
    
    // Generate technical indicators
    const rsi = 20 + Math.random() * 60; // 20-80 range
    const trend = rsi > 60 ? 'tăng' : rsi < 40 ? 'giảm' : 'đi ngang';
    
    // Calculate scores based on generated data
    const fundamentalScore = this.calculateFundamentalScore(peRatio, pbRatio, roe, industryAvg);
    const technicalScore = this.calculateTechnicalScore(rsi, trend);
    const macroScore = 6 + Math.random() * 3; // Random macro score 6-9
    
    const averageScore = (fundamentalScore + technicalScore + macroScore) / 3;
    
    let decision: 'MUA' | 'GIỮ' | 'BÁN' = 'GIỮ';
    if (averageScore >= 7.5) decision = 'MUA';
    else if (averageScore < 4.0) decision = 'BÁN';

    return {
      company: {
        symbol,
        fullName: `Công ty Cổ phần ${symbol}`,
        industry,
        analysisDate: currentDate
      },
      fundamentalData: {
        peRatio: Math.round(peRatio * 100) / 100,
        pbRatio: Math.round(pbRatio * 100) / 100,
        roe: Math.round(roe * 100) / 100,
        roa: Math.round(roa * 100) / 100,
        eps: Math.round(currentPrice / peRatio * 1000),
        deRatio: 0.3 + Math.random() * 0.4,
        profitMargin: 10 + Math.random() * 25,
        evEbitda: 8 + Math.random() * 12,
        quarterlyTrends: this.generateQuarterlyTrends()
      },
      technicalData: {
        currentPrice: Math.round(currentPrice),
        sma20: currentPrice * (0.95 + Math.random() * 0.1),
        sma50: currentPrice * (0.90 + Math.random() * 0.2),
        sma200: currentPrice * (0.85 + Math.random() * 0.3),
        ema12: currentPrice * (0.98 + Math.random() * 0.04),
        ema26: currentPrice * (0.96 + Math.random() * 0.08),
        rsi: Math.round(rsi * 100) / 100,
        macd: -1000 + Math.random() * 2000,
        macdSignal: -800 + Math.random() * 1600,
        macdHistogram: -200 + Math.random() * 400,
        volume: Math.round(1000000 + Math.random() * 5000000),
        obv: -10000000 + Math.random() * 20000000,
        bollingerUpper: currentPrice * 1.1,
        bollingerMiddle: currentPrice,
        bollingerLower: currentPrice * 0.9,
        supportLevel: currentPrice * (0.85 + Math.random() * 0.1),
        resistanceLevel: currentPrice * (1.1 + Math.random() * 0.1),
        trend
      },
      newsAnalysis: [
        {
          title: `Tin tức tích cực về ngành ${industry}`,
          publishDate: currentDate,
          source: "VnEconomy",
          url: "https://example.com/news",
          summary: `Các diễn biến tích cực trong ngành ${industry} được dự báo sẽ hỗ trợ tăng trưởng của ${symbol}.`
        }
      ],
      industryAverage: industryAvg,
      investmentDecision: {
        decision,
        ...(decision === 'GIỮ' && {
          buyPrice: currentPrice * 0.9,
          sellPrice: currentPrice * 1.1
        }),
        reasoning: {
          macro: "Môi trường vĩ mô tương đối ổn định với các chính sách hỗ trợ từ chính phủ.",
          fundamental: `Công ty có các chỉ số tài chính ${fundamentalScore >= 6 ? 'tốt' : 'cần cải thiện'} so với trung bình ngành.`,
          technical: `Phân tích kỹ thuật cho thấy xu hướng ${trend} với RSI ở mức ${rsi.toFixed(1)}.`
        },
        scores: {
          macroScore: Math.round(macroScore * 10) / 10,
          fundamentalScore: Math.round(fundamentalScore * 10) / 10,
          technicalScore: Math.round(technicalScore * 10) / 10,
          averageScore: Math.round(averageScore * 10) / 10
        }
      },
      generatedAt: new Date().toISOString()
    };
  }

  private calculateFundamentalScore(peRatio: number, pbRatio: number, roe: number, industryAvg: { PE: number, PB: number }): number {
    let score = 5; // Base score
    
    // P/E comparison
    if (peRatio < industryAvg.PE * 0.8) score += 1.5;
    else if (peRatio < industryAvg.PE) score += 0.5;
    else if (peRatio > industryAvg.PE * 1.3) score -= 1;
    
    // P/B comparison
    if (pbRatio < industryAvg.PB * 0.8) score += 1;
    else if (pbRatio > industryAvg.PB * 1.3) score -= 0.5;
    
    // ROE evaluation
    if (roe > 20) score += 1.5;
    else if (roe > 15) score += 1;
    else if (roe < 10) score -= 1;
    
    return Math.max(0, Math.min(10, score));
  }

  private calculateTechnicalScore(rsi: number, trend: string): number {
    let score = 5; // Base score
    
    // RSI evaluation
    if (rsi >= 40 && rsi <= 70) score += 1.5; // Good range
    else if (rsi > 70) score -= 1; // Overbought
    else if (rsi < 30) score -= 0.5; // Oversold but could be buying opportunity
    
    // Trend evaluation
    if (trend === 'tăng') score += 2;
    else if (trend === 'giảm') score -= 1.5;
    
    return Math.max(0, Math.min(10, score));
  }

  private generateQuarterlyTrends() {
    const quarters = ['Q4 2024', 'Q3 2024', 'Q2 2024', 'Q1 2024'];
    const baseRevenue = 5000000 + Math.random() * 20000000;
    
    return quarters.map((quarter, index) => {
      const revenue = baseRevenue * (0.9 + index * 0.05 + Math.random() * 0.1);
      const grossProfit = revenue * (0.25 + Math.random() * 0.15);
      const postTaxProfit = grossProfit * (0.6 + Math.random() * 0.3);
      
      return {
        quarter,
        revenue: Math.round(revenue),
        grossProfit: Math.round(grossProfit),
        postTaxProfit: Math.round(postTaxProfit)
      };
    });
  }
} 