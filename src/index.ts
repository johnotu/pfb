export const Sounder = (sound: string) => {
  let count: number = 5;
  let repeatedString: string = '';
  while (count > 0) {
    repeatedString += sound;
    count--;
  }
  return repeatedString;
};
