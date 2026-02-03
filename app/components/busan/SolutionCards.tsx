import { Hotel, MapPin, Bus } from "lucide-react";

export function SolutionCards() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          그럼 울산에서 자면 됩니다
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          콘서트장까지 40분. 숙소는 1/3 가격. 게다가 울산, 생각보다 재밌습니다.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* 숙소 카드 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Hotel className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              합리적인 숙소
            </h3>
            <p className="text-gray-600 mb-4">
              울산 시내 호텔/모텔<br />
              평균 5~8만원대
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 울산역 주변 숙소</li>
              <li>• 태화강 인근 호텔</li>
              <li>• 깨끗하고 안전한 시설</li>
            </ul>
          </div>
          
          {/* 여행 코스 카드 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              울산 반나절 코스
            </h3>
            <p className="text-gray-600 mb-4">
              콘서트 전까지<br />
              울산에서 즐기기
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 대왕암공원 일출 명소</li>
              <li>• 장생포 고래문화마을</li>
              <li>• 울산 대표 맛집 투어</li>
            </ul>
          </div>
          
          {/* 셔틀 카드 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              왕복 셔틀버스
            </h3>
            <p className="text-blue-100 mb-4">
              울산 터미널 ↔<br />
              부산 아시아드 경기장
            </p>
            <ul className="space-y-2 text-sm text-blue-50">
              <li>• 출발: 14:00 울산터미널</li>
              <li>• 도착: 15:00 아시아드</li>
              <li>• 복귀: 23:30 콘서트 종료 후</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
