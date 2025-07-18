# VN Stock Advisor - Phân tích cổ phiếu Việt Nam bằng AI

Ứng dụng web phân tích cổ phiếu Việt Nam sử dụng trí tuệ nhân tạo, được xây dựng bằng Next.js, TypeScript, và TailwindCSS.

## 🚀 Tính năng chính

- **Phân tích cơ bản**: Đánh giá sức khỏe tài chính, định giá và so sánh với trung bình ngành
- **Phân tích kỹ thuật**: Phân tích xu hướng, động lượng và tín hiệu giao dịch từ biểu đồ giá
- **Phân tích vĩ mô**: Đánh giá tác động của môi trường kinh tế và tin tức thị trường
- **Khuyến nghị đầu tư**: Đưa ra quyết định MUA/GIỮ/BÁN dựa trên phân tích toàn diện
- **Giao diện thân thiện**: Thiết kế hiện đại, responsive trên mọi thiết bị

## 🛠️ Công nghệ sử dụng

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Headless UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Webpack (Next.js built-in)

## 📋 Yêu cầu hệ thống

- Node.js 18.17 trở lên
- npm hoặc yarn
- Trình duyệt hiện đại hỗ trợ ES2020+

## 🚀 Cài đặt và chạy

### 1. Clone repository

```bash
git clone <repository-url>
cd vn-stock-advisor
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 3. Chạy ứng dụng

```bash
# Development mode
npm run dev
# hoặc
yarn dev

# Production build
npm run build
npm run start
```

### 4. Mở trình duyệt

Truy cập `http://localhost:3000` để sử dụng ứng dụng.

## 📁 Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── analysis-result.tsx
│   ├── company-overview.tsx
│   ├── fundamental-analysis.tsx
│   ├── header.tsx
│   ├── investment-decision.tsx
│   ├── loading-spinner.tsx
│   ├── news-analysis.tsx
│   ├── search-form.tsx
│   └── technical-analysis.tsx
├── data/                  # Static data and mock data
│   ├── industry-averages.ts
│   └── mock-data.ts
├── lib/                   # Utility functions and services
│   ├── stock-service.ts
│   └── utils.ts
└── types/                 # TypeScript type definitions
    └── stock.ts
```

## 🎯 Cách sử dụng

1. **Nhập mã cổ phiếu**: Gõ mã cổ phiếu Việt Nam (VD: FPT, HPG, VIC) vào ô tìm kiếm
2. **Chờ phân tích**: AI sẽ thu thập và phân tích dữ liệu từ nhiều nguồn
3. **Xem kết quả**: Báo cáo chi tiết bao gồm:
   - Thông tin công ty và ngành
   - Khuyến nghị đầu tư với điểm số
   - Phân tích cơ bản với biểu đồ tài chính
   - Phân tích kỹ thuật với các chỉ báo
   - Phân tích tin tức và môi trường vĩ mô

## 📊 Dữ liệu mẫu

Ứng dụng hiện tại sử dụng dữ liệu mẫu cho mục đích demo:
- **FPT**: Dữ liệu thực từ example response
- **HPG**: Dữ liệu mẫu với khuyến nghị MUA
- **Cổ phiếu khác**: Tự động tạo dữ liệu realistic dựa trên thuật toán

## 🔧 Tùy chỉnh

### Thêm cổ phiếu mới

Chỉnh sửa file `src/data/mock-data.ts` để thêm dữ liệu cho cổ phiếu cụ thể.

### Thay đổi trung bình ngành

Cập nhật file `src/data/industry-averages.ts` với dữ liệu mới nhất.

### Tùy chỉnh giao diện

- Chỉnh sửa `src/app/globals.css` cho CSS variables
- Cập nhật `tailwind.config.ts` cho theme tùy chỉnh
- Thay đổi components trong `src/components/`

## 🚀 Triển khai

### Vercel (Khuyến nghị)

```bash
npm run build
# Deploy to Vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Tính năng tương lai

- [ ] Tích hợp API thực tế (VNStock, SSI, etc.)
- [ ] Thêm biểu đồ giá real-time
- [ ] Hệ thống cảnh báo giá
- [ ] Portfolio tracking
- [ ] Phân tích so sánh cổ phiếu
- [ ] Export báo cáo PDF
- [ ] Multi-language support
- [ ] Dark mode

## 🤝 Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 🙏 Ghi nhận

- **vnstock**: Python library for Vietnamese stock data
- **CrewAI**: Multi-agent AI framework inspiration
- **Next.js**: React framework
- **TailwindCSS**: Utility-first CSS framework
- **Recharts**: Charts library for React

## 📞 Liên hệ

- **Email**: support@vnstockadvisor.com
- **Website**: https://vnstockadvisor.com
- **GitHub**: https://github.com/your-org/vn-stock-advisor

---

⚠️ **Lưu ý quan trọng**: Ứng dụng này chỉ cung cấp thông tin tham khảo, không phải lời khuyên đầu tư. Vui lòng tự nghiên cứu và cân nhắc kỹ trước khi đưa ra quyết định đầu tư.
