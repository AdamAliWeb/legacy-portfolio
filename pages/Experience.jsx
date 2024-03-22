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
                {"Activate Screens by Pressing the Green Buttons"
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
                    I possess a strong foundational knowledge and proficiency in
                    essential technologies such as HTML, CSS, and JavaScript.
                    Additionally, I excel in debugging and have a thorough
                    understanding of code versioning using Git and GitHub. I
                    stay abreast of the latest front-end development
                    technologies like React and Bootstrap 5, ensuring that my
                    skills remain current. I have adept management skills in
                    compiling JavaScript packages with Vite and Webpack and am
                    proficient and organized in web page design using
                    specialized software like Figma. My expertise extends to
                    React.JS and its associated environment, including React
                    Router and Redux. I am also skilled in CSS preprocessing
                    tools such as SASS and adept at asynchronous data
                    manipulation in JSON format using Restful API structures.
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
                    I possess a strong problem-solving ability, capable of
                    dissecting code point by point and expertly debugging. I
                    adhere strictly to best practices in development and
                    approach tasks with great interest and passion, always
                    prepared to assist in a disciplined and responsible manner.
                    I am committed to staying updated and well-prepared for
                    emerging technologies. Furthermore, I am fluent in English,
                    Spanish, and Ukrainian and am motivated to maintain a clean
                    and organized workspace.
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
                    I dedicated nearly 6 months to the WebDevZone Project.
                    WebDevZone is a platform designed for individuals interested
                    in learning or revising free online resources pertaining to
                    web programming. It hosts an array of resources, tools,
                    guides, tips, and exercises to aid users in their learning
                    journey. While the resources themselves are sourced from
                    various content creators, I am responsible for curating and
                    presenting them in an accessible format for users.
                    Additionally, I developed YouTube Info Gather, an
                    application that enables users to extract information from
                    YouTube content. Presently, it can gather, save, and compare
                    data from videos within a playlist. For further details,
                    please refer to the projects section.
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
                    I hold a high school diploma from Ukraine. My proficiency in
                    programming stems from a combination of online
                    certifications obtained from platforms like FreeCodeCamp,
                    self-study through online resources and mentorship, and
                    extensive practice with coding. Further information about my
                    educational background can be found in my CV.
                </ExperienceScreen>
            </section>
        </article>
    );
}
