import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  detail?: string;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Como funciona o primeiro encontro terapêutico?',
      answer:
        'A primeira sessão é um momento de escuta e reconhecimento mútuo. Você terá a oportunidade de relatar o que o motivou a buscar ajuda, seus incômodos principais e dúvidas. Não há necessidade de organizar um discurso perfeito: acolhemos a fala tal como ela surge, no seu tempo.',
      detail: 'Duração: 50 minutos · Formato: Presencial ou Online',
    },
    {
      id: 'faq-2',
      question: 'Qual é a duração e a frequência habitual das sessões?',
      answer:
        'Cada sessão individual tem a duração de 50 minutos. A frequência recomendada para a consistência e eficácia do processo é semanal, reservando um dia e horário fixo na agenda para consolidar o vínculo terapêutico e a continuidade das reflexões.',
      detail: 'Periodicidade semanal com horário protegido na agenda',
    },
    {
      id: 'faq-3',
      question: 'O atendimento online tem a mesma eficácia que o presencial?',
      answer:
        'Sim. Diversos estudos científicos internacionais e as diretrizes do Conselho Federal de Psicologia validam a plena eficácia da psicoterapia online. O atendimento ocorre por videochamada criptografada. O único pré-requisito é que você esteja em um cômodo com privacidade sonora e boa conexão de internet.',
      detail: 'Atendimento para qualquer região do Brasil e brasileiros no exterior',
    },
    {
      id: 'faq-4',
      question: 'Há cobertura por convênio médico ou plano de saúde?',
      answer:
        'Os atendimentos são realizados exclusivamente de forma particular. No entanto, forneço nota fiscal e recibo detalhado conforme as normas exigidas pelas operadoras de saúde, permitindo que você solicite o reembolso das consultas conforme as diretrizes do seu plano.',
      detail: 'Emissão ágil de recibo para pedido de reembolso',
    },
    {
      id: 'faq-5',
      question: 'Como saber se preciso de psicoterapia neste momento da vida?',
      answer:
        'Você não precisa esperar um colapso ou sofrimento insustentável para buscar acolhimento. A psicoterapia é valiosa tanto para quadros de ansiedade, angústia, luto e estresse crônico quanto para períodos de transição profissional, questionamentos existenciais ou desejo de aprofundar o autoconhecimento.',
      detail: 'A terapia é um investimento em saúde preventiva e clareza',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#F5F3EE]/40 border-t border-[#2C302E]/6">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
              <span>Transparência & Cuidado</span>
              <span aria-hidden="true">·</span>
              <span>Perguntas Frequentes</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} distance={20}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#2C302E] tracking-tight mb-4">
              Dúvidas essenciais sobre o processo.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300} distance={16}>
            <p className="text-base text-[#2C302E]/70 font-light leading-relaxed">
              Esclarecer o funcionamento da clínica traz previsibilidade e tranquilidade antes de darmos o primeiro passo.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <ScrollReveal key={faq.id} delay={150 + idx * 75} distance={16}>
                <div
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#8A9A86]/40 shadow-[0_8px_25px_rgba(44,48,46,0.04)]'
                      : 'bg-white/60 hover:bg-white border-[#2C302E]/8 hover:border-[#8A9A86]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="interactive-target w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none select-none cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-[#2C302E] pr-6 tracking-tight">
                      {faq.question}
                    </span>

                    {/* Animated + to - morphing icon */}
                    <div
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'border-[#8A9A86] bg-[#8A9A86] text-white'
                          : 'border-[#2C302E]/20 text-[#2C302E]/70 hover:border-[#8A9A86]'
                      }`}
                    >
                      {/* Horizontal bar */}
                      <span className="absolute h-0.5 w-3.5 bg-current rounded-full transition-transform duration-300" />
                      {/* Vertical bar (rotates to 90deg to form -) */}
                      <span
                        className={`absolute h-3.5 w-0.5 bg-current rounded-full transition-transform duration-300 ${
                          isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                        }`}
                      />
                    </div>
                  </button>

                  {/* Accordion Expandable Content with smooth grid height */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-[#2C302E]/6 mt-2">
                        <p className="text-sm sm:text-base text-[#2C302E]/75 font-light leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        {faq.detail && (
                          <div className="text-xs text-[#8A9A86] font-medium flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#8A9A86]" />
                            <span>{faq.detail}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-12 text-center">
          <ScrollReveal delay={600}>
            <p className="text-xs text-[#2C302E]/50">
              Tem alguma dúvida específica que não foi listada? Fique à vontade para perguntar no formulário abaixo.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
