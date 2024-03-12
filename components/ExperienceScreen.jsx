import { screensSwingingAnimation } from "../helpers/onceAnimations";
import "./ExperienceScreen.scss";
import { motion } from "framer-motion";

export default function ExperienceScreen({
    title,
    color,
    screensSwinging,
    isOnLeftSide,
    delay,
    screenPower,
    turnOn,
    turnOff,
    children,
}) {
    return (
        <motion.section
            className="experience-screen"
            {...(!screensSwinging
                ? screensSwingingAnimation(isOnLeftSide, delay)
                : {})}
        >
            <div className="screen-toggler">
                <button
                    className="toggler-btn off"
                    onClick={() => turnOff()}
                ></button>
                <button
                    className="toggler-btn on"
                    onClick={() => turnOn()}
                ></button>
            </div>

            <div className="screen-container">
                <div
                    className={`screen-background ${
                        screenPower ? "screen-on" : "screen-off"
                    }`}
                >
                    <div className="screen-power"></div>
                </div>
                <div className="screen-content">
                    <h2 className="screen-title" style={{ color }}>
                        {title}
                    </h2>
                    <div className="screen-text">{children}</div>
                </div>
            </div>
        </motion.section>
    );
}
