function SunflowerCelebration() {
  return (
    <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden">
      {/* Girassol esquerdo */}
      <div className="sunflower-sway-left absolute bottom-0 left-[-4%] h-[65vh] w-[clamp(150px,30vw,330px)] origin-bottom-center sm:h-[75vh]">
        <div className="sunflower-grow h-full w-full origin-bottom">
          <img
            src="/sunflower_celebration.svg"
            alt=""
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>

      {/* Girassol direito */}
      <div className="sunflower-sway-right absolute bottom-0 right-[-4%] h-[65vh] w-[clamp(150px,30vw,330px)] origin-bottom-center sm:h-[75vh]">
        <div className="sunflower-grow-delayed h-full w-full origin-bottom">
          <img
            src="/sunflower_celebration.svg"
            alt=""
            className="h-full w-full scale-x-[-1] object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default SunflowerCelebration;
