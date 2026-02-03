import { Heart, Code, Zap } from "lucide-react";

export function TrustSection() {
  return (
    <div className="bg-purple-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            한 아미 개발자가 직접 만들었습니다
          </h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              저도 <strong className="text-purple-600">6월 12일, 부산 숙소 예약이 일방 취소당했습니다.</strong>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              분노했습니다. 하지만 포기하지 않았습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-purple-600">개발자니까, 기술로 해결하기로 했습니다.</strong>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">팬덤을 위해</h3>
            <p className="text-sm text-gray-600">
              같은 아미로서 여러분의 분노와 절망을 이해합니다
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">기술로 해결</h3>
            <p className="text-sm text-gray-600">
              숙박 앱이 아닌, 예산 기반의 합리적 대안 제시
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">빠른 실행</h3>
            <p className="text-sm text-gray-600">
              오늘 밤 개발 착수, 내일 런칭 목표
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "이건 숙박 앱이 아닙니다.<br />
            '예산이 여행을 막지 않게' 하는 Blue Trip의 본질입니다."
          </p>
        </div>
      </div>
    </div>
  );
}