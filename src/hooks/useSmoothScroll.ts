import { useEffect } from 'react';

/**
 * High-performance smooth scrolling simulation (momentum lerp)
 * Produces the signature buttery, serene scrolling velocity curve
 * while preserving full accessibility and native mobile touch performance.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Only apply on non-touch desktop devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isRunning = false;
    let animId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      currentY = lerp(currentY, targetY, 0.085);
      window.scrollTo(0, Math.round(currentY));

      if (Math.abs(targetY - currentY) > 0.5) {
        animId = requestAnimationFrame(updateScroll);
      } else {
        isRunning = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      // Don't intercept if modifier keys are pressed (zoom, etc.)
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;

      e.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY += e.deltaY * 0.9;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(updateScroll);
      }
    };

    // Keep targetY in sync if user drags scrollbar or uses keyboard
    const onScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    // Smooth anchor navigation
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        targetY = Math.max(0, top);
        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(updateScroll);
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onAnchorClick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(animId);
    };
  }, []);
}
