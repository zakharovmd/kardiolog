import type { MouseEventHandler, ReactNode } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { reachGoal, type MetrikaGoal } from '../lib/metrika';

type ActionButtonProps = {
  href?: string;
  icon: LucideIcon;
  children: ReactNode;
  variant?: 'primary' | 'light' | 'outline' | 'telegram' | 'whatsapp' | 'max';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  goal?: MetrikaGoal;
};

export function ActionButton({ href, icon: Icon, children, variant = 'primary', onClick, goal }: ActionButtonProps) {
  if (onClick) {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      if (goal) {
        reachGoal(goal);
      }
      onClick(event);
    };

    return (
      <button className={`action action--${variant}`} type="button" onClick={handleClick}>
        <Icon size={19} strokeWidth={2.2} />
        <span>{children}</span>
        <ChevronRight className="action__arrow" size={18} />
      </button>
    );
  }

  return (
    <a
      className={`action action--${variant}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={goal ? () => reachGoal(goal) : undefined}
    >
      <Icon size={19} strokeWidth={2.2} />
      <span>{children}</span>
      <ChevronRight className="action__arrow" size={18} />
    </a>
  );
}
