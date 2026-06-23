import { Award, Sparkles } from 'lucide-react';
import { featureItems, labels } from '../data/profile.js';
import { Section } from './Section.jsx';

const featureIcons = [Sparkles, Award];

export function ApproachSection() {
  return (
    <Section eyebrow={labels.approachEyebrow} title={labels.approachTitle}>
      <p className="lead">{labels.approachText}</p>
      <div className="feature-list">
        {featureItems.map((item, index) => {
          const Icon = featureIcons[index];

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
