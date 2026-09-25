import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { Wind, Play, Pause } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const [breathingActive, setBreathingActive] = useState(false);
  const [phase, setPhase] = useState<'inspire' | 'hold' | 'expire'>('inspire');

  React.useEffect(() => {
    if (!breathingActive) return;
    const interval = setInterval(() => {
      setPhase((p) => {
        if (p === 'inspire') return 'hold';
        if (p === 'hold') return 'expire';
        return 'inspire';
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [breathingActive]);

  const phaseLabels = {
    inspire: 'Inspire profundamente...',
    hold: 'Sustente o ar com calma...',
    expire: 'Solte o ar suavemente...',
  };

  return (
    <section id="manifesto" className="relative py-24 sm:py-32 border-y border-[#2C302E]/6 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
        
        {/* Subtle lead-in */}
        <ScrollReveal delay={100}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-8">
            <Wind className="h-3.5 w-3.5" />
            <span>Pausa para Respirar · A Jornada Sensorial</span>
          </div>
        </ScrollReveal>

        {/* Central Manifestation Quote */}
        <ScrollReveal delay={250} distance={32}>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-normal leading-[1.35] text-[#2C302E] tracking-tight text-balance mb-8">
            “O mundo moderno nos exige constante urgência. Mas o processo de reorganização emocional exige exatamente o oposto: <span className="italic text-[#8A9A86]">tempo, escuta e presença</span>.”
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={400} distance={20}>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#2C302E]/70 font-light leading-relaxed mb-12">
            No consultório, você não é avaliado nem julgado. Criamos juntos uma pausa consciente para investigar o que causa angústia, reorganizar significados e reencontrar a estabilidade emocional no seu ritmo singular.
          </p>
        </ScrollReveal>

        {/* Interactive Breathing Microinteraction */}
        <ScrollReveal delay={550} distance={20}>
          <div className="inline-flex flex-col items-center">
            <div className="relative flex items-center justify-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-[#2C302E]/8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                
                {/* Visual Breathing Orb */}
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#8A9A86]/25 transition-all duration-[4000ms] ease-in-out ${
                      breathingActive && phase === 'inspire'
                        ? 'scale-125 opacity-80'
                        : breathingActive && phase === 'hold'
                        ? 'scale-110 opacity-70'
                        : breathingActive && phase === 'expire'
                        ? 'scale-75 opacity-30'
                        : 'scale-90 opacity-40'
                    }`}
                  />
                  <div
                    className={`h-8 w-8 rounded-full bg-[#8A9A86] transition-transform duration-[4000ms] ${
                      breathingActive && phase === 'inspire' ? 'scale-110' : 'scale-95'
                    }`}
                  />
                </div>

                <div className="text-left">
                  <p className="text-sm font-medium text-[#2C302E]">
                    {breathingActive ? phaseLabels[phase] : 'Exercício guiado de respiração consciente'}
                  </p>
                  <p className="text-xs text-[#2C302E]/60 mt-0.5">
                    {breathingActive
                      ? 'Ciclo de 4 segundos para ancorar seu sistema nervoso no presente'
                      : 'Experimente 1 minuto para diminuir a frequência cardíaca'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setBreathingActive(!breathingActive)}
                  className="interactive-target inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[#2C302E] text-white hover:bg-[#8A9A86] transition-colors focus:outline-none"
                >
                  {breathingActive ? (
                    <>
                      <Pause className="h-3 w-3" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3" />
                      <span>Iniciar Pausa</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <span className="text-[11px] text-[#2C302E]/40 mt-3 font-light">
              Técnica recomendada para regulação autonômica e clareza mental
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
