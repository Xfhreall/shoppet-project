'use client';

import { MissionSection } from '@/features/home/about/mission-section';
import { StatsSection } from '@/features/home/about/stats-section';
import { StorySection } from '../../about/story-section';

export default function AboutContainer() {
  return (
    <div className="min-h-screen bg-foreground">
      <main>
        <StorySection />
        <StatsSection />
        <MissionSection />
      </main>
    </div>
  );
}
