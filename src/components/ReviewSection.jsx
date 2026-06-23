import { Star } from 'lucide-react';
import { labels } from '../data/profile.js';
import { Section } from './Section.jsx';

export function ReviewSection() {
  return (
    <Section eyebrow={labels.reviewEyebrow} title={labels.reviewTitle}>
      <div className="review">
        <div className="review__stars" aria-label={labels.reviewRating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={17} fill="currentColor" />
          ))}
        </div>
        <p>{labels.reviewText}</p>
      </div>
    </Section>
  );
}
