import ActionButton from "../Buttons/ActionButton";
import { Copy, Save, ArrowLeftRight } from "lucide-react";
import useGradientStore from "../Store/gradientStore";
import { generateCssSnippet } from "../Store/generateCssSnippet";
import { generateTailwindSnippet } from "../Store/generateTailwindSnippet";

function GradientPreview() {
  const { colors, angle, activeType, setColors } = useGradientStore();

  //   generate css gradient color
  const color = generateCssSnippet({ colors, angle, activeType });

  //   handle the swap color event
  const handleSwap = () => {
    setColors((prev) => [...prev].reverse());
  };

  return (
    <>
      <div className="w-full rounded-xl bg-[#12192B] p-4 sm:p-6 flex flex-col gap-4">
        <div className="mb-1.5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Gradient Preview
          </h2>
          <ActionButton
            icon={ArrowLeftRight}
            label={"Swap colors"}
            onClick={handleSwap}
            hoverAnimation="group-hover:scale-x-[-1]"
            activeAnimation="group-active:scale-x-[-1]"
          />
        </div>
        <div
          className="h-88 w-full rounded-2xl"
          style={{ background: color }}
        ></div>
      </div>
    </>
  );
}

export default GradientPreview;
