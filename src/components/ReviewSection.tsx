import { ExternalLink, Star } from 'lucide-react';
import { doctor, labels } from '../data/profile';
import { Section } from './Section';

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
        <a className="review__button" href={doctor.reviewsUrl} target="_blank" rel="noreferrer">
          <span>{labels.reviewLink}</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </Section>
  );
}
