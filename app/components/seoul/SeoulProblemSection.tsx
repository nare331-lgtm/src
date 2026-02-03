import { X } from "lucide-react";

export function SeoulProblemSection() {
  return (
    <div className="bg-red-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          광화문 숙소 50만원?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          정신 나간 가격입니다. 하지만 지하철 3정거장만 벗어나면<br />
          10만원대 숙소가 널렸습니다.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start space-x-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  숙박비 5배 폭등
                </h3>
                <p className="text-sm text-gray-600">
                  광화문 인근<br />
                  10만원 → 50만원
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start space-x-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  교통 마비
                </h3>
                <p className="text-sm text-gray-600">
                  광화문 일대<br />
                  셔틀 운행 불가능
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start space-x-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  택시 잡기 불가
                </h3>
                <p className="text-sm text-gray-600">
                  콘서트 끝나고<br />
                  도보로 탈출해야 함
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
