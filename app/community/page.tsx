import { Header } from '@/components/layout/Header';
import { TrendingUp, Users, Award, MessageSquare } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-extrabold mb-8 text-gradient">
          Community Hub
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="metric-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-gray-400">Tips Shared</div>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm text-gray-400">Badges Earned</div>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Community</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Connect with fellow vet techs, share your expertise, and learn from the best in the field.
          </p>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
