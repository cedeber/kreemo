import React, { useCallback, useEffect, useRef, useState } from "react";
import { Application } from "pixi.js-legacy";
import { useDatGui } from "../hooks/useDatGui";
import { PixiShape } from "../objects/PixiShape";

// Allows to reload the whole component when shaders change
// @refresh reset

const app = new Application({
    antialias: true,
    transparent: true,
    resolution: Math.min(1, window.devicePixelRatio),
});

const PixiPage: React.FC = () => {
    const count = useDatGui("Shapes", 3, 1, 10000, 1);
    const ref = useRef<HTMLDivElement>(null);
    const [shapes, setShapes] = useState<JSX.Element[]>([]);

    const resize = useCallback(() => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    }, []);

    useEffect(() => {
        app.renderer.view.style.position = "absolute";
        app.renderer.view.style.display = "block";
        app.renderer.resize(window.innerWidth, window.innerHeight);
        ref.current?.appendChild(app.view);

        window.addEventListener("resize", resize);

        return function cleanup() {
            window.removeEventListener("resize", resize);
            app.destroy();
        };
    }, []);

    useEffect(() => {
        const { width, height } = app.screen;
        const shapes: JSX.Element[] = [];

        for (let i = 0; i < count; i += 1) {
            shapes.push(
                <PixiShape
                    key={`shape-${i}`}
                    app={app}
                    x={Math.random() * width}
                    y={Math.random() * height}
                />,
            );
        }

        setShapes(shapes);
    }, [count]);

    return <div ref={ref}>{shapes}</div>;
};

export { PixiPage };
