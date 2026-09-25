import React from 'react';
import { MagneticButton } from './MagneticButton.tsx';
import { MaskRevealImage } from './MaskRevealImage.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import { ArrowDown, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cascading Staggered Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Metadata unboxed kicker */}
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-6">
                <span>Psicologia Clínica</span>
                <span aria-hidden="true">·</span>
                <span>Acolhimento Humanizado</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2C302E]/60">[CRP a confirmar]</span>
              </div>
            </ScrollReveal>

            {/* Main Editorial Headline - Staggered Lines */}
            <div className="space-y-1 mb-8">
              <ScrollReveal delay={200} distance={32}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.12] text-[#2C302E] tracking-tight text-balance">
                  Um refúgio para desacelerar,
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={350} distance={32}>
                <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-light leading-[1.12] text-[#8A9A86] block tracking-tight">
                  compreender e transformar.
                </span>
              </ScrollReveal>
            </div>

            {/* Balanced Narrative Prose */}
            <ScrollReveal delay={500} distance={24}>
              <p className="max-w-xl text-base sm:text-lg text-[#2C302E]/75 leading-relaxed font-light mb-10 text-balance">
                A terapia não precisa ser apressada. Ofereço um espaço terapêutico seguro e sofisticado para quem busca reencontrar o próprio eixo, elaborar conflitos e cultivar uma vida emocional mais livre e integrada.
              </p>
            </ScrollReveal>

            {/* Magnetic CTA Group */}
            <ScrollReveal delay={650} distance={20}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <MagneticButton
                  href="#contato"
                  variant="primary"
                  className="shadow-[0_8px_30px_rgba(44,48,46,0.12)] text-sm"
                >
                  Entrar em contato
                </MagneticButton>
                <MagneticButton
                  href="#sobre"
                  variant="secondary"
                  className="text-sm"
                >
                  Conhecer a Abordagem
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Sensory Quiet Trust Markers */}
            <ScrollReveal delay={800} distance={16}>
              <div className="mt-14 pt-8 border-t border-[#2C302E]/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#2C302E]/65">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8A9A86]" />
                  <span>Sessões Presenciais & Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8A9A86]" />
                  <span>Ambiente Confidencial & Ético</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8A9A86]" />
                  <span>Ritmo respeitoso e singular</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Floating Parallax Image with Mask Reveal */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={400} distance={40}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating ambient decorative halo */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-[#8A9A86]/20 blur-3xl"
                />
                
                {/* Masked image card with subtle border and shadow */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(44,48,46,0.12)] border border-[#2C302E]/8">
                  <MaskRevealImage
                    src="/susan_moraes_site_hero.png"
                    alt="Espaço sereno e acolhedor do consultório de Susan Moraes"
                    aspectRatio="4/3"
                    parallaxSpeed={0.15}
                    curtainColor="#EFECE6"
                    className="hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle caption badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 rounded-xl bg-[#F9F8F6]/85 backdrop-blur-md px-4 py-3 border border-[#2C302E]/6">
                    <p className="font-serif italic text-xs text-[#2C302E] leading-snug">
                      "A escuta é o primeiro passo para a reconciliação consigo mesmo."
                    </p>
                    <span className="text-[10px] text-[#2C302E]/50 tracking-wider uppercase mt-1 block">
                      Susan Moraes · Psicóloga [CRP a confirmar]
                    </span>
                  </div>
                </div>

                {/* Floating sensory indicator note */}
                <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-3 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 border border-[#2C302E]/8 shadow-lg">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8A9A86]/20 text-[#8A9A86]">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-medium text-[#2C302E]">Ambiente Sensorial</p>
                    <p className="text-[10px] text-[#2C302E]/60">Pausas meditativas e escuta acolhedora</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <ScrollReveal delay={900}>
            <a
              href="#manifesto"
              className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#2C302E]/40 hover:text-[#8A9A86] transition-colors focus:outline-none"
              aria-label="Rolar para a próxima seção"
            >
              <span className="font-medium tracking-widest text-[11px]">Iniciar a Jornada</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:text-[#8A9A86]" />
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
