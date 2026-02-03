import { Link } from "@/app/components/layout/Link";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="https://i.postimg.cc/SRxkd2y6/beulluteulib-logo.png" alt="Blue Trip Logo" className="w-8 h-8" />
            <div>
              <div className="font-bold text-gray-900">Blue Trip</div>
              <div className="text-xs text-purple-600">Project Purple Shelter</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/busan" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              부산 아시아드
            </Link>
            <Link 
              href="/seoul" 
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              서울 광화문
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}