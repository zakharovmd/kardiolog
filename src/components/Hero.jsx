import { Clock3, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { doctor, labels } from '../data/profile.js';
import { InfoCard } from './InfoCard.jsx';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__topline">
        <span className="status-dot" />
        {labels.onlineBooking}
      </div>

      <div className="hero__media">
        <div className="portrait-frame">
          <img src={doctor.photo} alt={doctor.photoAlt} />
        </div>
        <div className="hero__badge">
          <Star size={15} fill="currentColor" />
          {doctor.rating}
        </div>
      </div>

      <div className="hero__content">
        <p className="role">{doctor.title}</p>
        <h1>{doctor.name}</h1>
        <p className="subtitle">{doctor.subtitle}</p>
      </div>

      <div className="stats">
        <InfoCard icon={Clock3} label={labels.experience} value={doctor.experience} />
        <InfoCard icon={MessageCircle} label={labels.reviews} value={doctor.reviews} />
        <InfoCard icon={ShieldCheck} label={labels.appointment} value={doctor.price} />
      </div>
    </section>
  );
}
