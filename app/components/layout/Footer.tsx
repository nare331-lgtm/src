export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="https://i.postimg.cc/SRxkd2y6/beulluteulib-logo.png" alt="Blue Trip Logo" className="w-8 h-8" />
              <div>
                <div className="font-bold text-gray-900">Blue Trip</div>
                <div className="text-xs text-purple-600">Project Purple Shelter</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              예산이 부족하다고<br />여행을 포기하지 마세요
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">긴급 대피소</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>부산 아시아드 → 울산 베이스캠프</li>
              <li>서울 광화문 → 지하철 탈출 지도</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">문의하기</h3>
            <p className="text-sm text-gray-600 mb-3">
              이 프로젝트는 한 아미 개발자가<br />
              직접 만들었습니다.
            </p>
            <a 
              href="https://open.kakao.com/o/gYQiqwei" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors text-sm"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.486 3 2 6.262 2 10.29c0 2.546 1.691 4.79 4.264 6.173-.177.644-.637 2.317-.731 2.687-.112.441.162.434.343.316.142-.092 2.313-1.548 3.271-2.187C9.748 17.429 10.861 17.58 12 17.58c5.514 0 10-3.262 10-7.29C22 6.262 17.514 3 12 3z"/>
              </svg>
              Blue Trip 대표 오픈채팅
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2026 Blue Trip - Project Purple Shelter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}