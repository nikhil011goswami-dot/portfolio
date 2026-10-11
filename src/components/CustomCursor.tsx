import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, [data-cursor-hover]') !== null;
      setHovering(isInteractive);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    let rafId: number;
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [position.x, position.y]);

  if (!visible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${ringPosition.x}px, ${ringPosition.y}px) translate(-50%, -50%)` }}
      />
    </>
  );
}
