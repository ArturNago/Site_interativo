import React from 'react';
import { X, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { MagneticButton } from './MagneticButton.tsx';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  submittedData: {
    name: string;
    email: string;
    phone: string;
    shift: string;
  };
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  submittedData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-[#2C302E]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#F9F8F6] p-8 sm:p-10 shadow-2xl border border-[#2C302E]/10 z-10 transition-all my-8 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="interactive-target absolute top-6 right-6 p-2 rounded-full text-[#2C302E]/50 hover:text-[#2C302E] hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Success Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#8A9A86]/20 text-[#8A9A86]">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        {/* Modal Title */}
        <span className="text-xs uppercase tracking-widest text-[#8A9A86] font-medium block mb-2">
          Demonstração de Envio Concluída
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C302E] tracking-tight mb-4">
          Acolhimento simulado com sucesso.
        </h3>

        {/* Explanation */}
        <div className="space-y-3 text-sm text-[#2C302E]/80 font-light leading-relaxed mb-6">
          <p>
            Olá{submittedData.name ? `, ${submittedData.name}` : ''}! Esta ação demonstrou o fluxo de contato e agendamento da landing page.
          </p>
          <div className="p-4 rounded-xl bg-white/70 border border-[#2C302E]/6 text-xs text-[#2C302E]/75 space-y-1.5">
            <div className="flex items-center gap-2 font-medium text-[#2C302E]">
              <ShieldCheck className="h-4 w-4 text-[#8A9A86]" />
              <span>Aviso Ético & Privacidade de Dados</span>
            </div>
            <p>
              Por se tratar de um <strong>Protótipo Demonstrativo</strong> para avaliação de design e experiência do usuário, <strong>nenhum dado pessoal foi enviado para servidores externos ou armazenado</strong>.
            </p>
          </div>
          <p className="text-xs text-[#2C302E]/65">
            Em uma versão final em produção, a solicitação seria direcionada de forma segura e criptografada diretamente ao canal oficial de recepção da psicóloga Susan Moraes.
          </p>
        </div>

        {/* Regulatory disclaimer */}
        <div className="pt-4 border-t border-[#2C302E]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#2C302E]/50">
            Susan Moraes · Psicóloga [CRP a confirmar]
          </div>
          <MagneticButton
            variant="primary"
            onClick={onClose}
            className="!py-2 !px-6 text-xs uppercase tracking-wider"
          >
            Entendido
          </MagneticButton>
        </div>

      </div>
    </div>
  );
};
