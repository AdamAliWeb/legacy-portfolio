import { useEffect } from "react";
import BlackHole from "../components/BlackHole";
import "./Biography.scss";

import { motion } from "framer-motion";
import { textFadeInBlackHoleAnimation } from "../helpers/onceAnimations";

export default function Biography({
    isDesktop,
    wasAnimated,
    activateProperty,
}) {
    useEffect(() => {
        activateProperty("blackHoleExpanding", "textFadeInBlackHole");
    }, []);

    return (
        <article className="biography-container">
            <BlackHole
                isDesktop={isDesktop}
                blackHoleExpanding={wasAnimated.blackHoleExpanding}
            />
            <motion.section
                className="biography-text-center"
                {...(!wasAnimated.textFadeInBlackHole
                    ? textFadeInBlackHoleAnimation
                    : {})}
            >
                <div className="biography-text">
                    <h2>Introduction</h2>
                    <p>
                        Hi there! You're probably curious about who I am. If you
                        want to learn more, keep reading. Otherwise, feel free
                        to skip this section and head straight to my portfolio.
                    </p>

                    <h2>Presentation</h2>
                    <p>
                        My name is Adam Ali, and I'm 20 years old. I was born in
                        Spain but also have Ukrainian roots. Growing up, my
                        family and I moved between Spain and Ukraine quite
                        frequently. When I was 11, we settled in Ukraine, but
                        unfortunately, due to the war that began in 2022, we
                        were forced to leave the country. We sought refuge in
                        Spain, where we stayed for 8 months. During that time,
                        we considered relocating to Canada, so we applied for a
                        visa and waited. In early 2023, we made the move to
                        Canada, where I currently reside.
                    </p>

                    <h2>Programming Journey</h2>
                    <p>
                        As a child, I was fascinated by video games, and I
                        dreamt of becoming a video game programmer. I made my
                        first attempts to learn programming at the ages of 12
                        and 14, but I struggled to make progress. However,
                        everything changed when I turned 16 and discovered my
                        passion for web development. I started learning the
                        basics and found myself captivated by the world of web
                        programming.
                    </p>
                    <p>
                        Although I can't pinpoint exactly why, I felt drawn to
                        combining programming with content creation. I dedicated
                        a year to studying, but progress was slow as I juggled
                        my studies with preparing for final exams during my last
                        year of high school in Ukraine. After a summer break in
                        Spain, I reignited my passion for web programming and
                        delved into more advanced topics, such as JavaScript
                        frameworks, version control, and design software. This
                        journey was entirely self-directed. I relied on YouTube
                        courses, tutorials, and lots of practice to hone my
                        skills.
                    </p>
                    <p>
                        One educational content creator who significantly
                        influenced my learning journey is JonMircha, a Mexican
                        programmer known for his free programming courses. His
                        videos are not only informative but also engaging, and
                        he shares valuable insights and experiences. Thanks to
                        his guidance, I've been immersed in frontend programming
                        for the past two years, and I'm currently working on
                        several exciting projects.
                    </p>

                    <h2>Other Interests</h2>
                    <p>
                        If you're curious to learn more about me, I'm happy to
                        share! I consider myself a responsible and consistent
                        individual who thrives on routine and daily progress. My
                        hobbies include playing video games, staying active
                        through training, and practicing beatboxing. I have
                        ambitious goals that I'm determined to achieve, building
                        this website was one of them. Beyond that, I strive to
                        treat everyone with respect and equality. Lastly, I'm
                        passionate about helping others grow and succeed. So, if
                        you have any questions or projects in mind, I'm here to
                        assist you in any way I can.
                    </p>
                </div>
            </motion.section>
        </article>
    );
}
