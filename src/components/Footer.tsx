import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#242726] text-[#F9F8F6] pt-16 pb-12 overflow-hidden border-t border-[#3A403D]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Professional ID */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl tracking-tight text-white block">
              Susan Moraes
            </span>
            <p className="text-xs uppercase tracking-widest text-[#8A9A86] font-medium">
              Psicologia Clínica & Acolhimento Individual
            </p>
            <p className="text-sm text-[#F9F8F6]/70 font-light leading-relaxed max-w-sm">
              Um espaço dedicado à reflexão profunda, elaboração psíquica e reconstrução de sentidos para a vida cotidiana.
            </p>
            <div className="pt-2 text-xs text-[#F9F8F6]/50 font-mono">
              Registro Profissional: [CRP a confirmar]
            </div>
          </div>

          {/* Navigation mirror */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F9F8F6]/70">
              <li>
                <a href="#abordagem" className="hover:text-white transition-colors">
                  A Abordagem
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Profissional
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-white transition-colors">
                  O Consultório
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Agendamento & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Important Ethical & Crisis Notice */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A9A86] font-medium mb-1">
              <Shield className="h-3.5 w-3.5" />
              <span>Apoio em Crises Emocionais</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F9F8F6]/70 leading-relaxed font-light space-y-2">
              <p>
                Este site não presta atendimento de emergência psicológica ou médica imediata.
              </p>
              <p className="text-[#F9F8F6]/90">
                Em situações de sofrimento agudo ou risco à vida, ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) pelo número 188</strong> ou procure a Unidade de Pronto Atendimento (UPA / CAPS) mais próxima.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar with prototype notice and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F8F6]/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Susan Moraes · Todos os direitos reservados.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#8A9A86]">Protótipo Demonstrativo</span>
            <span aria-hidden="true">·</span>
            <span>[Informações a confirmar]</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="interactive-target inline-flex items-center gap-2 text-xs text-[#F9F8F6]/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Voltar ao início da página"
          >
            <span>Retornar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
