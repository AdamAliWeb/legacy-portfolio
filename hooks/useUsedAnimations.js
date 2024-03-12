import { useState } from "react";

const initialAnimations = {
    headerSwinging: false,
    ufoSpawning: false,
    mainPlanetScaling: false,
    cometScaling: false,
    blackHoleExpanding: false,
    textFadeInBlackHole: false,
    screensSwinging: false,
    rocketsFlying: false,
    socialPlanetsScaling: false,
    welcomeTypewritter: false,
    experienceTypewritter: false,
    projectsTypewritter: false,
};

const setInitialAnimations = () => {
    if (!localStorage.getItem("was-animated")) {
        localStorage.setItem("was-animated", JSON.stringify(initialAnimations));
    }

    return JSON.parse(localStorage.getItem("was-animated"));
};

export default function useUsedAnimations() {
    const [wasAnimated, setWasAnimated] = useState(setInitialAnimations());

    const activateProperty = (...properties) => {
        const updatedProperties = {};
        properties.forEach((property) => {
            updatedProperties[property] = true;
        });
        setWasAnimated({
            ...JSON.parse(localStorage.getItem("was-animated")),
            ...updatedProperties,
        });
        localStorage.setItem(
            "was-animated",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("was-animated")),
                ...updatedProperties,
            })
        );
    };

    const restartProperties = () => {
        setWasAnimated(initialAnimations);
        localStorage.setItem("was-animated", JSON.stringify(initialAnimations));
        for (let num = 1; localStorage.getItem("screen-" + num); num++) {
            localStorage.setItem("screen-" + num, "off");
        }
        location.reload();
    };

    return [wasAnimated, activateProperty, restartProperties];
}
