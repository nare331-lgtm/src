import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function BusanFAQ() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          자주 묻는 질문
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-xl px-6 border">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">셔틀 시간표가 어떻게 되나요?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-2">
                <strong>출발:</strong> 울산터미널 앞 14:00 출발 → 부산 아시아드 경기장 15:00 도착
              </p>
              <p>
                <strong>복귀:</strong> 콘서트 종료 후 23:30 출발 → 울산터미널 00:30 도착 예정
              </p>
              <p className="mt-2 text-sm text-gray-500">
                ※ 교통 상황에 따라 30분 정도 차이가 있을 수 있습니다.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-white rounded-xl px-6 border">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">비용은 얼마인가요?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-2">
                1인당 <strong className="text-blue-600">40,000원</strong>입니다. (왕복 기준)
              </p>
              <p>
                30명 이상 모집이 확정되면 입금 안내를 드립니다.
                미달 시 자동 취소되며, 입금 전이므로 별도 환불 절차가 없습니다.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-white rounded-xl px-6 border">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">취소 정책은 어떻게 되나요?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-2">
                <strong className="text-blue-600">30명 미달 시:</strong> 자동 취소되며 100% 환불 (입금 전이므로 별도 절차 없음)
              </p>
              <p className="mb-2">
                <strong className="text-blue-600">출발 3일 전까지:</strong> 100% 환불
              </p>
              <p>
                <strong className="text-blue-600">출발 2일 전부터:</strong> 환불 불가 (대신 다른 분께 양도 가능)
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-white rounded-xl px-6 border">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">울산 숙소는 어떻게 찾나요?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-2">
                울산터미널 또는 울산역 주변 숙소를 추천드립니다.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>울산터미널 도보 5분 거리 모텔: 5~6만원대</li>
                <li>울산역 주변 비즈니스 호텔: 7~10만원대</li>
                <li>태화강 인근 호텔: 8~12만원대</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">
                ※ 일반 숙박 예약 사이트에서 "울산" 검색하시면 됩니다.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="bg-white rounded-xl px-6 border">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">울산에서 뭐 하고 놀 수 있나요?</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <p className="mb-2">
                울산, 생각보다 재밌습니다! 콘서트 전 반나절 코스 추천:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>대왕암공원:</strong> 일출 명소, 바다 뷰 맛집</li>
                <li><strong>장생포 고래문화마을:</strong> 고래 박물관, SNS 인증샷</li>
                <li><strong>태화강 대공원:</strong> 십리대밭길 산책</li>
                <li><strong>울산 맛집:</strong> 언양 불고기, 울산 돼지국밥</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}