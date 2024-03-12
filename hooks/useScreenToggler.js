import { useState } from "react";

const initialScreenState = (num) => {
    if (!localStorage.getItem("screen-" + num)) {
        localStorage.setItem("screen-" + num, "off");
    }

    return localStorage.getItem("screen-" + num) === "on" ? true : false;
};

export default function useScreenToggler(screenNumber = 1) {
    const [screenPower, setScreenPower] = useState(
        initialScreenState(screenNumber)
    );

    const turnOn = () => {
        setScreenPower(true);
        localStorage.setItem("screen-" + screenNumber, "on");
    };
    const turnOff = () => {
        setScreenPower(false);
        localStorage.setItem("screen-" + screenNumber, "off");
    };

    return [screenPower, turnOn, turnOff];
}
