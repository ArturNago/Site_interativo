import React, { useState, useEffect } from 'react';

export const BreathingBackground: React.FC = () => {
  const [breathPhase, setBreathPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');

  useEffect(() => {
    // 4s Inhale, 4s Hold, 4s Exhale cycle for meditative pacing
    const interval = setInterval(() => {
      setBreathPhase((prev) => {
        if (prev === 'inspire') return 'hold';
        if (prev === 'hold') return 'expire';
        return 'inspire';
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Base warm canvas */}
      <div className="absolute inset-0 bg-[#F9F8F6]" />

      {/* Large subtle breathing sage gradient blob (top-right) */}
      <div
        className="animate-breathe absolute -top-[15%] -right-[10%] h-[75vw] w-[75vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-br from-[#8A9A86]/20 via-[#A2B29F]/10 to-transparent blur-[110px]"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Warm Sand gradient blob (center-left) */}
      <div
        className="animate-breathe absolute top-[30%] -left-[15%] h-[65vw] w-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-[#E6E0D4]/35 via-[#EFECE6]/25 to-transparent blur-[100px]"
        style={{
          animationDelay: '-6s',
          willChange: 'transform, opacity',
        }}
      />

      {/* Soft earthen grounding blob (bottom-right) */}
      <div
        className="animate-breathe absolute bottom-[10%] right-[5%] h-[55vw] w-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-[#8A9A86]/15 via-[#EAE5DB]/20 to-transparent blur-[120px]"
        style={{
          animationDelay: '-10s',
          willChange: 'transform, opacity',
        }}
      />

      {/* Fine tactile paper noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2C302E 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
};
