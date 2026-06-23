import type { MouseEventHandler, ReactNode } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';

type ActionButtonProps = {
  href?: string;
  icon: LucideIcon;
  children: ReactNode;
  variant?: 'primary' | 'light' | 'outline' | 'telegram' | 'whatsapp';
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function ActionButton({ href, icon: Icon, children, variant = 'primary', onClick }: ActionButtonProps) {
  if (onClick) {
    return (
      <button className={`action action--${variant}`} type="button" onClick={onClick}>
        <Icon size={19} strokeWidth={2.2} />
        <span>{children}</span>
        <ChevronRight className="action__arrow" size={18} />
      </button>
    );
  }

  return (
    <a className={`action action--${variant}`} href={href} target="_blank" rel="noreferrer">
      <Icon size={19} strokeWidth={2.2} />
      <span>{children}</span>
      <ChevronRight className="action__arrow" size={18} />
    </a>
  );
}
