import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal.tsx';
import { MaskRevealImage } from './MaskRevealImage.tsx';
import { MagneticButton } from './MagneticButton.tsx';
import { DemoModal } from './DemoModal.tsx';
import { Send, Check, Shield, Clock, Phone, Mail, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shift: 'tarde',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor, informe seu nome.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulating therapeutic calming loader
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true);
    }, 1600);
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Minimalist Form with Animated Expanding Underlines */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
                <span>Inicie seu Acolhimento</span>
                <span aria-hidden="true">·</span>
                <span>Contato Confidencial</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={20}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] text-[#2C302E] tracking-tight mb-4">
                Dê o primeiro passo para o seu cuidado.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300} distance={16}>
              <p className="text-base text-[#2C302E]/75 font-light leading-relaxed mb-10 max-w-xl">
                Preencha o formulário para alinharmos os horários disponíveis e esclarecermos quaisquer dúvidas sobre as sessões. Retorno em até 24 horas úteis.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400} distance={24}>
              <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
                
                {/* Field 1: Nome Completo */}
                <div className="group relative">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-[#2C302E]/70 font-medium mb-2"
                  >
                    Seu Nome Completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full bg-transparent py-3 text-base text-[#2C302E] placeholder-[#2C302E]/35 focus:outline-none"
                    disabled={isLoading}
                  />
                  {/* Subtle static bottom baseline */}
                  <div className="h-[1px] w-full bg-[#2C302E]/15" />
                  {/* Animated expanding line originating from center on focus */}
                  <div className="h-[2px] w-full bg-[#8A9A86] -mt-[2px] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  {errors.name && (
                    <p className="text-xs text-rose-700 mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Field 2 & 3: E-mail & WhatsApp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* E-mail */}
                  <div className="group relative">
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider text-[#2C302E]/70 font-medium mb-2"
                    >
                      E-mail de Contato *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seuemail@exemplo.com"
                      className="w-full bg-transparent py-3 text-base text-[#2C302E] placeholder-[#2C302E]/35 focus:outline-none"
                      disabled={isLoading}
                    />
                    <div className="h-[1px] w-full bg-[#2C302E]/15" />
                    <div className="h-[2px] w-full bg-[#8A9A86] -mt-[2px] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)]" />
                    {errors.email && (
                      <p className="text-xs text-rose-700 mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div className="group relative">
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider text-[#2C302E]/70 font-medium mb-2"
                    >
                      WhatsApp / Telefone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-transparent py-3 text-base text-[#2C302E] placeholder-[#2C302E]/35 focus:outline-none"
                      disabled={isLoading}
                    />
                    <div className="h-[1px] w-full bg-[#2C302E]/15" />
                    <div className="h-[2px] w-full bg-[#8A9A86] -mt-[2px] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                </div>

                {/* Field 4: Preferência de Turno */}
                <div className="group relative">
                  <label
                    htmlFor="shift"
                    className="block text-xs uppercase tracking-wider text-[#2C302E]/70 font-medium mb-2"
                  >
                    Período de Preferência para Atendimento
                  </label>
                  <select
                    id="shift"
                    name="shift"
                    value={formData.shift}
                    onChange={handleInputChange}
                    className="w-full bg-transparent py-3 text-base text-[#2C302E] focus:outline-none cursor-pointer"
                    disabled={isLoading}
                  >
                    <option value="manha">Manhã (08h às 12h)</option>
                    <option value="tarde">Tarde (13h às 18h)</option>
                    <option value="noite">Noite (18h às 21h)</option>
                    <option value="flexivel">Horário flexível / A combinar</option>
                  </select>
                  <div className="h-[1px] w-full bg-[#2C302E]/15" />
                  <div className="h-[2px] w-full bg-[#8A9A86] -mt-[2px] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>

                {/* Field 5: Mensagem Breve */}
                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-[#2C302E]/70 font-medium mb-2"
                  >
                    Mensagem ou Questão que Deseja Compartilhar (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Sinta-se à vontade para escrever brevemente sobre o que busca..."
                    className="w-full bg-transparent py-3 text-base text-[#2C302E] placeholder-[#2C302E]/35 focus:outline-none resize-none"
                    disabled={isLoading}
                  />
                  <div className="h-[1px] w-full bg-[#2C302E]/15" />
                  <div className="h-[2px] w-full bg-[#8A9A86] -mt-[2px] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>

                {/* Submit Button & Interactive Simulated Loader */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    disabled={isLoading}
                    className="min-w-[220px]"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-[#8A9A86]" />
                        <span>Enviando com cuidado...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Enviar Solicitação</span>
                        <Send className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </MagneticButton>

                  <div className="flex items-center gap-2 text-xs text-[#2C302E]/60 font-light">
                    <Shield className="h-3.5 w-3.5 text-[#8A9A86]" />
                    <span>Sigilo profissional garantido</span>
                  </div>
                </div>

              </form>
            </ScrollReveal>
          </div>

          {/* Right Column: Support Image & Practice Info */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={300} distance={30}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual support image: susan_moraes_contato.png */}
                <div className="rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(44,48,46,0.08)] border border-[#2C302E]/8 mb-8">
                  <MaskRevealImage
                    src="/susan_moraes_contato.png"
                    alt="Detalhe sensorial de acolhimento e xícara de cerâmica artesanal no consultório de Susan Moraes"
                    aspectRatio="4/3"
                    parallaxSpeed={0.12}
                    curtainColor="#EFECE6"
                    className="rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Direct info cards */}
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#2C302E]/8 space-y-4">
                  <h4 className="font-serif text-lg font-normal text-[#2C302E]">
                    Canais de Atendimento
                  </h4>

                  <div className="space-y-3 text-xs sm:text-sm text-[#2C302E]/80 font-light">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-[#8A9A86] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-[#2C302E]">Contato Direto</p>
                        <p className="text-[#2C302E]/60">[contato@susanmoraes.com.br — A confirmar]</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-[#8A9A86] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-[#2C302E]">WhatsApp Recepção</p>
                        <p className="text-[#2C302E]/60">[Telefone a confirmar]</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-[#8A9A86] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-[#2C302E]">Horários de Sessão</p>
                        <p className="text-[#2C302E]/60">Segunda a Sexta · 08h às 21h (com agendamento prévio)</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#2C302E]/6 text-[11px] text-[#2C302E]/50">
                    <span className="font-medium text-[#8A9A86]">Protótipo Demonstrativo:</span> Esta página é uma demonstração interativa de design e navegação sensorial.
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Demonstration Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        submittedData={formData}
      />
    </section>
  );
};
