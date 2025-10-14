import { Header } from '@/components/layout/Header';
import { GuideGrid } from '@/components/guides/GuideGrid';
import { StatsOverview } from '@/components/home/StatsOverview';
import { FeaturedGuides } from '@/components/home/FeaturedGuides';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center py-12 mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-gradient">
            VetTech X-ray Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Precision X-ray guidance with interactive 3D models, community insights, and professional credentials
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/guides" className="btn-primary">
              Browse Guides
            </a>
            <a href="/community" className="btn-secondary">
              Join Community
            </a>
          </div>
        </section>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Featured Guides */}
        <FeaturedGuides />

        {/* All Guides */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">All X-ray Guides</h2>
          <GuideGrid />
        </section>
      </main>
    </div>
  );
}
