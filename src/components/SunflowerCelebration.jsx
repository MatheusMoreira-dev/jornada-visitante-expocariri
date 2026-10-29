function SunflowerCelebration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Lado esquerdo */}
      <div className="absolute bottom-0 left-0 flex items-end gap-1">
        <Sunflower height="h-[45vh]" delay="0s" />
        <Sunflower height="h-[65vh]" delay="0.5s" />
        <Sunflower height="h-[35vh]" delay="1s" />
      </div>

      {/* Lado direito */}
      <div className="absolute bottom-0 right-0 flex items-end gap-1">
        <Sunflower height="h-[35vh]" delay="0.8s" />
        <Sunflower height="h-[65vh]" delay="0.3s" />
        <Sunflower height="h-[45vh]" delay="0.6s" />
      </div>
    </div>
  );
}

function Sunflower({ height, delay }) {
  return (
    <div className={`relative ${height} w-8 sm:w-12`}>
      {/* Caule */}
      <div
        className="absolute bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full bg-green-600 origin-bottom animate-grow-stem"
        style={{
          height: "100%",
          animationDelay: delay,
        }}
      />

      {/* Folha */}
      <div
        className="absolute bottom-1/3 left-1/2 h-4 w-7 rounded-full rounded-tr-none bg-green-500 origin-left -rotate-12 animate-grow-stem"
        style={{
          animationDelay: delay,
        }}
      />

      {/* Flor */}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl opacity-0 animate-grow-flower"
        style={{
          animationDelay: `calc(${delay} + 1s)`,
        }}
      >
        🌻
      </div>
    </div>
  );
}

export default SunflowerCelebration;
