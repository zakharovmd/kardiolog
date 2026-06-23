import { HeartPulse } from 'lucide-react';
import { helpItems, labels } from '../data/profile.js';
import { Section } from './Section.jsx';

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
