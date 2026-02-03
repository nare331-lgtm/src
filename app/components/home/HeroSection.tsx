import { AlertCircle } from "lucide-react";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-full">
            <AlertCircle className="w-5 h-5" />
            <span className="font-semibold">긴급 공지</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          숙소 취소당한 당신을 위한<br />긴급 대피소
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-purple-100 max-w-3xl mx-auto">
          예산이 부족하다고 여행을 포기하지 마세요.<br />
          기술로 해결할게요.
        </p>
      </div>
    </div>
  );
}
