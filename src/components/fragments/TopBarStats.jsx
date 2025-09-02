import Icon from "../elements/Icon";

export default function TopBarStats() {
  return (
    <div className="hidden items-center gap-4 rounded-full bg-neutral-800 px-4 py-1.5 sm:flex">
      <div className="flex items-center gap-2">
        <Icon name="star" className="h-5 w-5 text-yellow-400" />
        <span className="text-sm font-semibold text-neutral-50">2,500</span>
      </div>
      <div className="h-5 w-px bg-neutral-700" />
      <div className="flex items-center gap-2">
        <Icon name="wallet" className="h-5 w-5 text-[var(--primary-500)]" />
        <span className="text-sm font-semibold text-neutral-50">
          $500.00   {/* was: Rp 500.000 */}
        </span>
      </div>
    </div>
  );
}
