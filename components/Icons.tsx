export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="i-menu" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></symbol>
        <symbol id="i-close" viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12" /><polyline points="14 6 20 12 14 18" /></symbol>
        <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20.5 4.6 13.1a5 5 0 1 1 7.4-6.7 5 5 0 1 1 7.4 6.7L12 20.5Z" /></symbol>
        <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5 3.6 7.8 8 9 4.4-1.2 8-4 8-9V6l-8-3Z" /></symbol>
        <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6" /><circle cx="17.5" cy="9" r="2.6" /><path d="M15.2 14.2c2.7.2 4.8 2.3 4.8 5.8" /></symbol>
        <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13Z" /></symbol>
        <symbol id="i-pulse" viewBox="0 0 24 24"><path d="M3 12h4l2.5-7L13 19l2.5-7H21" /></symbol>
        <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M4 6.5 12 13l8-6.5" /></symbol>
        <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.5 3h3l1.5 4.5-2 1.7a12 12 0 0 0 5.8 5.8l1.7-2 4.5 1.5v3a2 2 0 0 1-2.1 2C10.9 19 5 13.1 4.5 5.1A2 2 0 0 1 6.5 3Z" /></symbol>
        <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" /></symbol>
        <symbol id="i-archive" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="4.5" /><path d="M4.5 8.5V19a1 1 0 0 0 1 1H18.5a1 1 0 0 0 1-1V8.5" /><line x1="9.5" y1="12.5" x2="14.5" y2="12.5" /></symbol>
        <symbol id="i-file" viewBox="0 0 24 24"><path d="M6 3.5h8l4 4V19a1.2 1.2 0 0 1-1.2 1.2H6A1.2 1.2 0 0 1 4.8 19V4.7A1.2 1.2 0 0 1 6 3.5Z" /><path d="M14 3.5V8h4" /></symbol>
        <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="1" /><line x1="3.5" y1="9.5" x2="20.5" y2="9.5" /><line x1="8" y1="3" x2="8" y2="6.5" /><line x1="16" y1="3" x2="16" y2="6.5" /></symbol>
        <symbol id="i-scale" viewBox="0 0 24 24"><line x1="12" y1="3" x2="12" y2="21" /><path d="M4 7h6M14 7h6" /><path d="M4 7 2 13a3 3 0 0 0 4 0Z" /><path d="M20 7l-2 6a3 3 0 0 0 4 0Z" /><line x1="7" y1="21" x2="17" y2="21" /></symbol>
        <symbol id="i-check" viewBox="0 0 24 24"><polyline points="4 13 9 18 20 6" /></symbol>
      </defs>
    </svg>
  );
}

export function Icon({
  name,
  className,
  style,
}: {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg className={className ?? "mst-icon"} style={style} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
