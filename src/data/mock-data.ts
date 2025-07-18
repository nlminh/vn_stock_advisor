import { StockAnalysis, NewsArticle } from '@/types/stock';

export const mockNewsArticles: NewsArticle[] = [
  {
    title: "Ngân hàng Nhà nước điều chỉnh chính sách tiền tệ hỗ trợ tăng trưởng kinh tế",
    publishDate: "2025-01-15",
    source: "VnEconomy",
    url: "https://example.com/news/1",
    summary: "NHNN công bố gói chính sách tiền tệ mới nhằm hỗ trợ doanh nghiệp và thúc đẩy tăng trưởng kinh tế trong bối cảnh phục hồi sau đại dịch. Điều này tạo ra môi trường thuận lợi cho thị trường chứng khoán."
  },
  {
    title: "Thị trường chứng khoán Việt Nam kỳ vọng nâng hạng lên thị trường mới nổi",
    publishDate: "2025-01-10",
    source: "CafeF",
    url: "https://example.com/news/2",
    summary: "FTSE Russell và MSCI đang xem xét nâng hạng thị trường chứng khoán Việt Nam từ cận biên lên mới nổi, thu hút dòng vốn ngoại và tăng thanh khoản thị trường."
  },
  {
    title: "GDP Việt Nam quý 4/2024 tăng trưởng mạnh mẽ vượt kỳ vọng",
    publishDate: "2025-01-08",
    source: "Đầu tư",
    url: "https://example.com/news/3",
    summary: "Tốc độ tăng trưởng GDP quý 4/2024 đạt 7.2%, vượt xa dự báo 6.5%, tạo nền tảng vững chắc cho triển vọng kinh tế 2025 và hỗ trợ tích cực cho thị trường chứng khoán."
  }
];

export const mockStockAnalysisFPT: StockAnalysis = {
  company: {
    symbol: "FPT",
    fullName: "Công ty Cổ phần FPT",
    industry: "Phần mềm và dịch vụ công nghệ thông tin",
    analysisDate: "2025-01-15"
  },
  fundamentalData: {
    peRatio: 20.8,
    pbRatio: 5.3,
    roe: 28.0,
    roa: 15.2,
    eps: 5557,
    deRatio: 0.5,
    profitMargin: 39.2,
    evEbitda: 14.3,
    quarterlyTrends: [
      {
        quarter: "Q4 2024",
        revenue: 9850000,
        grossProfit: 3860000,
        postTaxProfit: 1940000
      },
      {
        quarter: "Q3 2024",
        revenue: 9200000,
        grossProfit: 3600000,
        postTaxProfit: 1800000
      },
      {
        quarter: "Q2 2024",
        revenue: 8750000,
        grossProfit: 3430000,
        postTaxProfit: 1715000
      },
      {
        quarter: "Q1 2024",
        revenue: 8300000,
        grossProfit: 3250000,
        postTaxProfit: 1625000
      }
    ]
  },
  technicalData: {
    currentPrice: 115700,
    sma20: 118500,
    sma50: 125000,
    sma200: 133071,
    ema12: 116800,
    ema26: 122400,
    rsi: 39.17,
    macd: -2150,
    macdSignal: -1800,
    macdHistogram: -350,
    volume: 2450000,
    obv: -15680000,
    bollingerUpper: 130000,
    bollingerMiddle: 120000,
    bollingerLower: 110000,
    supportLevel: 105450,
    resistanceLevel: 120000,
    trend: 'giảm'
  },
  newsAnalysis: mockNewsArticles,
  industryAverage: {
    PE: 20.60,
    PB: 5.16
  },
  investmentDecision: {
    decision: 'GIỮ',
    buyPrice: 105450,
    sellPrice: 120000,
    reasoning: {
      macro: "Môi trường vĩ mô của Việt Nam đang cho thấy những tín hiệu tích cực mạnh mẽ, đặc biệt trong nửa cuối năm 2025. Các yếu tố hỗ trợ bao gồm tăng trưởng kinh tế bền vững, chính sách hỗ trợ từ chính phủ, và kỳ vọng nâng hạng thị trường chứng khoán từ cận biên lên mới nổi vào năm 2025.",
      fundamental: "FPT thể hiện sức khỏe tài chính cơ bản vững chắc và hiệu quả hoạt động tốt. Với ROE đạt 28%, công ty cho thấy khả năng sinh lời vượt trội từ vốn chủ sở hữu. Biên lợi nhuận 39.2% là minh chứng cho khả năng quản lý chi phí hiệu quả và tạo ra lợi nhuận cao.",
      technical: "Phân tích kỹ thuật cho thấy FPT đang ở trong một giai đoạn khá thận trọng. Xu hướng dài hạn của cổ phiếu là giảm, với giá hiện tại nằm dưới đường SMA 200. MACD đang cho tín hiệu tiêu cực và RSI ở mức 39.17 cho thấy thiếu lực mua."
    },
    scores: {
      macroScore: 7.5,
      fundamentalScore: 8.0,
      technicalScore: 3.0,
      averageScore: 6.17
    }
  },
  generatedAt: new Date().toISOString()
};

export const mockStockAnalysisHPG: StockAnalysis = {
  company: {
    symbol: "HPG",
    fullName: "Công ty Cổ phần Tập đoàn Hòa Phát",
    industry: "Kim loại và khai khoáng",
    analysisDate: "2025-01-15"
  },
  fundamentalData: {
    peRatio: 12.5,
    pbRatio: 1.8,
    roe: 18.5,
    roa: 12.3,
    eps: 2840,
    deRatio: 0.4,
    profitMargin: 15.8,
    evEbitda: 8.2,
    quarterlyTrends: [
      {
        quarter: "Q4 2024",
        revenue: 45200000,
        grossProfit: 7140000,
        postTaxProfit: 4850000
      },
      {
        quarter: "Q3 2024",
        revenue: 42800000,
        grossProfit: 6800000,
        postTaxProfit: 4600000
      },
      {
        quarter: "Q2 2024",
        revenue: 41500000,
        grossProfit: 6560000,
        postTaxProfit: 4420000
      },
      {
        quarter: "Q1 2024",
        revenue: 39800000,
        grossProfit: 6300000,
        postTaxProfit: 4180000
      }
    ]
  },
  technicalData: {
    currentPrice: 28500,
    sma20: 29200,
    sma50: 27800,
    sma200: 26500,
    ema12: 28800,
    ema26: 28100,
    rsi: 65.4,
    macd: 450,
    macdSignal: 380,
    macdHistogram: 70,
    volume: 8750000,
    obv: 25480000,
    bollingerUpper: 31000,
    bollingerMiddle: 28500,
    bollingerLower: 26000,
    supportLevel: 26500,
    resistanceLevel: 31000,
    trend: 'tăng'
  },
  newsAnalysis: mockNewsArticles,
  industryAverage: {
    PE: 15.37,
    PB: 2.82
  },
  investmentDecision: {
    decision: 'MUA',
    reasoning: {
      macro: "Môi trường vĩ mô thuận lợi với chính sách hỗ trợ ngành thép và hạ tầng. Nhu cầu thép trong nước và xuất khẩu dự kiến tăng mạnh trong năm 2025.",
      fundamental: "HPG có định giá hấp dẫn với P/E 12.5 thấp hơn trung bình ngành. ROE 18.5% cho thấy hiệu quả sử dụng vốn tốt. Doanh thu và lợi nhuận tăng trưởng đều qua các quý.",
      technical: "Xu hướng tăng rõ ràng với giá trên các đường MA. RSI 65.4 trong vùng tích cực, MACD cho tín hiệu mua. Khối lượng tăng mạnh hỗ trợ xu hướng."
    },
    scores: {
      macroScore: 8.2,
      fundamentalScore: 8.5,
      technicalScore: 7.8,
      averageScore: 8.17
    }
  },
  generatedAt: new Date().toISOString()
}; 