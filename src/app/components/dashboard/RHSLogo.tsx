export default function RHSLogo() {
  return (
    <section className="animate-in fade-in slide-in-from-right-8 hidden w-full items-center justify-center bg-[rgba(99,63,187,0.08)] px-8 py-16 duration-500 md:px-10 md:py-24 lg:flex lg:w-1/2 lg:py-0">
      <div className="relative h-[306px] w-full max-w-[393px]">
        {/* Purple Circle */}
        <div className="animate-in fade-in scale-in-90 absolute top-0 left-1/2 h-[210px] w-[210px] -translate-x-1/2 rounded-full bg-[#633FBB] delay-300 duration-700"></div>

        {/* Blurred Card */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 absolute top-[114px] left-0 h-[192px] w-full rounded px-10 py-10 backdrop-blur-[51.48px] delay-500 duration-700"
          style={{
            background: "rgba(217, 217, 217, 0.09)",
          }}
        ></div>
      </div>
    </section>
  );
}
