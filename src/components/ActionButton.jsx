import { ChevronRight } from 'lucide-react';

export function ActionButton({ href, icon: Icon, children, variant = 'primary' }) {
  return (
    <a className={`action action--${variant}`} href={href} target="_blank" rel="noreferrer">
      <Icon size={19} strokeWidth={2.2} />
      <span>{children}</span>
      <ChevronRight className="action__arrow" size={18} />
    </a>
  );
}
