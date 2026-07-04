import { Slash, Target, Clock3 } from "lucide-react";

function GradientTypeButton({ activeType, setActiveType }) {
  const gradientTypeArray = [
    {
      id: "linear",
      icon: Slash,
      label: "Linear",
    },
    {
      id: "radial",
      icon: Target,
      label: "Radial",
    },
    {
      id: "conic",
      icon: Clock3,
      label: "Conic",
    },
  ];

  return (
    <>
      {gradientTypeArray.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            onClick={() => setActiveType(item.id)}
            className={`flex items-center justify-center gap-2 w-21 sm:w-25 md:w-25 lg:w-30 p-2 m-1 sm:px-6 border border-[#2B3246] rounded-lg cursor-pointer transition-all duration-200
              ${
                activeType === item.id
                  ? "bg-violet-500/10 border border-violet-500 text-violet-400"
                  : " hover:bg-violet-500/10 "
              }`}
          >
            <Icon size={18} className="shrink-0 text-amber-50" />
            <span className="text-xs sm:text-sm lg:text-xl">{item.label}</span>
          </div>
        );
      })}
    </>
  );
}

export default GradientTypeButton;
