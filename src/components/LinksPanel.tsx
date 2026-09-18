import { CalendarCheck, MapPin, MessageCircle, MessageSquareText, Phone, Send, Stethoscope, Video } from 'lucide-react';
import { type MouseEvent, type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { callCenter, doctor, labels, onlineConsult } from '../data/profile';
import { reachGoal } from '../lib/metrika';
import { ActionButton } from './ActionButton';

type ModalName = 'call' | 'consult';

export function LinksPanel() {
  const [openModal, setOpenModal] = useState<ModalName | null>(null);
  const phoneHref = `tel:+${callCenter.phone.replace(/\D/g, '')}`;
  const closeModal = () => setOpenModal(null);

  useEffect(() => {
    if (!openModal) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openModal]);

  const renderModal = (titleId: string, children: ReactNode) =>
    createPortal(
      <div className="modal-backdrop" role="presentation" onClick={closeModal}>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
        >
          <button className="modal__close" type="button" aria-label={labels.close} onClick={closeModal}>
            ×
          </button>
          {children}
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <aside className="links-panel" aria-label={labels.quickActions}>
        <ActionButton href={doctor.bookingUrl} icon={CalendarCheck} goal="book_online">
          {labels.bookOnline}
        </ActionButton>
        <ActionButton icon={Video} variant="light" goal="online_consult_open" onClick={() => setOpenModal('consult')}>
          {labels.onlineConsult} — {onlineConsult.price}
        </ActionButton>
        <ActionButton icon={Phone} variant="light" goal="call_clinic_open" onClick={() => setOpenModal('call')}>
          {labels.callClinic}
        </ActionButton>
        <ActionButton href={doctor.primaryClinicMapUrl} icon={MapPin} variant="light" goal="addresses">
          {labels.addresses}
        </ActionButton>
        <ActionButton href={doctor.sourceUrl} icon={Stethoscope} variant="outline" goal="clinic_profile">
          {labels.clinicProfile}
        </ActionButton>
      </aside>

      {openModal === 'consult' && renderModal(
        'consult-modal-title',
        <>
          <h2 id="consult-modal-title">{onlineConsult.title}</h2>
          <p className="modal__price">{onlineConsult.price}</p>
          <p>{onlineConsult.description}</p>
          <div className="social-actions" aria-label={labels.social}>
            <ActionButton href={doctor.telegramUrl} icon={Send} variant="telegram" goal="telegram">
              {labels.telegram}
            </ActionButton>
            <ActionButton href={doctor.whatsappUrl} icon={MessageCircle} variant="whatsapp" goal="whatsapp">
              {labels.whatsapp}
            </ActionButton>
            <ActionButton href={doctor.maxUrl} icon={MessageSquareText} variant="max" goal="max">
              {labels.max}
            </ActionButton>
          </div>
        </>,
      )}

      {openModal === 'call' && renderModal(
        'call-modal-title',
        <>
          <h2 id="call-modal-title">{callCenter.title}</h2>
          <a className="modal__phone" href={phoneHref} onClick={() => reachGoal('call_clinic_dial')}>
            {callCenter.phone}
          </a>
          <p>{callCenter.scheduleTitle}</p>
          <ul>
            {callCenter.schedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="modal__button" href={phoneHref} onClick={() => reachGoal('call_clinic_dial')}>
            {labels.callClinic}
          </a>
        </>,
      )}
    </>
  );
}
