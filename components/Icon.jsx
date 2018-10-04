export default function Icon({ icon }) {
  return (
    <span className="icon" style={{ fontSize: '1.25rem' }}>
      <i className={`icon-${icon}`} aria-hidden="true" />
    </span>
  )
}
