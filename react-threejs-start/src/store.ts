import create from "zustand";
import { GUI } from "dat.gui";

type State = {
    gui: GUI;
};

const useStore = create<State>(() => {
    return {
        gui: new GUI(),
    };
});

export { useStore };
