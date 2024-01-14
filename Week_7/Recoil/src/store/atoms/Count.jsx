import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom", // unique ID (with respect to other atoms/selectors)
  default: 10, // default value (aka initial value)
});

export const IsEven = selector({
  key: "IsEven",
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2 === 0;
  },
});
