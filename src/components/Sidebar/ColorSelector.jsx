import { useState } from "react";
import AddColorButton from "../Buttons/AddColor";
import ColorCard from "../ColorManager/ColorCard";
import PopularColor from "./PopularColor";
import useGradientStore from "../Store/gradientStore";

function ColorSelector() {
  const [error, setError] = useState("");
  const { colors, setColors } = useGradientStore();

  // handle add color event
  const handleAddColor = () => {
    if (colors.length >= 6) {
      setError("Maximum 6 colors allowed.");
      return;
    }
    setError("");
    setColors((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        color: "#FFFFFF",
      },
    ]);
  };

  return (
    <div className="w-full rounded-xl bg-[#12192B] p-4 sm:p-6">
      <div className="mb-1.5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Choose Colors
        </h2>
        <AddColorButton onClick={handleAddColor} />
      </div>

      {/* handle error  */}
      {error && (
        <div className="my-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* show seleted color  */}
      <div className="space-y-4 h-31.25 w-full overflow-y-auto custom-scrollbar">
        <ColorCard colors={colors} setColors={setColors} setError={setError} />
      </div>

      {/* show ppular colors with copy option  */}
      <div className="mb-1 flex flex-col items-start gap-2">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          Popular Colors
        </h2>
        <div className="w-full flex flex-row justify-between gap-1">
          <PopularColor />
        </div>
      </div>
    </div>
  );
}

export default ColorSelector;
