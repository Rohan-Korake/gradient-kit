import { Trash2 } from "lucide-react";

// generate delete button
function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-[#2B3246] p-2 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#2B3246] hover:border-[#3B435A] hover:text-red-400"
    >
      <Trash2 size={18} />
    </button>
  );
}

export default DeleteButton;
