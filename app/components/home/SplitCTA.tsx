import { Link } from "@/app/components/layout/Link";
import { MapPin, Train, ArrowRight } from "lucide-react";

export function SplitCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
        어디 콘서트를 가시나요?
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        지역을 선택하시면 맞춤 솔루션을 제공합니다
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* 부산 카드 */}
        <Link href="/busan">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 md:p-12 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">부산 아시아드</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                울산 베이스캠프
              </h3>
              
              <p className="text-blue-100 text-lg mb-6">
                부산에서 자지 마라.<br />
                울산에서 놀고 자라.
              </p>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">🚌</span>
                  <span>왕복 셔틀버스 제공</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">💰</span>
                  <span>숙소 비용 1/3 절약</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">🏖️</span>
                  <span>울산 여행 코스 추천</span>
                </div>
              </div>
              
              <div className="inline-flex items-center space-x-2 text-white font-semibold group-hover:space-x-4 transition-all">
                <span>울산 베이스캠프 보러가기</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          </div>
        </Link>
        
        {/* 서울 카드 */}
        <Link href="/seoul">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 md:p-12 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl">
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Train className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">서울 광화문</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                지하철 탈출 지도
              </h3>
              
              <p className="text-purple-100 text-lg mb-6">
                남들 다 가는 곳 말고,<br />
                지하철로 30분만 나가세요.
              </p>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">🗺️</span>
                  <span>가성비 지역 지도 제공</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">💵</span>
                  <span>숙박비 50만→10만원대</span>
                </div>
                <div className="flex items-center text-white">
                  <span className="text-2xl mr-2">🚇</span>
                  <span>지하철 한 번에 도착</span>
                </div>
              </div>
              
              <div className="inline-flex items-center space-x-2 text-white font-semibold group-hover:space-x-4 transition-all">
                <span>지하철 탈출 지도 보러가기</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
