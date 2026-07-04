import useGradientStore from "./gradientStore";

export function generateCssSnippet() {
  const { colors, angle, activeType } = useGradientStore.getState();
  const colorStops = colors.map((item) => item.color).join(", ");

  switch (activeType) {
    case "linear":
      return `linear-gradient(${angle}deg, ${colorStops})`;

    case "radial":
      return `radial-gradient(circle, ${colorStops})`;

    case "conic":
      return `conic-gradient(from ${angle}deg, ${colorStops})`;

    default:
      return `linear-gradient(${angle}deg, ${colorStops})`;
  }
}
