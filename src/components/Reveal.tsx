import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Direction = 'up' | 'left' | 'right' | 'scale';

const classMap: Record<Direction, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div',
}: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${classMap[direction]} ${revealed ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
