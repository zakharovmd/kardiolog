import { Clock3, ShieldCheck } from 'lucide-react';
import { doctor, labels } from '../data/profile';
import { InfoCard } from './InfoCard';

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
      </div>

      <div className="hero__content">
        <p className="role">{doctor.title}</p>
        <h1>{doctor.name}</h1>
        <p className="subtitle">{doctor.subtitle}</p>
      </div>

      <div className="stats">
        <InfoCard icon={Clock3} label={labels.experience} value={doctor.experience} />
        <InfoCard icon={ShieldCheck} label={labels.appointment} value={doctor.price} />
      </div>
    </section>
  );
}
