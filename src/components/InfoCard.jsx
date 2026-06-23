export function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="info-card">
      <Icon size={20} />
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
