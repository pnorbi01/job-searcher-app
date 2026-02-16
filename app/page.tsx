import FilterBarSection from "@/features/jobs/components/sections/FilterBarSection";
import HeroSection from "@/features/jobs/components/sections/HeroSection";
import JobListSection from "@/features/jobs/components/sections/JobListSection";
import { JobListSkeleton } from "@/features/jobs/components/skeletons/JobCardSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="app">
      <HeroSection />

      <main className="main-content z-20">
        <Suspense fallback={null}>
          <FilterBarSection />
        </Suspense>
        <Suspense fallback={<JobListSkeleton />}>
          <JobListSection />
        </Suspense>
      </main>
    </div>
  );
}
