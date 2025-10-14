'use client';

import { Header } from '@/components/layout/Header';
import { XrayViewer3D } from '@/components/3d/XrayViewer3D';
import { GuideSteps } from '@/components/guides/GuideSteps';
import { CommunityTips } from '@/components/guides/CommunityTips';
import { Star, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

// Mock guide data
const guideData = {
  id: '1',
  title: 'Canine Lateral Thorax',
  description: 'Complete guide for lateral thoracic radiographs in dogs with precise positioning and exposure settings.',
  category: 'Thoracic',
  species: 'Canine',
  difficulty: 'Intermediate',
  rating: 4.9,
  views: 1250,
  author: {
    name: 'Dr. Sarah Johnson',
    fid: '12345',
    avatar: '🩺',
  },
  steps: [
    {
      title: 'Patient Positioning',
      description: 'Place the dog in right lateral recumbency with the sternum parallel to the table.',
      tips: ['Use foam wedges for support', 'Ensure the spine is straight'],
    },
    {
      title: 'Limb Placement',
      description: 'Pull the forelimbs cranially and secure them to prevent overlap with the thorax.',
      tips: ['Use sandbags or tape', 'Keep limbs parallel'],
    },
    {
      title: 'Beam Centering',
      description: 'Center the beam at the caudal border of the scapula, approximately at the 5th intercostal space.',
      tips: ['Use anatomical landmarks', 'Adjust for patient size'],
    },
    {
      title: 'Exposure Settings',
      description: 'Set kVp to 60-80 and mAs to 3-10 depending on patient size and tissue density.',
      tips: ['Increase for larger dogs', 'Use technique chart'],
    },
  ],
};

export default function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <Link href="/guides" className="inline-flex items-center gap-2 text-accent hover:text-base-light mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>

        {/* Guide Header */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold mb-2 text-gradient">
                {guideData.title}
              </h1>
              <p className="text-gray-300 text-lg mb-4">
                {guideData.description}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="badge">{guideData.difficulty}</span>
                <span className="badge">{guideData.species}</span>
                <span className="badge">{guideData.category}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-surface rounded-lg hover:bg-opacity-80 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 bg-surface rounded-lg hover:bg-opacity-80 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{guideData.author.avatar}</span>
                <div>
                  <div className="font-medium">{guideData.author.name}</div>
                  <div className="text-sm text-gray-400">Veterinary Radiologist</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-lg">{guideData.rating}</span>
              </div>
              <div className="text-gray-400">
                {guideData.views.toLocaleString()} views
              </div>
            </div>
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Interactive 3D Model</h2>
          <XrayViewer3D />
        </div>

        {/* Step-by-Step Guide */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
          <GuideSteps steps={guideData.steps} />
        </div>

        {/* Community Tips */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-6">Community Tips & Insights</h2>
          <CommunityTips guideId={id} />
        </div>
      </main>
    </div>
  );
}
