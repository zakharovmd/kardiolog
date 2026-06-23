import { CalendarCheck, MapPin, MessageCircle, Phone, Send, Stethoscope } from 'lucide-react';
import { type MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { callCenter, doctor, labels } from '../data/profile';
import { ActionButton } from './ActionButton';

export function LinksPanel() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const phoneHref = `tel:+${callCenter.phone.replace(/\D/g, '')}`;

  useEffect(() => {
    if (!isCallModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCallModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCallModalOpen]);

  return (
    <>
      <aside className="links-panel" aria-label={labels.quickActions}>
        <ActionButton href={doctor.bookingUrl} icon={CalendarCheck}>
          {labels.bookOnline}
        </ActionButton>
        <ActionButton icon={Phone} variant="light" onClick={() => setIsCallModalOpen(true)}>
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

      {isCallModalOpen && createPortal(
        <div className="modal-backdrop" role="presentation" onClick={() => setIsCallModalOpen(false)}>
          <div
            className="call-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-modal-title"
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <button className="call-modal__close" type="button" aria-label={labels.close} onClick={() => setIsCallModalOpen(false)}>
              ×
            </button>
            <h2 id="call-modal-title">{callCenter.title}</h2>
            <a className="call-modal__phone" href={phoneHref}>
              {callCenter.phone}
            </a>
            <p>{callCenter.scheduleTitle}</p>
            <ul>
              {callCenter.schedule.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="call-modal__button" href={phoneHref}>
              {labels.callClinic}
            </a>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
