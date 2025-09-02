export default function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "rounded-full bg-[var(--primary-500)] px-4 py-1.5 text-sm font-semibold text-white hover:bg-opacity-80 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
