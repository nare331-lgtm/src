import { PageLayout } from "@/app/components/layout/PageLayout";
import { BusanHero } from "@/app/components/busan/BusanHero";
import { ProblemSection } from "@/app/components/busan/ProblemSection";
import { SolutionCards } from "@/app/components/busan/SolutionCards";
import { ShuttleSignupForm } from "@/app/components/busan/ShuttleSignupForm";
import { BusanFAQ } from "@/app/components/busan/BusanFAQ";
import { Link } from "@/app/components/layout/Link";
import { ChevronRight } from "lucide-react";

export function BusanPage() {
  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">부산 아시아드</span>
          </div>
        </div>
      </div>
      
      <BusanHero />
      <ProblemSection />
      <SolutionCards />
      
      {/* Shuttle Signup Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ShuttleSignupForm />
        </div>
      </div>
      
      <BusanFAQ />
    </PageLayout>
  );
}
