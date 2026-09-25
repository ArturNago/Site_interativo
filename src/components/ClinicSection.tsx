import React, { useRef, useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { MaskRevealImage } from './MaskRevealImage.tsx';
import { Leaf, VolumeX, SunMedium, Eye } from 'lucide-react';

export const ClinicSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = (rect.top / window.innerHeight) * 60;
      setScrollYOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="consultorio"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#F9F8F6]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-12">
        <div className="max-w-2xl">
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
              <span>Espaço Físico</span>
              <span aria-hidden="true">·</span>
              <span>Atmosfera & Acolhimento</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} distance={20}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#2C302E] tracking-tight mb-4">
              Um espaço pensado para o seu repouso mental.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300} distance={16}>
            <p className="text-base text-[#2C302E]/75 font-light leading-relaxed">
              Cada textura, tonalidade e ângulo foi planejado para reduzir estímulos invasivos do dia a dia, acolhendo você em um ambiente de profunda tranquilidade e foco interno.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Full-Width Parallax Showcase with Image Mask Reveal */}
      <div className="relative w-full overflow-hidden my-6">
        <div className="relative h-[480px] sm:h-[560px] md:h-[650px] w-full overflow-hidden">
          <MaskRevealImage
            src="/susan_moraes_consultorio.png"
            alt="Consultório de psicologia de Susan Moraes com vista para jardim de bambu e poltrona de linho"
            aspectRatio="21/9"
            parallaxSpeed={0.28}
            curtainColor="#EFECE6"
            className="h-[140%] w-full object-cover"
          />

          {/* Atmospheric subtle vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C302E]/70 via-transparent to-transparent z-10" />

          {/* Floating Details Overlay at Bottom */}
          <div className="absolute bottom-8 left-0 right-0 z-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 text-white">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8A9A86] font-medium block mb-1">
                    Atmosfera Sensorial
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-light text-white/95 max-w-xl">
                    "O silêncio do ambiente permite que os seus pensamentos encontrem a própria voz."
                  </p>
                </div>

                <div className="flex items-center gap-6 text-xs text-white/80 font-light backdrop-blur-md bg-black/30 px-5 py-3 rounded-full border border-white/10">
                  <div className="flex items-center gap-2">
                    <SunMedium className="h-4 w-4 text-[#8A9A86]" />
                    <span>Luz Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VolumeX className="h-4 w-4 text-[#8A9A86]" />
                    <span>Tratamento Acústico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[#8A9A86]" />
                    <span>Biofilia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Sensory Dimensions Below Full-Width Image */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={150} distance={16}>
            <div className="p-6 rounded-xl bg-white/60 border border-[#2C302E]/6">
              <h4 className="font-serif text-lg font-normal text-[#2C302E] mb-2">
                Conforto Acústico
              </h4>
              <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light leading-relaxed">
                Paredes e esquadrias com atenuação sonora minuciosa para garantir confidencialidade absoluta das suas palavras e ausência de ruídos externos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250} distance={16}>
            <div className="p-6 rounded-xl bg-white/60 border border-[#2C302E]/6">
              <h4 className="font-serif text-lg font-normal text-[#2C302E] mb-2">
                Iluminação Calmante
              </h4>
              <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light leading-relaxed">
                Luz natural abundante durante o dia e iluminação indireta quente ao entardecer, respeitando os ciclos circadianos e evitando cansaço visual.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350} distance={16}>
            <div className="p-6 rounded-xl bg-white/60 border border-[#2C302E]/6">
              <h4 className="font-serif text-lg font-normal text-[#2C302E] mb-2">
                Design Tátil & Mineral
              </h4>
              <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light leading-relaxed">
                Móveis em carvalho maciço, tecidos em linho puro e plantas naturais que convidam os sentidos ao aterramento e à respiração tranquila.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
