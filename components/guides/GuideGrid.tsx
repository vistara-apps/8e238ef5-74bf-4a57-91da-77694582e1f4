'use client';

import { Search, Filter, Star } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const allGuides = [
  {
    id: '1',
    title: 'Canine Lateral Thorax',
    category: 'Thoracic',
    species: 'Canine',
    difficulty: 'Intermediate',
    rating: 4.9,
    views: 1250,
  },
  {
    id: '2',
    title: 'Feline Skull Positioning',
    category: 'Skull',
    species: 'Feline',
    difficulty: 'Advanced',
    rating: 4.8,
    views: 980,
  },
  {
    id: '3',
    title: 'Canine Paw Lateral View',
    category: 'Extremities',
    species: 'Canine',
    difficulty: 'Beginner',
    rating: 4.7,
    views: 1500,
  },
  {
    id: '4',
    title: 'Feline Abdominal VD',
    category: 'Abdominal',
    species: 'Feline',
    difficulty: 'Intermediate',
    rating: 4.6,
    views: 850,
  },
  {
    id: '5',
    title: 'Canine Hip Dysplasia',
    category: 'Orthopedic',
    species: 'Canine',
    difficulty: 'Advanced',
    rating: 4.9,
    views: 2100,
  },
  {
    id: '6',
    title: 'Feline Dental Radiography',
    category: 'Dental',
    species: 'Feline',
    difficulty: 'Advanced',
    rating: 4.8,
    views: 1200,
  },
];

export function GuideGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Thoracic', 'Skull', 'Extremities', 'Abdominal', 'Orthopedic', 'Dental'];

  const filteredGuides = allGuides.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface border border-gray-700 rounded-lg text-fg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-surface text-gray-400 hover:text-fg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.id}
            href={`/guides/${guide.id}`}
            className="glass-card p-6 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{guide.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{guide.species}</span>
                  <span>•</span>
                  <span>{guide.category}</span>
                </div>
              </div>
              <span className="badge text-xs">
                {guide.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-medium">{guide.rating}</span>
              </div>
              <div className="text-gray-400">
                {guide.views.toLocaleString()} views
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No guides found. Try adjusting your search or filters.
        </div>
      )}
    </div>
  );
}
