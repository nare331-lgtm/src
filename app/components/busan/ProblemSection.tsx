import { X } from "lucide-react";

export function ProblemSection() {
  return (
    <div className="bg-red-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          당신도 이런 상황이죠?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start space-x-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  숙박비 10배 폭등
                </h3>
                <p className="text-sm text-gray-600">
                  부산 숙소 15만원<br />→ 150만원
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
                  예약 일방 취소
                </h3>
                <p className="text-sm text-gray-600">
                  이미 결제한 예약도<br />통보 없이 취소
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
                  교통 통제
                </h3>
                <p className="text-sm text-gray-600">
                  콘서트 끝나고<br />택시도 못 잡음
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
