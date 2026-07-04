import { Pipette } from "lucide-react";

// handle the color picker event
function ColorPicker({ onChange }) {
  return (
    <div className="relative border border-[#2B3246] p-2 rounded-lg flex justify-center items-center cursor-pointer transition-all duration-200 hover:bg-violet-500/10 hover:border-violet-500 hover:text-violet-400 active:scale-95">
      <Pipette size={18} className="pointer-events-none" />

      <input
        type="color"
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}

export default ColorPicker;
