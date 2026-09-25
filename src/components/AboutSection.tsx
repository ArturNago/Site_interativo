import React from 'react';
import { MaskRevealImage } from './MaskRevealImage.tsx';
import { ScrollReveal } from './ScrollReveal.tsx';
import { Shield, Sparkles, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with 3D Tilt Effect */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={150} distance={30}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual backdrop frame */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-[#8A9A86]/30 bg-[#8A9A86]/5 -z-10"
                />

                {/* Portrait with 3D Tilt and Mask Reveal */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(44,48,46,0.1)] border border-[#2C302E]/8">
                  <MaskRevealImage
                    src="/susan_moraes_retrato.png"
                    alt="Retrato profissional de Susan Moraes, psicóloga clínica"
                    aspectRatio="3/4"
                    enableTilt={true}
                    parallaxSpeed={0.1}
                    curtainColor="#EFECE6"
                    className="rounded-2xl"
                  />
                  
                  {/* Subtle 3D tilt instruction hint */}
                  <div className="absolute top-4 left-4 z-10 rounded-full bg-white/80 backdrop-blur-md px-3 py-1 border border-[#2C302E]/6">
                    <span className="text-[10px] tracking-wider uppercase text-[#2C302E]/70 font-medium">
                      Interativo · Incline com o cursor
                    </span>
                  </div>
                </div>

                {/* Professional Credential Card */}
                <div className="mt-5 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-[#2C302E]/6 flex items-start justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-medium text-[#2C302E]">
                      Susan Moraes
                    </h4>
                    <p className="text-xs text-[#8A9A86] font-medium mt-0.5">
                      Psicóloga Clínica
                    </p>
                  </div>
                  <span className="text-[11px] text-[#2C302E]/50 font-mono tracking-tight">
                    [CRP a confirmar]
                  </span>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio and Clinical Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
                <span>Sobre a Profissional</span>
                <span aria-hidden="true">·</span>
                <span>Trajetória Ética</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={24}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#2C302E] tracking-tight text-balance mb-6">
                Acolher a história do outro com <span className="italic text-[#8A9A86]">serenidade</span>, respeito e profundidade.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={350} distance={20}>
              <div className="space-y-4 text-base text-[#2C302E]/80 font-light leading-relaxed mb-8">
                <p>
                  Sou psicóloga dedicada à prática clínica individual, compreendendo o espaço terapêutico não como um lugar de conselhos prontos, mas como um laboratório íntimo onde o sujeito pode se escutar verdadeiramente.
                </p>
                <p>
                  Com formação continuada e supervisão clínica constante <span className="text-xs text-[#2C302E]/60 italic">[Informação sobre especializações acadêmicas a confirmar]</span>, meu compromisso é proporcionar uma escuta livre de pré-julgamentos, onde medos, desejos, lutos e aspirações encontram acolhida e elaboração.
                </p>
              </div>
            </ScrollReveal>

            {/* 3 Pillars of Care */}
            <div className="space-y-4 pt-4 border-t border-[#2C302E]/10">
              <ScrollReveal delay={450} distance={16}>
                <div className="group p-4 rounded-xl transition-colors hover:bg-white/60 border border-transparent hover:border-[#2C302E]/6 flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8A9A86]/15 text-[#8A9A86]">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-[#2C302E] tracking-tight">
                      Confidencialidade e Segurança Irrestrita
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light mt-1 leading-relaxed">
                      O sigilo profissional estabelece o ambiente seguro para que você explore os temas mais delicados da sua vida com tranquilidade absoluta.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={550} distance={16}>
                <div className="group p-4 rounded-xl transition-colors hover:bg-white/60 border border-transparent hover:border-[#2C302E]/6 flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8A9A86]/15 text-[#8A9A86]">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-[#2C302E] tracking-tight">
                      Respeito ao Tempo e à Singularidade
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light mt-1 leading-relaxed">
                      Não existem fórmulas universais para a mente humana. O processo terapêutico é construído em consonância com o seu ritmo individual.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={650} distance={16}>
                <div className="group p-4 rounded-xl transition-colors hover:bg-white/60 border border-transparent hover:border-[#2C302E]/6 flex items-start gap-4">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#8A9A86]/15 text-[#8A9A86]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-[#2C302E] tracking-tight">
                      Sustentação Ética e Científica
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2C302E]/70 font-light mt-1 leading-relaxed">
                      Atuação pautada nas diretrizes do Conselho Federal de Psicologia, sem sensacionalismo ou promessas irreais de cura imediata.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
