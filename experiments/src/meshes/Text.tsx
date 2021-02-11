import React from "react";
import { Text } from "@react-three/drei";
import font from "../assets/font.woff";

const TextShape: React.FC<any> = (props) => {
    return (
        <Text font={font} fontSize={2} {...props}>
            Hello, world!
        </Text>
    );
};

export { TextShape as Text };
