import { create } from "zustand";
interface AcitveListStore {
  members: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

const useActiveList = create<AcitveListStore>((set) => ({
  members: [],
  add: (id) => set((state) => ({ members: [...state.members, id] })),

  remove: (id) =>
    set((state) => ({
      members: state.members.filter((member) => member !== id),
    })),
  set: (ids) => set({ members: ids }),
}));

export default useActiveList;
