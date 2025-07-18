export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">VN Stock Advisor</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Trang chủ
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Về chúng tôi
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Liên hệ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 