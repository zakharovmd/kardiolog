import { CalendarCheck, MapPin, MessageCircle, Phone, Send, Stethoscope } from 'lucide-react';
import { doctor, labels } from '../data/profile.js';
import { ActionButton } from './ActionButton.jsx';

export function LinksPanel() {
  const phoneHref = `tel:+${doctor.phone.replace(/\D/g, '')}`;

  return (
    <aside className="links-panel" aria-label={labels.quickActions}>
      <ActionButton href={doctor.bookingUrl} icon={CalendarCheck}>
        {labels.bookOnline}
      </ActionButton>
      <ActionButton href={phoneHref} icon={Phone} variant="light">
        {labels.callClinic}
      </ActionButton>
      <ActionButton href={doctor.primaryClinicMapUrl} icon={MapPin} variant="light">
        {labels.addresses}
      </ActionButton>
      <ActionButton href={doctor.sourceUrl} icon={Stethoscope} variant="outline">
        {labels.clinicProfile}
      </ActionButton>
      <div className="social-actions" aria-label={labels.social}>
        <ActionButton href={doctor.telegramUrl} icon={Send} variant="telegram">
          {labels.telegram}
        </ActionButton>
        <ActionButton href={doctor.whatsappUrl} icon={MessageCircle} variant="whatsapp">
          {labels.whatsapp}
        </ActionButton>
      </div>
    </aside>
  );
}
