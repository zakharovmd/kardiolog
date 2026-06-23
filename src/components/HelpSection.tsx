import { HeartPulse } from 'lucide-react';
import { helpItems, labels } from '../data/profile';
import { Section } from './Section';

export function HelpSection() {
  return (
    <Section eyebrow={labels.helpEyebrow} title={labels.helpTitle}>
      <div className="chips">
        {helpItems.map((item) => (
          <span className="chip" key={item}>
            <HeartPulse size={16} />
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
