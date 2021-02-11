import { once } from "ramda";
import { useCallback, useEffect, useRef, useState } from "react";
import { useStore } from "../store";

function useDatGui<T>(name: string, value: T, ...props: any): { [name: string]: T } {
    const gui = useStore(useCallback((state) => state.gui, []));
    const [obj, setObj] = useState({
        [name]: value,
    });

    // We need to use a ref to keep it in memory because of the once() call
    const initGui = useRef(
        // running it only once will prevent HMR to add the setting again to the GUI instance
        once(() => {
            gui.add(obj, name, ...props).onChange((val) => setObj({ [name]: val }));
        }),
    );

    useEffect(() => {
        initGui.current();
    }, []);

    return obj;
}

export { useDatGui };
