import { Award, HeartHandshake, Microscope, ShieldCheck, Sparkles } from 'lucide-react';
import { featureItems, labels } from '../data/profile';
import { Section } from './Section';

const featureIcons = [Microscope, Sparkles, HeartHandshake, ShieldCheck, Award];

export function ApproachSection() {
  return (
    <Section eyebrow={labels.approachEyebrow} title={labels.approachTitle}>
      <p className="lead">{labels.approachText}</p>
      <div className="feature-list">
        {featureItems.map((item, index) => {
          const Icon = featureIcons[index] ?? Sparkles;

          return (
            <div key={item}>
              <Icon size={18} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
