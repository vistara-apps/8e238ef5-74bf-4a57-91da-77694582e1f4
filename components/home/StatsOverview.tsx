'use client';

import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: BookOpen,
    label: 'X-ray Guides',
    value: '150+',
    description: 'Interactive 3D guides',
  },
  {
    icon: Users,
    label: 'Active Techs',
    value: '2,500+',
    description: 'Community members',
  },
  {
    icon: Award,
    label: 'Badges Earned',
    value: '5,000+',
    description: 'Professional credentials',
  },
  {
    icon: TrendingUp,
    label: 'Tips Shared',
    value: '10,000+',
    description: 'Community contributions',
  },
];

export function StatsOverview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="metric-card">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-fg mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
