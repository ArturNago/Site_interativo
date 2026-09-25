import React, { useRef, useState, useEffect } from 'react';

interface MaskRevealImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '3/4' | '4/3' | '1/1' | '21/9';
  parallaxSpeed?: number;
  enableTilt?: boolean;
  className?: string;
  containerClassName?: string;
  curtainColor?: string;
}

export const MaskRevealImage: React.FC<MaskRevealImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  parallaxSpeed = 0.12,
  enableTilt = false,
  className = '',
  containerClassName = '',
  curtainColor = '#EFECE6',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Scroll reveal trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll calculation
  useEffect(() => {
    let animId: number | null = null;

    const handleScroll = () => {
      if (animId !== null) return;
      animId = requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Relative position to center of viewport (-1 to +1)
          const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
          const offset = centerDelta * parallaxSpeed * 100;
          setParallaxOffset(offset);
        }
        animId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animId !== null) cancelAnimationFrame(animId);
    };
  }, [parallaxSpeed]);

  // 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 10 deg tilt
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glowX, glowY });
  };

  const handleMouseEnter = () => {
    if (enableTilt) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (enableTilt) {
      setIsHovering(false);
      setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
    }
  };

  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '3/4': 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${containerClassName}`}
      style={{
        perspective: enableTilt ? '1200px' : 'none',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sliding Color Mask Curtain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: curtainColor,
          transform: isRevealed ? 'translateY(-101%)' : 'translateY(0%)',
        }}
      />

      {/* Image Container with Parallax and 3D Tilt */}
      <div
        className="h-full w-full overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: enableTilt
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`
            : 'none',
          transformStyle: enableTilt ? 'preserve-3d' : 'flat',
        }}
      >
        {!hasError ? (
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            referrerPolicy="no-referrer"
            className={`h-[125%] w-full object-cover will-change-transform transition-all duration-700 ${
              isRevealed ? 'scale-100 filter-none' : 'scale-105 filter blur-xs'
            } ${className}`}
            style={{
              transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            }}
          />
        ) : (
          /* High-aesthetic SVG fallback */
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EFECE6] via-[#E2DDD4] to-[#C8D1C5] p-8 text-center text-[#2C302E]">
            <div className="mb-3 h-12 w-12 rounded-full border border-[#8A9A86]/40 bg-white/40 flex items-center justify-center">
              <span className="font-serif italic text-lg text-[#8A9A86]">S</span>
            </div>
            <p className="font-serif text-base tracking-wide">{alt}</p>
            <span className="text-xs text-[#2C302E]/60 mt-1">Susan Moraes · Psicologia Clínica</span>
          </div>
        )}

        {/* Specular soft light sheen during 3D tilt */}
        {enableTilt && isHovering && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-soft-light transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};
