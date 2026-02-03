interface ProgressBarProps {
  current: number;
  target: number;
}

export function ProgressBar({ current, target }: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const remaining = Math.max(target - current, 0);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">
          현재 신청 현황
        </span>
        <span className="text-sm font-semibold text-blue-600">
          {current}/{target}명
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && (
            <span className="text-xs font-semibold text-white">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>
      
      {remaining > 0 ? (
        <p className="text-center mt-3 text-lg font-semibold text-blue-600">
          🎯 {remaining}명만 더 모이면 출발 확정!
        </p>
      ) : (
        <p className="text-center mt-3 text-lg font-semibold text-green-600">
          ✅ 출발 확정되었습니다!
        </p>
      )}
    </div>
  );
}
