import { Plus } from "lucide-react";

// generate add color button
function AddColorButton({ onClick }) {
  return (
    <div className="inline-block rounded-xl border border-[#2B3246] p-[1px] cursor-pointer">
      <button
        onClick={onClick}
        className="group flex items-center justify-center rounded-xl bg-[#0F172A] p-2 text-white transition-all duration-300 cursor-pointer hover:-rotate-90"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}

export default AddColorButton;
