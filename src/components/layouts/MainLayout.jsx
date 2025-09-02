import Avatar from "../elements/Avatar";
import Icon from "../elements/Icon";
import TopBarStats from "../fragments/TopBarStats";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex min-h-screen size-full flex-col overflow-x-hidden bg-neutral-900 pt-[57px] md:pl-64"
      style={{ fontFamily: '"Be Vietnam Pro","Noto Sans",sans-serif' }}
    >
      {/* Header (FIXED) */}
      <header className="fixed inset-x-0 top-0 z-40 flex w-full items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-900 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center rounded-full p-2 text-neutral-50 hover:bg-neutral-800 md:hidden"
            aria-label="Open menu"   // was: Buka menu
          >
            <Icon name="menu" className="size-6" />
          </button>

          <div className="flex items-center gap-2">
            <Icon name="logo" className="size-8 text-[var(--primary-500)]" />
            <h1 className="hidden text-xl font-bold tracking-[-0.015em] text-neutral-50 sm:block">
              VideoHub
            </h1>
          </div>
        </div>

        {/* Search (hapus md:ml-[16.5rem]) */}
        <div className="flex flex-1 justify-center px-4 md:flex-grow-0 md:justify-start md:px-0">
          <div className="w-full max-w-2xl">
            <label className="relative flex w-full">
              <div className="relative w-full">
                <input
                  className="form-input h-10 w-full rounded-full border border-neutral-800 bg-neutral-900 py-2 pl-10 pr-4 text-base text-neutral-50 placeholder:text-neutral-400 focus:border-[var(--primary-500)] focus:outline-none focus:ring-0"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Icon name="search" className="size-5 text-neutral-400" />
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <TopBarStats />
          <button className="flex size-10 items-center justify-center rounded-full text-neutral-50 hover:bg-neutral-800" aria-label="Add">
            <Icon name="plus" className="h-6 w-6" />
          </button>
          <button className="flex size-10 items-center justify-center rounded-full text-neutral-50 hover:bg-neutral-800" aria-label="Notifications">
            <Icon name="bell" width={20} height={20} />
          </button>
          <Avatar
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3txMvWebVOWUCSc_JSlUiMuPymMamNlXpP6eVstETd_jpkEBvYMGpJlTLoyuPwEwsMNuVYLjzgBpWmzSf6GYUfFWATxj-4TF40AhJkCdlDSb39pF3NUuSO2eLUVCQs7Le4yeaVhGRKD7Qej0a1_iX065ldiv32JMh2TvPLfeEluliBoM5Mhmqpjee8Q6p86zTwHwQRPn-qtU0pO3lN1OOfA7nhRXvoyjsnoDZoNavsdfvB9Zuu4lWLeWohE9LasU1LScS-OKcER7f"
            alt="Profil"
          />
        </div>
      </header>

      <div className="flex h-full grow flex-row">
        {/* Sidebar (FIXED) */}
        <aside
          className={`${open ? "flex" : "hidden"} md:flex fixed top-[57px] left-0 z-30 h-[calc(100vh-57px)] w-64 flex-col gap-y-2 overflow-y-auto border-r border-neutral-800 bg-neutral-900 px-3 py-4`}
        >
          <nav className="flex flex-col gap-1">
            {[
              { label: "Homepage", icon: "home" },
              { label: "Subscription", icon: "eye" },
              { label: "Meet", icon: "video" },
              { label: "Leaderboard", icon: "clock" },
              { label: "Community", icon: "chat" },
            ].map((it) => (
              <a
                key={it.label}
                href="#"
                className={`flex items-center gap-4 rounded-lg px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-700 ${
                  it.label === "Homepage" ? "bg-neutral-800" : ""
                }`}
              >
                <Icon name={it.icon} className="size-6" />
                <span>{it.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
