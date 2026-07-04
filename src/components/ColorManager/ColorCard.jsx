import DeleteButton from "../Buttons/DeleteButton";
import useGradientStore from "../Store/gradientStore";
import ColorPicker from "./ColorPicker";

function ColorCard({ setError }) {
  const { colors, setColors } = useGradientStore();

  // handle delete
  const handleDelete = (id) => {
    if (colors.length <= 2) {
      setError("Keep at least 2 colors");
      return;
    }
    setError("");
    setColors((prev) => prev.filter((item) => item.id !== id));
  };

  // handle chnage color
  const handleColorChange = async (id, color) => {
    setColors((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              color,
            }
          : item,
      ),
    );
  };

  return (
    <>
      {colors.map((item) => (
        <div key={item.id} className="mb-4 flex items-center gap-2 rounded-lg">
          {/* Color Preview */}
          <div
            className="h-10 w-16 shrink-0 rounded-xl sm:w-18 lg:w-20 xl:w-24 border border-[#2B3246]"
            style={{ backgroundColor: item.color }}
          />

          {/* Hex Input */}
          <input
            type="text"
            value={item.color}
            maxLength={7}
            pattern="^#[0-9A-Fa-f]{6}$"
            onChange={(e) => handleColorChange(item.id, e.target.value)}
            className="h-10 min-w-25 flex-1 rounded-lg border border-[#2B3246] bg-transparent px-3 uppercase outline-none"
          />

          {/* colorpicker button  */}
          <ColorPicker
            onChange={(color) => handleColorChange(item.id, color)}
          />

          {/* delete Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <DeleteButton onClick={() => handleDelete(item.id)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default ColorCard;
