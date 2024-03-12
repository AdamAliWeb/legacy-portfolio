import ProjectCard from "../components/ProjectCard";
import Rocket from "../components/Rocket";
import useModal from "../hooks/useModal";
import { mainColors } from "../helpers/colors";

import { motion } from "framer-motion";

import "./Projects.scss";
import { useEffect } from "react";
import { typewritterAnimation } from "../helpers/onceAnimations";

export default function Projects({ wasAnimated, activateProperty }) {
    const [modalActive1, openModal1, closeModal1] = useModal(false);
    const [modalActive2, openModal2, closeModal2] = useModal(false);

    useEffect(() => {
        activateProperty("projectsTypewritter", "rocketsFlying");

        if (!wasAnimated.rocketsFlying) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, []);

    useEffect(() => {
        if (modalActive1 || modalActive2) {
            document.querySelector("body").classList.add("modal-overflow-lock");
        } else {
            document
                .querySelector("body")
                .classList.remove("modal-overflow-lock");
        }
    }, [modalActive1, modalActive2]);

    return (
        <article className="rockets-container">
            <h1 className="section-title">
                {"Click a rocket window to see a project"
                    .split(" ")
                    .map((el, index) => (
                        <motion.span
                            {...(!wasAnimated.projectsTypewritter
                                ? typewritterAnimation(index, 3)
                                : {})}
                            key={index}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
            </h1>
            <section className="rockets">
                <Rocket
                    rocketsFlying={wasAnimated.rocketsFlying}
                    headColor={mainColors.blue}
                    openModal={openModal1}
                    bounceDuration={3}
                />
                <Rocket
                    rocketsFlying={wasAnimated.rocketsFlying}
                    headColor={mainColors.yellow}
                    openModal={openModal2}
                    bounceDuration={4}
                />
            </section>

            <ProjectCard
                modalState={modalActive1}
                closeModal={closeModal1}
                title={"WebDevZone"}
                technologyStack={[
                    "React",
                    "React Router",
                    "Vite",
                    "Bootstrap",
                    "SASS",
                ]}
            >
                This site will assist you through various online resources,
                entirely free, in becoming a web developer. Here, you will
                discover tutorials, guides, tools, tips, and a variety of
                supplementary content to guide and support you in your goal of
                learning web programming. Primarily, the resources are not mine
                and are not paid; they are in the public domain.
            </ProjectCard>

            <ProjectCard
                modalState={modalActive2}
                closeModal={closeModal2}
                title={"Youtube Info Gather"}
                technologyStack={[
                    "React",
                    "React Router",
                    "Vite",
                    "Tailwind",
                    "SASS",
                ]}
            >
                This app allows you to gather information from YouTube content.
                Currently, it can collect, save, and compare data from videos in
                a playlist. This is helpful because sometimes YouTube videos are
                deleted without notice. It can be tedious to find and recover
                them, but with this app, you can save playlist data and easily
                identify missing videos. More features will be added in the
                future.
            </ProjectCard>
        </article>
    );
}
