'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '@/components/effects/GlowCard';
import type { ITimelineItem } from '@/data/experience';

interface TimelineCardProps {
  item: ITimelineItem;
  index: number;
  isInView: boolean;
  glowColor?: string;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  index,
  isInView,
  glowColor = 'rgba(139, 92, 246, 0.15)',
}) => {
  const accentColor = glowColor.includes('6, 182, 212') ? 'cyan' : 
                       glowColor.includes('34, 197, 94') ? 'emerald' : 'violet';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <GlowCard 
        className="rounded-xl border border-surface-border bg-surface transition-colors duration-200 hover:border-violet/30"
        glowColor={glowColor}
      >
        <div className="flex flex-col gap-5 p-8 md:flex-row md:gap-10">
          {/* Left — Meta */}
          <div className="flex shrink-0 flex-col gap-1 md:w-48">
            <span 
              className={`inline-flex w-fit rounded-md border border-${accentColor}/20 bg-${accentColor}/5 px-3 py-1 text-xs font-medium text-${accentColor}`}
            >
              {item.duration}
            </span>
            <p className="mt-1 text-sm text-text-muted">{item.subtitle}</p>
          </div>

          {/* Right — Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>

            {/* Highlights — compact inline */}
            <div className="mt-5 flex flex-col gap-1">
              {item.highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="text-sm text-text-muted"
                >
                  <span className={`mr-1 text-${accentColor}`}>→</span>
                  {highlight}
                </p>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="mt-5 flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-surface-border bg-background px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export { TimelineCard };
