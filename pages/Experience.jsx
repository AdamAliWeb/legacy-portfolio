import ExperienceScreen from "../components/ExperienceScreen";
import useScreenToggler from "../hooks/useScreenToggler";

import { motion } from "framer-motion";

import "./Experience.scss";

import { mainColors } from "../helpers/colors";
import { useEffect } from "react";
import { typewritterAnimation } from "../helpers/onceAnimations";

const screens = ["screen1", "screen2", "screen3", "screen4"];

export default function Experience({ wasAnimated, activateProperty }) {
    const [screen1, turnOn1, turnOff1] = useScreenToggler(1);
    const [screen2, turnOn2, turnOff2] = useScreenToggler(2);
    const [screen3, turnOn3, turnOff3] = useScreenToggler(3);
    const [screen4, turnOn4, turnOff4] = useScreenToggler(4);

    useEffect(() => {
        activateProperty("screensSwinging", "experienceTypewritter");
    }, []);

    return (
        <article className="experience">
            <h1 className="section-title">
                {"Turn on the screens pressing the green buttons"
                    .split(" ")
                    .map((el, index) => (
                        <motion.span
                            {...(!wasAnimated.experienceTypewritter
                                ? typewritterAnimation(index, 2)
                                : {})}
                            key={index}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
            </h1>
            <section className="experience-container">
                <ExperienceScreen
                    title={"Abilities"}
                    screensSwinging={wasAnimated.screensSwinging}
                    color={mainColors.red}
                    isOnLeftSide={true}
                    delay={1}
                    screenPower={screen1}
                    turnOn={turnOn1}
                    turnOff={turnOff1}
                >
                    Strong foundational knowledge and proficiency in basic
                    technologies such as HTML, CSS, and JavaScript. debugging.
                    Knowledge and application of code versioning with Git and
                    GitHub. Solid understanding of the latest Front-end
                    development technologies like React and Bootstrap 5, and
                    always staying up-to-date with the latest trends. Strong
                    management in compilation of JavaScript packages with Vite
                    and Webpack Proficient and organized in web page design
                    using specialized software like Figma. Strong knowledge in
                    React.JS and his environment such as React Router and Redux.
                    Good at CSS preprocessing tools such as SASS Well skilled
                    with asynchronous data manipulation in JSON format using
                    Restful apis structure.
                </ExperienceScreen>
                <ExperienceScreen
                    title={"Soft Skills"}
                    screensSwinging={wasAnimated.screensSwinging}
                    color={mainColors.green}
                    isOnLeftSide={false}
                    delay={1.5}
                    screenPower={screen2}
                    turnOn={turnOn2}
                    turnOff={turnOff2}
                >
                    Strong problem-solving ability, breaking down code point by
                    point and expertise in debugging Adherence to best practices
                    in development. Great interest and passion for the field,
                    always attentive and prepared to assist in a disciplined and
                    responsible manner. Always interested to stay updated and
                    prepared for the new upcoming technologies. Fluency in
                    English, Spanish and Ukrainian. Able and inspired to mantain
                    a clean and organized workspace
                </ExperienceScreen>
                <ExperienceScreen
                    title={"Work Experience"}
                    screensSwinging={wasAnimated.screensSwinging}
                    color={mainColors.blue}
                    isOnLeftSide={true}
                    delay={2}
                    screenPower={screen3}
                    turnOn={turnOn3}
                    turnOff={turnOff3}
                >
                    I worked for 1 year in the WebDevZone Project. WebDevZone is
                    a website where you can learn or review free online
                    resources related to web programming. There are resources,
                    tools, guides, tips and exercises which you can use to help
                    you. The resources are not mine, they are from other content
                    creators, I just compile the information and make it
                    accessible to you. The website is
                    https://webdevzone.adamaliweb.com/dist/.
                </ExperienceScreen>
                <ExperienceScreen
                    title={"Education"}
                    screensSwinging={wasAnimated.screensSwinging}
                    color={mainColors.yellow}
                    isOnLeftSide={false}
                    delay={2.5}
                    screenPower={screen4}
                    turnOn={turnOn4}
                    turnOff={turnOff4}
                >
                    I have high School diploma. My programming knowledge comes
                    from online corroborate certificates from FreeCodeCamp and
                    online resources. Here are my mentors: JonMircha MiduDev
                    WebdevSimplified Kevin Powell Here are my Programming
                    profiles: GitHub Exercism FreeCodeCamp
                </ExperienceScreen>
            </section>
        </article>
    );
}
