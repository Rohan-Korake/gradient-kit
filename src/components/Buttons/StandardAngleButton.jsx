function StandardAngleButton({ activeAngle, setActiveAngle }) {
  const standardAngleArray = [
    { id: 0, angle: "0°" },
    { id: 45, angle: "45°" },
    { id: 90, angle: "90°" },
    { id: 135, angle: "135°" },
    { id: 180, angle: "180°" },
    { id: 225, angle: "225°" },
    { id: 270, angle: "270°" },
    { id: 315, angle: "315°" },
  ];

  return (
    <>
      {standardAngleArray.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setActiveAngle(item.id)}
            className={`flex items-center justify-center gap-2 w-[8ch]  p-2 m-1 sm:px-6 border border-[#2B3246] rounded-lg cursor-pointer transition-all duration-200
              ${
                activeAngle === item.id
                  ? "bg-violet-500/10 border border-violet-500 text-violet-400"
                  : " hover:bg-violet-500/10 "
              }`}
          >
            <span className="text-xs sm:text-sm lg:text-xl">{item.angle}</span>
          </div>
        );
      })}
    </>
  );
}

export default StandardAngleButton;
