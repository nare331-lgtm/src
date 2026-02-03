import { useState } from "react";
import { MapPin, Train, Check } from "lucide-react";

interface Region {
  id: string;
  name: string;
  line: string;
  lineColor: string;
  time: string;
  price: string;
  description: string;
  position: { top: string; left: string };
}

const regions: Region[] = [
  {
    id: "gwanghwamun",
    name: "광화문",
    line: "중심지",
    lineColor: "bg-red-600",
    time: "0분",
    price: "50만원",
    description: "콘서트 장소 - 숙박비 폭등",
    position: { top: "50%", left: "50%" },
  },
  {
    id: "gongdeok",
    name: "공덕",
    line: "5호선",
    lineColor: "bg-purple-600",
    time: "15분",
    price: "12만원",
    description: "5호선 한 번에 이동, 안전한 주거지역",
    position: { top: "45%", left: "35%" },
  },
  {
    id: "wangsimni",
    name: "왕십리",
    line: "5호선",
    lineColor: "bg-purple-600",
    time: "25분",
    price: "10만원",
    description: "5호선 직통, 편의시설 풍부",
    position: { top: "55%", left: "70%" },
  },
  {
    id: "euljiro",
    name: "을지로",
    line: "3호선",
    lineColor: "bg-orange-600",
    time: "10분",
    price: "13만원",
    description: "3호선 직통, 도심 인근",
    position: { top: "60%", left: "55%" },
  },
  {
    id: "mapo",
    name: "마포",
    line: "5호선",
    lineColor: "bg-purple-600",
    time: "20분",
    price: "11만원",
    description: "홍대/마포 지역, 밤늦게까지 안전",
    position: { top: "35%", left: "25%" },
  },
  {
    id: "dongdaemun",
    name: "동대문",
    line: "4호선",
    lineColor: "bg-blue-600",
    time: "20분",
    price: "11만원",
    description: "환승 편리, 쇼핑/식사 가능",
    position: { top: "65%", left: "65%" },
  },
];

export function MetroMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const getRegionData = (id: string) => regions.find(r => r.id === id);
  const selectedData = selectedRegion ? getRegionData(selectedRegion) : null;
  
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          이 지도가 당신을 구합니다
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          🟣 보라색 핀 = 지하철 한 번에 도착 가능 + 10만원대 숙소 밀집 지역
        </p>
        
        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-purple-200">
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl overflow-hidden border-2 border-gray-300">
            {/* Subway Lines (decorative) */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-20">
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#7C3AED" strokeWidth="4" />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#EA580C" strokeWidth="4" />
              </svg>
            </div>
            
            {/* Region Pins */}
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  selectedRegion === region.id
                    ? "z-20 scale-125"
                    : "z-10 hover:scale-110"
                }`}
                style={{ top: region.position.top, left: region.position.left }}
              >
                <div className="relative">
                  {region.id === "gwanghwamun" ? (
                    <div className="w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white fill-white" />
                    </div>
                  ) : (
                    <div className={`w-8 h-8 ${region.lineColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                      selectedRegion === region.id ? "ring-4 ring-purple-300" : ""
                    }`}>
                      <Train className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      region.id === "gwanghwamun"
                        ? "bg-red-600 text-white"
                        : "bg-purple-600 text-white"
                    }`}>
                      {region.name}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-sm text-gray-700">광화문 (중심)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <span className="text-sm text-gray-700">5호선 추천 지역</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-700">3호선 추천 지역</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-700">4호선 추천 지역</span>
            </div>
          </div>
        </div>
        
        {/* Selected Region Info */}
        {selectedData && selectedData.id !== "gwanghwamun" && (
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedData.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`${selectedData.lineColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {selectedData.line}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-purple-100">평균 숙박비</div>
                <div className="text-3xl font-bold">{selectedData.price}</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>광화문까지 {selectedData.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>지하철 한 번에 도착</span>
              </div>
            </div>
            
            <p className="text-purple-100">{selectedData.description}</p>
          </div>
        )}
        
        {!selectedRegion && (
          <div className="bg-purple-50 rounded-2xl p-8 text-center border-2 border-purple-200">
            <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <p className="text-gray-700 font-semibold">
              지도에서 지역을 클릭하면 상세 정보를 확인할 수 있습니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
