import useGradientStore from "./gradientStore";

export function generateTailwindSnippet(
  inputColors = useGradientStore.getState().colors,
  inputAngle = useGradientStore.getState().angle,
  inputType = useGradientStore.getState().activeType,
) {
  const colorValues = inputColors.map((item) => item.color);

  if (colorValues.length < 2) return "";

  const colorStops = colorValues.join(",");

  switch (inputType) {
    case "linear":
      return `bg-[linear-gradient(${inputAngle}deg,${colorStops})]`;

    case "radial":
      return `bg-[radial-gradient(circle,${colorStops})]`;

    case "conic":
      return `bg-[conic-gradient(from_${inputAngle}deg,${colorStops})]`;

    default:
      return `bg-[linear-gradient(${inputAngle}deg,${colorStops})]`;
  }
}
