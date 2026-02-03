import { PageLayout } from "@/app/components/layout/PageLayout";
import { SeoulHero } from "@/app/components/seoul/SeoulHero";
import { SeoulProblemSection } from "@/app/components/seoul/SeoulProblemSection";
import { MetroMap } from "@/app/components/seoul/MetroMap";
import { PriceComparisonTable } from "@/app/components/seoul/PriceComparisonTable";
import { TransportInfo } from "@/app/components/seoul/TransportInfo";
import { Link } from "@/app/components/layout/Link";
import { ChevronRight } from "lucide-react";

export function SeoulPage() {
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
            <span className="text-gray-900 font-semibold">서울 광화문</span>
          </div>
        </div>
      </div>
      
      <SeoulHero />
      <SeoulProblemSection />
      <MetroMap />
      <PriceComparisonTable />
      <TransportInfo />
    </PageLayout>
  );
}
