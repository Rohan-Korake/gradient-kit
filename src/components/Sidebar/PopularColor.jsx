import { useState } from "react";
import { Check } from "lucide-react";

function PopularColor() {
  const PopularColorArray = [
    { color: "#8D60F9" },
    { color: "#3595FF" },
    { color: "#3CCCDE" },
    { color: "#78CF5D" },
    { color: "#FAC332" },
    { color: "#FC8F44" },
    { color: "#DE59E8" },
  ];

  const [copiedColor, setCopiedColor] = useState("");

  // Copy color to clipboard
  const copyToClipboard = async (color) => {
    const copiedValue = color.replace(/#/g, "");
    try {
      await navigator.clipboard.writeText(copiedValue);
      setCopiedColor(color);

      setTimeout(() => {
        setCopiedColor("");
      }, 1200);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {PopularColorArray.map((item) => (
        <div
          key={item.color}
          className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-105 sm:h-10 sm:w-10"
          style={{ background: item.color }}
          onClick={() => copyToClipboard(item.color)}
        >
          <Check
            size={18}
            className={`absolute text-white transition-all duration-200 ${
              copiedColor === item.color
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }`}
          />
        </div>
      ))}
    </>
  );
}

export default PopularColor;
