import { ClipboardList, Copy } from "lucide-react";
import ActionButton from "../Buttons/ActionButton";
import useGradientStore from "../Store/gradientStore";
import { generateCssSnippet } from "../Store/generateCssSnippet";
import { generateTailwindSnippet } from "../Store/generateTailwindSnippet";

function CodeSnippet() {
  const { colors, angle, activeType } = useGradientStore();

  const codeSnippet = [
    {
      id: "css",
      lang: "CSS",
      snippet: `background: ${generateCssSnippet({
        colors,
        angle,
        activeType,
      })};`,
    },
    {
      id: "tailwind",
      lang: "Tailwind CSS",
      snippet: generateTailwindSnippet(colors, angle, activeType),
    },
  ];

  // copy to Clipboard
  const copyToClipboard = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full rounded-2xl bg-[#12192B] p-5 sm:p-6 space-y-5 flex flex-col gap-2">
        {codeSnippet.map((item) => (
          <div key={item.id}>
            <h3 className="mb-2 text-lg font-medium text-gray-300">
              {item.lang}
            </h3>

            <div className="flex items-center justify-between gap-4 rounded-xl border border-[#2B3246] bg-[#111625] p-2">
              <code className="overflow-x-auto whitespace-nowrap text-sm text-gray-300">
                {item.snippet}
              </code>

              <ActionButton
                icon={Copy}
                label={"Copy"}
                onClick={() => copyToClipboard(item.id, item.snippet)}
                hoverAnimation="group-hover:-translate-y-0.5 group-hover:scale-110"
                activeAnimation="group-active:scale-95"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CodeSnippet;
