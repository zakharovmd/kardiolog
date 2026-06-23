import { ChevronRight, MapPin } from 'lucide-react';
import { labels, locations } from '../data/profile.js';
import { Section } from './Section.jsx';

export function AddressSection() {
  return (
    <Section eyebrow={labels.contactsEyebrow} title={labels.contactsTitle} id="addresses">
      <div className="addresses">
        {locations.map((location) => (
          <a
            className="address-card"
            href={`https://yandex.ru/maps/?text=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noreferrer"
            key={location.address}
          >
            <MapPin size={19} />
            <span>
              <strong>{location.name}</strong>
              {location.address}
            </span>
            <ChevronRight size={18} />
          </a>
        ))}
      </div>
    </Section>
  );
}
