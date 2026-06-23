import { GraduationCap } from 'lucide-react';
import { educationItems, labels } from '../data/profile';
import { Section } from './Section';

export function EducationSection() {
  return (
    <Section eyebrow={labels.educationEyebrow} title={labels.educationTitle}>
      <div className="timeline">
        {educationItems.map((item) => (
          <div className="timeline__item" key={item}>
            <GraduationCap size={18} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
