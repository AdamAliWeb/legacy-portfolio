import MainPlanet from "../components/MainPlanet";
import Comet from "../components/Comet";
import "./Welcome.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { typewritterAnimation } from "../helpers/onceAnimations";

export default function Welcome({ isDesktop, wasAnimated, activateProperty }) {
    useEffect(() => {
        activateProperty("welcomeTypewritter", "mainPlanetScaling");
    }, []);

    return (
        <article className="welcome">
            <section className="welcome-container">
                {isDesktop && (
                    <Comet
                        wasAnimated={wasAnimated}
                        activateProperty={activateProperty}
                    />
                )}

                <h1 className="welcome-title">
                    {"Welcome to my digital space, where creativity meets coding."
                        .split(" ")
                        .map((el, index) => (
                            <motion.span
                                {...(!wasAnimated.welcomeTypewritter
                                    ? typewritterAnimation(index, 3)
                                    : {})}
                                key={index}
                            >
                                {el}{" "}
                            </motion.span>
                        ))}
                </h1>
                <MainPlanet mainPlanetScaling={wasAnimated.mainPlanetScaling} />
            </section>
        </article>
    );
}
