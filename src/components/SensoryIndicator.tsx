import React, { useState } from 'react';
import { Sparkles, Info, X } from 'lucide-react';

export const SensoryIndicator: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-30 select-none">
      {!expanded ? (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="interactive-target group flex items-center gap-2.5 rounded-full bg-[#2C302E]/90 hover:bg-[#2C302E] text-white px-3.5 py-1.5 text-[11px] shadow-lg backdrop-blur-md border border-white/10 transition-all duration-300"
          aria-label="Ver informações do protótipo sensorial"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A9A86] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A9A86]" />
          </span>
          <span className="font-medium tracking-wide">A Jornada Sensorial</span>
          <span className="text-white/40">·</span>
          <span className="text-[10px] text-[#8A9A86] font-mono uppercase tracking-wider">Demo</span>
        </button>
      ) : (
        <div className="max-w-xs rounded-2xl bg-[#2C302E]/95 backdrop-blur-xl p-4 text-white shadow-2xl border border-white/15 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2 text-xs font-serif text-[#8A9A86]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>A Jornada Sensorial</span>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="interactive-target text-white/50 hover:text-white p-1"
              aria-label="Fechar informações"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-white/80 leading-relaxed font-light mb-2">
            Landing page demonstrativa de alto padrão para a psicóloga Susan Moraes.
          </p>
          <ul className="text-[10px] text-white/65 space-y-1">
            <li>· Cursor magnético com delay e snap dinâmico</li>
            <li>· Imagens com revelação de máscara e parallax</li>
            <li>· Tilt 3D interativo guiado pelo mouse no retrato</li>
            <li>· Background fluido simulando respiração calma</li>
            <li>· [Informações a confirmar · CRP a confirmar]</li>
          </ul>
        </div>
      )}
    </div>
  );
};
