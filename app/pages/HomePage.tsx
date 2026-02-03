import { PageLayout } from "@/app/components/layout/PageLayout";
import { HeroSection } from "@/app/components/home/HeroSection";
import { SplitCTA } from "@/app/components/home/SplitCTA";
import { TrustSection } from "@/app/components/home/TrustSection";

export function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <SplitCTA />
      <TrustSection />
    </PageLayout>
  );
}
