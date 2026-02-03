import { useState } from "react";
import { useForm } from "react-hook-form";
import { Bus, AlertCircle, CheckCircle2 } from "lucide-react";
import { ProgressBar } from "@/app/components/busan/ProgressBar";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { supabase } from '../../../supabaseClient'; // 👈 경로가 맞는지 확인해주세요!
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface ShuttleFormData {
  name: string;
  phone: string;
  passengers: string;
  agreement: boolean;
}

export function ShuttleSignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSignups] = useState(18); // Mock data
  const targetSignups = 30;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ShuttleFormData>();
  
  const agreement = watch("agreement");
  
  // 🟢 여기가 수정된 핵심 부분입니다! (중복 제거됨)
  const onSubmit = async (data: ShuttleFormData) => {
    console.log("Form submitted:", data);

    try {
      // Supabase에 데이터 저장
      const { error } = await supabase
        .from('applicants') // 대표님이 만든 테이블 이름
        .insert([
          {
            name: data.name,    // 폼에 입력한 이름
            phone: data.phone,  // 폼에 입력한 번호
            location: 'busan'   // 부산/서울 구분
          },
        ]);

      if (error) {
        // 에러 발생 시
        alert("에러가 났어요 ㅠㅠ: " + error.message);
        console.error("Supabase Error:", error);
      } else {
        // 성공 시
        // alert("신청이 완료되었습니다! 💜"); // (필요하면 주석 해제)
        setIsSubmitted(true); // 완료 화면으로 넘기기
      }
    } catch (err) {
      alert("알 수 없는 오류가 발생했습니다.");
      console.error(err);
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-green-200">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            신청이 완료되었습니다!
          </h3>
          <p className="text-gray-600 mb-6">
            입력하신 연락처로 출발 확정 여부를<br />
            안내드리겠습니다.
          </p>
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-700">
              <strong className="text-green-600">30명 이상 모집 시</strong> 출발이 확정되며,<br />
              미달 시 자동 취소 및 100% 환불 처리됩니다.
            </p>
          </div>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="w-full"
          >
            신청 내역 수정하기
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-200">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Bus className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            울산 ↔ 부산 왕복 셔틀 신청
          </h3>
          <p className="text-sm text-gray-600">
            지금 바로 신청하세요
          </p>
        </div>
      </div>
      
      <ProgressBar current={currentSignups} target={targetSignups} />
      
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">📍 셔틀 정보</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>출발:</strong> 울산터미널 앞 14:00 출발</p>
          <p><strong>도착:</strong> 부산 아시아드 경기장 15:00 도착</p>
          <p><strong>복귀:</strong> 콘서트 종료 후 23:30 출발</p>
          <p><strong>비용:</strong> 1인 40,000원 (30명 이상 모집 시)</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">이름 *</Label>
          <Input
            id="name"
            placeholder="홍길동"
            {...register("name", { required: "이름을 입력해주세요" })}
            className="mt-2"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="phone">연락처 *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-1234-5678"
            {...register("phone", {
              required: "연락처를 입력해주세요",
              pattern: {
                value: /^[0-9-]+$/,
                message: "올바른 연락처 형식이 아닙니다",
              },
            })}
            className="mt-2"
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="passengers">탑승 인원 *</Label>
          <Select
            onValueChange={(value) => setValue("passengers", value)}
            defaultValue="1"
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="인원 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1명</SelectItem>
              <SelectItem value="2">2명</SelectItem>
              <SelectItem value="3">3명</SelectItem>
              <SelectItem value="4">4명</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreement"
            onCheckedChange={(checked) => 
              setValue("agreement", checked === true)
            }
          />
          <label
            htmlFor="agreement"
            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
          >
            개인정보 수집 및 이용에 동의합니다. 수집된 정보는 셔틀 운영 목적으로만 사용되며, 30명 미달 시 자동 삭제됩니다.
          </label>
        </div>
        {errors.agreement && (
          <p className="text-sm text-red-600">{errors.agreement.message}</p>
        )}
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-yellow-800 mb-1">
              ⚠️ 중요 안내사항
            </p>
            <p>
              30명 미달 시 자동 취소되며, 입금 전이므로 별도의 환불 절차가 필요 없습니다.
              출발 확정 시에만 입금 안내를 드립니다.
            </p>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
          disabled={!agreement}
        >
          <Bus className="w-5 h-5 mr-2" />
          🚌 셔틀 신청하기
        </Button>
      </form>
    </div>
  );
}