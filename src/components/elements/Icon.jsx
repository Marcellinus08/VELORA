/* Minimal icon set via inline SVG paths */
export default function Icon({ name, className = "", width, height }) {
  const common = { className, width, height, fill: "currentColor" };
  switch (name) {
    case "menu":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      );
    case "logo":
      return (
        <svg {...common} viewBox="0 0 48 48">
          <path d="M24 .757 47.243 24 24 47.243.757 24 24 .757ZM21 35.757V12.243L9.243 24 21 35.757Z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} viewBox="0 0 256 256">
          <path d="m229.66 218.34-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1z" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common} viewBox="0 0 256 256">
          <path d="M221.8 175.94C216.25 166.38 208 139.33 208 104a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216ZM48 184c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3.707 10L4 9.707V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293A1 1 0 0 0 18.707 9l-7-7z" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M.458 10C3.732 4.943 9.522 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-9.062 7-9.542 7S3.732 15.057.458 10z" />
        </svg>
      );
    case "video":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm14.553 1.106A1 1 0 0 0 16 8v4a1 1 0 0 0 .553.894l2 1A1 1 0 0 0 20 13V7a1 1 0 0 0-1.447-.894l-2 1z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.414-1.414L11 9.586V6z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" />
        </svg>
      );
    case "chev-left":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
        </svg>
      );
    case "chev-right":
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} viewBox="0 0 256 256">
          <path d="M239.2 97.41a16.4 16.4 0 0 0-14.21-10.06l-49.33-7.17L153.8 36.52a16.37 16.37 0 0 0-29.6 0L102.34 80.18 53 87.35A16.4 16.4 0 0 0 38.8 97.41a16.43 16.43 0 0 0 4.28 17.27l35.69 34.78-8.43 49.14a16.4 16.4 0 0 0 7.86 17.2 16.32 16.32 0 0 0 18.15.11L128 193.07l44.13 23.2a16.32 16.32 0 0 0 18.15-.11 16.4 16.4 0 0 0 7.86-17.2l-8.43-49.14 35.69-34.78A16.43 16.43 0 0 0 239.2 97.41Z" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common} viewBox="0 0 256 256">
          <path d="M224 72H48A24 24 0 0 0 24 96v96a24 24 0 0 0 24 24h152a24 24 0 0 0 24-24v-32h-32a8 8 0 0 1 0-16h32V96a24 24 0 0 0-24-24ZM40 96a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v48h-36a24 24 0 0 0-24 24v16H48a8 8 0 0 1-8-8Z" />
        </svg>
      );
    default:
      return null;
  }
}
