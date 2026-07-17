'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TextReveal } from '@/components/effects/TextReveal';
import { TimelineCard } from '@/components/effects/TimelineCard';
import { COMPETITIVE_PROGRAMMING } from '@/data/competitive-programming';

const CompetitiveProgrammingSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="competitive-programming" className="relative py-20">
      <div ref={ref} className="mx-auto max-w-5xl px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-violet">Problem Solving</span>
          <TextReveal
            as="h2"
            className="mt-3 text-3xl font-bold text-foreground md:text-4xl"
            delay={0.1}
          >
            Competitive Programming
          </TextReveal>
        </motion.div>

        {/* Compact stacked cards */}
        <div className="flex flex-col gap-5">
          {COMPETITIVE_PROGRAMMING.map((cp, index) => (
            <TimelineCard
              key={cp.id}
              item={cp}
              index={index}
              isInView={isInView}
              glowColor="rgba(34, 197, 94, 0.15)"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CompetitiveProgrammingSection };
