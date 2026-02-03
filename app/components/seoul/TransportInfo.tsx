import { Clock, Train, Navigation } from "lucide-react";

export function TransportInfo() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          교통 정보
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          콘서트 끝나고 1시간 안에 숙소 도착 가능
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* 지하철 막차 시간 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              지하철 막차 시간
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">3호선 (을지로)</span>
                <span className="text-purple-600 font-bold">00:30</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">5호선 (공덕/마포)</span>
                <span className="text-purple-600 font-bold">00:40</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">5호선 (왕십리)</span>
                <span className="text-purple-600 font-bold">01:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">4호선 (동대문)</span>
                <span className="text-purple-600 font-bold">00:50</span>
              </div>
            </div>
            <div className="mt-4 bg-purple-50 rounded-lg p-3">
              <p className="text-xs text-gray-700">
                ※ 콘서트 종료 시간(23:00 예상) 기준, 충분한 여유 시간
              </p>
            </div>
          </div>
          
          {/* 지하철 이용 팁 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Train className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              지하철 이용 팁
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-0.5">1.</span>
                <span>콘서트 종료 직후 바로 이동하면 혼잡 피할 수 있음</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-0.5">2.</span>
                <span>광화문역 3번, 5번 출구 이용 추천</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-0.5">3.</span>
                <span>교통카드 미리 충전해 두기</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600 font-bold mt-0.5">4.</span>
                <span>환승 없이 한 번에 가는 노선 선택</span>
              </li>
            </ul>
          </div>
          
          {/* 도보 탈출 경로 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Navigation className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              도보 탈출 경로
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              만약 교통 통제가 심하다면 도보로 이동 가능한 지하철역:
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">▸</span>
                <div>
                  <strong>광화문역:</strong> 도보 5분<br />
                  <span className="text-xs text-gray-500">(3호선, 5호선)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">▸</span>
                <div>
                  <strong>시청역:</strong> 도보 10분<br />
                  <span className="text-xs text-gray-500">(1호선, 2호선)</span>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-600 font-bold">▸</span>
                <div>
                  <strong>종각역:</strong> 도보 12분<br />
                  <span className="text-xs text-gray-500">(1호선)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex items-start space-x-4">
          <div className="flex-shrink-0 text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Pro Tip</h4>
            <p className="text-gray-700">
              콘서트 종료 후 근처 편의점이나 카페에서 30분 정도 시간을 보내면 지하철 혼잡도가 낮아집니다.
              급하게 서두르지 말고 여유있게 이동하세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
