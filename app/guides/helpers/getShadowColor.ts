export const getShadowColor = (number: number) => {
  const hue = (number * 137.5) % 360;

  return {
    filter: `drop-shadow(2px 2px 0px hsl(${hue}, ${70}%, ${60}%))`
  };
};
