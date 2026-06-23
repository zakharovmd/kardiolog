import type { LucideIcon } from 'lucide-react';

type InfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="info-card">
      <Icon size={20} />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
