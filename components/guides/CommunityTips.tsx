'use client';

import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
import { useState } from 'react';

interface Tip {
  id: string;
  author: {
    name: string;
    fid: string;
    avatar: string;
  };
  content: string;
  upvotes: number;
  replies: number;
  timestamp: string;
}

const mockTips: Tip[] = [
  {
    id: '1',
    author: {
      name: 'Mike Chen',
      fid: '54321',
      avatar: '👨‍⚕️',
    },
    content: 'I find that using a foam wedge under the sternum helps maintain perfect alignment, especially for larger breeds. Game changer!',
    upvotes: 24,
    replies: 5,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    author: {
      name: 'Emily Rodriguez',
      fid: '98765',
      avatar: '👩‍⚕️',
    },
    content: 'For anxious patients, I recommend taking a few practice positioning shots without radiation first. Helps them get comfortable.',
    upvotes: 18,
    replies: 3,
    timestamp: '5 hours ago',
  },
  {
    id: '3',
    author: {
      name: 'James Wilson',
      fid: '11223',
      avatar: '🧑‍⚕️',
    },
    content: 'Pro tip: Mark the 5th intercostal space with a radiopaque marker before positioning. Saves time and improves accuracy.',
    upvotes: 31,
    replies: 8,
    timestamp: '1 day ago',
  },
];

export function CommunityTips({ guideId }: { guideId: string }) {
  const [tips, setTips] = useState(mockTips);
  const [newTip, setNewTip] = useState('');

  const handleUpvote = (tipId: string) => {
    setTips(tips.map(tip => 
      tip.id === tipId 
        ? { ...tip, upvotes: tip.upvotes + 1 }
        : tip
    ));
  };

  const handleSubmitTip = () => {
    if (!newTip.trim()) return;

    const tip: Tip = {
      id: Date.now().toString(),
      author: {
        name: 'You',
        fid: 'current-user',
        avatar: '👤',
      },
      content: newTip,
      upvotes: 0,
      replies: 0,
      timestamp: 'Just now',
    };

    setTips([tip, ...tips]);
    setNewTip('');
  };

  return (
    <div className="space-y-6">
      {/* Submit New Tip */}
      <div className="bg-surface p-6 rounded-lg border border-gray-700">
        <h3 className="font-medium mb-4">Share Your Tip</h3>
        <textarea
          value={newTip}
          onChange={(e) => setNewTip(e.target.value)}
          placeholder="Share your experience or technique with the community..."
          className="w-full p-4 bg-bg border border-gray-700 rounded-lg text-fg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          rows={4}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmitTip}
            disabled={!newTip.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Tip
          </button>
        </div>
      </div>

      {/* Tips List */}
      <div className="space-y-4">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-surface p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-accent bg-opacity-20 flex items-center justify-center text-xl">
                  {tip.author.avatar}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">{tip.author.name}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400">{tip.timestamp}</span>
                </div>

                <p className="text-gray-300 mb-4">{tip.content}</p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleUpvote(tip.id)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{tip.upvotes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>{tip.replies}</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
