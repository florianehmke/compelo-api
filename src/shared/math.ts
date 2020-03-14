export const mean = (numbers: number[]): number => {
  return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
};
