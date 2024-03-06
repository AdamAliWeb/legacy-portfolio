import { useState } from "react";

export default function useScreenToggler(initialScreenState) {
    const [screenPower, setScreenPower] = useState(initialScreenState);

    const turnOn = (screen) =>
        setScreenPower({
            ...screenPower,
            [screen]: true,
        });

    const turnOff = (screen) =>
        setScreenPower({
            ...screenPower,
            [screen]: false,
        });

    return { screenPower, turnOn, turnOff };
}
