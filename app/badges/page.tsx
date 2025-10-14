import { Header } from '@/components/layout/Header';
import { Award, Lock } from 'lucide-react';

const badges = [
  {
    id: '1',
    name: 'Small Animal Radiography',
    description: 'Master of small animal X-ray techniques',
    earned: true,
    rarity: 'Common',
    icon: '🐕',
  },
  {
    id: '2',
    name: 'Advanced Dental Imaging',
    description: 'Expert in dental radiography',
    earned: true,
    rarity: 'Rare',
    icon: '🦷',
  },
  {
    id: '3',
    name: 'Orthopedic Specialist',
    description: 'Specialized in orthopedic imaging',
    earned: false,
    rarity: 'Epic',
    icon: '🦴',
  },
  {
    id: '4',
    name: 'Community Contributor',
    description: '100+ helpful tips shared',
    earned: true,
    rarity: 'Uncommon',
    icon: '💡',
  },
  {
    id: '5',
    name: 'Mentor',
    description: 'Helped 50+ vet techs',
    earned: false,
    rarity: 'Legendary',
    icon: '🎓',
  },
  {
    id: '6',
    name: 'Thoracic Expert',
    description: 'Master of thoracic radiography',
    earned: false,
    rarity: 'Rare',
    icon: '🫁',
  },
];

const rarityColors = {
  Common: 'text-gray-400',
  Uncommon: 'text-green-400',
  Rare: 'text-blue-400',
  Epic: 'text-purple-400',
  Legendary: 'text-yellow-400',
};

export default function BadgesPage() {
  const earnedCount = badges.filter(b => b.earned).length;

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4 text-gradient">
            Skill Badges
          </h1>
          <p className="text-gray-300 text-lg">
            Earn NFT badges to showcase your expertise and professional development
          </p>
        </div>

        <div className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Progress</h2>
              <p className="text-gray-400">
                {earnedCount} of {badges.length} badges earned
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-gradient">
                {Math.round((earnedCount / badges.length) * 100)}%
              </div>
              <div className="text-sm text-gray-400">Complete</div>
            </div>
          </div>
          <div className="w-full bg-bg rounded-full h-3 mt-4">
            <div
              className="bg-accent h-3 rounded-full transition-all duration-300"
              style={{ width: `${(earnedCount / badges.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`glass-card p-6 ${
                badge.earned
                  ? 'border-accent'
                  : 'opacity-60'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{badge.earned ? badge.icon : '🔒'}</div>
                {badge.earned ? (
                  <Award className="w-6 h-6 text-accent" />
                ) : (
                  <Lock className="w-6 h-6 text-gray-400" />
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{badge.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{badge.description}</p>

              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${rarityColors[badge.rarity as keyof typeof rarityColors]}`}>
                  {badge.rarity}
                </span>
                {badge.earned ? (
                  <button className="text-sm text-accent hover:text-base-light transition-colors">
                    View NFT
                  </button>
                ) : (
                  <button className="text-sm text-gray-400">
                    Locked
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
