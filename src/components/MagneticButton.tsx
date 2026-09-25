import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  strength?: number;
  className?: string;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  strength = 0.25,
  className = '',
  href,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [fillCoords, setFillCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });

    // Relative to button for the liquid fill expansion
    setFillCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setFillCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const variantClasses = {
    primary:
      'bg-[#2C302E] text-[#F9F8F6] border border-[#2C302E] hover:border-[#8A9A86] shadow-sm',
    secondary:
      'bg-transparent text-[#2C302E] border border-[#2C302E]/20 hover:border-[#8A9A86]/60 backdrop-blur-sm',
    ghost:
      'bg-transparent text-[#2C302E] border-b border-transparent hover:border-[#8A9A86] px-2 py-1',
  };

  const fillClasses = {
    primary: 'bg-[#8A9A86]',
    secondary: 'bg-[#8A9A86]/15',
    ghost: 'bg-transparent',
  };

  const sharedStyles = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered ? 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const content = (
    <>
      {/* Liquid expanding fill circle */}
      {variant !== 'ghost' && (
        <span
          ref={fillRef}
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-full transition-transform duration-700 ease-out ${fillClasses[variant]}`}
          style={{
            left: fillCoords.x,
            top: fillCoords.y,
            width: '260px',
            height: '260px',
            marginLeft: '-130px',
            marginTop: '-130px',
            transform: isHovered ? 'scale(1)' : 'scale(0)',
          }}
        />
      )}

      {/* Button label with micro-parallax offset */}
      <span
        className="relative z-10 flex items-center justify-center gap-2 tracking-wide font-medium transition-transform duration-200"
        style={{
          transform: `translate3d(${position.x * 0.3}px, ${position.y * 0.3}px, 0)`,
        }}
      >
        {children}
      </span>
    </>
  );

  const baseClasses = `relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm transition-colors cursor-pointer select-none active:scale-[0.98] ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        style={sharedStyles}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      style={sharedStyles}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
