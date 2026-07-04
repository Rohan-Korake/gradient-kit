import { create } from "zustand";

const useGradientStore = create((set) => ({
  colors: [
    {
      id: Date.now() + Math.random(),
      color: "#FB636A",
    },
    {
      id: Date.now() + Math.random(),
      color: "#4492F4",
    },
  ],
  angle: 45,
  activeType: "linear",
  codeSnippet: [
    {
      id: Date.now() + Math.random(),
      lang: "CSS",
      snippet: "background: linear-gradient(45deg, #FB636A, #4492F4);",
    },
    {
      id: Date.now() + Math.random(),
      lang: "Tailwind CSS",
      snippet: "bg-gradient-to-r from-[#FB636A] to-[#4492F4]",
    },
  ],

  // Dynamic updation
  setColors: (updater) =>
    set((state) => ({
      colors: typeof updater === "function" ? updater(state.colors) : updater,
    })),

  setAngle: (angle) => set({ angle }),
  setActiveType: (activeType) => set({ activeType }),

  // reset data
  resetGradient: () =>
    set({
      colors: [
        {
          id: Date.now() + Math.random(),
          color: "#FB636A",
        },
        {
          id: Date.now() + Math.random(),
          color: "#4492F4",
        },
      ],
      angle: 45,
      activeType: "linear",
    }),
}));

export default useGradientStore;
