'use client';

import { Header } from '@/components/layout/Header';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
import { Award, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="glass-card p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-20 w-20" />
              </ConnectWallet>
            </Wallet>

            <div className="flex-1">
              <Wallet>
                <ConnectWallet>
                  <Name className="text-2xl font-bold mb-2" />
                </ConnectWallet>
              </Wallet>
              <p className="text-gray-400 mb-4">Veterinary Technician</p>
              
              <div className="flex gap-4">
                <Wallet>
                  <ConnectWallet>
                    <button className="btn-primary">
                      Connect Wallet
                    </button>
                  </ConnectWallet>
                </Wallet>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-gray-400">Guides Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">45</div>
              <div className="text-sm text-gray-400">Tips Shared</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3</div>
              <div className="text-sm text-gray-400">Badges Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">156</div>
              <div className="text-sm text-gray-400">Upvotes Received</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-bold">Recent Badges</h2>
            </div>
            <div className="space-y-3">
              {['Small Animal Radiography', 'Advanced Dental Imaging', 'Community Contributor'].map((badge) => (
                <div key={badge} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                  <div className="text-2xl">🏆</div>
                  <div className="flex-1">
                    <div className="font-medium">{badge}</div>
                    <div className="text-sm text-gray-400">Earned recently</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h2 className="text-xl font-bold">Activity</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <BookOpen className="w-5 h-5 text-accent" />
                <div className="flex-1">
                  <div className="font-medium">Completed guide</div>
                  <div className="text-sm text-gray-400">Canine Lateral Thorax</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <MessageSquare className="w-5 h-5 text-accent" />
                <div className="flex-1">
                  <div className="font-medium">Shared a tip</div>
                  <div className="text-sm text-gray-400">Received 12 upvotes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                <Award className="w-5 h-5 text-accent" />
                <div className="flex-1">
                  <div className="font-medium">Earned badge</div>
                  <div className="text-sm text-gray-400">Community Contributor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
