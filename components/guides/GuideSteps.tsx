'use client';

import { CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

interface Step {
  title: string;
  description: string;
  tips: string[];
}

interface GuideStepsProps {
  steps: Step[];
}

export function GuideSteps({ steps }: GuideStepsProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (index: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <div className="space-y-6">
      {steps.map((step, index) => {
        const isCompleted = completedSteps.has(index);
        return (
          <div
            key={index}
            className={`p-6 rounded-lg border transition-all duration-200 ${
              isCompleted
                ? 'bg-accent bg-opacity-10 border-accent'
                : 'bg-surface border-gray-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <button
                onClick={() => toggleStep(index)}
                className="flex-shrink-0 mt-1 transition-transform hover:scale-110"
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-accent">
                    Step {index + 1}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>

                <p className="text-gray-300 mb-4">{step.description}</p>

                {step.tips.length > 0 && (
                  <div className="bg-bg bg-opacity-50 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-sm font-medium text-accent mb-2">
                      💡 Pro Tips
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress */}
      <div className="mt-8 p-6 bg-surface rounded-lg border border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-accent font-bold">
            {completedSteps.size} / {steps.length} completed
          </span>
        </div>
        <div className="w-full bg-bg rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(completedSteps.size / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
