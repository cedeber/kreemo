import React, { useCallback, useEffect, useRef } from "react";
import { Application, Graphics, Rectangle } from "pixi.js";

// Allows to reload the whole component when shaders change
// @refresh reset

const PixiShape: React.FC<{ app: Application; x: number; y: number }> = (props) => {
    const _shape = useRef(new Graphics());

    const handleClick = useCallback(() => {
        const shape = _shape.current;
        shape.scale.x *= 1.25;
        shape.scale.y *= 1.25;
    }, []);

    const animate = useCallback(
        (delta) => {
            const shape = _shape.current;
            if (shape) shape.angle += 0.45 * delta;
        },
        [_shape.current],
    );

    useEffect(() => {
        const app = props.app;
        const shape = _shape.current;

        if (shape == undefined) return;

        shape.beginFill(0xde3249);
        shape.drawRect(-5, -5, 10, 10);
        shape.endFill();

        app.stage.addChild(shape);

        shape.interactive = true;
        shape.buttonMode = true;
        shape.hitArea = new Rectangle(-5, -5, 10, 10);
        shape.on("click", handleClick);

        app.ticker.add(animate);

        return function cleanup() {
            shape.off("click", handleClick);
            app.ticker.remove(animate);
            shape.destroy();
        };
    }, [_shape.current]);

    useEffect(() => {
        const shape = _shape.current;
        shape.x = props.x;
        shape.y = props.y;
    }, [props.x, props.y]);

    return null;
};

export { PixiShape };
