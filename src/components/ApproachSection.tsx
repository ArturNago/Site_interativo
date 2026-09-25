import React from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { ArrowRight, Video, MapPin, HeartHandshake, Brain, Clock, Compass } from 'lucide-react';
import { MagneticButton } from './MagneticButton.tsx';

export const ApproachSection: React.FC = () => {
  const serviceAreas = [
    {
      index: '01',
      title: 'Ansiedade e Sobrecarga Contemporânea',
      description:
        'Aprender a reconhecer os disparadores de estresse, modular pensamentos intrusivos e restabelecer a sensação de calma interna perante as exigências cotidianas.',
      focus: 'Regulação emocional · Prevenção de burnout · Consciência somática',
    },
    {
      index: '02',
      title: 'Relações, Vínculos e Limites',
      description:
        'Compreender padrões relacionais repetitivos, desenvolver assertividade na comunicação e cultivar vínculos mais transparentes, autênticos e nutritivos.',
      focus: 'Padrões de apego · Comunicação não violenta · Assertividade',
    },
    {
      index: '03',
      title: 'Transições e Crises de Ciclo de Vida',
      description:
        'Apoio em momentos de mudança profunda: mudanças profissionais, términos de relações, lutos, maternidade/paternidade ou reinvenção de identidade.',
      focus: 'Elaboração de luto · Reorientação de propósito · Resiliência',
    },
    {
      index: '04',
      title: 'Autoconhecimento e Integração Pessoal',
      description:
        'Um mergulho cuidadoso na sua biografia para desatar nós do passado, acolher vulnerabilidades e alinhar escolhas presentes aos seus valores mais genuínos.',
      focus: 'Identidade · Autoestima · Autonomia emocional',
    },
  ];

  return (
    <section id="abordagem" className="relative py-24 sm:py-32 bg-[#F5F3EE]/60 border-t border-[#2C302E]/6">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
              <span>Campos de Investigação</span>
              <span aria-hidden="true">·</span>
              <span>Acolhimento Clínico</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} distance={24}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#2C302E] tracking-tight text-balance mb-6">
              O que nos mobiliza a procurar apoio e como podemos caminhar juntos.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300} distance={20}>
            <p className="text-base sm:text-lg text-[#2C302E]/75 font-light leading-relaxed">
              O sofrimento não é um sinal de fraqueza, mas um mensageiro de que algo na dinâmica da vida precisa de atenção, clareza e escuta sensível.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Service Cards Grid (Editorial Numbering) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceAreas.map((area, idx) => (
            <ScrollReveal key={area.index} delay={200 + idx * 100} distance={24}>
              <div className="group h-full p-8 sm:p-10 rounded-2xl bg-white/70 hover:bg-white transition-all duration-500 border border-[#2C302E]/8 hover:border-[#8A9A86]/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(44,48,46,0.06)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#8A9A86] font-medium tracking-widest">
                      {area.index}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8A9A86]/30 group-hover:bg-[#8A9A86] transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2C302E] tracking-tight mb-4 group-hover:text-[#687964] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#2C302E]/75 font-light leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2C302E]/6">
                  <span className="text-xs text-[#8A9A86] font-medium block">
                    {area.focus}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modalities Banner (Presencial & Online) */}
        <ScrollReveal delay={500} distance={20}>
          <div className="rounded-2xl bg-gradient-to-r from-[#2C302E] to-[#3A403D] text-[#F9F8F6] p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#8A9A86] font-medium block mb-2">
                Modalidades de Atendimento
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white mb-3">
                Flexibilidade com o mesmo compromisso de acolhimento.
              </h3>
              <p className="text-sm sm:text-base text-[#F9F8F6]/80 font-light leading-relaxed">
                As sessões podem ocorrer de forma <strong>presencial</strong> em consultório planejado para serenidade acústica e visual, ou <strong>online</strong> via videoconferência segura e criptografada com total comodidade.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-[#F9F8F6]/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#8A9A86]" />
                  <span>Consultório Presencial [Informação de localização a confirmar]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-4 w-4 text-[#8A9A86]" />
                  <span>Atendimento Online para todo o Brasil e exterior</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <MagneticButton
                href="#contato"
                variant="secondary"
                className="!text-[#F9F8F6] !border-[#F9F8F6]/30 hover:!border-[#8A9A86] !bg-white/10"
              >
                Conversar sobre horários
              </MagneticButton>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
