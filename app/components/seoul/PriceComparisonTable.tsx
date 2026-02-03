import { TrendingDown } from "lucide-react";

interface RegionData {
  region: string;
  line: string;
  lineColor: string;
  price: string;
  time: string;
  notes: string;
}

const regionData: RegionData[] = [
  {
    region: "광화문",
    line: "중심지",
    lineColor: "bg-red-100 text-red-800",
    price: "50만원",
    time: "-",
    notes: "콘서트 장소",
  },
  {
    region: "공덕",
    line: "5호선",
    lineColor: "bg-purple-100 text-purple-800",
    price: "12만원",
    time: "15분",
    notes: "✨ 추천",
  },
  {
    region: "왕십리",
    line: "5호선",
    lineColor: "bg-purple-100 text-purple-800",
    price: "10만원",
    time: "25분",
    notes: "✨ 최저가",
  },
  {
    region: "을지로",
    line: "3호선",
    lineColor: "bg-orange-100 text-orange-800",
    price: "13만원",
    time: "10분",
    notes: "✨ 가장 가까움",
  },
  {
    region: "마포",
    line: "5호선",
    lineColor: "bg-purple-100 text-purple-800",
    price: "11만원",
    time: "20분",
    notes: "홍대/마포",
  },
  {
    region: "동대문",
    line: "4호선",
    lineColor: "bg-blue-100 text-blue-800",
    price: "11만원",
    time: "20분",
    notes: "쇼핑 가능",
  },
];

export function PriceComparisonTable() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <TrendingDown className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            지역별 숙박비 비교
          </h2>
          <p className="text-lg text-gray-600">
            같은 서울인데 이렇게 차이가 납니다
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">지역명</th>
                  <th className="px-6 py-4 text-left font-semibold">지하철 노선</th>
                  <th className="px-6 py-4 text-left font-semibold">평균 가격</th>
                  <th className="px-6 py-4 text-left font-semibold">소요 시간</th>
                  <th className="px-6 py-4 text-left font-semibold">특징</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {regionData.map((data, index) => (
                  <tr
                    key={data.region}
                    className={`${
                      index === 0
                        ? "bg-red-50"
                        : data.notes.includes("✨")
                        ? "bg-purple-50 hover:bg-purple-100"
                        : "hover:bg-gray-50"
                    } transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${
                        index === 0 ? "text-red-600" : "text-gray-900"
                      }`}>
                        {data.region}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${data.lineColor}`}>
                        {data.line}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-bold text-lg ${
                        index === 0 ? "text-red-600" : "text-gray-900"
                      }`}>
                        {data.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {data.time}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {data.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {regionData.map((data, index) => (
              <div
                key={data.region}
                className={`p-6 ${
                  index === 0
                    ? "bg-red-50"
                    : data.notes.includes("✨")
                    ? "bg-purple-50"
                    : ""
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      index === 0 ? "text-red-600" : "text-gray-900"
                    }`}>
                      {data.region}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${data.lineColor}`}>
                      {data.line}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      index === 0 ? "text-red-600" : "text-gray-900"
                    }`}>
                      {data.price}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                  <span>소요: {data.time}</span>
                  <span>{data.notes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center">
          <p className="text-2xl font-bold mb-2">
            💰 최대 40만원 절약 가능!
          </p>
          <p className="text-green-100">
            광화문 50만원 vs 왕십리 10만원 = 40만원 차이
          </p>
        </div>
      </div>
    </div>
  );
}
