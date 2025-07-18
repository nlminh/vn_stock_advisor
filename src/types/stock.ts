export interface CompanyProfile {
  symbol: string;
  fullName: string;
  industry: string;
  analysisDate: string;
}

export interface FundamentalData {
  peRatio: number | null;
  pbRatio: number | null;
  roe: number | null;
  roa: number | null;
  eps: number | null;
  deRatio: number | null;
  profitMargin: number | null;
  evEbitda: number | null;
  quarterlyTrends: QuarterlyData[];
}

export interface QuarterlyData {
  quarter: string;
  revenue: number;
  grossProfit: number;
  postTaxProfit: number;
}

export interface TechnicalData {
  currentPrice: number;
  sma20: number;
  sma50: number;
  sma200: number;
  ema12: number;
  ema26: number;
  rsi: number;
  macd: number;
  macdSignal: number;
  macdHistogram: number;
  volume: number;
  obv: number;
  bollingerUpper: number;
  bollingerMiddle: number;
  bollingerLower: number;
  supportLevel: number;
  resistanceLevel: number;
  trend: 'tăng' | 'giảm' | 'đi ngang';
}

export interface NewsArticle {
  title: string;
  publishDate: string;
  source: string;
  url: string;
  summary: string;
}

export interface IndustryAverage {
  PE: number;
  PB: number;
}

export interface AnalysisScores {
  macroScore: number;
  fundamentalScore: number;
  technicalScore: number;
  averageScore: number;
}

export interface Investment_Decision {
  decision: 'MUA' | 'GIỮ' | 'BÁN';
  buyPrice?: number;
  sellPrice?: number;
  reasoning: {
    macro: string;
    fundamental: string;
    technical: string;
  };
  scores: AnalysisScores;
}

export interface StockAnalysis {
  company: CompanyProfile;
  fundamentalData: FundamentalData;
  technicalData: TechnicalData;
  newsAnalysis: NewsArticle[];
  industryAverage: IndustryAverage;
  investmentDecision: Investment_Decision;
  generatedAt: string;
}

export interface AnalysisRequest {
  symbol: string;
  currentDate: string;
} 