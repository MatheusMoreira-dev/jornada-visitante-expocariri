function BadgeIcon({ badge }) {
  return (
    <div className="rounded-full overflow-hidden size-20 p-2 ring ring-zinc-300 shadow-xl">
      <img
        src={badge.icon}
        className={`pointer-events-none size-full object-center object-cover ${badge.blocked && "grayscale"}`}
      />

      {/* Reflexo do vidro */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/60 via-white/10 to-transparent" />

      {/* Reflexo inferior */}
      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45),inset_0_-4px_8px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

export default BadgeIcon;
