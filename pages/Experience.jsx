import ExperienceScreen from "../components/ExperienceScreen";
import useScreenToggler from "../hooks/useScreenToggler";

import "./Experience.scss";

import { mainColors } from "../helpers/colors";

const screens = ["screen1", "screen2", "screen3", "screen4"];

export default function Experience() {
    const { screenPower, turnOn, turnOff } = useScreenToggler({
        [screens[0]]: true,
        [screens[1]]: true,
        [screens[2]]: true,
        [screens[3]]: true,
    });

    return (
        <article className="experience">
            <ExperienceScreen
                title={"Abilities"}
                screenName={screens[0]}
                screenPower={screenPower}
                turnOn={turnOn}
                turnOff={turnOff}
                color={mainColors.red}
            >
                Strong foundational knowledge and proficiency in basic
                technologies such as HTML, CSS, and JavaScript. debugging.
                Knowledge and application of code versioning with Git and
                GitHub. Solid understanding of the latest Front-end development
                technologies like React and Bootstrap 5, and always staying
                up-to-date with the latest trends. Strong management in
                compilation of JavaScript packages with Vite and Webpack
                Proficient and organized in web page design using specialized
                software like Figma. Strong knowledge in React.JS and his
                environment such as React Router and Redux. Good at CSS
                preprocessing tools such as SASS Well skilled with asynchronous
                data manipulation in JSON format using Restful apis structure.
            </ExperienceScreen>
            <ExperienceScreen
                title={"Soft Skills"}
                screenName={screens[1]}
                screenPower={screenPower}
                turnOn={turnOn}
                turnOff={turnOff}
                color={mainColors.green}
            >
                Strong problem-solving ability, breaking down code point by
                point and expertise in debugging Adherence to best practices in
                development. Great interest and passion for the field, always
                attentive and prepared to assist in a disciplined and
                responsible manner. Always interested to stay updated and
                prepared for the new upcoming technologies. Fluency in English,
                Spanish and Ukrainian. Able and inspired to mantain a clean and
                organized workspace
            </ExperienceScreen>
            <ExperienceScreen
                title={"Work Experience"}
                screenName={screens[2]}
                screenPower={screenPower}
                turnOn={turnOn}
                turnOff={turnOff}
                color={mainColors.blue}
            >
                I worked for 1 year in the WebDevZone Project. WebDevZone is a
                website where you can learn or review free online resources
                related to web programming. There are resources, tools, guides,
                tips and exercises which you can use to help you. The resources
                are not mine, they are from other content creators, I just
                compile the information and make it accessible to you. The
                website is https://webdevzone.adamaliweb.com/dist/.
            </ExperienceScreen>
            <ExperienceScreen
                title={"Education"}
                screenName={screens[3]}
                screenPower={screenPower}
                turnOn={turnOn}
                turnOff={turnOff}
                color={mainColors.yellow}
            >
                I have high School diploma. My programming knowledge comes from
                online corroborate certificates from FreeCodeCamp and online
                resources. Here are my mentors: JonMircha MiduDev
                WebdevSimplified Kevin Powell Here are my Programming profiles:
                GitHub Exercism FreeCodeCamp
            </ExperienceScreen>
        </article>
    );
}
