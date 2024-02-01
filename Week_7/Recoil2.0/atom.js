import { atom, selector } from "recoil";

export const netWorkAtom = atom({
  key: "netWorkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

//*Selector
export const totalCount = selector({
  key: "TotalCount",
  get: ({ get }) => {
    const newtworkAtomCount = get(netWorkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingCount = get(messagingAtom);
    return (
      newtworkAtomCount + jobsAtomCount + notificationAtomCount + messagingCount
    );
  },
});
