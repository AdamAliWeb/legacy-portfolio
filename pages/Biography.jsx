import { useEffect } from "react";
import BlackHole from "../components/BlackHole";
import "./Biography.scss";

import { motion } from "framer-motion";
import { textFadeInBlackHoleAnimation } from "../helpers/onceAnimations";

export default function Biography({ wasAnimated, activateProperty }) {
    useEffect(() => {
        activateProperty("blackHoleExpanding", "textFadeInBlackHole");
    }, []);

    return (
        <article className="biography-container">
            <BlackHole blackHoleExpanding={wasAnimated.blackHoleExpanding} />
            <motion.section
                className="biography-text-center"
                {...(!wasAnimated.textFadeInBlackHole
                    ? textFadeInBlackHoleAnimation
                    : {})}
            >
                <div className="biography-text">
                    <h2>Introduction</h2>
                    <p>
                        Hi, you are probably wondering who I am, If you want to
                        knowkeep reading, if you are only interested in my
                        portfolio, you can skip this section.
                    </p>
                    <h2>Presentation</h2>
                    <p>
                        My name is Adam Ali and I am 20 years old. I was born in
                        Spain but I am also Ukrainian. So I was continuously
                        switching between Spain and Ukraine. At the age of 11. I
                        moved to Ukraine and finally that's where me and my
                        family decided to stay, but due to the war that started
                        in 2022 we had to leave Ukraine. We went to Spain,
                        lasted for 8 months, and at the half of that time we
                        were thinking about living in Canada, so we applied for
                        the Visa and waited. At the beginning of 2023 we flew to
                        Canada and there is where I am living right now.
                    </p>
                    <h2>Programming</h2>
                    <p>
                        As a child I loved to play videogames, so when someone
                        asked what my future profession would be, I answered
                        that I would be a videogames programmer. I tried at 12
                        and 14 to start learning programming, but I couldn't
                        progress too much. That changed when I turned 16 that I
                        was suddenly interested in web programming and I started
                        to learn the basics.
                    </p>
                    <p></p>
                    <p>
                        I don't remember exactly why, I would just say that I
                        would like to combine programming with the creation of
                        content. I was studying for 1 year and then I didn't
                        progress more cause I was in the last course of the High
                        school in Ukraine and I had to prepare myself for the
                        final exams, in Spain after the Summer I decided to get
                        back to web programming and I started to learn more
                        advanced things such as JavaScript frameworks, version
                        controlling, design softwares, etcetera. This was
                        completely on my own, watching YouTube courses and
                        tutorials and practicing.
                    </p>
                    <p>
                        If I have to highlight a educational content creator,
                        that would be JonMircha. He is a Mexican programmer that
                        makes programming courses for free. Besides that, he
                        makes videos that are understandable and he brings a lot
                        of added value by telling us his experiences or best
                        practices. And now I am already learning frontend
                        programming for 2 years. So now I am planning and
                        creating some promising and useful projects.
                    </p>
                    <h2>Other stuff</h2>
                    <p>
                        If you wish to know even more about me I can tell you
                        here. I am usually a responsible and constant person
                        that mostly likes to follow a routine and progress every
                        day. My hobbies are playing videogames, training and
                        beatbox. I have a lot of goals to achieve and hope to do
                        it, one of them was this website. But yeah there's not
                        much about me that I consider relevant or different
                        since I like to treat every person with respect and
                        equaly. Lastly I love trying to help other people cause
                        I think that's what makes us grow. So if you have any
                        questions or projects in mind I can help you achieve
                        them.
                    </p>
                </div>
            </motion.section>
        </article>
    );
}
