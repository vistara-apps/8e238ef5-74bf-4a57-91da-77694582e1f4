'use client';

import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const featuredGuides = [
  {
    id: '1',
    title: 'Canine Lateral Thorax',
    description: 'Complete guide for lateral thoracic radiographs in dogs',
    rating: 4.9,
    views: 1250,
    image: '/guides/canine-thorax.jpg',
    difficulty: 'Intermediate',
  },
  {
    id: '2',
    title: 'Feline Skull Positioning',
    description: 'Precise positioning techniques for feline skull X-rays',
    rating: 4.8,
    views: 980,
    image: '/guides/feline-skull.jpg',
    difficulty: 'Advanced',
  },
  {
    id: '3',
    title: 'Canine Paw Lateral View',
    description: 'Step-by-step guide for paw radiography',
    rating: 4.7,
    views: 1500,
    image: '/guides/canine-paw.jpg',
    difficulty: 'Beginner',
  },
];

export function FeaturedGuides() {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Featured Guides</h2>
        <Link href="/guides" className="text-accent hover:text-base-light transition-colors flex items-center gap-2">
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGuides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.id}`}
            className="glass-card overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <div className="aspect-video bg-surface relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">🐕</div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="badge text-xs">
                  {guide.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{guide.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{guide.rating}</span>
                </div>
                <div className="text-gray-400">
                  {guide.views.toLocaleString()} views
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
