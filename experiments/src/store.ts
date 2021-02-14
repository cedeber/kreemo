import create from "zustand";
import { GUI } from "dat.gui";

interface Position {
    x: number;
    y: number;
}

type State = {
    gui: GUI;
    cursor: string;
    setCursor: (cursor: string) => void;
    position: Position;
    setPosition: (position: Position) => void;
};

const useStore = create<State>((set) => ({
    gui: new GUI({ width: 320 }),
    cursor: "default",
    setCursor: (cursor: string) => set(() => ({ cursor })),
    position: { x: 0, y: 0 },
    setPosition: (position) => set(() => ({ position })),
}));

export { useStore };
