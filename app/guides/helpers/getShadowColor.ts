export const getShadowColor = (number: number) => {
  const hue = (number * 137.5) % 360;
  const saturation = 70;
  const lightness = 60;

  return {
    filter: `drop-shadow(2px 2px 0px hsl(${hue}, ${saturation}%, ${lightness}%))`
  };
};
