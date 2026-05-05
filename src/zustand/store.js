import { create } from "zustand";

// step 1: create store with initial state and actions
export const useBear = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
  decrementAsync: () => {
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      set((state) => ({ bears: state.bears - 1 })),
    );
  },
}));
