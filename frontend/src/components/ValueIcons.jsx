const stroke = '#005A3C'

export function CommunityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="8" r="2.6" stroke={stroke} strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2.1" stroke={stroke} strokeWidth="1.6" />
      <path d="M3.5 19c0-2.9 2.2-5 5-5s5 2.1 5 5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 14.4c2.4.2 4 2.1 4 4.6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function CollaborationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20.5s-7.5-4.4-7.5-10A4.5 4.5 0 0 1 12 7.5"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 20.5c3.5-1 7.5-5 7.5-10a4.4 4.4 0 0 0-4-4.5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 4c0 4-1 6-1 10" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function ImpactIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke={stroke} strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1" fill={stroke} />
    </svg>
  )
}

export function TransparencyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20s-7-4.2-7-9.8A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7 3.2C19 15.8 12 20 12 20Z"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
