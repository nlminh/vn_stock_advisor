import { CompanyProfile } from '@/types/stock';

interface CompanyOverviewProps {
  company: CompanyProfile;
}

export function CompanyOverview({ company }: CompanyOverviewProps) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Thông tin công ty</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Mã cổ phiếu</label>
          <p className="text-lg font-semibold text-blue-600">{company.symbol}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Tên công ty</label>
          <p className="text-lg font-medium text-gray-900">{company.fullName}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Ngành</label>
          <p className="text-lg text-gray-700">{company.industry}</p>
        </div>
      </div>
    </div>
  );
} 